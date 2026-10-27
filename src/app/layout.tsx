import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Prajeet Kumar Thakur — Software Engineer & Data Analyst",
  description:
    "Portfolio of Prajeet Kumar Thakur — software engineer (React, TypeScript, Node.js, Golang) and MSc Business Analytics graduate based in Birmingham, UK.",
  keywords: [
    "Prajeet Kumar Thakur",
    "Software Engineer",
    "Frontend Developer",
    "Full Stack Developer",
    "Data Analyst",
    "React",
    "Next.js",
    "TypeScript",
    "Birmingham",
    "UK",
  ],
  authors: [{ name: "Prajeet Kumar Thakur" }],
  openGraph: {
    title: "Prajeet Kumar Thakur",
    description: "Software Engineer · Data Analyst · AI builder",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('theme'),d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d))document.documentElement.classList.add('dark')}catch(e){}` }} />
      </head>
      <body className={`${syne.variable} ${dmSans.variable}`}>{children}</body>
    </html>
  );
}
