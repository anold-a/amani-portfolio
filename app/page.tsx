import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/homepage/Herosection";
import Bio from "@/components/homepage/BioSection";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Bio />
    </>
    
  );
}
