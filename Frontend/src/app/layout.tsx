import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "InsurTech-Egypt — Empowering the Future of Insurance with Smart, Scalable Digital Solutions",
    template: "%s — InsurTech-Egypt",
  },
  description:
    "Smarter insurance, powered by experience and driven by technology. Digital transformation, core systems, AI, data and integration solutions for insurers.",
  keywords: [
    "Insurance Technology",
    "InsurTech-Egypt",
    "Core Insurance System",
    "Digital Transformation in Insurance",
    "AI in Insurance",
    "Legacy Modernization",
  ],
  metadataBase: new URL("https://insurtech-egypt.com"),
  openGraph: {
    title:
      "InsurTech-Egypt — Empowering the Future of Insurance with Smart, Scalable Digital Solutions",
    description:
      "From legacy to leadership — your digital transformation partner across the insurance value chain.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-white antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-brand-700 focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="pt-16 sm:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
