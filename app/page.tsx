import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/homepage/Herosection";
import Bio from "@/components/homepage/BioSection";
import Certs from "@/components/homepage/Certs";


export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Bio />
    <Certs />
    </>
    
  );
}
