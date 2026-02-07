import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Default sender email
// For testing: Use 'onboarding@resend.dev' (Resend's test domain)
// For production: Use your verified domain email (e.g., 'noreply@ssrfintech.com')
const FROM_EMAIL = process.env.EMAIL_FROM || 'onboarding@resend.dev';

// Admin email for receiving notifications
// IMPORTANT: For testing, this must be an email you've added to your Resend account
const ADMIN_EMAIL = process.env.EMAIL_ADMIN || 'aryanaryan16042002@gmail.com';

export interface CareerApplicationData {
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  linkedIn?: string;
  portfolio?: string;
  coverLetter: string;
  resumeUrl?: string;
}

export interface NewsletterSubscriptionData {
  email: string;
}

/**
 * Send career application notification to admin
 */
export async function sendCareerApplicationEmail(data: CareerApplicationData) {
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Job Application: ${data.jobTitle}`,
      html: generateCareerApplicationEmailHTML(data),
      replyTo: data.email,
    });

    if (error) {
      console.error('Error sending career application email:', error);
      return { success: false, error };
    }

    return { success: true, data: emailData };
  } catch (error) {
    console.error('Failed to send career application email:', error);
    return { success: false, error };
  }
}

/**
 * Send confirmation email to applicant
 */
export async function sendCareerConfirmationEmail(
  applicantEmail: string,
  jobTitle: string,
  fullName: string
) {
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: applicantEmail,
      subject: `Application Received - ${jobTitle}`,
      html: generateCareerConfirmationEmailHTML(fullName, jobTitle),
    });

    if (error) {
      console.error('Error sending confirmation email:', error);
      return { success: false, error };
    }

    return { success: true, data: emailData };
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    return { success: false, error };
  }
}

/**
 * Send newsletter subscription confirmation
 */
export async function sendNewsletterWelcomeEmail(email: string) {
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Welcome to SSR Fintech Newsletter',
      html: generateNewsletterWelcomeEmailHTML(email),
    });

    if (error) {
      console.error('Error sending newsletter welcome email:', error);
      return { success: false, error };
    }

    return { success: true, data: emailData };
  } catch (error) {
    console.error('Failed to send newsletter welcome email:', error);
    return { success: false, error };
  }
}

/**
 * Notify admin about new newsletter subscription
 */
export async function sendNewsletterNotificationEmail(email: string) {
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: 'New Newsletter Subscription',
      html: generateNewsletterNotificationEmailHTML(email),
    });

    if (error) {
      console.error('Error sending newsletter notification:', error);
      return { success: false, error };
    }

    return { success: true, data: emailData };
  } catch (error) {
    console.error('Failed to send newsletter notification:', error);
    return { success: false, error };
  }
}

/**
 * Generate HTML for career application email (to admin)
 */
function generateCareerApplicationEmailHTML(data: CareerApplicationData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Job Application</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #5850EC 0%, #7C3AED 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Job Application</h1>
        </div>

        <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px;">
          <p style="font-size: 16px; color: #111827; margin-bottom: 20px;">
            A new application has been received for the position: <strong>${data.jobTitle}</strong>
          </p>

          <div style="background: #f9fafb; padding: 20px; border-radius: 6px; margin: 20px 0;">
            <h2 style="color: #5850EC; font-size: 18px; margin-top: 0;">Applicant Details</h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #374151;">Full Name:</td>
                <td style="padding: 8px 0; color: #111827;">${data.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #374151;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #5850EC; text-decoration: none;">${data.email}</a></td>
              </tr>
              ${data.linkedIn ? `
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #374151;">LinkedIn:</td>
                <td style="padding: 8px 0;"><a href="${data.linkedIn}" target="_blank" style="color: #5850EC; text-decoration: none;">${data.linkedIn}</a></td>
              </tr>
              ` : ''}
              ${data.portfolio ? `
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #374151;">Portfolio:</td>
                <td style="padding: 8px 0;"><a href="${data.portfolio}" target="_blank" style="color: #5850EC; text-decoration: none;">${data.portfolio}</a></td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #374151;">Job ID:</td>
                <td style="padding: 8px 0; color: #111827;">${data.jobId}</td>
              </tr>
            </table>
          </div>

          <div style="background: #f9fafb; padding: 20px; border-radius: 6px; margin: 20px 0;">
            <h3 style="color: #5850EC; font-size: 16px; margin-top: 0;">Cover Letter / Why SSR Fintech?</h3>
            <p style="color: #374151; white-space: pre-wrap; margin: 0;">${data.coverLetter}</p>
          </div>

          ${data.resumeUrl ? `
          <div style="margin: 20px 0;">
            <a href="${data.resumeUrl}" style="display: inline-block; background: linear-gradient(135deg, #5850EC, #7C3AED); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">
              View Resume
            </a>
          </div>
          ` : ''}

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">

          <p style="color: #6b7280; font-size: 14px; margin: 0;">
            This application was submitted through the SSR Fintech careers page.
          </p>
        </div>
      </body>
    </html>
  `;
}

/**
 * Generate HTML for career application confirmation (to applicant)
 */
function generateCareerConfirmationEmailHTML(fullName: string, jobTitle: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Application Received</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #5850EC 0%, #7C3AED 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Application Received!</h1>
        </div>

        <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px;">
          <p style="font-size: 16px; color: #111827;">Hi ${fullName},</p>

          <p style="font-size: 16px; color: #374151; line-height: 1.8;">
            Thank you for applying for the <strong>${jobTitle}</strong> position at SSR Fintech.
            We've received your application and our team is reviewing it.
          </p>

          <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 16px; margin: 24px 0; border-radius: 4px;">
            <p style="margin: 0; color: #065f46; font-size: 14px;">
              <strong>What's next?</strong><br>
              Our recruitment team will carefully review your application. If your profile matches our requirements,
              we'll reach out to schedule an interview within the next 1-2 weeks.
            </p>
          </div>

          <p style="font-size: 16px; color: #374151; line-height: 1.8;">
            In the meantime, feel free to explore more about SSR Fintech and our innovative solutions:
          </p>

          <ul style="color: #374151; font-size: 15px; line-height: 1.8;">
            <li><a href="https://ssrfintech.com/about" style="color: #5850EC; text-decoration: none;">About Us</a></li>
            <li><a href="https://ssrfintech.com/services" style="color: #5850EC; text-decoration: none;">Our Services</a></li>
            <li><a href="https://ssrfintech.com/case-studies" style="color: #5850EC; text-decoration: none;">Case Studies</a></li>
          </ul>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">

          <p style="color: #6b7280; font-size: 14px; margin: 0;">
            Best regards,<br>
            <strong style="color: #111827;">SSR Fintech Recruitment Team</strong><br>
            <a href="mailto:contact@ssrfintech.com" style="color: #5850EC; text-decoration: none;">contact@ssrfintech.com</a>
          </p>
        </div>
      </body>
    </html>
  `;
}

