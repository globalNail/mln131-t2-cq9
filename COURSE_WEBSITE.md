# MLN131 Academic Course Website

A clean, modern, academic-style website UI for **MLN131: Marxism-Leninism Philosophy** course built with **Next.js (App Router)**, **React**, and **TailwindCSS**.

## Features

### ✨ Core Features
- **Responsive Design**: Desktop, tablet, and mobile optimized
- **Dark Mode**: Toggle between light and dark themes
- **Academic Layout**: Clean, minimal design inspired by Notion and university LMS platforms
- **Type-Safe**: Full TypeScript support with proper typing
- **Accessible**: Semantic HTML and ARIA labels

### 📱 Pages
1. **Home Page** (`/`)
   - Course overview and introduction
   - Quick statistics
   - Featured chapter showcase
   - Course structure overview
   - Learning outcomes
   - Call-to-action

2. **Chapter Detail Page** (`/chapter`)
   - Breadcrumb navigation
   - Chapter header with Vietnamese and English titles
   - Chapter overview box
   - Key concepts and timeline
   - Main content sections with:
     - Section titles (bilingual)
     - Assignment details
     - Reading instructions
     - References
   - Discussion questions
   - Navigation to next chapter

### 🧩 Components

#### Layout Components
- **`Layout.tsx`** - Main layout wrapper with header, sidebar, and footer
- **`Header.tsx`** - Sticky header with navigation, dark mode toggle, and mobile menu
- **`Sidebar.tsx`** - Navigation sidebar with table of contents and reading progress
- **`Footer.tsx`** - Multi-column footer with quick links and metadata

#### Content Components
- **`SectionCard.tsx`** - Reusable card for course sections with assignment, reading, and references
- **`Breadcrumb.tsx`** - Breadcrumb navigation component

### 🎨 Design System

#### Color Palette
- **Light Mode**: Slate-based colors (white background, dark text)
- **Dark Mode**: Dark slate background with light text
- **Accents**: Blue (assignments), Amber (readings), Green (checkmarks)

#### Typography
- **Font**: Geist Sans (default), Geist Mono (code)
- **Hierarchy**: 
  - H1: 4xl-5xl, bold
  - H2: 2xl, bold
  - H3: sm, semibold, uppercase
  - Body: sm-lg, regular

#### Components
- Cards with subtle hover effects
- Colored left borders for content sections
- Progress bars and indicators
- Responsive grid layouts

## Project Structure

```
app/
├── components/
│   ├── Header.tsx          # Navigation header with dark mode toggle
│   ├── Sidebar.tsx         # Table of contents sidebar
│   ├── Footer.tsx          # Multi-column footer
│   ├── Layout.tsx          # Main layout wrapper
│   ├── SectionCard.tsx     # Reusable section card component
│   └── Breadcrumb.tsx      # Breadcrumb navigation
├── chapter/
│   └── page.tsx            # Chapter detail page
├── layout.tsx              # Root layout
├── page.tsx                # Home page
└── globals.css             # Tailwind CSS configuration
```

## Content Data

### Course Information
- **Title**: MLN131 - Marxism-Leninism Philosophy
- **Focus Chapter**: Chapter 6 - Ethnicity and Religion in the Transition to Socialism

### Sections

#### Section 1: Marxism-Leninism on Religion
- **Vietnamese**: "Chủ nghĩa Mác - Lênin về tôn giáo"
- **English**: "Marxism-Leninism on religion"
- **Reading**: Pages 223-228 from Scientific Socialism textbook (2021)
- **Assignment**: Presentation and creative product creation

#### Section 2: Religion in Vietnam
- **Vietnamese**: "Tôn giáo ở Việt Nam và chính sách tôn giáo hiện nay"
- **English**: "Religion in Vietnam and current policies"
- **Reading**: Pages 228-237
- **Assignment**: Presentation and creative product creation

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application will be available at `http://localhost:3000`

## Key Features Explained

### Dark Mode Toggle
Located in the header, allows users to switch between light and dark themes. The state is managed client-side using React hooks.

```tsx
<button onClick={toggleDarkMode}>
  {darkMode ? <MoonIcon /> : <SunIcon />}
</button>
```

### Responsive Sidebar
The sidebar is hidden on small screens (responsive) and shows a full table of contents on larger screens. Automatically hidden on home page.

### Section Cards
Each section displays:
- Bilingual titles (Vietnamese + English)
- Color-coded sections with left borders
- Assignment highlighting in blue
- Reading instructions in amber
- References with bullet points
- Action button (Share)

### Progress Indicator
Reading progress bar in the sidebar shows course completion status (configurable).

### Breadcrumb Navigation
Dynamic breadcrumb navigation helps users understand their position in the site hierarchy.

## Styling with TailwindCSS

All styling uses TailwindCSS utility classes. Key utilities:

```tsx
// Responsive design
<div className="hidden lg:block w-64">
  {/* Visible only on large screens */}
</div>

// Dark mode
<div className="dark:bg-slate-900 dark:text-white">
  {/* Dark mode specific styles */}
</div>

// Hover effects
<button className="hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
  {/* Smooth color transition on hover */}
</button>
```

## TypeScript Interfaces

All components use proper TypeScript interfaces:

```tsx
interface SectionCardProps {
  id: string;
  titleVi: string;
  titleEn: string;
  assignment: string;
  reading: string;
  references: string[];
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}
```

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: All modern versions

## Performance Optimizations

- **Static Generation**: Pages pre-rendered at build time
- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Next.js automatic image optimization
- **CSS Minification**: TailwindCSS JIT compilation

## Future Enhancements

- [ ] Add more chapters and sections
- [ ] Implement search functionality
- [ ] Add discussion forum
- [ ] Student progress tracking
- [ ] Assignment submission system
- [ ] Student comments and annotations
- [ ] Print-friendly layout
- [ ] PDF download of chapters

## License

Academic use only. All content is proprietary to the course.

## Support

For questions or issues, contact the course instructor through the platform.

---

**Built with ❤️ using Next.js, React, and TailwindCSS**
