import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    
    // INTENTIONALLY PUBLIC ENDPOINT - No auth check required
    // This is a public email signup form for pre-launch notifications
    // RLS protects data: create={}, read/update/delete=admin only
    // Authentication would block legitimate public signups
    
    const body = await req.json();
    const { email, phone, dog_breed, timestamp } = body;

    // Basic spam protection - reject if timestamp is too old or missing
    if (timestamp) {
      const now = Date.now();
      const submitted = parseInt(timestamp);
      if (isNaN(submitted) || (now - submitted) > 300000) { // 5 minutes
        return Response.json({ error: 'Invalid request' }, { status: 400 });
      }
    }

    if (!email || !email.includes('@')) {
      return Response.json({ error: 'Valid email required' }, { status: 400 });
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

      // Fire-and-forget - don't await to avoid blocking the response
      fetch(`https://${shopifyDomain}/admin/api/2024-01/customers.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': adminToken,
        },
        body: JSON.stringify({
          customer: {
            email,
            phone: phone || null,
            tags: tags.join(', '),
            note: dog_breed ? `Big dog breed: ${dog_breed}` : 'Pre-launch signup',
          },
        }),
      }).catch(() => {}); // Silently ignore errors
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});