/**
 * Generate HTML for newsletter welcome email
 */
function generateNewsletterWelcomeEmailHTML(email: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to SSR Fintech Newsletter</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #5850EC 0%, #7C3AED 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Welcome to SSR Fintech!</h1>
        </div>

        <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px;">
          <p style="font-size: 16px; color: #111827;">Hello!</p>

          <p style="font-size: 16px; color: #374151; line-height: 1.8;">
            Thank you for subscribing to the SSR Fintech newsletter. We're excited to have you join our community!
          </p>

          <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 16px; margin: 24px 0; border-radius: 4px;">
            <p style="margin: 0; color: #065f46; font-size: 14px;">
              <strong>What to expect:</strong><br>
              • Latest fintech insights and trends<br>
              • Product updates and new features<br>
              • Industry best practices and case studies<br>
              • Exclusive webinars and events
            </p>
          </div>

          <p style="font-size: 16px; color: #374151; line-height: 1.8;">
            Stay connected with us on social media for more updates:
          </p>

          <div style="text-align: center; margin: 30px 0;">
            <a href="https://www.linkedin.com/company/ssrfintech/" style="display: inline-block; margin: 0 10px; color: #5850EC; text-decoration: none; font-weight: 600;">LinkedIn</a>
            <a href="https://www.facebook.com/p/SSR-Fintech-61568719633136/" style="display: inline-block; margin: 0 10px; color: #5850EC; text-decoration: none; font-weight: 600;">Facebook</a>
            <a href="https://www.youtube.com/watch?v=IHs_1-85D08" style="display: inline-block; margin: 0 10px; color: #5850EC; text-decoration: none; font-weight: 600;">YouTube</a>
          </div>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">

          <p style="color: #6b7280; font-size: 12px; text-align: center; margin: 0;">
            You're receiving this email because you subscribed to SSR Fintech newsletter.<br>
            If you wish to unsubscribe, please contact us at <a href="mailto:contact@ssrfintech.com" style="color: #5850EC;">contact@ssrfintech.com</a>
          </p>
        </div>
      </body>
    </html>
  `;
}

/**
 * Generate HTML for newsletter notification (to admin)
 */
function generateNewsletterNotificationEmailHTML(subscriberEmail: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Newsletter Subscription</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #5850EC 0%, #7C3AED 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Newsletter Subscription</h1>
        </div>

        <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px;">
          <p style="font-size: 16px; color: #111827;">
            A new user has subscribed to the SSR Fintech newsletter.
          </p>

          <div style="background: #f9fafb; padding: 20px; border-radius: 6px; margin: 20px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #374151;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${subscriberEmail}" style="color: #5850EC; text-decoration: none;">${subscriberEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #374151;">Date:</td>
                <td style="padding: 8px 0; color: #111827;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
          </div>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">

          <p style="color: #6b7280; font-size: 14px; margin: 0;">
            This subscription was made through the SSR Fintech website newsletter form.
          </p>
        </div>
      </body>
    </html>
  `;
}

export { resend };
