# Component Structure

This document outlines the restructured component organization in the CoHire application.

## Folder Structure

```
app/
├── components/
│   ├── Header/              # Header components
│   │   ├── Header.tsx       # Main header component (used in page.tsx)
│   │   ├── HeaderMinimal.tsx
│   │   ├── HeaderClean.tsx
│   │   └── HeaderModern.tsx
│   ├── Footer/              # Footer components
│   │   ├── FooterMinimal.tsx
│   │   ├── FooterClean.tsx
│   │   └── FooterModern.tsx
│   ├── Sections/            # Page sections/components
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── PopularToolsSection.tsx
│   │   └── CTASection.tsx
│   └── Search/              # Search-related components
│       └── SearchBar.tsx
└── page.tsx                 # Main page (lightweight, uses components)
```

## Component Organization

### Header Components (`components/Header/`)
Header components handle the page header:
- **Header.tsx**: Main header with logo, search bar, and navigation
- Header variants: HeaderMinimal, HeaderClean, HeaderModern

### Footer Components (`components/Footer/`)
Footer components handle the page footer:
- Footer variants: FooterMinimal, FooterClean, FooterModern

### Section Components (`components/Sections/`)
Reusable page sections:
- **HeroSection.tsx**: Hero section with title, description, and CTAs
- **FeaturesSection.tsx**: Features grid showcasing platform benefits
- **PopularToolsSection.tsx**: Popular tools grid
- **CTASection.tsx**: Call-to-action section

### Search Components (`components/Search/`)
Search functionality:
- **SearchBar.tsx**: Search bar with overlay and date range picker

## Benefits

1. **Better Organization**: Components grouped by functionality
2. **Reusability**: Section components can be reused across pages
3. **Maintainability**: Easier to find and update specific components
4. **Lightweight Page**: `page.tsx` is now clean and easy to read
5. **Scalability**: Easy to add new sections or components

## Usage Example

```tsx
// page.tsx - Clean and simple
import Header from './components/Header/Header'
import FooterMinimal from './components/Footer/FooterMinimal'
import HeroSection from './components/Sections/HeroSection'
import FeaturesSection from './components/Sections/FeaturesSection'

export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <HeroSection />
                <FeaturesSection />
            </main>
            <FooterMinimal />
        </div>
    )
}
```

