---
sidebar_position: 4
---

# Deployment Guide

This guide explains how to deploy the Grammar AI landing page to GitHub Pages.

## Automatic Deployment

The site is configured to be deployed to GitHub Pages at: `https://VictorTrapenok.github.io/grammar-ai.app/`

### Prerequisites

- GitHub repository: `VictorTrapenok/grammar-ai.app`
- Node.js version 20.0 or higher
- npm installed

### Deployment Steps

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

   This command will:
   - Build the site
   - Push the built files to the `gh-pages` branch
   - Make the site available at the configured URL

### GitHub Pages Configuration

Make sure GitHub Pages is enabled in your repository settings:

1. Go to your repository on GitHub
2. Click on **Settings**
3. Navigate to **Pages** in the left sidebar
4. Under **Source**, select the `gh-pages` branch
5. Click **Save**

## Manual Deployment

If you prefer to deploy manually:

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **The static files will be in the `build` directory**

3. **Deploy the `build` directory** to any static hosting service:
   - GitHub Pages
   - Netlify
   - Vercel
   - AWS S3
   - Azure Static Web Apps
   - Google Firebase Hosting

## Environment Variables

For different deployment environments, you may need to adjust the following in `docusaurus.config.ts`:

- **url**: The production URL of your site
- **baseUrl**: The base path under which your site is served
- **organizationName**: Your GitHub username or organization
- **projectName**: Your repository name

## Continuous Deployment

### Using GitHub Actions

You can set up automatic deployment on every push to the main branch:

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build website
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
          cname: your-custom-domain.com # Optional: if using custom domain
```

## Custom Domain

To use a custom domain:

1. Add a `CNAME` file to the `static` directory with your domain:
   ```
   grammar-ai.app
   ```

2. Configure your domain's DNS:
   - Add a CNAME record pointing to `VictorTrapenok.github.io`
   - Or add A records pointing to GitHub's IP addresses

3. Update the `url` in `docusaurus.config.ts`:
   ```typescript
   url: 'https://grammar-ai.app',
   baseUrl: '/',
   ```

## Troubleshooting

### Site not loading correctly

- Check that the `baseUrl` in `docusaurus.config.ts` matches your deployment path
- Ensure GitHub Pages is enabled for the `gh-pages` branch
- Clear your browser cache

### 404 errors on refresh

This is normal for client-side routing. GitHub Pages should automatically handle this with the `.nojekyll` file included in the static directory.

### Build fails

- Make sure all dependencies are installed: `npm install`
- Check Node.js version: `node --version` (should be 20.0+)
- Clear cache: `npm run clear`
- Try rebuilding: `npm run build`

## Local Testing

Before deploying, always test locally:

1. **Development mode** (with hot reload):
   ```bash
   npm start
   ```

2. **Production build** (to test exactly what will be deployed):
   ```bash
   npm run build
   npm run serve
   ```

Visit `http://localhost:3000/grammar-ai.app/` to test the site.

## Support

For deployment issues:
- Check [Docusaurus deployment documentation](https://docusaurus.io/docs/deployment)
- Open an issue on [GitHub](https://github.com/VictorTrapenok/grammar-ai.app/issues)
