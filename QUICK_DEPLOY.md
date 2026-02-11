# Quick Deployment Commands

## Option 1: Using Emergent's GitHub Integration (Easiest)
1. Click "Save to GitHub" button in the Emergent interface
2. Push to your repository
3. Connect to Cloudflare Pages (see full guide below)

## Option 2: Manual Git Commands
```bash
cd /app

# Initialize and push to GitHub
git init
git add .
git commit -m "Premium Gospel Website for Ronnie D Dunn"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## Option 3: Direct Cloudflare Deploy (Fastest)
```bash
# Install Wrangler
npm install -g wrangler

# Login
wrangler login

# Deploy (run from /app/frontend)
cd /app/frontend
wrangler pages deploy build --project-name=ronnie-d-dunn
```

## Cloudflare Pages Settings
```
Framework: Create React App
Build command: yarn build
Build directory: build
Root directory: frontend (if deploying from monorepo)
```

## Your Production Build
✅ Location: `/app/frontend/build/`
✅ Size: ~99 KB (gzipped)
✅ Includes _redirects for SPA routing
✅ Optimized for production
✅ Ready to deploy!

## Test Locally
```bash
cd /app/frontend
npx serve -s build -p 5000
```
Then visit: http://localhost:5000

---

See `/app/DEPLOYMENT_GUIDE.md` for complete instructions!
