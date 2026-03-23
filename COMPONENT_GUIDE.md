# Component Documentation & Style Guide

## Design Philosophy

The MLN131 website follows an academic, minimal design inspired by:
- **Notion**: Clean, card-based layouts with clear visual hierarchy
- **University LMS**: Organized, content-focused interface
- **Modern SaaS**: Subtle hover effects and smooth transitions

### Core Principles
1. **Clarity**: Information hierarchy is immediately apparent
2. **Minimalism**: No unnecessary decoration, maximum functionality
3. **Accessibility**: High contrast, readable typography
4. **Responsiveness**: Seamless experience across all device sizes

---

## Color System

### Light Mode
```
Background:     #ffffff (white)
Text Primary:   #0f172a (slate-900)
Text Secondary: #64748b (slate-600)
Borders:        #e2e8f0 (slate-200)
Accents:        slate, blue, amber
```

### Dark Mode
```
Background:     #020617 (slate-950)
Text Primary:   #f1f5f9 (slate-50)
Text Secondary: #cbd5e1 (slate-400)
Borders:        #334155 (slate-700)
Accents:        same as light (with adjustments)
```

### Semantic Colors
- **Blue**: Information, assignments (bg-blue-50, text-blue-900)
- **Amber**: Warnings, reading assignments (bg-amber-50, text-amber-900)
- **Green**: Success, completed items (text-green-600)

---

## Typography

### Font Stack
```css
--font-sans: Geist (system fallback to -apple-system, BlinkMacSystemFont, etc.)
--font-mono: Geist Mono
```

### Text Sizes

| Level | Size | Weight | Usage |
|-------|------|--------|-------|
| H1    | 4xl/5xl | bold | Page title |
| H2    | 2xl | bold | Section heading |
| H3    | xl | semibold | Subsection |
| H4    | lg | semibold | Card title |
| Body  | base/sm | regular | Content |
| Small | xs | regular | Meta information |

### Line Heights
- Headings: 1.2 (tight)
- Body: 1.5-1.75 (relaxed)
- Code: 1.5 (monospace)

---

## Components

### 1. Header Component

**Location**: `app/components/Header.tsx`

**Features**:
- Sticky positioning (top-0, z-50)
- Responsive navigation
- Dark mode toggle
- Mobile menu drawer

**Key Classes**:
```tsx
className="sticky top-0 z-50 bg-white dark:bg-slate-900"
```

**States**:
- Default: Clean, minimal
- Mobile Menu Open: Shows full navigation menu
- Dark Mode: Inverted colors

**Props**: None (self-contained)

**Usage**:
```tsx
import Header from './components/Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
```

---

### 2. Sidebar Component

**Location**: `app/components/Sidebar.tsx`

**Features**:
- Sticky, scrollable table of contents
- Reading progress indicator
- Hidden on small screens
- Only visible on chapter page

**Key Classes**:
```tsx
className="hidden lg:block w-64 sticky top-16 h-[calc(100vh-4rem)]"
```

**Navigation Items**:
- Smooth scroll anchors
- Active state styling
- Hierarchical indentation (level 2 has more padding)

**Progress Bar**:
- Visual progress indicator
- Animated width transition
- Percentage display

**Usage**:
```tsx
// Sidebar auto-hides on non-chapter pages
<Sidebar /> // Only renders on /chapter
```

---

### 3. SectionCard Component

**Location**: `app/components/SectionCard.tsx`

**Props**:
```tsx
interface SectionCardProps {
  id: string;                 // Unique identifier
  titleVi: string;            // Vietnamese title
  titleEn: string;            // English title
  assignment: string;         // Assignment description
  reading: string;            // Reading instructions
  references: string[];       // Array of references
}
```

**Structure**:
1. **Header Section**: Titles with background
2. **Content Section**: 3 main areas
   - Assignment (blue left border)
   - Reading (amber left border)
   - References (bullet list)
3. **Footer**: Section number and action button

**Visual Features**:
- Color-coded left borders
- Colored background boxes
- Hover shadow effect
- Smooth transitions

**Example**:
```tsx
<SectionCard
  id="section-1"
  titleVi="Chủ nghĩa Mác - Lênin về tôn giáo"
  titleEn="Marxism-Leninism on religion"
  assignment="(Assignment: Presentation...)"
  reading="Đọc trước giáo trình..."
  references={[
    'Giáo trình Triết học Mác - Lênin (2019)',
    'Giáo trình Triết học Mác - Lênin (2021)',
  ]}
/>
```

---

### 4. Breadcrumb Component

**Location**: `app/components/Breadcrumb.tsx`

**Props**:
```tsx
interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

interface BreadcrumbItem {
  label: string;
  href?: string;    // Optional - last item is not clickable
}
```

**Features**:
- Visual separator between items
- Hover effects on links
- Bold styling for current page
- Accessible navigation

**Example**:
```tsx
<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Chapter 6', href: '/chapter' },
  ]}
/>
```

---

### 5. Footer Component

