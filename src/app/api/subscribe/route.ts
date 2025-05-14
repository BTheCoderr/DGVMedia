import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure Zoho Mail transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    if (!process.env.ZOHO_EMAIL || !process.env.ZOHO_PASSWORD) {
      return NextResponse.json(
        { error: 'Email configuration is missing' },
        { status: 500 }
      );
    }

    // Send confirmation email
    await transporter.sendMail({
      from: process.env.ZOHO_EMAIL,
      to: email,
      subject: 'Welcome to Da Grapevine Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6d28d9;">Welcome to Da Grapevine!</h2>
          <p>Thank you for subscribing to our newsletter. You'll now receive the latest updates on:</p>
          <ul>
            <li>Raw, unfiltered community stories</li>
            <li>Breaking news and investigations</li>
            <li>Community events and initiatives</li>
            <li>Exclusive content and interviews</li>
          </ul>
          <p>Stay tuned for our next update!</p>
          <div style="margin-top: 20px; padding: 10px; background-color: #6d28d9; color: white; text-align: center;">
            The truth and the juice, straight from the vine.
          </div>
        </div>
      `,
    });

    // Also send notification to admin
    await transporter.sendMail({
      from: process.env.ZOHO_EMAIL,
      to: process.env.ADMIN_EMAIL || process.env.ZOHO_EMAIL,
      subject: 'New Newsletter Subscriber',
      text: `New subscriber: ${email} joined at ${new Date().toLocaleString()}`,
    });

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
} 