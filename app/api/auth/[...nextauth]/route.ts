import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // List of allowed email addresses
      const allowedEmails = process.env.ALLOWED_EMAILS?.split(',').map(email => email.trim()) || []
      
      if (allowedEmails.length === 0) {
        // If no emails configured, allow all (for development)
        console.warn('⚠️ No ALLOWED_EMAILS configured - anyone can sign in!')
        return true
      }
      
      // Check if user's email is in the allowed list
      if (user.email && allowedEmails.includes(user.email)) {
        return true
      }
      
      // Deny access
      return false
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
})

export { handler as GET, handler as POST }

