
"use client"

import { useState,useEffect } from "react";

export default function WelcomeBanner(){

  const [text,setText] = useState("Detecting a visitor...");
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible,setIsVisible] = useState(true);

  useEffect(() =>{

    const textTimer = setTimeout(() => {
      setIsLoading(false);
         setText("Thank you for visiting my portifolio")
    }, 3000);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 6000);

   return () =>{
      clearTimeout(textTimer)
      clearTimeout(hideTimer);
   } ;
  },[])

  if(!isVisible) return null;

  return(
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-zinc-900 text-white z-50 gap-4">

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
          <span className="text-zinc-400 text-sm tracking-wide animate-pulse">
            {text}
          </span>
        </div>
      ) : (
        
        <h1 className="text-[clamp(1.5rem,5vw,3rem)] font-bold tracking-tight animate-fade-in text-brand">
          {text}
        </h1>
      )}
    </div>
  )

}