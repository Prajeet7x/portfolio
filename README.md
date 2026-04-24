# Prajeet Kumar Thakur — Portfolio

Personal portfolio site built with **Next.js 14**, **TypeScript**, and **TailwindCSS**.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        ← Fonts, metadata, root layout
│   ├── page.tsx          ← Assembles all sections
│   └── globals.css       ← Global styles & CSS variables
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Skills.tsx
    ├── Experience.tsx
    ├── Education.tsx
    ├── Contact.tsx
    ├── Footer.tsx
    └── ScrollReveal.tsx  ← Intersection observer for animations
```

## Customisation

- Update your email in `Contact.tsx`
- Update your LinkedIn and GitHub URLs in `Contact.tsx`
- Update your university name and job details in `Experience.tsx` and `Education.tsx`
- Add project cards by editing `page.tsx` and creating a `Projects.tsx` component

## Deploy

Push to GitHub, then import to [Vercel](https://vercel.com) for instant deployment.
