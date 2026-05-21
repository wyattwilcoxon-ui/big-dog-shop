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

    // Skip timestamp validation for now - not needed for public signup

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

    console.log('Shopify sync check:', { shopifyDomain: !!shopifyDomain, adminToken: !!adminToken });

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

      console.log('Attempting Shopify customer creation:', customerData);

      // Fire-and-forget - don't await to avoid blocking the response
      fetch(`https://${shopifyDomain}/admin/api/2024-01/customers.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': adminToken,
        },
        body: JSON.stringify(customerData),
      })
        .then(async (res) => {
          console.log('Shopify response status:', res.status);
          if (!res.ok) {
            const errorText = await res.text();
            console.error('Shopify sync failed:', errorText);
          } else {
            const data = await res.json();
            console.log('Shopify customer created:', data.customer?.id);
          }
        })
        .catch((err) => {
          console.error('Shopify sync error:', err.message);
        });
    } else {
      console.log('Shopify credentials not configured, skipping sync');
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});