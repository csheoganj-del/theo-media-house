import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Film, Award, Map, Sparkles, Compass, CheckCircle } from 'lucide-react';
import gsap from 'gsap';

export default function Weddings() {
  useEffect(() => {
    gsap.fromTo('.wedding-hero-anim', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.4, stagger: 0.25, ease: 'power4.out' }
    );
  }, []);

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', overflow: 'hidden' }}>
      
      {/* 1. Curved Hero Section */}
      <section 
        className="hero-curved-bottom"
        style={{
          position: 'relative',
          height: '80vh',
          width: '100%',
          backgroundImage: 'url("/images/wedding_hero_bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          paddingTop: '80px'
        }}
      >
        {/* Cinematic dark overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.9) 100%)',
          zIndex: 1
        }} />

        <div style={{ position: 'relative', zIndex: 2, padding: '0 2rem', maxWidth: '950px' }}>
          <span 
            className="wedding-hero-anim" 
            style={{ 
              fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.35em', 
              color: '#d4c9b9',
              marginBottom: '1rem',
              display: 'block',
              fontWeight: 400
            }}
          >
            Cinematic Wedding Films
          </span>
          <h1 
            className="wedding-hero-anim packages-editorial-font"
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
              fontWeight: 300,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              lineHeight: 1.15,
              color: '#fff',
              marginBottom: '2rem'
            }}
          >
            Your wedding day will never happen again.<br />
            <span style={{ color: 'var(--accent-gold)' }}>Make sure you feel it forever.</span>
          </h1>
          <p 
            className="wedding-hero-anim"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
              lineHeight: 1.8,
              color: '#d4d3c9',
              maxWidth: '650px',
              margin: '0 auto 3rem auto',
              fontWeight: 300
            }}
          >
            We believe your wedding film should feel like a piece of authentic cinema—no forced posture, no intrusive direction. Just raw, honest, and timeless storytelling.
          </p>
          <div className="wedding-hero-anim" style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-gold" style={{ letterSpacing: '0.12em' }}>Request Wedding Quote</Link>
            <Link to="/portfolio" className="btn-outline-white" style={{ letterSpacing: '0.12em' }}>View Gallery</Link>
          </div>
        </div>
      </section>

      {/* 2. Narrative / Philosophy Section (Olive Background) */}
      <section className="olive-pricing-section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            
            <div>
              <span className="olive-title-pre">The Approach</span>
              <h2 
                className="packages-editorial-font"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 300,
                  color: 'var(--accent-gold)',
                  lineHeight: 1.15,
                  marginBottom: '2rem'
                }}
              >
                A feature film, not just a highlight reel.
              </h2>
              <p style={{ color: '#d4d3c9', fontSize: '0.88rem', lineHeight: '1.8', marginBottom: '1.5rem', fontWeight: 300 }}>
                We do not just document events; we capture the feeling. We believe your wedding film should capture the quiet glances, the atmospheric lighting, the laughter, and the subtle interactions you didn't even notice were happening.
              </p>
              <p style={{ color: '#d4d3c9', fontSize: '0.88rem', lineHeight: '1.8', marginBottom: '3rem', fontWeight: 300 }}>
                By blending editorial fashion portraiture with authentic documentary filmmaking, we construct a custom piece of cinematic legacy that your family will treasure for generations.
              </p>
              <Link to="/packages" className="tall-card-btn" style={{ padding: '0.9rem 2.2rem', display: 'inline-block', maxWidth: 'none', width: 'auto' }}>
                View Pricing Plans
              </Link>
            </div>

            {/* Inclusions Detail Box */}
            <div 
              style={{ 
                backgroundColor: '#1b1a12', 
                padding: '3.5rem 3rem', 
                borderRadius: '4px', 
                border: '1px solid rgba(255,255,255,0.03)',
                boxShadow: '0 20px 45px rgba(0,0,0,0.5)'
              }}
            >
              <h3 className="packages-editorial-font" style={{ fontSize: '1.5rem', marginBottom: '2rem', letterSpacing: '0.05em', color: 'var(--accent-gold)', textTransform: 'uppercase', fontWeight: 300 }}>What's Included</h3>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.2rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Feature-Length Narrative Editing</strong>
                    <p style={{ color: '#d4d3c9', fontSize: '0.8rem', lineHeight: '1.5' }}>A fully realized 5-8 minute cinematic feature film containing detailed audio mixing and sound design.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.2rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Timeless Documentary Portraiture</strong>
                    <p style={{ color: '#d4d3c9', fontSize: '0.8rem', lineHeight: '1.5' }}>500+ fully-edited, high-resolution digital images delivered in a premium private online gallery.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.2rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Breathtaking Aerial Coverage</strong>
                    <p style={{ color: '#d4d3c9', fontSize: '0.8rem', lineHeight: '1.5' }}>Full professional drone coverage of your wedding venue, landscape, and outdoor events (weather permitting).</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.2rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Vertical Social Cuts</strong>
                    <p style={{ color: '#d4d3c9', fontSize: '0.8rem', lineHeight: '1.5' }}>High-impact 60-second vertical reels optimized perfectly for Instagram and TikTok sharing.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Availability Callout Section */}
      <section className="section text-center" style={{ padding: '10rem 0', backgroundColor: '#000', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <span 
            style={{ 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.3em', 
              color: 'var(--accent-gold)',
              marginBottom: '1.5rem',
              display: 'block'
            }}
          >
            Exclusive Availability
          </span>
          <h2 
            className="packages-editorial-font" 
            style={{ 
              color: '#fff', 
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.06em', 
              fontWeight: 300, 
              maxWidth: '800px', 
              margin: '0 auto 2rem auto', 
              lineHeight: 1.15 
            }}
          >
            We only document 25 weddings per year globally.
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 3.5rem auto', color: '#a0a0a0', fontSize: '0.92rem', fontWeight: 300, lineHeight: '1.8' }}>
            This guarantee ensures that we can dedicate our complete creative focus, time, and premium post-production attention to your cinematic feature film.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-gold" style={{ letterSpacing: '0.12em' }}>Check Date Availability</Link>
            <Link to="/packages" className="btn-outline-white" style={{ letterSpacing: '0.12em' }}>Wedding Pricing Tiers</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
