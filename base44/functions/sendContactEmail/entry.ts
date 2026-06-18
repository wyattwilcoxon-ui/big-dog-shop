import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Get the admin user to send notification to
    const users = await base44.asServiceRole.entities.User.filter({ role: 'admin' });
    const adminEmail = users[0]?.email;

    if (!adminEmail) {
      return Response.json({ error: 'No admin user found' }, { status: 500 });
    }

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: adminEmail,
      from_name: 'Big Dog Life Contact Form',
      subject: `New Message from ${name} — Big Dog Life`,
      body: `You have a new contact form submission.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nReply directly to this customer at: ${email}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});