# MLN131 Course Website - Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### 1. Install Dependencies
```bash
cd mln131
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit **http://localhost:3000** in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 📁 What Was Created

### Components (Reusable)
```
app/components/
├── Header.tsx          # Top navigation + dark mode
├── Sidebar.tsx         # Table of contents
├── SectionCard.tsx     # Course section card
├── Breadcrumb.tsx      # Navigation breadcrumbs
├── Footer.tsx          # Multi-column footer
└── Layout.tsx          # Main wrapper
```

### Pages
```
app/
├── page.tsx            # Home page
└── chapter/page.tsx    # Chapter detail page
```

---

## 🎨 Features at a Glance

✨ **Design**
- Academic, minimal style (like Notion + LMS)
- Light and dark modes
- Fully responsive (mobile, tablet, desktop)
- TailwindCSS only (no extra CSS frameworks)

🔧 **Technology**
- Next.js 16 (App Router)
- React 19
- TypeScript
- TailwindCSS 4

📚 **Content**
- Home page with course overview
- Chapter 6 with 2 sections
- Bilingual support (Vietnamese + English)
- Real course data included

🎯 **Bonus Features**
- Dark mode toggle
- Breadcrumb navigation
- Reading progress indicator
- Responsive sidebar
- Mobile menu

---

## 📖 File Organization

```
MLN131/
├── app/
│   ├── components/           # Reusable components
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── SectionCard.tsx
│   │   ├── Breadcrumb.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── chapter/              # Chapter page
│   │   └── page.tsx
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   ├── globals.css           # Global styles
│   └── favicon.ico
├── package.json
├── tsconfig.json
├── next.config.ts
├── COURSE_WEBSITE.md         # Full documentation
├── COMPONENT_GUIDE.md        # Component API guide
└── IMPLEMENTATION_SUMMARY.md # What was built
```

---

## 🎓 Course Content

### Chapter 6: Ethnicity and Religion in Socialism

**Section 1**: Marxism-Leninism on Religion
- Vietnamese: Chủ nghĩa Mác - Lênin về tôn giáo
- Reading: Pages 223-228
- Textbook: Scientific Socialism (2021)

**Section 2**: Religion in Vietnam
- Vietnamese: Tôn giáo ở Việt Nam và chính sách tôn giáo hiện nay
- Reading: Pages 228-237
- Assignment: Presentation + Creative product

---

## 🖌️ Design System

### Colors
- **Light**: White background, slate text
- **Dark**: Dark slate background, light text
- **Accents**: Blue (info), Amber (reading), Green (success)

### Typography
- Font: Geist (Google Fonts)
- Sizes: H1 (4-5xl), H2 (2xl), H3 (lg), Body (base-sm)

### Spacing
- Consistent with TailwindCSS scale
- Padding: p-4, p-6, p-8
- Gaps: gap-4, gap-6, gap-8

---

## 🔧 Customization Examples

### Change Course Title
Edit `app/page.tsx`:
```tsx
<h1 className="text-5xl font-bold">
  YOUR COURSE TITLE
</h1>
```

### Add New Chapter
Create `app/chapter2/page.tsx` with same structure as `app/chapter/page.tsx`

### Add New Section
In `app/chapter/page.tsx`, add to `sections` array:
```tsx
{
  id: 'section-3',
  titleVi: 'Vietnamese Title',
  titleEn: 'English Title',
  assignment: 'Assignment text',
  reading: 'Reading instructions',
  references: ['Ref 1', 'Ref 2'],
}
```

### Change Colors
All TailwindCSS classes can be modified:
```tsx
// Change header background
<header className="bg-blue-600 dark:bg-blue-800">
```

---

## 📱 Responsive Features

### Mobile
- Hamburger navigation menu
- Single-column layout
- Sidebar hidden (use main nav)
- Touch-friendly buttons

### Tablet
- Larger touch targets
- Two-column layouts where applicable
- Sidebar appears
- Optimized spacing

### Desktop
- Full navigation visible
- Sidebar always visible
- Multi-column layouts
- Maximum readability

---

## 🌓 Dark Mode

Dark mode is automatically applied based on system preference and can be toggled via the button in the header.

Users can:
1. Click the sun/moon icon in the header
2. System will remember preference
3. All pages respect the theme

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Deploy to Other Platforms
1. Build: `npm run build`
2. Start: `npm start`
3. Runs on port 3000

---

## 📚 Documentation

For detailed information:

- **COURSE_WEBSITE.md** - Full project documentation
- **COMPONENT_GUIDE.md** - Component API and design guide
- **IMPLEMENTATION_SUMMARY.md** - What was built and why

---

## ✅ Verification Checklist

- [x] Project builds successfully (`npm run build`)
- [x] Dev server runs (`npm run dev`)
- [x] Home page displays correctly
- [x] Chapter page displays correctly
- [x] Dark mode toggle works
- [x] Mobile menu works
- [x] Responsive design works
- [x] All components properly typed
- [x] No TypeScript errors
- [x] No ESLint errors

---

## 🆘 Troubleshooting

### Dev server won't start
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Then restart
npm run dev
```

### TypeScript errors
```bash
# Check for type errors
npx tsc --noEmit
```

### Build fails
```bash
# Clean build
rm -rf .next
npm run build
```

---

## 📞 Support

For Next.js questions: https://nextjs.org/docs
For TailwindCSS questions: https://tailwindcss.com/docs
For React questions: https://react.dev

---

## 🎉 You're Ready!

The website is fully functional and ready to use. Start with the home page and explore the chapter content.

**Main Routes:**
- `/` - Home page
- `/chapter` - Chapter 6 content

Happy learning! 📖✨

