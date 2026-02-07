import { NextRequest, NextResponse } from 'next/server';
import {
  sendCareerApplicationEmail,
  sendCareerConfirmationEmail,
  CareerApplicationData,
} from '@/lib/email/resend';

export const runtime = 'nodejs';

/**
 * POST /api/careers
 * Handle career application submissions
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

    // Validate required fields
    const { jobId, jobTitle, fullName, email, coverLetter } = body;

    if (!jobId || !jobTitle || !fullName || !email || !coverLetter) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields',
          message: 'Please provide all required information',
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

    // Prepare application data
    const applicationData: CareerApplicationData = {
      jobId,
      jobTitle,
      fullName,
      email,
      linkedIn: body.linkedIn || undefined,
      portfolio: body.portfolio || undefined,
      coverLetter,
      resumeUrl: body.resumeUrl || undefined,
    };

    // Send notification email to admin
    const adminEmailResult = await sendCareerApplicationEmail(applicationData);

    if (!adminEmailResult.success) {
      console.error('Failed to send admin notification:', adminEmailResult.error);
      // Don't fail the request if admin email fails, but log it
    }

    // Send confirmation email to applicant
    const confirmationResult = await sendCareerConfirmationEmail(
      email,
      jobTitle,
      fullName
    );

    if (!confirmationResult.success) {
      console.error('Failed to send confirmation email:', confirmationResult.error);
      // Don't fail the request if confirmation email fails
    }

    // Store application data (you can add database integration here)
    // Example: await saveToDatabase(applicationData);

    // Log the application for tracking
    console.log('Career application received:', {
      jobId,
      jobTitle,
      fullName,
      email,
      timestamp: new Date().toISOString(),
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Application submitted successfully',
        data: {
          jobId,
          jobTitle,
          applicantName: fullName,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing career application:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: 'Failed to process your application. Please try again later.',
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/careers
 * Health check endpoint
 */
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Career applications API is running',
    timestamp: new Date().toISOString(),
  });
}
