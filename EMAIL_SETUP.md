# Email Configuration Setup Guide

This guide explains how to set up the email functionality for career applications and newsletter subscriptions.

## Overview

The application uses [Resend](https://resend.com) for sending transactional emails. Resend is a modern email API that's easy to set up and provides excellent deliverability.

## Features Implemented

✅ **Career Applications**
- Sends notification email to admin when someone applies for a job
- Sends confirmation email to applicant
- Includes all application details and resume information

✅ **Newsletter Subscriptions**
- Sends welcome email to new subscribers
- Sends notification to admin about new subscriptions
- Error handling and validation

## Setup Instructions

### 1. Create a Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Free tier includes:
   - 3,000 emails per month
   - 100 emails per day
   - Perfect for production use

### 2. Verify Your Domain

For production use, you should verify your domain:

1. Go to Resend Dashboard → Domains
2. Add your domain (e.g., `ssrfintech.com`)
3. Add the provided DNS records to your domain provider
4. Wait for verification (usually takes a few minutes)

**Without domain verification**, you can still use Resend's default domain for testing, but emails may be marked as spam.

### 3. Generate API Key

1. Go to Resend Dashboard → API Keys
2. Click "Create API Key"
3. Give it a name (e.g., "SSR Fintech Production")
4. Select "Full Access" or "Sending Access"
5. Copy the API key (you'll only see it once!)

### 4. Configure Environment Variables

Create a `.env.local` file in the `frontend` directory:

```bash
# Copy the example file
cp .env.example .env.local
```

Then edit `.env.local` with your actual values:

```env
# Resend API Key
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Email Addresses (use your verified domain)
EMAIL_FROM=noreply@ssrfintech.com
EMAIL_ADMIN=contact@ssrfintech.com

# Application URL
NEXT_PUBLIC_APP_URL=https://ssrfintech.com
```

### 5. Update Email Addresses

Make sure to update these email addresses:

- `EMAIL_FROM`: Must be from your verified domain (e.g., `noreply@ssrfintech.com`)
- `EMAIL_ADMIN`: Where you want to receive notifications (e.g., `contact@ssrfintech.com`)

## Testing

### Local Testing

1. Start the development server:
```bash
npm run dev
```

2. Test the newsletter subscription:
   - Go to any page
   - Scroll to footer
   - Enter an email and click Subscribe

3. Test career application:
   - Go to `/careers`
   - Click on any job
   - Fill out the application form
   - Submit

4. Check Resend Dashboard:
   - Go to Resend Dashboard → Emails
   - View sent emails and delivery status

### Production Testing

Before going live:

1. ✅ Verify your domain in Resend
2. ✅ Test email deliverability
3. ✅ Check spam scores
4. ✅ Verify all email templates render correctly
5. ✅ Test error handling (invalid emails, API failures)

## Email Templates

The system includes professionally designed HTML email templates:

### Career Application Email (to Admin)
- Shows applicant details
- Displays cover letter
- Includes resume link
- Provides reply-to for easy communication

### Career Confirmation Email (to Applicant)
- Thanks them for applying
- Sets expectations for next steps
- Provides company links
- Branded and professional

### Newsletter Welcome Email
- Welcomes new subscribers
- Lists what they'll receive
- Includes social media links
- Easy unsubscribe information

### Newsletter Notification (to Admin)
- Notifies about new subscription
- Shows subscriber email and timestamp

## API Endpoints

### POST /api/careers
Handles career application submissions.

**Request Body:**
```json
{
  "jobId": "senior-sap-consultant",
  "jobTitle": "Senior SAP Consultant",
  "fullName": "John Doe",
  "email": "john@example.com",
  "linkedIn": "https://linkedin.com/in/johndoe",
  "portfolio": "https://johndoe.com",
  "coverLetter": "I am interested in..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Application submitted successfully",
  "data": {
    "jobId": "senior-sap-consultant",
    "jobTitle": "Senior SAP Consultant",
    "applicantName": "John Doe"
  }
}
```

### POST /api/newsletter
Handles newsletter subscriptions.

**Request Body:**
```json
{
  "email": "subscriber@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter",
  "data": {
    "email": "subscriber@example.com",
    "subscribedAt": "2026-02-07T12:00:00.000Z"
  }
}
```

## Database Integration (Optional)

Currently, the system only sends emails. To store applications and subscriptions in a database:

1. Set up a database (PostgreSQL, MySQL, MongoDB, etc.)
2. Create tables/collections:
   - `career_applications`
   - `newsletter_subscriptions`

3. Update API routes:

```typescript
// In /app/api/careers/route.ts
import { saveApplicationToDatabase } from '@/lib/database';

// After sending emails
await saveApplicationToDatabase(applicationData);
```

```typescript
// In /app/api/newsletter/route.ts
import { saveSubscriptionToDatabase } from '@/lib/database';

// After sending emails
await saveSubscriptionToDatabase(email);
```

## File Upload (Resume) - Optional Enhancement

Currently, resume file names are just logged. To actually upload resumes:

### Option 1: Use Cloudflare R2 / AWS S3

```typescript
import { uploadToS3 } from '@/lib/storage';

const resumeUrl = await uploadToS3(formData.resume);
```

### Option 2: Use Vercel Blob

```typescript
import { put } from '@vercel/blob';

const blob = await put(resume.name, resume, {
  access: 'public',
});
const resumeUrl = blob.url;
```

### Option 3: Use Uploadthing

```typescript
import { uploadFiles } from '@/lib/uploadthing';

const resumeUrl = await uploadFiles([resume]);
```

## Monitoring & Analytics

### Email Delivery Monitoring

1. **Resend Dashboard**: View all sent emails and delivery status
2. **Webhook Events**: Set up webhooks to track:
   - Email delivered
   - Email opened
   - Email bounced
   - Links clicked

### Error Logging

The system includes comprehensive error logging:
- All errors are logged to console
- Failed email sends don't break the user flow
- Users see friendly error messages

For production, consider adding:
- [Sentry](https://sentry.io) for error tracking
- [LogRocket](https://logrocket.com) for session replay
- [DataDog](https://datadoghq.com) for application monitoring

## Cost Estimation

### Resend Pricing (as of 2026)

**Free Tier:**
- 3,000 emails/month
- 100 emails/day
- ✅ Good for: Startups, small businesses

**Pro Tier ($20/month):**
- 50,000 emails/month
- 1,000 emails/day
- ✅ Good for: Growing businesses

**Scale Tier (Custom):**
- Unlimited emails
- Custom pricing
- ✅ Good for: Enterprises

### Expected Usage

Assuming:
- 50 job applications/month
- 200 newsletter signups/month

Total: ~450 emails/month (well within free tier)

## Troubleshooting

### Emails not sending

1. **Check API key**: Make sure `RESEND_API_KEY` is set correctly
2. **Verify domain**: Ensure your domain is verified in Resend
3. **Check console**: Look for error messages in server logs
4. **Test API directly**: Try sending an email from Resend dashboard

### Emails going to spam

1. **Verify domain**: Must have SPF, DKIM records set up
2. **From address**: Use a professional from address
3. **Content**: Avoid spam trigger words
4. **Warm up**: Start with low volume, gradually increase

### API errors

1. **Rate limiting**: Free tier has 100 emails/day limit
2. **Invalid email**: Check email format validation
3. **Network issues**: Check internet connection
4. **Server errors**: Check Next.js server logs

## Security Considerations

✅ **Input Validation**: All form inputs are validated
✅ **Email Validation**: Regex validation for email format
✅ **CSRF Protection**: Forms use Next.js built-in protection
✅ **Rate Limiting**: Consider adding rate limiting for production
✅ **Spam Prevention**: Consider adding CAPTCHA for public forms

## Next Steps

1. ✅ Set up Resend account
2. ✅ Verify domain
3. ✅ Configure environment variables
4. ✅ Test email functionality
5. ⬜ Add database integration (optional)
6. ⬜ Add file upload for resumes (optional)
7. ⬜ Set up monitoring and analytics
8. ⬜ Add rate limiting
9. ⬜ Add CAPTCHA (optional)

## Support

If you need help:

1. **Resend Documentation**: https://resend.com/docs
2. **Resend Support**: support@resend.com
3. **Next.js Documentation**: https://nextjs.org/docs

## License

This email configuration is part of the SSR Fintech website and is proprietary.
