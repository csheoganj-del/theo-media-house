import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

export default function ViewfinderFocus() {
  const location = useLocation();
  const [showHUD, setShowHUD] = useState(true);

  useEffect(() => {
    // Reset HUD visibility on route change
    setShowHUD(true);
    
    // 1. Select main content container to apply focus physics
    const mainContent = document.querySelector('main');
    if (mainContent) {
      gsap.killTweensOf(mainContent);
      // Pre-set main content to heavily blurred state before shutter curtain opens
      gsap.set(mainContent, { filter: 'blur(25px) brightness(1.1) contrast(0.9)' });
    }

    // Kill any active tweens on the shutter elements
    gsap.killTweensOf('.shutter-curtain-top');
    gsap.killTweensOf('.shutter-curtain-bottom');
    gsap.killTweensOf('.shutter-flash');
    gsap.killTweensOf('.aperture-hole-group');
    gsap.killTweensOf('.aperture-blades-group');
    gsap.killTweensOf('.viewfinder-brackets');
    gsap.killTweensOf('.viewfinder-hud');

    // 2. Set initial state of shutter curtains (closed) & aperture iris (contracted)
    gsap.set('.shutter-curtain-top', { translateY: '0%' });
    gsap.set('.shutter-curtain-bottom', { translateY: '0%' });
    gsap.set(['.aperture-hole-group', '.aperture-blades-group'], { scale: 0.03, rotate: -120 });
    gsap.set('.shutter-flash', { opacity: 1 });

    const tl = gsap.timeline();

    // 3. Shutter release click: Flash fades, and curtains snap open with spring physics
    tl.to('.shutter-flash', {
      opacity: 0,
      duration: 0.25,
      ease: 'power2.out'
    });

    // Curtains slide open with a high inertia overshoot (back.out)
    tl.to('.shutter-curtain-top', {
      translateY: '-100%',
      duration: 0.65,
      ease: 'back.out(1.8)'
    }, '<');

    tl.to('.shutter-curtain-bottom', {
      translateY: '100%',
      duration: 0.65,
      ease: 'back.out(1.8)'
    }, '<');

    // Aperture iris blades rotate and bounce open using spring dynamics (elastic.out)
    tl.to(['.aperture-hole-group', '.aperture-blades-group'], {
      scale: 3.5,
      rotate: 180,
      duration: 0.9,
      ease: 'elastic.out(1.1, 0.6)'
    }, '<');

    // 4. Autofocus lens element hunting wobble (physics-based focus seek)
    if (mainContent) {
      const focusTl = gsap.timeline();
      
      // Focus element motor seeks near focus point
      focusTl.to(mainContent, {
        filter: 'blur(3px) brightness(1.02) contrast(1)',
        duration: 0.4,
        ease: 'power3.out',
        delay: 0.15
      });
      
      // Elements overshoot due to physical motor weight (blur splits/wobbles back out)
      focusTl.to(mainContent, {
        filter: 'blur(9px) brightness(1.05) contrast(0.95)',
        duration: 0.22,
        ease: 'sine.inOut'
      });
      
      // Physical autofocus lens locks sharp (snaps home with back.out spring dynamics)
      focusTl.to(mainContent, {
        filter: 'blur(0px) brightness(1) contrast(1)',
        duration: 0.45,
        ease: 'back.out(1.3)'
      });
    }

    // 5. Viewfinder autofocus brackets lock sequence (spring snap)
    gsap.fromTo('.viewfinder-brackets',
      { scale: 1.6 },
      { scale: 1, duration: 0.8, delay: 0.25, ease: 'elastic.out(1.2, 0.45)' }
    );

    // Brackets status indicator lights (Red -> Gold -> Autofocus Lock Green)
    const bracketColors = gsap.timeline();
    bracketColors.set('.viewfinder-brackets', { borderColor: '#ff3b30' });
    bracketColors.to('.viewfinder-brackets', {
      borderColor: '#c9a84c',
      duration: 0.35,
      delay: 0.25
    });
    bracketColors.to('.viewfinder-brackets', {
      borderColor: '#25d366',
      duration: 0.2
    });

    // 6. Viewfinder HUD fades away after focus is secured
    gsap.fromTo('.viewfinder-hud',
      { opacity: 0.85 },
      { 
        opacity: 0, 
        duration: 0.5, 
        delay: 1.25, 
        ease: 'power2.inOut', 
        onComplete: () => setShowHUD(false) 
      }
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
      border: '20px solid rgba(0,0,0,0.45)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '2rem',
      fontFamily: 'monospace',
      fontSize: '0.75rem',
      color: '#fff',
      letterSpacing: '0.1em'
    }}>
      {/* Mechanical Shutter Curtains (Top & Bottom halves) */}
      <div className="shutter-curtain-top" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '50vh',
        backgroundColor: '#0a0a0a',
        zIndex: 9996,
        pointerEvents: 'none',
        transform: 'translateY(-100%)',
        borderBottom: '1px solid rgba(201, 168, 76, 0.25)'
      }} />
      <div className="shutter-curtain-bottom" style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100vw',
        height: '50vh',
        backgroundColor: '#0a0a0a',
        zIndex: 9996,
        pointerEvents: 'none',
        transform: 'translateY(100%)',
        borderTop: '1px solid rgba(201, 168, 76, 0.25)'
      }} />

      {/* Shutter Exposure Flash Overlay */}
      <div className="shutter-flash" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#ffffff',
        zIndex: 9998,
        pointerEvents: 'none',
        opacity: 0
      }} />

      {/* Rotating Lens Aperture Iris Mask */}
      <svg className="shutter-aperture" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9997
      }} viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <mask id="aperture-mask">
            {/* White parts reveal the overlay, black parts cut holes to reveal the page */}
            <rect x="0" y="0" width="100" height="100" fill="white" />
            <g className="aperture-hole-group" style={{ transformOrigin: '50px 50px' }}>
              {/* Octagonal aperture hole */}
              <polygon points="90,50 78.3,78.3 50,90 21.7,78.3 10,50 21.7,21.7 50,10 78.3,21.7" fill="black" />
            </g>
          </mask>
        </defs>
        
        {/* Shutter overlay that gets masked */}
        <rect x="0" y="0" width="100" height="100" fill="#0a0a0a" mask="url(#aperture-mask)" />
        
        {/* Aperture blades outline group representing mechanical dividers */}
        <g className="aperture-blades-group" style={{ transformOrigin: '50px 50px' }}>
          <line x1="90" y1="50" x2="150" y2="70" stroke="var(--accent-gold)" strokeWidth="0.25" opacity="0.45" />
          <line x1="78.3" y1="78.3" x2="120" y2="130" stroke="var(--accent-gold)" strokeWidth="0.25" opacity="0.45" />
          <line x1="50" y1="90" x2="70" y2="150" stroke="var(--accent-gold)" strokeWidth="0.25" opacity="0.45" />
          <line x1="21.7" y1="78.3" x2="-20" y2="120" stroke="var(--accent-gold)" strokeWidth="0.25" opacity="0.45" />
          <line x1="10" y1="50" x2="-50" y2="30" stroke="var(--accent-gold)" strokeWidth="0.25" opacity="0.45" />
          <line x1="21.7" y1="21.7" x2="-30" y2="-30" stroke="var(--accent-gold)" strokeWidth="0.25" opacity="0.45" />
          <line x1="50" y1="10" x2="30" y2="-50" stroke="var(--accent-gold)" strokeWidth="0.25" opacity="0.45" />
          <line x1="78.3" y1="21.7" x2="130" y2="-20" stroke="var(--accent-gold)" strokeWidth="0.25" opacity="0.45" />
        </g>
      </svg>

      {/* Viewfinder Rule-of-Thirds Grid Guide */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr',
        opacity: 0.05
      }}>
        <div style={{ borderRight: '1px dashed #fff', borderBottom: '1px dashed #fff' }} />
        <div style={{ borderRight: '1px dashed #fff', borderBottom: '1px dashed #fff' }} />
        <div style={{ borderBottom: '1px dashed #fff' }} />
        <div style={{ borderRight: '1px dashed #fff', borderBottom: '1px dashed #fff' }} />
        <div style={{ borderRight: '1px dashed #fff', borderBottom: '1px dashed #fff' }} />
        <div style={{ borderBottom: '1px dashed #fff' }} />
        <div style={{ borderRight: '1px dashed #fff' }} />
        <div style={{ borderRight: '1px dashed #fff' }} />
        <div />
      </div>

      {/* Top Bar Indicators */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
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
        justifyContent: 'center',
        zIndex: 10
      }}>
        {/* Viewfinder Autofocus square brackets */}
        <div className="viewfinder-brackets" style={{
          width: '80px',
          height: '80px',
          border: '2px solid #ff3b30',
          borderRadius: '4px',
          position: 'relative',
          transition: 'border-color 0.2s'
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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
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
