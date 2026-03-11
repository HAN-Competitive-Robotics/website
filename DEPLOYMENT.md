# Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

### Option 1: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Option 2: Deploy with GitHub Integration

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Option 3: Manual Deploy

```bash
# Build the project
npm run build

# The static files will be in the `out` folder
# Upload the `out` folder contents to any static host
```

## 📁 GitHub Setup

```bash
# Initialize git (already done)
git init

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/hcr-website.git

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Push to GitHub
git push -u origin main
```

## ⚙️ Vercel Configuration

The project includes:

- `vercel.json` - Vercel-specific settings
- `next.config.ts` - Next.js config with static export
- `.gitignore` - Excludes build files and node_modules

### Environment Variables (if needed)

If you add any API keys or secrets later, add them in Vercel Dashboard:
Settings → Environment Variables

## 🌐 Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `hcr-han.nl`)
4. Follow DNS configuration instructions

## 🔄 Auto-Deploy

With GitHub integration:

- Every push to `main` branch auto-deploys to production
- Pull requests get preview deployments

## 📊 Build Settings

Vercel should auto-detect these settings:

- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `out`
- **Install Command:** `npm install`

If not detected automatically, set them manually in Vercel Dashboard.
