import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory storage (replace with database in production)
let emailList: Array<{
  email: string;
  interests: string[];
  timestamp: string;
}> = [];

// Zoho Mail configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.ZOHO_EMAIL, // Your Zoho email
    pass: process.env.ZOHO_PASSWORD, // Your Zoho app password
  },
});

export async function POST(request: NextRequest) {
  try {
    const { email, interests } = await request.json();

    // Basic validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingEmail = emailList.find(entry => entry.email === email);
    if (existingEmail) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    // Add to list
    emailList.push({
      email,
      interests: interests || [],
      timestamp: new Date().toISOString()
    });

    // Send confirmation email via Zoho
    try {
      const mailOptions = {
        from: process.env.ZOHO_EMAIL, // Your Zoho email
        to: email,
        subject: 'Welcome to Da GrapeVine - You\'re on the List! 🍇',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #1a1a1a; color: white; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #a855f7; font-size: 2.5em; margin-bottom: 10px;">🍇 Da GrapeVine</h1>
              <p style="color: #d1d5db; font-size: 1.2em;">Where the truth and the juice gets told</p>
            </div>
            
            <div style="background-color: #2d1b69; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
              <h2 style="color: #a855f7; margin-bottom: 15px;">You're on the List! 🎉</h2>
              <p style="color: #d1d5db; line-height: 1.6;">
                Thank you for joining the Da GrapeVine community! We're building something revolutionary 
                for our community, and you'll be among the first to know when we launch.
              </p>
            </div>

            ${interests.length > 0 ? `
            <div style="background-color: #2d1b69; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
              <h3 style="color: #a855f7; margin-bottom: 15px;">Shows You're Interested In:</h3>
              <ul style="color: #d1d5db; line-height: 1.8;">
                ${interests.map((interest: string) => `<li>${interest}</li>`).join('')}
              </ul>
            </div>
            ` : ''}

            <div style="background-color: #2d1b69; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
              <h3 style="color: #a855f7; margin-bottom: 15px;">What's Coming:</h3>
              <ul style="color: #d1d5db; line-height: 1.8;">
                <li>🎬 Raw, unfiltered community stories</li>
                <li>🎤 Live performances and artist spotlights</li>
                <li>🏛️ Political coverage that matters</li>
                <li>🏀 Local sports and athlete stories</li>
                <li>⚖️ Justice and accountability reporting</li>
                <li>🌃 Nightlife and community events</li>
              </ul>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #4c1d95;">
              <p style="color: #9ca3af; font-size: 0.9em;">
                Get ready for something special. We'll be in touch soon!
              </p>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log('Confirmation email sent to:', email);
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Don't fail the whole request if email sending fails
    }

    // Log for now (replace with your email service integration)
    console.log('New email collected:', { email, interests, timestamp: new Date().toISOString() });

    return NextResponse.json(
      { message: 'Email collected successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error collecting email:', error);
    return NextResponse.json(
      { error: 'Failed to collect email' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to view collected emails (remove in production)
export async function GET() {
  return NextResponse.json({ emails: emailList });
} 