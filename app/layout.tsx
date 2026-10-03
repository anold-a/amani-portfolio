import type { Metadata } from "next";
import {Space_Grotesk, Inter, JetBrains_Mono,Caveat , Manrope} from "next/font/google";
import "./globals.css";


const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });   
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });               
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

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
      className={`${grotesk.variable} ${inter.variable} ${jetbrains.variable} ${caveat.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
