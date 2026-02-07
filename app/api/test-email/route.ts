import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

/**
 * GET /api/test-email
 * Test endpoint to verify email configuration
 */
export async function GET() {
  const config = {
    hasApiKey: !!process.env.RESEND_API_KEY,
    apiKeyPreview: process.env.RESEND_API_KEY
      ? `${process.env.RESEND_API_KEY.substring(0, 8)}...`
      : 'NOT SET',
    emailFrom: process.env.EMAIL_FROM || 'NOT SET (using default: onboarding@resend.dev)',
    emailAdmin: process.env.EMAIL_ADMIN || 'NOT SET (using default: aryanaryan16042002@gmail.com)',
    nodeEnv: process.env.NODE_ENV,
  };

  return NextResponse.json({
    status: 'Email configuration check',
    config,
    instructions: {
      step1: 'Make sure .env.local file exists in frontend directory',
      step2: 'Restart your dev server (Ctrl+C and run "npm run dev")',
      step3: 'Add your email to Resend audiences: https://resend.com/audiences',
      step4: 'Verify your email when you receive the confirmation',
    },
  });
}
