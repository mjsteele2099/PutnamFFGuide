# Getting Started Guide 🚀

Welcome! Your digital guest guide is ready to customize and deploy.

## Step 1: Install Dependencies

Open your terminal in this project folder and run:

```bash
npm install
```

This will install all necessary packages (Next.js, React, Tailwind, Framer Motion, etc.)

## Step 2: Customize Your Content

Open the file: **`/data/content.ts`**

Update the following:

### Property Information
- `propertyInfo.name` - Your property name
- `propertyInfo.address` - Your address
- `propertyInfo.host` - Your contact info
- `propertyInfo.wifi` - Your WiFi credentials

### Other Sections
- `emergencyContacts` - Local emergency numbers
- `houseRules` - Your specific rules
- `amenities` - Your unit's amenities
- `restaurants` - Your favorite local spots
- `activities` - Local attractions
- `checkoutInstructions` - Your checkout process

## Step 3: Run the Development Server

```bash
npm run dev
```

Then open http://localhost:3000 in your browser to see your guide!

## Step 4: Add Your Images (Optional)

Edit `/components/pages/AboutUnit.tsx` to add property photos.

Replace this section:
```tsx
<div className="mb-8 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-book-accent to-book-cover h-64 flex items-center justify-center">
  <p className="text-white font-sans text-lg">
    [Your unit photos will go here]
  </p>
</div>
```

With actual images:
```tsx
<div className="mb-8 rounded-lg overflow-hidden shadow-lg">
  <img src="/images/unit-photo.jpg" alt="Unit" className="w-full h-64 object-cover" />
</div>
```

Place images in a `/public/images/` folder.

## Step 5: Customize Colors (Optional)

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  'book': {
    'bg': '#f5f1e8',      // Background color
    'page': '#fffef9',     // Page color
    'text': '#2c2416',     // Text color
    'accent': '#8b6f47',   // Accent color
    'cover': '#2c1810',    // Cover/dark color
  }
}
```

## Step 6: Build for Production

When you're ready to deploy:

```bash
npm run build
npm start
```

## Step 7: Deploy (Recommended: Vercel)

### Option A: Deploy to Vercel (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

You'll get a URL like: `your-guide.vercel.app`

### Option B: Deploy to Netlify

1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `.next` folder to deploy

## Step 8: Create a QR Code

1. Use a free QR code generator (qr-code-generator.com)
2. Enter your deployed URL
3. Download and print the QR code
4. Place it in your unit for easy guest access!

## Navigation Tips for Your Guests

The guide supports:
- **Arrow Keys** - Left/Right to navigate
- **Navigation Buttons** - At the bottom of the page
- **Home Button** - Returns to cover page
- **Table of Contents** - Click any section to jump directly

## Need Help?

- All content: `/data/content.ts`
- Page components: `/components/pages/`
- Main book component: `/components/Book.tsx`
- Styling: `tailwind.config.js` and `/app/globals.css`

## Tips

✅ Update WiFi password seasonally  
✅ Keep emergency contacts current  
✅ Add seasonal restaurant/activity recommendations  
✅ Test on mobile devices  
✅ Consider printing a backup QR code  

Enjoy your new digital guest guide! 🎉

