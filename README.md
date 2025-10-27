# CoHire - P2P Hiring Platform Theme Showcase

A Next.js application showcasing 3 different theme variations for a peer-to-peer hiring platform.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Theme Variants

### 🎨 Variant 1: Minimal & Elegant
**Route:** `/`  
**Style:** Modern minimal with gradient accents

- **Header:** Sticky white header with backdrop blur, blue-to-purple gradient logo
- **Footer:** Light gray background with organized links
- **Theme:** Professional, welcoming, and approachable

### 🌟 Variant 2: Bold & Modern  
**Route:** `/variant-2`  
**Style:** Dark theme with bold design

- **Header:** Dark gradient header with large logo and white text
- **Footer:** Dark gradient footer with premium feel
- **Theme:** Tech-forward, innovative, cutting-edge

### ⚪ Variant 3: Clean & Simple
**Route:** `/variant-3`  
**Style:** Ultra-minimal black and white

- **Header:** Minimal border design with simple logo
- **Footer:** Clean white footer with black text
- **Theme:** Professional, corporate, maximum readability

## Project Structure

```
app/
├── components/
│   ├── HeaderMinimal.tsx     # Variant 1 header
│   ├── HeaderModern.tsx      # Variant 2 header
│   ├── HeaderClean.tsx       # Variant 3 header
│   ├── FooterMinimal.tsx     # Variant 1 footer
│   ├── FooterModern.tsx      # Variant 2 footer
│   └── FooterClean.tsx       # Variant 3 footer
├── page.tsx                  # Variant 1 home page
├── variant-2/
│   └── page.tsx              # Variant 2 home page
└── variant-3/
    └── page.tsx              # Variant 3 home page
```

## Features

Each variant includes:
- ✅ Responsive design (mobile-friendly)
- ✅ Hero section with call-to-action buttons
- ✅ Feature grid showcasing platform benefits
- ✅ Consistent branding across header and footer
- ✅ Smooth hover effects and transitions
- ✅ Professional typography

## Customization

To use a specific variant as your default:
1. Choose your preferred header/footer components
2. Update `app/page.tsx` to import them
3. Or copy the variant's page content to replace the default

## Design Philosophy

The themes are designed with these principles:
- **Simple but welcoming** - Clean layouts that feel approachable
- **Not cluttered** - Ample whitespace and organized content
- **Professional** - Building trust with polished design
- **Modern** - Contemporary styling that appeals to today's talent

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **React** - UI library

## Next Steps

1. Test each variant in different screen sizes
2. Consider your target audience (job seekers vs. employers)
3. Choose the variant that best represents your brand
4. Customize colors and content as needed

For detailed comparison, see [THEME_VARIANTS.md](./THEME_VARIANTS.md)
