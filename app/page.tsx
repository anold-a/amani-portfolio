import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/homepage/Herosection";
import Bio from "@/components/homepage/BioSection";
import Certs from "@/components/homepage/Certs";
import Experience from "@/components/homepage/Experience";
import Refs from "@/components/homepage/Refs";
import Projects from "@/components/homepage/Projects";


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
    </>
    
  );
}
