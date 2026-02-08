import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#F8F7F4",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://amanypolio.netlify.app/'), // Placeholder base URL for relative images
  title: {
    template: "%s | Aman Yadav",
    default: "Aman Yadav - Issue #01: The Origin Story",
  },
  description: "Problem-solving software engineer building scalable web products. Read Issue #01 of Aman's interactive comic-style portfolio.",
  keywords: ["Software Engineer", "React", "Next.js", "TypeScript", "Frontend Developer", "Portfolio", "Creative Developer", "Comic Theme", "Full Stack"],
  authors: [{ name: "Aman Yadav", url: "https://www.linkedin.com/in/aman-yadav-9144021a3/" }],
  creator: "Aman Yadav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Aman Yadav - Issue #01",
    description: "The origin story of a problem-solving software engineer. Interactive comic portfolio.",
    siteName: "Aman Yadav Portfolio",
    images: [
      {
        url: "/images/projects/profile.png",
        width: 1200,
        height: 630,
        alt: "Aman Yadav - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Yadav - Software Engineer",
    description: "The origin story of a problem-solving software engineer. Interactive comic portfolio.",
    creator: "@Amanyad57536099",
    images: ["/images/projects/profile.png"],
  },
  icons: {
    icon: "/images/favicon/favicon.ico",
    shortcut: "/images/favicon/favicon.ico",
    apple: "/images/favicon/apple-touch-icon.png",
  },
  manifest: '/images/favicon/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