**Location**: `app/components/Footer.tsx`

**Structure**:
- About section
- Quick links (Resources)
- Support links
- Legal links
- Copyright notice

**Features**:
- Responsive grid (1 column mobile, 4 columns desktop)
- Dark mode support
- Auto-updating year in copyright

---

### 6. Layout Component

**Location**: `app/components/Layout.tsx`

**Purpose**: Main wrapper combining all components

**Structure**:
```
<Layout>
  <Header />
  <div className="flex">
    <Sidebar />
    <main>
      {children}
    </main>
  </div>
  <Footer />
</Layout>
```

---

## Responsive Design

### Breakpoints (TailwindCSS default)
```
sm: 640px   (mobile to tablet transition)
md: 768px   (tablet standard)
lg: 1024px  (desktop)
xl: 1280px  (large desktop)
2xl: 1536px (extra large)
```

### Key Responsive Behaviors

**Header**:
- Desktop: Full navigation visible
- Mobile: Hamburger menu

**Sidebar**:
- lg and above: Visible
- Below lg: Hidden (display:none)

**Main Content**:
- Full width on mobile
- Max-width container on desktop

**Grid Layouts**:
- Single column on mobile
- Multiple columns on desktop

---

## Interactive Elements

### Hover Effects

**Links & Buttons**:
```tsx
className="hover:text-slate-900 dark:hover:text-white transition-colors"
```

**Cards**:
```tsx
className="hover:shadow-lg transition-shadow duration-200"
```

**Transitions**:
- Duration: 200ms-500ms
- Property: colors, shadows, widths
- Easing: ease-in-out (default)

### Active States
- Bold text for current breadcrumb item
- Highlighted navigation item in sidebar
- Darker background on clicked elements

### Focus States
All interactive elements have proper focus states for keyboard navigation.

---

## Dark Mode Implementation

### How It Works
- Uses CSS `@media (prefers-color-scheme: dark)`
- Toggle button adds/removes `dark` class on `<html>`
- TailwindCSS `dark:` prefix for dark mode styles

### Example
```tsx
<div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
  {/* Light: white bg, dark text */}
  {/* Dark: slate-800 bg, white text */}
</div>
```

---

## Code Examples

### Creating a New Section Page

```tsx
import Layout from '../components/Layout';
import SectionCard from '../components/SectionCard';

export default function NewChapter() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Chapter Title</h1>
      
      <SectionCard
        id="section-1"
        titleVi="Vietnamese Title"
        titleEn="English Title"
        assignment="Assignment description"
        reading="Reading instructions"
        references={['Reference 1', 'Reference 2']}
      />
    </Layout>
  );
}
```

### Adding a Custom Card

```tsx
<div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
    Card Title
  </h3>
  <p className="text-slate-700 dark:text-slate-300">
    Card content
  </p>
</div>
```

### Using Color-Coded Sections

```tsx
{/* Blue section (information) */}
<div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 px-4 py-3">
  <p className="text-blue-900 dark:text-blue-300">Content</p>
</div>

{/* Amber section (warning/reading) */}
<div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 px-4 py-3">
  <p className="text-amber-900 dark:text-amber-300">Content</p>
</div>
```

---

## Best Practices

1. **Always use consistent spacing**: Use TailwindCSS spacing scale (p-4, gap-6, etc.)
2. **Maintain color contrast**: Ensure WCAG AA compliance
3. **Use semantic HTML**: `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`
4. **Add ARIA labels**: For icon-only buttons and complex layouts
5. **Test responsive**: Check all breakpoints during development
6. **Preserve transitions**: Don't remove smooth transitions (UX benefit)
7. **Dark mode support**: Always add `dark:` variants for dark mode

---

## Accessibility Features

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **ARIA Labels**: Buttons and icons have descriptive labels
- **Semantic HTML**: Proper heading hierarchy, landmark elements
- **Color Contrast**: Meets WCAG AA standards
- **Focus Indicators**: Clear focus states for keyboard users
- **Alt Text**: Decorative icons clearly marked

---

## Performance Considerations

- **CSS**: TailwindCSS JIT provides minimal CSS
- **Components**: All components are code-split automatically
- **Images**: Use Next.js Image component for optimization
- **Fonts**: Google Fonts (Geist) self-hosted by Next.js
- **Dark Mode**: CSS classes don't require server logic

---

## Customization Guide

### Changing Colors

1. Modify `globals.css` CSS variables
2. Update TailwindCSS color references in components
3. Ensure dark mode has corresponding variants

### Adding New Components

1. Create file in `app/components/`
2. Define TypeScript interface for props
3. Use TailwindCSS for styling
4. Export as default function
5. Import and use in pages

### Extending Typography

Edit `app/layout.tsx` to change fonts, or add new font weights by importing additional font files.

---

## Support & Maintenance

For questions about components, refer to:
- Component inline comments
- This documentation file
- Next.js documentation: https://nextjs.org/docs
- TailwindCSS documentation: https://tailwindcss.com/docs

