import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

export default function PageTransitionManager({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const svgPathRef = useRef(null);
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    if (location.pathname !== prevPathname.current) {
      prevPathname.current = location.pathname;
      setIsTransitioning(true);

      // Create falling curtain morph timeline
      const tl = gsap.timeline({
        onComplete: () => {
          // Swap route content underneath the closed curtain
          setDisplayLocation(location);
          
          // Scroll page to top to ensure clean page layout on mount
          window.scrollTo(0, 0);

          // Create lifting curtain morph timeline
          const tlOut = gsap.timeline({
            onComplete: () => {
              setIsTransitioning(false);
            }
          });

          // Morph: Pull up from the center (forming an upward arch)
          tlOut.to(svgPathRef.current, {
            attr: { d: "M 0,0 L 100,0 L 100,80 Q 50,30 0,80 Z" },
            duration: 0.45,
            ease: "power2.out"
          })
          // Morph: Flatten out at the very top (completely retracted)
          .to(svgPathRef.current, {
            attr: { d: "M 0,0 L 100,0 L 100,0 Q 50,0 0,0 Z" },
            duration: 0.35,
            ease: "power2.inOut"
          });
        }
      });

      // Morph: Droop down in the center (organic fabric weight fall)
      tl.to(svgPathRef.current, {
        attr: { d: "M 0,0 L 100,0 L 100,80 Q 50,120 0,80 Z" },
        duration: 0.5,
        ease: "power2.in"
      })
      // Morph: Sides catch up to fully cover screen flat
      .to(svgPathRef.current, {
        attr: { d: "M 0,0 L 100,0 L 100,100 Q 50,100 0,100 Z" },
        duration: 0.25,
        ease: "power1.out"
      });
    }
  }, [location]);

  // Map over children (typically <Routes>) and inject the displayLocation
  const childrenWithLocation = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { location: displayLocation });
    }
    return child;
  });

  return (
    <>
      <div className={`curtain-overlay-container ${isTransitioning ? 'active' : ''}`}>
        <svg className="curtain-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="curtain-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1c1c1c" />
              <stop offset="40%" stopColor="#0d0d0d" />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>
          </defs>
          <path 
            ref={svgPathRef} 
            className="curtain-path" 
            fill="url(#curtain-grad)" 
            d="M 0,0 L 100,0 L 100,0 Q 50,0 0,0 Z" 
          />
        </svg>
      </div>
      {childrenWithLocation}
    </>
  );
}
