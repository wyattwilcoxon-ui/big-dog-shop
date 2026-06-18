import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { email } = await req.json();

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 });
    }

    const DOMAIN = Deno.env.get('VITE_SHOPIFY_STORE_DOMAIN') || 'big-dog-life-2.myshopify.com';
    const TOKEN = Deno.env.get('SHOPIFY_ADMIN_API_TOKEN');

    // Try to create Shopify customer
    if (TOKEN) {
      const res = await fetch(`https://${DOMAIN}/admin/api/2024-01/customers.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': TOKEN,
        },
        body: JSON.stringify({
          customer: {
            email,
            email_marketing_consent: {
              state: 'subscribed',
              opt_in_level: 'single_opt_in',
            },
            tags: 'newsletter',
          },
        }),
      });
      const data = await res.json();
      if (data.errors) {
        const msg = JSON.stringify(data.errors);
        if (!msg.includes('taken') && !msg.includes('already')) {
          console.error('Shopify error:', msg);
        }
      }
    }

    // Always save locally
    await base44.asServiceRole.entities.EmailSignup.create({ email, source: 'footer' });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});