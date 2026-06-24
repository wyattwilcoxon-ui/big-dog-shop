import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user || user.role !== 'admin') {
      return Response.json({ error: 'Forbidden' }, { status: 403 });
    }

    const DOMAIN = Deno.env.get('VITE_SHOPIFY_STORE_DOMAIN');
    const TOKEN = Deno.env.get('SHOPIFY_ADMIN_API_TOKEN');
    if (!DOMAIN || !TOKEN) {
      return Response.json({ error: 'Shopify credentials not configured' }, { status: 500 });
    }

    // Get recent signups, filter unsynced in code (handles undefined field)
    const allSignups = await base44.asServiceRole.entities.EmailSignup.list('-created_date', 50);
    const unsynced = allSignups.filter(s => !s.synced_to_shopify);

    let synced = 0;
    let failed = 0;

    for (const signup of unsynced) {
      try {
        const tags = ['Joined the Pack', 'Pre-launch'];
        if (signup.dog_breed) tags.push(`Breed: ${signup.dog_breed}`);
        if (signup.source === 'footer') tags.push('Newsletter');

        const res = await fetch(`https://${DOMAIN}/admin/api/2024-01/customers.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': TOKEN,
          },
          body: JSON.stringify({
            customer: {
              email: signup.email,
              phone: signup.phone || null,
              email_marketing_consent: {
                state: 'subscribed',
                opt_in_level: 'single_opt_in',
              },
              tags: tags.join(', '),
              note: signup.dog_breed ? `Big dog breed: ${signup.dog_breed}` : 'Pre-launch signup',
            },
          }),
        });

        const data = await res.json();
        if (data.errors) {
          const msg = JSON.stringify(data.errors);
          // Customer already exists — mark as synced
          if (msg.includes('taken') || msg.includes('already')) {
            await base44.asServiceRole.entities.EmailSignup.update(signup.id, { synced_to_shopify: true });
            synced++;
          } else {
            console.error('Shopify sync error for', signup.email, ':', msg);
            failed++;
          }
        } else {
          await base44.asServiceRole.entities.EmailSignup.update(signup.id, { synced_to_shopify: true });
          synced++;
        }
      } catch (err) {
        console.error('Sync error for', signup.email, ':', err.message);
        failed++;
      }
    }

    return Response.json({ success: true, synced, failed, total: unsynced.length });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});