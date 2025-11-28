# Wave Draft Marketing Website - Installation & Deployment Guide

## Quick Start (5 Minutes)

### Prerequisites

Ensure you have Node.js 18 or higher installed. Download from [nodejs.org](https://nodejs.org).

### Installation Steps

```bash
# 1. Extract the zip file
unzip wave-draft-marketing.zip
cd wave-draft-marketing

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser. The website will automatically reload when you make changes.

---

## Detailed Setup Guide

### Step 1: System Requirements

| Requirement | Version | Download |
|------------|---------|----------|
| Node.js | 18.0.0+ | [nodejs.org](https://nodejs.org) |
| npm | 9.0.0+ | Included with Node.js |
| Git (optional) | Latest | [git-scm.com](https://git-scm.com) |

### Step 2: Extract Project Files

```bash
# On Windows (using Command Prompt or PowerShell)
# Right-click wave-draft-marketing.zip → Extract All

# On macOS/Linux
unzip wave-draft-marketing.zip
cd wave-draft-marketing
```

### Step 3: Install Dependencies

```bash
# Using npm (included with Node.js)
npm install

# Or using pnpm (faster alternative)
npm install -g pnpm
pnpm install
```

**What this does**: Downloads and installs all required packages (React, Tailwind, Framer Motion, etc.)

### Step 4: Start Development Server

```bash
npm run dev
```

**Output**:
```
  VITE v7.1.7  ready in 234 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://169.254.0.21:3000/
```

Open `http://localhost:3000` in your browser.

---

## Customization Guide

### Update Company Information

#### 1. Website Title & Meta Tags

Edit `client/index.html`:

```html
<title>Wave Draft - Digital Marketing Agency</title>
<meta name="description" content="Your custom description here" />
```

#### 2. Logo & Brand Name

Edit `client/src/components/Header.tsx` (line 23):

```tsx
<motion.div className="text-2xl font-bold gradient-text">
  Your Company Name
</motion.div>
```

#### 3. Hero Section Text

Edit `client/src/components/Hero.tsx` (lines 76-82):

```tsx
<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
  Your Headline Here
  <br />
  <span className="gradient-text">Your Subheading</span>
</h1>

<p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
  Your description text here
</p>
```

#### 4. Services Section

Edit `client/src/components/Services.tsx` (lines 12-33):

```tsx
const services = [
  {
    icon: Palette,
    title: 'Your Service Title',
    description: 'Your service description',
  },
  // Add more services...
];
```

#### 5. Portfolio Projects

Edit `client/src/components/Portfolio.tsx` (lines 9-44):

```tsx
const projects = [
  {
    id: 1,
    title: 'Project Name',
    category: 'Category',
    image: '/portfolio-1.jpg',
    description: 'Project description',
  },
  // Add more projects...
];
```

#### 6. Contact Information

Edit `client/src/components/Contact.tsx` (lines 78-92):

```tsx
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your-email@company.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Your Address Here',
  },
];
```

#### 7. Social Media Links

Edit `client/src/components/Contact.tsx` and `client/src/components/Footer.tsx`:

```tsx
const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/yourpage', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/yourhandle', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/yourpage', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/yourhandle', label: 'Instagram' },
];
```

### Replace Images

Place your images in `client/public/` folder:

1. **Hero Background**: `hero-bg.jpg` (1920x1080px recommended)
2. **Portfolio Images**: `portfolio-1.jpg`, `portfolio-2.jpg`, `portfolio-3.jpg` (800x800px recommended)

### Customize Colors

Edit `client/src/index.css`:

```css
:root {
  --primary: #3b82f6;        /* Main brand color */
  --accent: #3b82f6;         /* Accent color */
  --background: oklch(0.98 0.001 286.375);  /* Light background */
  --foreground: oklch(0.15 0.02 285);       /* Light text */
}

.dark {
  --background: oklch(0.12 0.008 285);      /* Dark background */
  --foreground: oklch(0.95 0.005 65);       /* Dark text */
}
```

---

## Deployment Guide

### Deploy to Netlify (Recommended)

Netlify is the easiest platform for deploying this website.

#### Method 1: Connect Git Repository

1. **Create Git Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**:
   - Create account at [github.com](https://github.com)
   - Create new repository named `wave-draft-marketing`
   - Push your code:
     ```bash
     git remote add origin https://github.com/yourusername/wave-draft-marketing.git
     git branch -M main
     git push -u origin main
     ```

3. **Deploy on Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub and authorize
   - Choose your repository
   - Build settings will auto-fill:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

#### Method 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

#### Method 3: Drag & Drop

1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder

### Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository
4. Vercel auto-detects settings
5. Click "Deploy"

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install -g gh-pages

# Build
npm run build

# Deploy
gh-pages -d dist
```

### Custom Domain Setup

After deploying to Netlify/Vercel:

1. **Purchase Domain**: Buy from GoDaddy, Namecheap, or similar
2. **Update DNS Records**:
   - For Netlify: Add CNAME record pointing to your Netlify domain
   - For Vercel: Add CNAME record pointing to your Vercel domain
3. **Configure in Platform**:
   - Netlify: Site settings → Domain management → Add custom domain
   - Vercel: Project settings → Domains → Add domain

---

## Contact Form Configuration

### For Netlify Deployment

The contact form works automatically with Netlify Forms:

1. Deploy to Netlify (see deployment section)
2. Netlify detects the form automatically
3. Go to Netlify dashboard → Site settings → Forms
4. Configure email notifications
5. Test the form on your live site

### For Other Platforms

To use a different email service:

1. **Option A: EmailJS**
   - Sign up at [emailjs.com](https://emailjs.com)
   - Get your Service ID and Template ID
   - Update `client/src/components/Contact.tsx`:
     ```tsx
     import emailjs from '@emailjs/browser';
     
     emailjs.init('YOUR_PUBLIC_KEY');
     
     // In handleSubmit:
     await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', formData);
     ```

2. **Option B: Formspree**
   - Sign up at [formspree.io](https://formspree.io)
   - Update form action in `client/src/components/Contact.tsx`:
     ```tsx
     <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
     ```

---

## Build & Production

### Build for Production

```bash
npm run build
```

**Output**: Creates optimized files in `dist/` folder

### Preview Production Build

```bash
npm run preview
```

This shows how your site will look in production.

### Production Checklist

- [ ] Update all company information
- [ ] Replace all images with your own
- [ ] Customize colors and branding
- [ ] Test contact form
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Set up custom domain
- [ ] Enable SSL/HTTPS
- [ ] Set up analytics
- [ ] Configure email notifications

---

## Troubleshooting

### Port 3000 Already in Use

```bash
# Use different port
npm run dev -- --port 3001
```

### Dependencies Installation Fails

```bash
# Clear cache and reinstall
rm -rf node_modules
npm cache clean --force
npm install
```

### Build Errors

```bash
# Check TypeScript
npm run check

# Clear build cache
rm -rf dist
npm run build
```

### Form Not Sending

- For Netlify: Ensure form is deployed and `data-netlify="true"` is in HTML
- For other services: Check API keys and configuration
- Check browser console for errors (F12)

### Images Not Loading

- Ensure images are in `client/public/` folder
- Use correct paths: `/image-name.jpg`
- Check file names match exactly (case-sensitive on Linux)

### Styling Issues

- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server: `npm run dev`
- Check Tailwind CSS classes are correct

---

## Performance Optimization

### Image Optimization

```bash
# Use online tools to compress images:
# - TinyPNG: https://tinypng.com
# - ImageOptim: https://imageoptim.com
# - Squoosh: https://squoosh.app
```

### Monitor Performance

```bash
# Build analysis
npm run build

# Check bundle size
npm install -g webpack-bundle-analyzer
```

---

## Maintenance

### Regular Updates

```bash
# Check for updates
npm outdated

# Update packages
npm update
```

### Backup

```bash
# Create backup
zip -r wave-draft-marketing-backup.zip .
```

---

## Support Resources

- **React**: [react.dev](https://react.dev)
- **Vite**: [vitejs.dev](https://vitejs.dev)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)

---

## File Structure Reference

```
wave-draft-marketing/
├── client/
│   ├── public/                 # Static assets
│   │   ├── hero-bg.jpg
│   │   ├── portfolio-1.jpg
│   │   ├── portfolio-2.jpg
│   │   └── portfolio-3.jpg
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── Header.tsx      # Navigation
│   │   │   ├── Hero.tsx        # Hero section
│   │   │   ├── Services.tsx    # Services cards
│   │   │   ├── Portfolio.tsx   # Portfolio grid
│   │   │   ├── About.tsx       # About section
│   │   │   ├── Contact.tsx     # Contact form
│   │   │   └── Footer.tsx      # Footer
│   │   ├── contexts/           # React contexts
│   │   │   └── ThemeContext.tsx # Dark mode
│   │   ├── App.tsx             # Main app component
│   │   ├── main.tsx            # Entry point
│   │   └── index.css           # Global styles
│   ├── index.html              # HTML template
│   └── package.json            # Dependencies
├── README.md                   # Project documentation
├── netlify.toml               # Netlify configuration
└── package.json               # Root package.json
```

---

## Next Steps

1. ✅ Extract and install the project
2. ✅ Customize company information
3. ✅ Replace images
4. ✅ Test locally with `npm run dev`
5. ✅ Deploy to Netlify/Vercel
6. ✅ Set up custom domain
7. ✅ Configure analytics

**Your website is now ready for production!**

---

*Last Updated: November 28, 2025*
