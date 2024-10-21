'use client'; // This line ensures the component is client-rendered

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/link
import { Spotlight } from "./ui/Spotlight";
import { RightDock } from "./ui/right-dock";
import { LeftDock } from "./ui/left-dock";
import { SparklesCore } from "./ui/sparkles";
import { TypewriterEffect } from "./ui/typewriter-effect"; // Using TypewriterEffectSmooth

const Hero = () => {
  const [showRightDock, setShowRightDock] = useState(false); // Right dock state
  const [showLeftDock, setShowLeftDock] = useState(false); // Left dock state
  const [showButton, setShowButton] = useState(false);

  const words = [
    {
      text: "Your",
      className: "text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200",
    },
    {
      text: "Guide",
      className: "text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200",
    },
    {
      text: "Through",
      className: "text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200",
    },
    {
      text: "Data",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Labyrinth",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const rdockItems = [
    {
      title: "Github",
      icon: (
        <Image 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" 
          alt="Github" 
          width={24} 
          height={24} 
          className="w-6 h-6" 
        />
      ),
      href: "https://github.com/saadsalmanakram",
      target: "_blank"
    },
    {
      title: "Linkedin",
      icon: (
        <Image 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" 
          alt="Linkedin" 
          width={24} 
          height={24} 
          className="w-6 h-6" 
        />
      ),
      href: "https://www.linkedin.com/in/saadsalmanakram/",
      target: "_blank"
    },
  ];

  const ldockItems = [
    {
      title: "Home",
      icon: (
        <Image 
          src="https://www.svgrepo.com/show/527754/home-1.svg" 
          alt="Home" 
          width={24} 
          height={24} 
          className="w-6 h-6" 
        />
      ),
      href: "/", // Adjusted for home link
    },
    {
      title: "Projects",
      icon: (
        <Image 
          src="https://www.svgrepo.com/show/525813/code-square.svg" 
          alt="Projects" 
          width={24} 
          height={24} 
          className="w-6 h-6" 
        />
      ),
      href: "/projects", // Adjusted for projects link
    },
    {
      title: "Publications",
      icon: (
        <Image 
          src="https://www.svgrepo.com/show/525453/notes.svg" 
          alt="Publications" 
          width={24} 
          height={24} 
          className="w-6 h-6" 
        />
      ),
      href: "/publications",
      target: "_blank"
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRightDock(true);
      setShowLeftDock(true);
      setShowButton(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative pb-10 pt-5 h-screen"> {/* Adjusted padding values */}
      {/* Spotlight Backgrounds */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-10 left-30 h-[80vh] w-[50vw]" fill="blue" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="red" />
      </div>

      {/* Add Sparkles Effect */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticleshero"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Typewriter Effect */}
      <div className="flex flex-col items-center justify-center h-[40rem]">
        <p className={`text-transparent bg-clip-text bg-gradient-to-r from-white via-silver to-white text-4xl sm:text-6xl transition-all transform duration-1000 ease-in-out delay-500 ${showRightDock ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'} sparkle-effect`}>
          <b>Hi, I am Saad</b>
        </p>
        <TypewriterEffect words={words} /> {/* Pass words as a prop */}

        {/* Button Code */}
        <button className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-4 transform transition-opacity duration-1000 delay-500 ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          Discover More!
        </button>
      </div>

      <div className="flex items-center justify-center h-[35rem] w-full">
        {/* Right Floating Dock */}
        <div className={`absolute top-4 right-1 transition-opacity transform duration-1000 ease-in-out ${showRightDock ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <RightDock items={rdockItems} />
        </div>

        {/* Top Left Floating Dock */}
        <div className={`absolute top-4 left-1 transition-opacity transform duration-1000 ease-in-out ${showLeftDock ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <LeftDock items={ldockItems.map(item => ({
            ...item,
            // Use Link component for navigation
            icon: (
              <Link href={item.href}>
                {item.icon}
              </Link>
            ),
          }))} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
