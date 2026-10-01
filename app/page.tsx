import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/homepage/Herosection";
import Bio from "@/components/homepage/BioSection";
import Certs from "@/components/homepage/Certs";
import Experience from "@/components/homepage/Experience";
import Refs from "@/components/homepage/Refs";
import Projects from "@/components/homepage/Projects";
import Contact from "@/components/homepage/Contact";
import Footer from "@/components/homepage/Footer";
import Cursor from "@/components/homepage/Cursor";
import Blogs from "@/components/homepage/Blogs";
import WelcomeBanner from "@/components/layout/WelcomeBanner";


export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Bio />
    <Certs />
    <Experience />
    <Refs />
    <Projects />
    <Blogs />
    <Contact />
    <Footer />
    <Cursor />
    <WelcomeBanner />
    </>
    
  );
}
