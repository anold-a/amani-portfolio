import type { Metadata } from "next";
import {  Outfit, Ubuntu } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "Arnold Amani | Software Developer",
  description: "Entails >: projects, experience and contact.",
  openGraph: {
    title: "Arnold Amani |  Software Developer",
    description: "Entails >: projects, experience and contact.",
    type: "website",
  },
};

export default function RootLayout({ children }:{children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${ubuntu.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
