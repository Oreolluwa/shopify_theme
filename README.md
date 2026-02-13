# Shopify Liquor Store Theme - Premium Edition

A modern, professional Shopify 2.0 theme designed specifically for liquor stores, wine shops, and spirits retailers. Features a sophisticated gold, white, and black color scheme with fully responsive layouts optimized for mobile, tablet, and desktop.

## 🎨 Features

### Design & Layout
- **Premium Color Scheme**: Elegant gold (#D4AF37), crisp white (#FFFFFF), and sophisticated black (#000000)
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Modern Typography**: Clean, readable fonts with proper hierarchy
- **Professional Aesthetics**: Mature, refined design suitable for premium liquor brands

### Shopify 2.0 Capabilities
- **Section-based Architecture**: All pages use JSON templates with customizable sections
- **Theme Editor Compatible**: Full integration with Shopify's theme customizer
- **Modular Sections**: Reusable components for flexible page building
- **Dynamic Sections**: Add, remove, and reorder sections without touching code

### Homepage
- Hero section with full-width banner and call-to-action
- Featured products showcase
- Rich text content areas
- Newsletter subscription
- Multiple product collection displays

### Product Pages
- Large product image gallery with thumbnails
- Variant selection (size, type, vintage, etc.)
- Price display with sale badges
- Add to cart with quantity selector
- Product description with tabbed content
- Product recommendations

### Collection Pages
- Collection banner with description
- Responsive product grid (adjustable columns)
- Sorting options (price, name, date)
- Pagination
- Product quick add to cart

### Cart & Checkout
- Sliding cart drawer
- Full cart page
- Editable quantities
- Order notes
- Subtotal calculation
- Continue shopping link

### Navigation
- Sticky header with logo
- Desktop mega menu
- Mobile hamburger menu
- Cart icon with item count
- Account/login link

### Footer
- Multi-column layout
- Quick links menu
- About us section
- Newsletter signup
- Social media links
- Payment icons

## 📁 File Structure

```
shopify_theme/
├── assets/
│   ├── base.css                    # Main stylesheet
│   ├── global.js                   # Main JavaScript
│   ├── css/                        # Additional CSS files
│   ├── js/                         # Additional JS files
│   └── images/                     # Theme images
├── config/
│   ├── settings_schema.json        # Theme settings configuration
│   └── settings_data.json          # Default theme settings
├── layout/
│   └── theme.liquid                # Main theme layout
├── locales/
│   └── en.default.json             # English translations
├── sections/
│   ├── announcement-bar.liquid     # Top announcement bar
│   ├── header.liquid               # Header with navigation
│   ├── footer.liquid               # Footer section
│   ├── hero.liquid                 # Homepage hero banner
│   ├── featured-products.liquid    # Featured products grid
│   ├── rich-text.liquid            # Rich text content
│   ├── main-product.liquid         # Product page main section
│   ├── product-recommendations.liquid  # Related products
│   ├── main-collection-banner.liquid  # Collection header
│   ├── main-collection-product-grid.liquid  # Collection products
│   ├── main-cart-items.liquid      # Cart items list
│   ├── main-cart-footer.liquid     # Cart totals & checkout
│   └── main-page.liquid            # Standard page content
├── snippets/
│   ├── cart-drawer.liquid          # Sliding cart drawer
│   ├── meta-tags.liquid            # SEO meta tags
│   ├── icon-*.liquid               # SVG icons
│   └── [other snippets]
├── templates/
│   ├── index.json                  # Homepage template
│   ├── product.json                # Product page template
│   ├── collection.json             # Collection page template
│   ├── cart.json                   # Cart page template
│   └── page.json                   # Standard page template
└── README.md                       # This file
```

## 🚀 Installation

### Method 1: Upload via Shopify Admin (Recommended)

1. **Prepare the theme**
   ```bash
   # Create a ZIP file of all theme files
   # DO NOT include the .git directory
   zip -r liquor-store-theme.zip . -x "*.git*" "*.DS_Store"
   ```

2. **Upload to Shopify**
   - Log in to your Shopify admin panel
   - Navigate to **Online Store > Themes**
   - Click **Add theme** > **Upload zip file**
   - Select your `liquor-store-theme.zip` file
   - Click **Upload**

3. **Customize & Publish**
   - Click **Customize** to edit theme settings
   - Configure colors, fonts, and content
   - Click **Publish** when ready

### Method 2: GitHub Integration

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial theme commit"
   git remote add origin https://github.com/yourusername/liquor-store-theme.git
   git push -u origin main
   ```

2. **Connect to Shopify**
   - In Shopify admin, go to **Online Store > Themes**
   - Click **Add theme** > **Connect from GitHub**
   - Authorize GitHub access
   - Select your repository
   - Click **Connect**

### Method 3: Shopify CLI (For Developers)

1. **Install Shopify CLI**
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. **Navigate to theme directory**
   ```bash
   cd shopify_theme
   ```

3. **Login to Shopify**
   ```bash
   shopify login --store your-store.myshopify.com
   ```

4. **Push theme to Shopify**
   ```bash
   shopify theme push
   ```

5. **Or work with live preview**
   ```bash
   shopify theme dev
   ```

## ⚙️ Configuration

### Theme Settings

Access theme settings in Shopify admin:
1. Go to **Online Store > Themes**
2. Click **Customize** on your active theme
3. Use the left sidebar to configure:

#### Colors
- Text color
- Background colors
- Accent colors (Gold, Black)
- Button colors
- Gradients (optional)

#### Typography
- Heading font
- Body font
- Font sizes

#### Layout
- Page width (1000px - 1600px)
- Section spacing

#### Social Media
- Facebook, Instagram, Twitter, YouTube, TikTok links

#### Cart Settings
- Cart type (drawer or page)
- Show vendor
- Enable cart notes

### Navigation Menus

1. **Main Menu**
   - Go to **Online Store > Navigation**
   - Edit "Main menu"
   - Add your product categories and pages

2. **Footer Menu**
   - Create a "Footer" menu
   - Add links for About, Contact, Policies, etc.

### Homepage Customization

1. Click **Customize** on your theme
2. Select **Homepage** from the page selector
3. Add/remove/reorder sections:
   - Hero banner
   - Featured products
   - Rich text
   - Product collections
   - Newsletter

## 🎨 Customization

### Colors

The theme uses CSS custom properties (variables) for easy color customization:

```css
:root {
  --gold: 212, 175, 55;      /* #D4AF37 */
  --white: 255, 255, 255;    /* #FFFFFF */
  --black: 0, 0, 0;          /* #000000 */
}
```

To change colors:
1. Edit in **Theme Settings > Colors**
2. Or modify `assets/base.css`

### Fonts

Fonts are managed through Shopify's font picker:
1. **Theme Settings > Typography**
2. Choose from Shopify's font library
3. Or use custom fonts via CSS

### Adding Custom CSS

1. Create `assets/custom.css`
2. Add in `layout/theme.liquid`:
   ```liquid
   {{ 'custom.css' | asset_url | stylesheet_tag }}
   ```

### Adding Custom JavaScript

1. Create `assets/custom.js`
2. Add in `layout/theme.liquid`:
   ```liquid
   <script src="{{ 'custom.js' | asset_url }}" defer="defer"></script>
   ```

## 🛍️ Product Setup

### Adding Products

1. Go to **Products > Add product**
2. Fill in:
   - Title
   - Description
   - Price
   - Images (high-quality photos)
   - Variants (if applicable)
   - Vendor (brand name)
   - Product type
   - Collections

### Product Images

**Recommended specifications:**
- Format: JPG or PNG
- Size: 2048 x 2048px minimum
- Aspect ratio: 1:1 (square) or 3:4 (portrait)
- Background: White or transparent

## 📱 Mobile Optimization

The theme is fully responsive with:
- Mobile-first design approach
- Touch-friendly buttons and links
- Optimized images for mobile
- Hamburger menu navigation
- Swipeable image galleries
- Fast loading times

## 🔒 Age Verification (Optional)

For liquor stores requiring age verification:

1. Uncomment in `assets/global.js`:
   ```javascript
   theme.ageVerification.init();
   ```

2. Customize the age gate modal in the same file
3. Adjust legal age requirement as needed

## 🌐 Multi-language Support

To add additional languages:

1. Create locale files:
   - `locales/fr.json` (French)
   - `locales/es.json` (Spanish)
   - etc.

2. Copy content from `en.default.json`
3. Translate all strings
4. Enable in Shopify admin under **Settings > Languages**

## 🔧 Troubleshooting

### Common Issues

**Theme not appearing after upload**
- Ensure all required files are included
- Check for syntax errors in JSON files
- Verify file structure matches Shopify requirements

**Sections not editable**
- Confirm JSON schema is properly formatted
- Check section names match template references

**Images not loading**
- Verify image URLs are correct
- Use Shopify's `image_url` filter
- Check image file sizes

**Cart not updating**
- Clear browser cache
- Check JavaScript console for errors
- Verify AJAX endpoints are correct

### Getting Help

- **Shopify Docs**: https://shopify.dev/themes
- **Theme Support**: Open an issue on GitHub
- **Shopify Forums**: https://community.shopify.com

## 📊 Performance

### Optimization Features
- Lazy loading images
- Deferred JavaScript
- Minified CSS and JS
- Optimized fonts
- Efficient Liquid code

### Best Practices
- Use Shopify CDN for images
- Optimize image sizes before upload
- Limit apps that inject code
- Use theme sections instead of custom code

## 🔐 Security

- No sensitive data in theme code
- Age verification for alcohol sales
- Secure checkout through Shopify
- HTTPS enabled by default
- PCI compliant payment processing

## 📝 License

This theme is provided for use with Shopify stores. Modify and customize as needed for your business.

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For theme support:
- Email: support@yourstore.com
- Documentation: [Link to docs]
- GitHub Issues: [Link to issues]

## 🎯 Roadmap

Future enhancements:
- [ ] Quick view modal
- [ ] Product filtering
- [ ] Wishlist functionality
- [ ] Store locator
- [ ] Gift cards
- [ ] Multi-currency support
- [ ] Customer reviews integration
- [ ] Advanced search

## 🙏 Credits

Developed by: [Your Name/Company]
Version: 1.0.0
Last Updated: 2026

---

**Note**: This theme is designed for Shopify stores selling alcoholic beverages. Ensure compliance with all local laws and regulations regarding online alcohol sales.