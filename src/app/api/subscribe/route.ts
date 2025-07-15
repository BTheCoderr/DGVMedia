import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const interests = formData.getAll('interests') as string[];

    // Log the submission (for debugging)
    console.log('Form submission received:', { email, interests });

    // Send email notification using a webhook service
    // You can use services like:
    // - webhook.site (for testing)
    // - Zapier webhook
    // - Make.com webhook
    // - Or integrate with SendGrid, Mailgun, etc.

    const webhookUrl = process.env.EMAIL_WEBHOOK_URL;
    
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            interests,
            timestamp: new Date().toISOString(),
            source: 'Da GrapeVine Coming Soon Page'
          }),
        });
      } catch (webhookError) {
        console.error('Webhook error:', webhookError);
      }
    }

    // Also log to console for immediate visibility
    console.log('📧 NEW SUBSCRIPTION:', {
      email,
      interests: interests.join(', '),
      timestamp: new Date().toLocaleString()
    });

    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Subscription received successfully' 
    });

  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { success: false, message: 'Error processing submission' },
      { status: 500 }
    );
  }
} 