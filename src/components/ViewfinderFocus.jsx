import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

export default function ViewfinderFocus() {
  const location = useLocation();
  const [showHUD, setShowHUD] = useState(true);

  useEffect(() => {
    // Reset HUD state on path change
    setShowHUD(true);
    
    // Set initial page blur/exposure state on the root or main layout container
    const mainContent = document.querySelector('main');
    if (mainContent) {
      gsap.killTweensOf(mainContent);
      gsap.set(mainContent, { filter: 'blur(20px) contrast(0.85) brightness(1.2)' });
    }

    // GSAP Timeline for camera focus simulation
    const tl = gsap.timeline({
      onComplete: () => {
        // Keep a very subtle grid watermark or fade out completely
      }
    });

    // 1. Shutter flash/exposure simulation on enter
    tl.to(mainContent, {
      filter: 'blur(8px) contrast(1) brightness(1)',
      duration: 0.4,
      ease: 'power2.out'
    });

    // 2. Autofocus seeking wobble
    tl.to(mainContent, {
      filter: 'blur(10px)',
      duration: 0.3,
      ease: 'sine.inOut'
    });

    // 3. Final sharp focus snap (camera autofocus lock)
    tl.to(mainContent, {
      filter: 'blur(0px)',
      duration: 0.5,
      ease: 'back.out(1.2)'
    });

    // Animate the viewfinder bracket elements
    gsap.killTweensOf('.viewfinder-hud');
    gsap.killTweensOf('.viewfinder-brackets');

    // Brackets focus lock indicator color/scale animation
    gsap.fromTo('.viewfinder-brackets', 
      { scale: 1.3, borderColor: '#c9a84c' }, 
      { scale: 1, borderColor: '#25d366', duration: 0.9, delay: 0.2, ease: 'power4.out' }
    );

    // Fade out HUD after focus is achieved
    gsap.fromTo('.viewfinder-hud',
      { opacity: 0.8 },
      { opacity: 0, duration: 0.6, delay: 1.2, ease: 'power2.inOut', onComplete: () => setShowHUD(false) }
    );

  }, [location.pathname]);

  if (!showHUD) return null;

  return (
    <div className="viewfinder-hud" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9999,
      pointerEvents: 'none',
      border: '20px solid rgba(0,0,0,0.4)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '2rem',
      fontFamily: 'monospace',
      fontSize: '0.75rem',
      color: '#fff',
      letterSpacing: '0.1em'
    }}>
      {/* Top Bar Indicators */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#ff3b30',
            animation: 'blink 1s infinite'
          }} />
          <span style={{ fontWeight: 'bold' }}>REC</span>
        </div>
        <div>
          <span>1/60s &bull; F2.8 &bull; ISO 800</span>
        </div>
      </div>

      {/* Center Autofocus Brackets */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Viewfinder Autofocus square brackets */}
        <div className="viewfinder-brackets" style={{
          width: '80px',
          height: '80px',
          border: '2px solid #c9a84c',
          borderRadius: '4px',
          position: 'relative',
          transition: 'border-color 0.3s'
        }}>
          {/* Central crosshair */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '6px',
            height: '6px',
            border: '1px solid currentColor',
            borderRadius: '50%'
          }} />
        </div>
      </div>

      {/* Bottom Bar Indicators */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span>4K RAW 60FPS</span>
        </div>
        <div>
          <span>CH1 [==|==] CH2</span>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
