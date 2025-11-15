# Digital Guest Guide 📖

A beautiful, interactive digital guidebook for short-term rental guests. Features a book-like interface with page-turning animations and comprehensive information about the property and local area.

## Features

- 📖 **Book-like Interface** - Realistic page turning animations and elegant design
- 🔐 **Google Authentication** - Secure access control for authorized guests only
- 🎯 **Easy Navigation** - Arrow keys, buttons, or click through table of contents
- 📱 **Responsive Design** - Works beautifully on desktop, tablet, and mobile
- ✨ **Smooth Animations** - Built with Framer Motion for fluid transitions
- 🎨 **Beautiful UI** - Warm, inviting color palette with serif typography
- 📝 **Easy to Customize** - All content in one central data file
- 📄 **Print/PDF Export** - Generate PDF version for offline use

## Sections Included

1. **Welcome Cover** - Beautiful introduction page
2. **Table of Contents** - Quick navigation to all sections
3. **About the Unit** - Description, amenities, and highlights
4. **House Guide** - WiFi, appliances, thermostat, and how-tos
5. **Where to Eat** - Local restaurant recommendations
6. **Things to Do** - Activities and attractions nearby
7. **Emergency Info** - Important contacts and safety information
8. **House Rules** - Guidelines for the stay
9. **Check-out Instructions** - Simple checkout checklist

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Google Cloud Console account (for authentication)

### Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

3. **Set up Google Authentication** (Important!):
   - Follow the detailed guide in `AUTHENTICATION_SETUP.md`
   - Create `.env.local` from `.env.example`
   - Add your Google OAuth credentials
   - Add allowed email addresses

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser
6. Sign in with an authorized Google account

## Customization

### Update Content

Edit the `/data/content.ts` file to customize:

- Property name and address
- Host contact information
- WiFi credentials
- Amenities lists
- Restaurant recommendations
- Local activities
- Emergency contacts
- House rules
- Checkout instructions

### Add Images

Replace placeholder images in the component files:

- `/components/pages/AboutUnit.tsx` - Add unit photos
- `/components/pages/CoverPage.tsx` - Optional cover image

### Styling

- Color scheme: Edit `tailwind.config.js`
- Fonts: Modify in `tailwind.config.js` and `globals.css`
- Layout: Adjust component files in `/components/pages/`

## Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click!

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

## Technology Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Tips for Hosts

- Generate a QR code linking to your deployed site
- Print and place the QR code in your unit
- Update the guide seasonally with new recommendations
- Consider translations for international guests
- Keep emergency contact info current

## License

This project is open source and available for personal and commercial use.

## Support

For questions or issues, please open an issue on GitHub.

---

Built with ❤️ for better guest experiences

