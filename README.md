# HAN Competitive Robotics (HCR) Website

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/hcr-website)

Official website for HAN Competitive Robotics - a student engineering team building featherweight combat robots at HAN University of Applied Sciences, Netherlands.

🌐 **Live Site:** [https://hcr-han.nl](https://hcr-han.nl) _(update with your URL)_

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?style=flat&logo=tailwind-css)

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/hcr-website.git
cd hcr-website

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📦 Deploy

### Vercel (Recommended)

1. Push to GitHub
2. Import to [Vercel](https://vercel.com)
3. Deploy automatically

Or use the button above for one-click deploy.

### Static Export

```bash
npm run build
# Static files in `out/` folder
```

## 🎨 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 📁 Project Structure

```
my-app/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   ├── robot/page.tsx     # Robot specifications
│   ├── team/page.tsx      # Team members
│   ├── sponsors/page.tsx  # Sponsors page
│   └── contact/page.tsx   # Contact page
├── components/            # Reusable components
├── public/                # Static assets
│   ├── team/             # Team photos
│   ├── robot/            # Robot images
│   ├── sponsors/         # Sponsor logos
│   └── images/           # General images
└── lib/                   # Utility functions
```

## 📝 Editing Content

### Update Team Members

Edit `app/team/page.tsx`:

```typescript
{
  name: "Your Name",
  role: "Your Role",
  program: "S4 Mechanical Engineering",
  image: "/team/your-photo.png",
  initials: "YN",
}
```

Add photo to `public/team/your-photo.png`

### Update Robot Specs

Edit `app/robot/page.tsx` - modify the `specs` array.

### Update Sponsors

Edit `app/sponsors/page.tsx` - modify the `currentSponsors` array.

## 🖼️ Adding Images

1. Place images in appropriate `public/` subfolder
2. Supported formats: `.png`, `.jpg`, `.webp`
3. Recommended sizes:
   - Team photos: 400x400px
   - Robot photos: 800x600px
   - Sponsor logos: 400x200px

## 🌈 Brand Colors

| Color      | Hex       | Usage            |
| ---------- | --------- | ---------------- |
| HAN Pink   | `#E5005B` | Primary accent   |
| Pink Soft  | `#FF6B9A` | Gradients        |
| Background | `#121212` | Main background  |
| Card       | `#1A1A1A` | Card backgrounds |

## 🤝 Contributing

1. Create a branch: `git checkout -b feature/your-feature`
2. Make changes
3. Commit: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

## 📄 License

© 2025 HAN Competitive Robotics. All rights reserved.

## 📧 Contact

- **Email:** hcr@han.nl
- **University:** HAN University of Applied Sciences, Arnhem

---

Built with ❤️ by the HCR Team
