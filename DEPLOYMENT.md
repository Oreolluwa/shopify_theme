# Shopify Theme Deployment Guide

This guide provides step-by-step instructions for deploying the Liquor Store Premium theme to your Shopify store.

## Prerequisites

- A Shopify store (free trial or paid plan)
- Access to your Shopify admin panel
- The theme files (this repository)

## Deployment Methods

### Method 1: Direct Upload (Easiest)

This is the fastest way to get your theme installed.

#### Step 1: Prepare Theme Files

1. Download or clone this repository to your computer
2. If you cloned with Git, remove the `.git` folder:
   ```bash
   rm -rf .git
   ```

3. Create a ZIP file of all theme files:
   
   **On Mac/Linux:**
   ```bash
   zip -r liquor-store-theme.zip . -x "*.git*" "*.DS_Store" "node_modules/*"
   ```
   
   **On Windows:**
   - Select all files and folders (except .git)
   - Right-click > Send to > Compressed (zipped) folder
   - Name it `liquor-store-theme.zip`

#### Step 2: Upload to Shopify

1. Log in to your Shopify admin: `https://your-store.myshopify.com/admin`

2. Navigate to **Online Store > Themes**

3. In the "Theme library" section, click **Add theme**

4. Select **Upload zip file**

5. Choose your `liquor-store-theme.zip` file

6. Click **Upload** and wait for the upload to complete

7. Once uploaded, you'll see the theme in your theme library

#### Step 3: Customize & Publish

1. Click **Customize** on your newly uploaded theme

2. Configure the following:
   - **Theme settings > Colors**: Verify gold/white/black scheme
   - **Theme settings > Typography**: Choose fonts
   - **Header**: Upload your logo
   - **Announcement bar**: Set promotional message
   - **Homepage sections**: Add content and products
   - **Footer**: Configure menus and social links

3. Preview the theme to ensure everything looks correct

4. Click **Publish** when ready to make it live

---

### Method 2: GitHub Integration (Recommended for Updates)

This method allows you to version control your theme and deploy updates easily.

#### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
   - Name: `liquor-store-theme` (or your preference)
   - Visibility: Private (recommended) or Public
   - Don't initialize with README (we already have one)

2. Push your theme to GitHub:
   ```bash
   cd /path/to/shopify_theme
   git init
   git add .
   git commit -m "Initial theme commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/liquor-store-theme.git
   git push -u origin main
   ```

#### Step 2: Connect Shopify to GitHub

1. In Shopify admin, go to **Online Store > Themes**

2. Click **Add theme > Connect from GitHub**

3. If first time:
   - Click **Connect to GitHub**
   - Authorize Shopify to access your GitHub account
   - Select the repositories you want to connect

4. Select your theme repository: `yourusername/liquor-store-theme`

5. Choose the branch: `main`

6. Click **Connect**

7. Shopify will pull the theme from GitHub

#### Step 3: Automatic Updates

Now whenever you push changes to GitHub:

```bash
git add .
git commit -m "Update theme styles"
git push
```

The theme in Shopify will automatically update!

---

### Method 3: Shopify CLI (For Developers)

This method is best for active development and testing.

#### Step 1: Install Shopify CLI

**Using npm:**
```bash
npm install -g @shopify/cli @shopify/theme
```

**Using Homebrew (Mac):**
```bash
brew tap shopify/shopify
brew install shopify-cli
```

**Using apt (Linux):**
```bash
sudo apt update
sudo apt install shopify-cli
```

#### Step 2: Authenticate

```bash
shopify login --store your-store.myshopify.com
```

This will open a browser window for authentication.

#### Step 3: Development Workflow

**For live development:**
```bash
cd shopify_theme
shopify theme dev
```

This starts a local development server and provides a preview URL. Changes are synced in real-time.

**To push theme to Shopify:**
```bash
shopify theme push
```

You'll be asked to select a theme or create a new one.

**To pull theme from Shopify:**
```bash
shopify theme pull
```

**To share a preview:**
```bash
shopify theme share
```

---

## Post-Deployment Setup

### 1. Configure Navigation Menus

#### Main Menu
1. Go to **Online Store > Navigation**
2. Edit "Main menu"
3. Add items:
   - Home (/)
   - Shop (/collections/all)
   - Wine (/collections/wine)
   - Spirits (/collections/spirits)
   - Beer (/collections/beer)
   - About (/pages/about)
   - Contact (/pages/contact)

#### Footer Menu
1. Create a new menu called "Footer"
2. Add items:
   - About Us (/pages/about)
   - Contact (/pages/contact)
   - Shipping Policy (/policies/shipping-policy)
   - Refund Policy (/policies/refund-policy)
   - Privacy Policy (/policies/privacy-policy)
   - Terms of Service (/policies/terms-of-service)

### 2. Set Up Pages

Create essential pages in **Online Store > Pages**:

1. **About Us**
   - Describe your store
   - Your story and mission
   - Why customers should choose you

2. **Contact**
   - Contact form
   - Store address
   - Phone and email
   - Hours of operation

3. **FAQ** (Optional)
   - Shipping information
   - Return policy
   - Age verification
   - Product questions

### 3. Configure Collections

1. Go to **Products > Collections**

2. Create collections:
   - **All Products** (automated: all products)
   - **Wine** (automated: product type = wine)
   - **Spirits** (automated: product type = spirits)
   - **Beer** (automated: product type = beer)
   - **Best Sellers** (manual selection)
   - **New Arrivals** (automated: created in last 30 days)
   - **On Sale** (automated: compare at price > price)

