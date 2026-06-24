import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

const ALLOWED_ORIGINS = [
  'https://www.thebigdoglife.com',
  'https://thebigdoglife.com',
  'https://base44.app',
];

Deno.serve(async (req) => {
  try {
    // Origin check — only allow requests from the legitimate site
    const origin = req.headers.get('Origin') || req.headers.get('Referer') || '';
    const isAllowed = ALLOWED_ORIGINS.some(o => origin.startsWith(o));
    if (!isAllowed) {
      return Response.json({ error: 'Unauthorized origin' }, { status: 403 });
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