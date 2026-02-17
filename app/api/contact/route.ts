import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';
import {
  sendContactNotificationEmail,
  sendContactConfirmationEmail,
  ContactSubmissionData,
} from '@/lib/email/resend';

export const runtime = 'nodejs';

/**
 * POST /api/contact
 * Save contact form submission to DB and send email notifications
 */
export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { success: false, error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, company, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Save to database
    await sql`
      INSERT INTO contact_submissions (name, email, company, phone, message)
      VALUES (${name}, ${email}, ${company || null}, ${phone || null}, ${message})
    `;

    console.log('Contact submission saved to DB:', { name, email });

    const contactData: ContactSubmissionData = { name, email, company, phone, message };

    // Send admin notification (fire and forget — don't fail the request if email fails)
    sendContactNotificationEmail(contactData).catch((err) =>
      console.error('Admin notification email failed:', err)
    );

    // Send user confirmation
    sendContactConfirmationEmail(contactData).catch((err) =>
      console.error('User confirmation email failed:', err)
    );

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received. We will get back to you within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit. Please try again later.' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/contact
 * Health check
 */
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Contact API is running',
    timestamp: new Date().toISOString(),
  });
}
