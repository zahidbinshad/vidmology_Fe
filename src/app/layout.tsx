import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

/** Platform-wide UI font (design system) */
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Vidmology — Training that improves performance",
  description:
    "Data-backed learning programs, realistic practice scenarios, and analytics that prove impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-100 ${outfit.variable}`}>
      <body className={`${outfit.className} min-h-100 d-flex flex-column`}>
        {children}
      </body>
    </html>
  );
}
