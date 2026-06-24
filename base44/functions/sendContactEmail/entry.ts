import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

const ALLOWED_ORIGINS = [
  'https://www.thebigdoglife.com',
  'https://thebigdoglife.com',
  'https://base44.app',
];

// Simple in-memory rate limiter — max 3 requests per 10 minutes per IP
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const requestLog = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const entries = requestLog.get(ip) || [];
  const recent = entries.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    return true;
  }
  recent.push(now);
  requestLog.set(ip, recent);
  // Prune old entries to prevent memory growth
  if (requestLog.size > 1000) {
    for (const [key, times] of requestLog) {
      if (times.every(t => now - t >= RATE_LIMIT_WINDOW_MS)) {
        requestLog.delete(key);
      }
    }
  }
  return false;
}

Deno.serve(async (req) => {
  try {
    // Origin check — only allow requests from the legitimate site
    const origin = req.headers.get('Origin') || req.headers.get('Referer') || '';
    const isAllowed = ALLOWED_ORIGINS.some(o => origin.startsWith(o));
    if (!isAllowed) {
      return Response.json({ error: 'Unauthorized origin' }, { status: 403 });
    }

    // Rate limit — prevent spam abuse
    const ip = req.headers.get('X-Forwarded-For')?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(ip)) {
      return Response.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const base44 = createClientFromRequest(req);
    const { name, email, message, website } = await req.json();

    // Honeypot — bots fill hidden fields, humans don't
    if (website) {
      return Response.json({ success: true });
    }

    // Validate and limit input to prevent spam/abuse
    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (name.length > 100 || email.length > 200 || message.length > 5000) {
      return Response.json({ error: 'Input too long' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Invalid email' }, { status: 400 });
    }

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: 'bark@thebigdoglife.com',
      from_name: 'Big Dog Life Contact Form',
      subject: `New Message from ${name} — Big Dog Life`,
      body: `You have a new contact form submission.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nReply directly to this customer at: ${email}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});