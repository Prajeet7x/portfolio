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
  title: "Prajeet Kumar Thakur — Frontend Engineer & Business Analyst",
  description:
    "Portfolio of Prajeet Kumar Thakur — Frontend Software Engineer, Voice Over Artist, and MSc Business Analytics graduate based in the UK.",
  keywords: [
    "Prajeet Kumar Thakur",
    "Frontend Developer",
    "Business Analytics",
    "Next.js",
    "TypeScript",
    "Voice Over Artist",
    "UK",
  ],
  authors: [{ name: "Prajeet Kumar Thakur" }],
  openGraph: {
    title: "Prajeet Kumar Thakur",
    description: "Frontend Engineer · Voice Artist · Business Analyst",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmSans.variable}`}>{children}</body>
    </html>
  );
}
