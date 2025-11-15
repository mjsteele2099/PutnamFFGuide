# Google Authentication Setup Guide

Your guest guide now requires Google sign-in to access. This keeps your WiFi password and other sensitive info secure!

## 🔐 Setup Steps

### Step 1: Create Google OAuth Credentials

1. **Go to Google Cloud Console:**
   - Visit: https://console.cloud.google.com/apis/credentials

2. **Create a New Project** (if you don't have one):
   - Click "Select a project" → "New Project"
   - Name it: "Guest Guide"
   - Click "Create"

3. **Enable Google+ API:**
   - Go to: https://console.cloud.google.com/apis/library
   - Search for "Google+ API"
   - Click "Enable"

4. **Configure OAuth Consent Screen:**
   - Go to: https://console.cloud.google.com/apis/credentials/consent
   - Choose "External" user type
   - Fill in:
     - App name: "Guest Guide"
     - User support email: your email
     - Developer contact: your email
   - Click "Save and Continue"
   - Skip "Scopes" (click "Save and Continue")
   - Under "Test users" → Click "Add Users"
   - Add the email addresses of people you want to allow access
   - Click "Save and Continue"

5. **Create OAuth Credentials:**
   - Go to: https://console.cloud.google.com/apis/credentials
   - Click "Create Credentials" → "OAuth client ID"
   - Application type: "Web application"
   - Name: "Guest Guide Auth"
   - Authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google` (for local testing)
     - `https://your-domain.vercel.app/api/auth/callback/google` (for production)
   - Click "Create"
   - **Save the Client ID and Client Secret!**

### Step 2: Configure Environment Variables

1. **Copy the example file:**
```bash
cp .env.local.example .env.local
```

2. **Edit `.env.local` with your values:**
```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=run-this-command-to-generate: openssl rand -base64 32
GOOGLE_CLIENT_ID=your-client-id-here.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret-here
ALLOWED_EMAILS=guest1@gmail.com,guest2@gmail.com,your-email@gmail.com
```

3. **Generate a secret key:**
```bash
openssl rand -base64 32
```
Copy the output and use it as your `NEXTAUTH_SECRET`

### Step 3: Add Allowed Emails

In `.env.local`, add all email addresses that should have access:
```
ALLOWED_EMAILS=john@gmail.com,jane@yahoo.com,guest@example.com
```

Separate multiple emails with commas (no spaces).

### Step 4: Test Locally

1. **Start the dev server:**
```bash
npm run dev
```

2. **Visit:** http://localhost:3000

3. **You should see a sign-in page**

4. **Sign in with an allowed email**

### Step 5: Deploy to Vercel

1. **Add environment variables to Vercel:**
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings → Environment Variables
   - Add all variables from `.env.local`:
     - `NEXTAUTH_URL` → `https://your-site.vercel.app`
     - `NEXTAUTH_SECRET` → your secret
     - `GOOGLE_CLIENT_ID` → your client ID
     - `GOOGLE_CLIENT_SECRET` → your client secret
     - `ALLOWED_EMAILS` → comma-separated emails

2. **Update Google OAuth redirect URI:**
   - Go back to Google Cloud Console
   - Edit your OAuth client
   - Add: `https://your-site.vercel.app/api/auth/callback/google`
   - Click "Save"

3. **Redeploy:**
```bash
vercel --prod
```

## 🎯 How It Works

### For Guests:
1. Visit the site
2. Click "Sign in with Google"
3. Sign in with their Google account
4. If their email is on the allowed list → Access granted ✅
5. If not on the list → Access denied ❌

### For You:
- **Add a new guest:** Add their email to `ALLOWED_EMAILS` in Vercel
- **Remove access:** Remove their email from the list
- **No database needed!** Everything is handled by Google

## 📱 Sharing with Guests

**Option 1: Send them the link + let them know to use their Google account**
```
Hey! Here's your digital guest guide: https://your-guide.vercel.app

Sign in with your Google account (your-guest@gmail.com) to access.
```

**Option 2: Share via QR Code**
- Generate a QR code for your site
- Print it and place in the unit
- Guests scan and sign in

## 🔒 Security Benefits

✅ Only authorized people can access
✅ WiFi password stays private
✅ No password management needed
✅ Easy to add/remove guests
✅ Google handles authentication security
✅ Can see who accessed (Google Analytics optional)

## 🆘 Troubleshooting

### "Access Denied" Error
- Check the email is in `ALLOWED_EMAILS`
- Make sure there are no typos
- Emails are case-sensitive

### "Redirect URI Mismatch"
- Check the redirect URI in Google Console matches exactly
- Include both http://localhost:3000 (dev) and https://your-domain (prod)

### Can't Sign In at All
- Verify `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` are correct
- Make sure Google+ API is enabled
- Check OAuth consent screen is configured

## 📝 Notes

- **Test users:** In development mode, only "Test users" added in Google Console can sign in
- **Production:** To allow anyone (just check email list), publish your OAuth consent screen
- **Multiple guests:** Add as many emails as you want, comma-separated

---

Need help? Check the NextAuth.js docs: https://next-auth.js.org/

