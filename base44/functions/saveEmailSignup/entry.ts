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

    // Save to Base44 database
    await base44.entities.EmailSignup.create({
      email,
      phone: phone || null,
      dog_breed: dog_breed || null,
      source: 'website',
    });

    // Async Shopify sync (non-blocking, fire-and-forget)
    const shopifyDomain = Deno.env.get('VITE_SHOPIFY_STORE_DOMAIN');
    const adminToken = Deno.env.get('SHOPIFY_ADMIN_API_TOKEN');

    if (shopifyDomain && adminToken) {
      const tags = ['Joined the Pack', 'Pre-launch'];
      if (dog_breed) tags.push(`Breed: ${dog_breed}`);

      const customerData = {
        customer: {
          email,
          phone: phone || null,
          tags: tags.join(', '),
          note: dog_breed ? `Big dog breed: ${dog_breed}` : 'Pre-launch signup',
        },
      };

      // Fire-and-forget - don't await to avoid blocking the response
      fetch(`https://${shopifyDomain}/admin/api/2024-01/customers.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': adminToken,
        },
        body: JSON.stringify(customerData),
      }).catch((err) => {
        console.error('Shopify sync error:', err.message);
      });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});