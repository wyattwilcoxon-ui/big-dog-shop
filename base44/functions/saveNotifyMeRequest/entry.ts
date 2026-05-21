import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    
    // Verify user is authenticated
    const user = await base44.auth.me();
    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { email, product_id, product_name } = await req.json();

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