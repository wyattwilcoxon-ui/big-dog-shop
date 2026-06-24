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

    const body = await req.json();
    const { email, phone, dog_breed, website } = body;

    // Honeypot — bots fill hidden fields, humans don't
    if (website) {
      return Response.json({ success: true });
    }

    if (!email || email.length > 200) {
      return Response.json({ error: 'Valid email required' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Invalid email' }, { status: 400 });
    }
    if (phone && phone.length > 30) {
      return Response.json({ error: 'Invalid phone' }, { status: 400 });
    }
    if (dog_breed && dog_breed.length > 100) {
      return Response.json({ error: 'Invalid breed' }, { status: 400 });
    }

    // Save locally — Shopify sync handled by admin-only scheduled function
    await base44.entities.EmailSignup.create({
      email,
      phone: phone || null,
      dog_breed: dog_breed || null,
      source: 'website',
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});