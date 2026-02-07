import { NextRequest, NextResponse } from 'next/server';
import {
  sendNewsletterWelcomeEmail,
  sendNewsletterNotificationEmail,
} from '@/lib/email/resend';

export const runtime = 'nodejs';

/**
 * POST /api/newsletter
 * Handle newsletter subscription requests
 */
export async function POST(request: NextRequest) {
  try {
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        {
          success: false,
          error: 'Email service not configured',
          message: 'Please contact the administrator',
        },
        { status: 500 }
      );
    }

    // Parse the request body
    const body = await request.json();

    // Validate email
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email is required',
          message: 'Please provide your email address',
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email format',
          message: 'Please provide a valid email address',
        },
        { status: 400 }
      );
    }

    console.log('Attempting to send newsletter emails for:', email);

    // Send welcome email to subscriber
    const welcomeEmailResult = await sendNewsletterWelcomeEmail(email);

    if (!welcomeEmailResult.success) {
      console.error('Failed to send welcome email:', welcomeEmailResult.error);
      // For testing: Don't fail if subscriber email fails (might not be verified in Resend)
    } else {
      console.log('Welcome email sent successfully');
    }

    // Send notification to admin
    const notificationResult = await sendNewsletterNotificationEmail(email);

    if (!notificationResult.success) {
      console.error('Failed to send admin notification:', notificationResult.error);
      console.error('Full error details:', JSON.stringify(notificationResult.error, null, 2));

      // Return error with more details
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to send notification',
          message: 'Could not send notification email. Make sure your email is added to Resend audiences: https://resend.com/audiences',
          details: notificationResult.error,
        },
        { status: 500 }
      );
    } else {
      console.log('Admin notification sent successfully');
    }

    // Store subscription (you can add database integration here)
    // Example: await saveSubscriptionToDatabase(email);

    // Log the subscription
    console.log('Newsletter subscription received:', {
      email,
      timestamp: new Date().toISOString(),
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Successfully subscribed to newsletter',
        data: {
          email,
          subscribedAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing newsletter subscription:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: 'Failed to process your subscription. Please try again later.',
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/newsletter
 * Health check endpoint
 */
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Newsletter API is running',
    timestamp: new Date().toISOString(),
  });
}
