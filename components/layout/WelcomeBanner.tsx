
"use client"

import { useState,useEffect } from "react";
import confetti from 'canvas-confetti';
import Typewriter from "./Typewriter";
const SEEN_KEY = "welcome-banner-seen";


export default function WelcomeBanner(){

  const [text,setText] = useState("Detecting a visitor...");
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible,setIsVisible] = useState(false);

  useEffect(() =>{

    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      
    }
    if (alreadySeen) return;
    setIsVisible(true);
    const textTimer = setTimeout(() => {
      setIsLoading(false);
         setText("Thank you for visiting my portifolio");
         confetti({
      particleCount: 150,     
      spread: 80,             
      origin: { x: 0.5, y: 0.5 },
      startVelocity: 45,      
      gravity: 1.2,           
      scalar: 1.2             
    });
    }, 3000);

    const hideTimer = setTimeout(() => {
      setIsVisible(false); 
      try {
        sessionStorage.setItem(SEEN_KEY, "1"); 
      } catch {
        
      }
    }, 7500);

   return () =>{
      clearTimeout(textTimer)
      clearTimeout(hideTimer);
   } ;
  },[])

  if(!isVisible) return null;

  return(
    <div className="fixed max-w-2xl mx-auto top-20 bottom-30 rounded-lg inset-0 flex flex-col items-center justify-center  text-white z-50 gap-4 bg-white/40 backdrop-blur-md shadow-2xl border border-white/20">

      {isLoading ? (
        <div className="flex flex-col items-center gap-3">
          <svg 
            className="animate-spin h-10 w-10 text-blue-500" 
            xmlns="http://w3.org" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            ></circle>
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span className="text-brand text-sm tracking-wide animate-pulse">
            {text}
          </span>
        </div>
      ) : (
        
        <h1 className="text-[clamp(1.5rem,5vw,3rem)] flex text-center justify-center font-bold tracking-tight animate-fade-in text-brand">
          <Typewriter text={text} speed={60} />
        </h1>
      )}
    </div>
  )

}