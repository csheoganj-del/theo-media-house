import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import gsap from 'gsap';

export default function PageTransitionManager() {
  const navigate = useNavigate();
  const location = useLocation();
  const flashRef = useRef(null);

  useEffect(() => {
    const handleLinkClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      // Ignore modifications
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Check if external or blank
      if (href.startsWith('http') && !href.startsWith(window.location.origin)) return;
      if (href.startsWith('#')) return;
      if (href.startsWith('mailto:') || href.startsWith('tel:')) return;
      if (anchor.getAttribute('target') === '_blank') return;
      if (anchor.hasAttribute('download')) return;

      const targetPath = anchor.pathname;
      
      // If it's the same path, scroll to top smoothly
      if (targetPath === window.location.pathname) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      e.preventDefault();

      // Trigger the Shutter Flash Transition
      playShutterTransition(targetPath);
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, [location.pathname]);

  const playShutterTransition = (targetPath) => {
    const flash = flashRef.current;
    if (!flash) return;

    // Timeline for the shutter exposure flash
    const tl = gsap.timeline({
      onComplete: () => {
        window.scrollTo(0, 0);
      }
    });

    // 1. Shutter Flash In (Warm gold & white exposure overlay)
    tl.to(flash, {
      opacity: 0.95,
      duration: 0.22,
      ease: 'power2.inOut',
      onComplete: () => {
        // Change route at the peak of the exposure flash
        navigate(targetPath);
      }
    });

    // 2. Shutter Flash Out
    tl.to(flash, {
      opacity: 0,
      duration: 0.35,
      ease: 'power2.out'
    });
  };

  useEffect(() => {
    // Reset scroll just in case
    window.scrollTo(0, 0);

    const mainContent = document.querySelector('main');
    if (!mainContent) return;

    // Kill any active content animation
    gsap.killTweensOf(mainContent);

    // Inertial slide-up and fade-in for the main content
    gsap.fromTo(mainContent, 
      { 
        y: 40, 
        opacity: 0 
      }, 
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: 'power3.out',
        clearProps: 'transform' // clean up GSAP styles after animation
      }
    );

    // Stagger all page entrance elements on the new page
    const pageFadeClasses = [
      '.hero-title-line', '.hero-fade-in',
      '.wedding-fade-in', '.maternity-fade-in',
      '.hotels-fade-in', '.packages-fade-in',
      '.about-fade-in', '.contact-fade-in'
    ];

    pageFadeClasses.forEach((cls) => {
      const elements = document.querySelectorAll(cls);
      if (elements.length > 0) {
        gsap.killTweensOf(elements);
        gsap.fromTo(elements,
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.9, 
            stagger: 0.08, 
            ease: 'power3.out',
            delay: 0.12 // slight delay so it starts revealing as the flash dissolves
          }
        );
      }
    });

  }, [location.pathname]);

  return (
    <div 
      ref={flashRef}
      className="shutter-flash-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.98) 0%, rgba(245, 215, 130, 0.95) 60%, rgba(201, 168, 76, 0.98) 100%)',
        zIndex: 99999,
        pointerEvents: 'none',
        opacity: 0,
        mixBlendMode: 'screen', // luxury screen blending
        willChange: 'opacity'
      }}
    />
  );
}
