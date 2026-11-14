import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/homepage/Herosection";
import Bio from "@/components/homepage/BioSection";
import Experience from "@/components/homepage/Experience";
import Builds from "@/components/homepage/Builds";
import Projects from "@/components/homepage/Projects";
import Contact from "@/components/homepage/Contact";
import { Analytics } from "@vercel/analytics/next"
import Footer from "@/components/homepage/Footer";
import Cursor from "@/components/homepage/Cursor";
import Blogs from "@/components/homepage/Blogs";



export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Bio />
    <Experience />
    <Builds />
    <Projects />
    <Blogs />
    <Contact />
    <Footer />
    <Cursor />
    <Analytics />
    </>
    
  );
}
