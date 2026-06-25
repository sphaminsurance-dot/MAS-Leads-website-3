// API endpoint for handling contact form submissions
// This can be connected to email services, CRMs, or databases

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, agency, email, phone, agents, leadType, crm, time, need } = req.body;

    // Validate required fields
    if (!email || !name) {
      return res.status(400).json({ error: 'Email and name are required' });
    }

    // Log the submission (replace with your backend service)
    console.log('Contact form submission:', {
      name,
      agency,
      email,
      phone,
      agents,
      leadType,
      crm,
      time,
      need,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with your chosen service:
    // Option 1: Send email via Resend
    // const response = await fetch('https://api.resend.com/emails', { ... });

    // Option 2: Send to webhook
    // await fetch(process.env.WEBHOOK_URL, { method: 'POST', body: JSON.stringify(...) });

    // Option 3: Save to database
    // await db.contacts.create({ ... });

    return res.status(200).json({
      success: true,
      message: 'Thank you for your submission. We will contact you shortly.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Failed to process submission' });
  }
}
