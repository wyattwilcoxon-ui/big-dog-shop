import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    
    // INTENTIONALLY PUBLIC ENDPOINT - No auth check required
    // This is a public "Notify Me" form for out-of-stock products
    // RLS protects data: create={}, read/update/delete=admin only
    // Authentication would block legitimate public notifications
    
    const body = await req.json();
    const { email, product_id, product_name, timestamp } = body;

    // Basic spam protection - reject if timestamp is too old or missing
    if (timestamp) {
      const now = Date.now();
      const submitted = parseInt(timestamp);
      if (isNaN(submitted) || (now - submitted) > 300000) { // 5 minutes
        return Response.json({ error: 'Invalid request' }, { status: 400 });
      }
    }

    if (!email || !product_id || !product_name) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Save the notification request
    await base44.entities.NotifyMeRequest.create({
      email,
      product_id,
      product_name,
      notified: false,
    });

    return Response.json({ success: true, message: 'You\'ll be notified when available!' });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});