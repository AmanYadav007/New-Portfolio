import type { Metadata } from "next";
import { Inter, Space_Grotesk, Comic_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const comicNeue = Comic_Neue({
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  variable: "--font-comic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aman Yadav - Issue #01",
  description: "Problem-solving software engineer building scalable web products. Read Issue #01 of Aman's portfolio.",
  keywords: ["software engineer", "web developer", "React", "TypeScript", "Next.js", "full-stack developer", "comic portfolio"],
  authors: [{ name: "Aman Yadav" }],
  openGraph: {
    title: "Aman Yadav - Issue #01",
    description: "The origin story of a problem-solving software engineer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${comicNeue.variable}`}>
      <body className="antialiased font-body bg-paper text-ink selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
