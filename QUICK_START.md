# Quick Start Guide - Testing Email with Gmail

## The Problem You're Facing

You're getting a 500 error because:
1. ❌ **Cannot use Gmail as FROM address**: Resend doesn't allow using `aryanaryan16042002@gmail.com` as the sender
2. ⚠️ **Free tier limitation**: Resend free tier can only send TO emails that are added to your account

## The Solution

### Step 1: Add Your Gmail to Resend (CRITICAL!)

**You MUST do this first, or emails won't send:**

1. Go to your Resend Dashboard: https://resend.com/audiences
2. Click on "Audiences" in the sidebar
3. Click "Add Email" or "Add Contact"
4. Enter: `aryanaryan16042002@gmail.com`
5. Verify the email (you'll receive a verification email)
6. ✅ Once verified, Resend can send emails to your Gmail

**Why?** Resend's free tier only allows sending to emails you've explicitly added and verified in your dashboard. This prevents spam.

### Step 2: Configuration is Already Set Up

I've created `.env.local` with the correct configuration:

```bash
RESEND_API_KEY=re_R8sZ7aiH_SzkpxYaPuYgTs1QXJcFszp15
EMAIL_FROM=onboarding@resend.dev          # ✅ Resend's test domain (no verification needed)
EMAIL_ADMIN=aryanaryan16042002@gmail.com  # ✅ Your Gmail (must be added to Resend!)
```

### Step 3: Restart Your Dev Server

```bash
# Stop your current dev server (Ctrl+C)
# Then restart it
npm run dev
```

**Important:** Next.js only loads `.env.local` on startup, so you MUST restart!

### Step 4: Test It

1. Go to http://localhost:3002
2. Scroll to footer
3. Enter any email in newsletter form
4. Click "Subscribe"
5. Check your Gmail inbox for the admin notification

## Understanding the Email Flow

### Newsletter Subscription

When someone subscribes:
1. **TO Subscriber**: Welcome email (might fail if not in Resend dashboard - that's OK for testing)
2. **TO You (Admin)**: Notification email (THIS MUST WORK - requires Step 1)

### Career Application

When someone applies:
1. **TO Applicant**: Confirmation email (might fail if not in Resend dashboard - that's OK)
2. **TO You (Admin)**: Application details (THIS MUST WORK - requires Step 1)

## Using Personal Email vs Domain

### ❌ What You CANNOT Do:
- Use Gmail/Yahoo/Outlook as the FROM address
- Send to any email without adding it to Resend first (free tier)

### ✅ What You CAN Do (Testing):
```env
# FROM: Use Resend's test domain
EMAIL_FROM=onboarding@resend.dev

# TO: Use your Gmail (after adding to Resend)
EMAIL_ADMIN=aryanaryan16042002@gmail.com
```

### ✅ What You SHOULD Do (Production):
```env
# FROM: Use your verified domain
EMAIL_FROM=noreply@ssrfintech.com

# TO: Use your business email
EMAIL_ADMIN=contact@ssrfintech.com
```

## Verifying Your Own Domain (For Production)

When you're ready for production:

1. **Go to Resend Dashboard → Domains**
2. **Add your domain**: `ssrfintech.com`
3. **Add DNS records** (provided by Resend):
   ```
   Type: TXT
   Name: _resend
   Value: (provided by Resend)
   ```
4. **Wait for verification** (usually 5-10 minutes)
5. **Update .env.local**:
   ```env
   EMAIL_FROM=noreply@ssrfintech.com
   ```

## Troubleshooting

### Error: "Email service not configured"
- Check `.env.local` exists
- Verify `RESEND_API_KEY` is set
- Restart dev server

### Error: 500 Internal Server Error
- Check server console logs (terminal where `npm run dev` is running)
- Verify your Gmail is added to Resend audiences
- Make sure you restarted the dev server

### Emails not arriving
1. **Check Resend Dashboard**: https://resend.com/emails
   - See if emails were sent
   - Check delivery status
   - View error messages
2. **Check your Gmail spam folder**
3. **Verify your Gmail is added to Resend audiences**

### "Too Many Recipients" error
- Free tier: Maximum 1 recipient per email
- Solution: Upgrade to paid plan or use business email

## What's Different from Before

### Before (Not Working):
```env
EMAIL_FROM=aryanaryan16042002@gmail.com  # ❌ Can't use Gmail as sender
EMAIL_ADMIN=contact@ssrfintech.com       # ❌ Not added to Resend
```

### Now (Working):
```env
EMAIL_FROM=onboarding@resend.dev             # ✅ Resend's test domain
EMAIL_ADMIN=aryanaryan16042002@gmail.com     # ✅ Your Gmail (after adding to Resend)
```

## Next Steps for Production

1. ✅ Test with current setup (Gmail for testing)
2. ⬜ Verify `ssrfintech.com` domain in Resend
3. ⬜ Update `EMAIL_FROM` to `noreply@ssrfintech.com`
4. ⬜ Update `EMAIL_ADMIN` to `contact@ssrfintech.com`
5. ⬜ Add `contact@ssrfintech.com` to Resend audiences
6. ⬜ Deploy to production

## Summary

**To fix your current error:**
1. Go to https://resend.com/audiences
2. Add `aryanaryan16042002@gmail.com`
3. Verify the email
4. Restart dev server: `npm run dev`
5. Test newsletter subscription

**That's it!** 🎉

The `.env.local` file is already configured correctly. You just need to add your email to Resend's audiences and restart your server.
