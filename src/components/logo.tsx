"use client";
import React, { useState, useEffect } from "react";
import cn from "classnames";
import { Logo1, Logo2, Logo3 } from "@/components/logoIllustrations";

interface LogoProps {
  className?: string;
}

// Store the component types, not instantiated JSX elements.
const svgComponents = [Logo1, Logo2, Logo3];

const Logo = ({ className }: LogoProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isHovering) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % svgComponents.length);
      }, 100);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isHovering]);

  // Correctly instantiate the SVG component based on the current index.
  const CurrentSvgComponent = svgComponents[currentIndex];

  return (
    <div
      className={cn("logo", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Render the current SVG component and apply additional classes as needed */}
      <CurrentSvgComponent className="h-7" />
    </div>
  );
};

export default Logo;
