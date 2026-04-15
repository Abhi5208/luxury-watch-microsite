import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Atelier Noir | Luxury Watch Microsite",
    template: "%s | Atelier Noir",
  },
  description:
    "A premium luxury watch microsite with a scroll-driven product story, craftsmanship details, and private preview contact flow.",
  applicationName: "Atelier Noir",
  authors: [{ name: "Atelier Noir" }],
  keywords: [
    "luxury watch",
    "watch microsite",
    "premium product story",
    "craftsmanship",
    "mechanical watch",
  ],
  openGraph: {
    title: "Atelier Noir | Luxury Watch Microsite",
    description:
      "A premium luxury watch microsite with a scroll-driven product story and restrained editorial design.",
    siteName: "Atelier Noir",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Atelier Noir | Luxury Watch Microsite",
    description:
      "A premium luxury watch microsite with a scroll-driven product story and restrained editorial design.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
