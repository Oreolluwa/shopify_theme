# Theme Customization Quick Reference

This guide provides quick reference for common customization tasks.

## 🎨 Colors

### Change Brand Colors

**Via Theme Editor:**
1. Customize > Theme settings > Colors
2. Adjust "Accent 1 (Gold)", "Accent 2 (Black)", etc.

**Via Code (`assets/base.css`):**
```css
:root {
  --gold: 212, 175, 55;      /* Change RGB values */
  --white: 255, 255, 255;
  --black: 0, 0, 0;
}
```

### Common Color Locations
- Buttons: `.button` class in `base.css`
- Headers: `.header-wrapper` in `sections/header.liquid`
- Footer: `.footer` in `sections/footer.liquid`
- Product cards: `.product-card` in `sections/featured-products.liquid`

---

## 🖋️ Typography

### Change Fonts

**Via Theme Editor:**
1. Customize > Theme settings > Typography
2. Select "Heading Font" and "Body Font"

**Custom Fonts (via code):**
Add to `layout/theme.liquid` in `<head>`:
```liquid
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">

{% style %}
  :root {
    --font-heading-family: 'Your Font', serif;
    --font-body-family: 'Your Font', sans-serif;
  }
{% endstyle %}
```

### Font Sizes
Adjust in Theme settings > Typography:
- Heading scale: 100-150%
- Body scale: 100-130%

---

## 📐 Layout

### Page Width

**Via Theme Editor:**
1. Customize > Theme settings > Layout
2. Adjust "Page width" (1000-1600px)

**Via Code:**
```css
:root {
  --page-width: 1200px; /* Change value */
}
```

### Section Spacing

**Via Theme Editor:**
1. Theme settings > Layout > "Space between sections"

**Via Code (`assets/base.css`):**
```css
.section {
  padding: 6rem 0; /* Adjust vertical padding */
}
```

---

## 🏠 Homepage

### Add/Remove Sections

1. Customize > Select "Homepage"
2. Click "Add section"
3. Choose from:
   - Hero
   - Featured products
   - Rich text
   - Collection list
   - Image banner
4. Drag to reorder
5. Click section to configure

### Hero Banner

**Settings:**
- Image: Upload banner image (2000x600px recommended)
- Title: Main headline
- Subtitle: Supporting text
- Button: CTA text and link
- Overlay opacity: 0-80%

**Code location:** `sections/hero.liquid`

### Featured Products

**Settings:**
- Title & subtitle
- Collection to display
- Number of products: 2-12

**Code location:** `sections/featured-products.liquid`

---

## 🛍️ Product Pages

### Product Images

**Requirements:**
- Format: JPG or PNG
- Size: Minimum 2048x2048px
- Aspect ratio: 1:1 (square) preferred
- Background: White or transparent

### Add/Remove Variants

In product admin:
1. Products > [Product] > Variants
2. Add option (Size, Type, etc.)
3. Add values (Small, Medium, Large)

### Product Description Tabs

**Edit content:** In product description field
**Modify tabs:** Edit `sections/main-product.liquid`

```liquid
<div class="product-tabs__nav">
  <button data-tab="description">Description</button>
  <button data-tab="details">Details</button>
  <button data-tab="reviews">Reviews</button> <!-- Add this -->
</div>
```

---

## 📦 Collection Pages

### Collection Grid

**Via Theme Editor:**
1. Customize > Collection template
2. Product grid > Settings
3. Adjust:
   - Products per page: 8-24
   - Columns (desktop): 2-5
   - Columns (mobile): 1-2

### Sorting Options

Enabled by default. Users can sort by:
- Featured
- Best selling
- A-Z, Z-A
- Price (low to high, high to low)
- Date (old to new, new to old)

**Disable sorting:** In collection template settings, uncheck "Enable sorting"

---

## 🛒 Cart

### Cart Type

**Via Theme Editor:**
1. Theme settings > Cart
2. Choose:
   - Drawer (slide-in cart)
   - Page (full cart page)

### Cart Drawer

**Customize:** Edit `snippets/cart-drawer.liquid`
**Styling:** `snippets/cart-drawer.liquid` (internal styles)

### Cart Notes

**Enable/Disable:**
- Theme settings > Cart > "Enable cart note"

---

## 🎯 Header & Navigation

### Logo

**Upload:**
1. Customize > Header
2. Upload logo image
3. Adjust logo width: 50-250px

**Recommended:**
- Format: PNG with transparency
- Size: 300x100px
- Colors: Gold/white/black to match theme

### Menu Items

**Edit:**
1. Online Store > Navigation > Main menu
2. Add/remove/reorder items
3. Create dropdown: Indent items under parent

