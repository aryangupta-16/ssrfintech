import { sql } from '@vercel/postgres';
import { put } from '@vercel/blob';
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

    // Parse multipart form data
    const formData = await request.formData();

    const jobId = formData.get('jobId') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const linkedIn = formData.get('linkedIn') as string | null;
    const portfolio = formData.get('portfolio') as string | null;
    const resumeFile = formData.get('resume') as File | null;

    // Validate required fields
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

    // Upload resume to Vercel Blob if provided
    let resumeUrl: string | undefined;
    if (resumeFile && resumeFile.size > 0) {
      const blob = await put(
        `resumes/${Date.now()}-${resumeFile.name}`,
        resumeFile,
        { access: 'public' }
      );
      resumeUrl = blob.url;
    }

    // Prepare application data
    const applicationData: CareerApplicationData = {
      jobId,
      jobTitle,
      fullName,
      email,
      linkedIn: linkedIn || undefined,
      portfolio: portfolio || undefined,
      coverLetter,
      resumeUrl,
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

    // Save application to database
    await sql`
      INSERT INTO career_applications (job_id, job_title, full_name, email, linkedin, portfolio, cover_letter, resume_url)
      VALUES (${applicationData.jobId}, ${applicationData.jobTitle}, ${applicationData.fullName}, ${applicationData.email},
              ${applicationData.linkedIn || null}, ${applicationData.portfolio || null},
              ${applicationData.coverLetter}, ${applicationData.resumeUrl || null})
    `;

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
