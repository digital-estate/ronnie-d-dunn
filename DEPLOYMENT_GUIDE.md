# Ronnie D Dunn Website - Deployment Guide

## ✅ Production Build Complete!

Your static website is ready in `/app/frontend/build/`

---

## 🚀 Deployment Options

### Option 1: Deploy with Emergent's Built-in GitHub Integration (Recommended)

1. **Click "Save to GitHub"** button in the Emergent chat interface
2. **Select or create a branch** (e.g., `main` or `production`)
3. **Click "PUSH TO GITHUB"** - Emergent will automatically push your code
4. ✅ Done! Your code is now on GitHub

**Note**: This feature requires a paid Emergent subscription.

---

### Option 2: Manual GitHub Setup (Alternative)

If you prefer manual control or need to understand the process:

```bash
# Initialize git repository (if not already done)
cd /app
git init

# Add your GitHub remote (replace with your repository URL)
git remote add origin https://github.com/yourusername/ronnie-d-dunn-website.git

# Create .gitignore if needed
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Production
build/

# Misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Backend logs
*.log
__pycache__/
*.pyc
.pytest_cache/
EOF

# Stage all files
git add .

# Commit
git commit -m "Initial commit: Premium Gospel Artist Website for Ronnie D Dunn"

# Push to GitHub
git push -u origin main
```

---

## 🌐 Cloudflare Pages Deployment

### Method 1: Connect GitHub Repository (Recommended)

1. **Go to Cloudflare Dashboard**
   - Navigate to https://dash.cloudflare.com/
   - Select your account
   - Go to "Workers & Pages" → "Pages"

2. **Create New Project**
   - Click "Create application"
   - Click "Connect to Git"
   - Connect your GitHub account
   - Select your repository

3. **Configure Build Settings**
   ```
   Framework preset: Create React App
   Build command: yarn build
   Build output directory: build
   Root directory: frontend
   ```

4. **Environment Variables**
   - Add if needed: `REACT_APP_BACKEND_URL` (not required for static site)

5. **Deploy**
   - Click "Save and Deploy"
   - Cloudflare will automatically build and deploy
   - You'll get a unique URL: `https://your-project.pages.dev`

6. **Custom Domain** (Optional)
   - Go to "Custom domains" tab
   - Add your custom domain (e.g., `ronnieddunn.com`)
   - Follow DNS setup instructions

### Method 2: Direct Upload (Quick Start)

If you want to deploy immediately without GitHub:

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy directly from build folder
cd /app/frontend
wrangler pages deploy build --project-name=ronnie-d-dunn
```

---

## 🔧 Important Configurations

### 1. React Router Configuration

Since this is a Single Page Application (SPA), you need to handle client-side routing:

**Create `/app/frontend/build/_redirects` file:**
```
/*    /index.html   200
```

Or **`/app/frontend/public/_redirects`** (it will be copied to build folder):
```
/*    /index.html   200
```

This ensures all routes work correctly on Cloudflare Pages.

### 2. Update Package.json (if using custom domain)

Add homepage field in `/app/frontend/package.json`:
```json
{
  "homepage": "https://yourdomain.com",
  ...
}
```

Then rebuild:
```bash
cd /app/frontend && yarn build
```

---

## 📝 Post-Deployment Checklist

After deployment, verify:

- ✅ Hero section loads with logo animation
- ✅ All images display correctly
- ✅ YouTube video embed works
- ✅ "Listen Now" button opens smart link
- ✅ Social media icons are clickable
- ✅ Email link (Media@ronnieddunn.com) works
- ✅ Download buttons are functional (add PDFs later)
- ✅ Mobile responsive design works
- ✅ Page loads quickly (should be fast with static files)

---

## 🔄 Continuous Deployment

With Cloudflare Pages + GitHub:

1. **Every push to main branch** automatically triggers a new deployment
2. **Preview deployments** for pull requests
3. **Instant rollbacks** if needed
4. **Built-in analytics** to track visitors

---

## 💡 Pro Tips

1. **Add PDFs Later**: Upload Press Release and EPK PDFs to `/app/frontend/public/` folder
   - Update links in mock.js: `pressRelease: "/press-release.pdf"`

2. **Update Social Links**: Edit `/app/frontend/src/data/mock.js` with real URLs

3. **SEO Optimization**: Add meta tags in `/app/frontend/public/index.html`

4. **Google Analytics**: Add tracking code before deployment

5. **SSL Certificate**: Cloudflare provides free SSL automatically

---

## 🆘 Troubleshooting

### Routes not working (404 errors)
- Ensure `_redirects` file is in the build folder
- Cloudflare Pages: Check "Build settings" has correct output directory

### Images not loading
- Check image URLs are correct
- Ensure images are accessible publicly

### Build fails on Cloudflare
- Check Node.js version compatibility
- Verify build command is correct: `yarn build`
- Check build logs for specific errors

---

## 📞 Next Steps

1. **Use Emergent's "Save to GitHub"** or manual git commands above
2. **Connect to Cloudflare Pages** following the instructions
3. **Test the live site** thoroughly
4. **Add custom domain** (optional)
5. **Upload Press Materials** (PDFs)
6. **Update social media links**

---

## 🌟 Your Website is Production-Ready!

The build is optimized, compressed, and ready for the world to see Ronnie D Dunn's faith-driven gospel music journey.

Built with ❤️ and faith by Emergent AI
