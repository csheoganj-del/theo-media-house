import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Sparkles, CheckCircle } from 'lucide-react';
import gsap from 'gsap';

export default function Maternity() {
  useEffect(() => {
    gsap.fromTo('.maternity-hero-anim', 
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
          backgroundImage: 'url("/images/maternity_hero_bg.png")',
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
            className="maternity-hero-anim" 
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
            Editorial Maternity Portraits
          </span>
          <h1 
            className="maternity-hero-anim packages-editorial-font"
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
            The most powerful story<br />
            <span style={{ color: 'var(--accent-gold)' }}>a body has ever told.</span>
          </h1>
          <p 
            className="maternity-hero-anim"
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
            Pregnancy is not just a phase to document at the end. It is a profound, physical transformation that deserves to be captured with artistic, quiet power.
          </p>
          <div className="maternity-hero-anim" style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-gold" style={{ letterSpacing: '0.12em' }}>Book Maternity Session</Link>
            <Link to="/portfolio" className="btn-outline-white" style={{ letterSpacing: '0.12em' }}>View Silhouette Art</Link>
          </div>
        </div>
      </section>

      {/* 2. Narrative / Philosophy Section (Olive Background) */}
      <section className="olive-pricing-section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            
            <div>
              <span className="olive-title-pre">The Artistic Vision</span>
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
                Silhouette, shadow, and soft light.
              </h2>
              <p style={{ color: '#d4d3c9', fontSize: '0.88rem', lineHeight: '1.8', marginBottom: '1.5rem', fontWeight: 300 }}>
                These images are not for social media feeds. They are not designed to match transient internet trends. They are created solely for you, your child, and the day you want to remember exactly what this quiet power felt like.
              </p>
              <p style={{ color: '#d4d3c9', fontSize: '0.88rem', lineHeight: '1.8', marginBottom: '3rem', fontWeight: 300 }}>
                We avoid stiff studio set-ups and standard forced portraits. We play with shadows, delicate silhouette structures, and editorial compositions that capture the emotional magnitude of life creation.
              </p>
              <Link to="/packages" className="tall-card-btn" style={{ padding: '0.9rem 2.2rem', display: 'inline-block', maxWidth: 'none', width: 'auto' }}>
                Maternity Investment Guide
              </Link>
            </div>

            {/* Session details card */}
            <div 
              style={{ 
                backgroundColor: '#1b1a12', 
                padding: '3.5rem 3rem', 
                borderRadius: '4px', 
                border: '1px solid rgba(255,255,255,0.03)',
                boxShadow: '0 20px 45px rgba(0,0,0,0.5)'
              }}
            >
              <h3 className="packages-editorial-font" style={{ fontSize: '1.5rem', marginBottom: '2rem', letterSpacing: '0.05em', color: 'var(--accent-gold)', textTransform: 'uppercase', fontWeight: 300 }}>Session Structure</h3>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.2rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Comfortable & Intimate Environment</strong>
                    <p style={{ color: '#d4d3c9', fontSize: '0.8rem', lineHeight: '1.5' }}>Sessions are conducted in a quiet, completely private studio environment or secluded, high-atmosphere outdoor landscapes.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.2rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Professional Styling Guidance</strong>
                    <p style={{ color: '#d4d3c9', fontSize: '0.8rem', lineHeight: '1.5' }}>We work with you beforehand to select elegant silhouettes, drapery, and textures that accentuate form beautifully.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.2rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Meticulous Fine-Art Editing</strong>
                    <p style={{ color: '#d4d3c9', fontSize: '0.8rem', lineHeight: '1.5' }}>Every image goes through an extensive black-and-white conversion and light-sculpting grading process.</p>
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
            Capture the transformation
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
            Perfect timing is usually between weeks 28 and 34.
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 3.5rem auto', color: '#a0a0a0', fontSize: '0.92rem', fontWeight: 300, lineHeight: '1.8' }}>
            Contact us early in your pregnancy so we can reserve studio time and align on your custom editorial outline.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-gold" style={{ letterSpacing: '0.12em' }}>Enquire About Sessions</Link>
            <Link to="/packages" className="btn-outline-white" style={{ letterSpacing: '0.12em' }}>Maternity Package Options</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