**Example structure:**
```
- Home
- Shop
  - Wine
  - Spirits
  - Beer
- About
- Contact
```

### Sticky Header

**Settings:**
- Header > Sticky header type
- Options: None, On scroll up, Always

---

## 📱 Mobile Customization

### Mobile Menu

**Automatically responsive** - no changes needed
**Customize:** Edit `sections/header.liquid` and `assets/component-menu-drawer.css`

### Mobile Image Heights

Adjust hero height:
```liquid
hero_height_mobile: 400px
```

Change in Hero section settings or code

### Touch Targets

All buttons/links are touch-friendly (minimum 44x44px)

---

## 🎪 Announcement Bar

**Settings:**
1. Customize > Announcement bar
2. Configure:
   - Show/hide
   - Text message
   - Link (optional)

**Styling:** Edit `sections/announcement-bar.liquid`

**Auto-close:** JavaScript in `assets/global.js`

---

## 📧 Footer

### Footer Columns

**Via Theme Editor:**
1. Customize > Footer
2. Add blocks:
   - Link list (menu)
   - Text (about us)
   - Newsletter

### Newsletter

**Setup:**
1. Marketing > Email
2. Configure email service
3. Newsletter block in footer collects emails

### Social Links

**Add links:**
1. Theme settings > Social media
2. Add URLs for:
   - Facebook
   - Instagram
   - Twitter
   - YouTube
   - TikTok

---

## 🎨 Advanced Customization

### Add Custom CSS

**Method 1: Theme settings**
1. Customize > Theme settings > Custom CSS
2. Add CSS rules

**Method 2: Custom file**
1. Create `assets/custom.css`
2. Add to `layout/theme.liquid`:
```liquid
{{ 'custom.css' | asset_url | stylesheet_tag }}
```

### Add Custom JavaScript

1. Create `assets/custom.js`
2. Add to `layout/theme.liquid`:
```liquid
<script src="{{ 'custom.js' | asset_url }}" defer="defer"></script>
```

### Add New Section

1. Create file: `sections/my-section.liquid`
2. Add Liquid code and JSON schema
3. Available in theme editor

**Template:**
```liquid
{%- style -%}
  .my-section {
    padding: 4rem 2rem;
  }
{%- endstyle -%}

<div class="my-section">
  <h2>{{ section.settings.title }}</h2>
  <p>{{ section.settings.text }}</p>
</div>

{% schema %}
{
  "name": "My Section",
  "settings": [
    {
      "type": "text",
      "id": "title",
      "label": "Title",
      "default": "My Section"
    },
    {
      "type": "textarea",
      "id": "text",
      "label": "Text"
    }
  ],
  "presets": [
    {
      "name": "My Section"
    }
  ]
}
{% endschema %}
```

---

## 🔍 SEO

### Page Titles & Descriptions

**Products:**
- Edit in product admin
- Uses product title and description

**Pages:**
- Edit page
- Add SEO title and description

**Homepage:**
- Settings > General > Home page title and meta description

### Image Alt Text

Always add for SEO and accessibility:
1. Upload image
2. Add "Alt text" describing image

---

## 🚀 Performance

### Image Optimization

**Before uploading:**
- Compress with TinyPNG or ImageOptim
- Use correct dimensions
- Format: JPG for photos, PNG for graphics

**In theme:**
- Uses Shopify image CDN automatically
- Lazy loading enabled
- Responsive images with srcset

### Speed Tips

1. Limit apps that inject code
2. Use Shopify's built-in features
3. Optimize images before upload
4. Remove unused code
5. Test with PageSpeed Insights

---

## 🛡️ Age Verification

### Enable Age Gate

Edit `assets/global.js`:

Find this line (at the bottom):
```javascript
// theme.ageVerification.init();
```

Remove the `//` to enable:
```javascript
theme.ageVerification.init();
```

### Customize Age Gate

Edit the modal in `assets/global.js`:
- Change age (21 or 18)
- Modify text
- Update styling

---

## 📋 Quick Fixes

### Cart Not Working
- Check `routes` object in `theme.liquid`
- Verify AJAX endpoints

### Images Not Loading
- Use `image_url` filter
- Check file paths

### Sections Not Appearing
- Verify JSON schema syntax
- Check section names in templates

### Mobile Menu Not Opening
- Check JavaScript console for errors
- Verify `global.js` is loaded

---

## 🔗 Useful Links

- [Shopify Liquid Docs](https://shopify.dev/api/liquid)
- [Theme Settings Reference](https://shopify.dev/themes/architecture/settings)
- [Section Schema](https://shopify.dev/themes/architecture/sections/section-schema)

---

Need more help? Check `README.md` or `DEPLOYMENT.md`