### 4. Add Products

For each product:
1. Go to **Products > Add product**
2. Fill in:
   - Title (e.g., "Château Margaux 2015")
   - Description (detailed information)
   - Price
   - Compare at price (if on sale)
   - Images (multiple high-quality photos)
   - Product type (Wine, Spirits, Beer)
   - Vendor (brand name)
   - Tags (region, varietal, etc.)
   - Collections (assign to relevant collections)

### 5. Configure Payment Methods

1. Go to **Settings > Payments**
2. Enable payment providers:
   - Shopify Payments (recommended)
   - PayPal
   - Credit cards (Visa, Mastercard, Amex)

### 6. Set Up Shipping

1. Go to **Settings > Shipping and delivery**
2. Configure:
   - Shipping zones
   - Shipping rates
   - Free shipping threshold (e.g., $100+)
   - Local pickup (if applicable)

### 7. Legal Requirements

**Important for Alcohol Sales:**

1. **Age Verification**
   - Enable age verification at checkout
   - In `assets/global.js`, uncomment: `theme.ageVerification.init();`

2. **Shipping Restrictions**
   - Configure which states/countries you can ship to
   - Set up proper tax calculations

3. **Licenses**
   - Display required licenses
   - Add disclaimer about legal drinking age

4. **Terms and Policies**
   - Update shipping policy
   - Update refund policy
   - Update privacy policy
   - Add alcohol-specific disclaimers

---

## Theme Customization

### Customize Colors

1. **Via Theme Editor:**
   - Online Store > Themes > Customize
   - Theme settings > Colors
   - Adjust gold, white, black values

2. **Via Code:**
   - Edit `assets/base.css`
   - Modify CSS variables:
     ```css
     :root {
       --gold: 212, 175, 55;
       --white: 255, 255, 255;
       --black: 0, 0, 0;
     }
     ```

### Customize Fonts

1. **Via Theme Editor:**
   - Theme settings > Typography
   - Choose from Shopify font library

2. **Via Code:**
   - Add custom fonts in `layout/theme.liquid`
   - Update font variables

### Add Custom Sections

1. Create new file in `sections/` folder
2. Add JSON schema at the bottom
3. Include in templates via theme editor

### Modify Homepage

1. Go to Customize theme
2. Select "Homepage" from page selector
3. Add/remove/reorder sections:
   - Hero banner
   - Featured products
   - Rich text
   - Product collections
4. Configure each section's settings

---

## Troubleshooting

### Theme Upload Fails
- **Issue**: Zip file rejected
- **Solution**: Ensure no .git folder, correct file structure
- **Check**: All required files present (layout, sections, templates, config)

### Sections Not Editable
- **Issue**: Can't customize sections in theme editor
- **Solution**: Verify JSON schema is valid
- **Check**: Section names match template references

### Images Not Loading
- **Issue**: Broken image links
- **Solution**: Use Shopify image filters (`image_url`)
- **Check**: Image paths and file names

### JavaScript Errors
- **Issue**: Features not working
- **Solution**: Check browser console for errors
- **Check**: All JS files properly loaded

### Cart Not Working
- **Issue**: Can't add products to cart
- **Solution**: Verify form action URLs
- **Check**: AJAX endpoints are correct

---

## Performance Optimization

### Image Optimization
1. Use Shopify's CDN
2. Compress images before upload
3. Use appropriate image sizes
4. Enable lazy loading

### Code Optimization
1. Minify CSS and JavaScript
2. Remove unused code
3. Limit third-party scripts
4. Use Shopify's built-in features

### Speed Testing
1. Test with Google PageSpeed Insights
2. Test with Shopify's speed test
3. Aim for:
   - Load time < 3 seconds
   - Mobile score > 70
   - Desktop score > 80

---

## Maintenance

### Regular Updates
1. Monitor theme performance
2. Test after Shopify updates
3. Update dependencies
4. Back up theme regularly

### Backup Procedure
1. Download current theme:
   ```bash
   shopify theme pull
   ```
2. Save to version control (Git)
3. Export products/collections regularly

---

## Support & Resources

### Shopify Resources
- [Shopify Theme Documentation](https://shopify.dev/themes)
- [Liquid Documentation](https://shopify.dev/api/liquid)
- [Shopify Community Forums](https://community.shopify.com)

### Theme Support
- GitHub Issues: [Your repo]/issues
- Email: support@yourstore.com
- Documentation: README.md

---

## Checklist

Before going live, ensure:

- [ ] Theme uploaded and customized
- [ ] Logo uploaded
- [ ] Colors and fonts configured
- [ ] Navigation menus created
- [ ] Products added with images
- [ ] Collections created
- [ ] Homepage configured
- [ ] About and Contact pages created
- [ ] Payment methods configured
- [ ] Shipping rates set up
- [ ] Age verification enabled
- [ ] Legal pages updated
- [ ] Policies configured
- [ ] Social media links added
- [ ] Favicon uploaded
- [ ] Mobile layout tested
- [ ] All pages reviewed
- [ ] Test order placed
- [ ] Theme published

---

## Going Live

1. Complete all checklist items
2. Test thoroughly on preview URL
3. Verify all functionality works
4. Check mobile responsiveness
5. Click **Publish** in theme library
6. Monitor for any issues
7. Make adjustments as needed

**Congratulations!** Your liquor store theme is now live! 🎉
