import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Sparkles, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import LensFocusImage from '../components/LensFocusImage';

export default function Maternity() {
  useEffect(() => {
    gsap.fromTo('.maternity-fade-in', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
    );
  }, []);

  return (
    <div>
      <section style={{ 
        position: 'relative', 
        height: '75vh', 
        display: 'flex', 
        alignItems: 'center', 
        color: 'var(--text-light)',
        paddingTop: '80px',
        overflow: 'hidden'
      }}>
        {/* Cinematic Lens Focus Background */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
          <LensFocusImage src="/images/maternity_hero_bg.png" alt="Maternity Hero Background" />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.95))'
          }} />
        </div>

        {/* Soft gold/cream glow overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 75% 50%, rgba(201, 168, 76, 0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 2
        }} />

        <div className="container" style={{ zIndex: 2 }}>
          <span className="section-tagline maternity-fade-in">EDITORIAL MATERNITY PORTRAITS</span>
          
          <h1 className="maternity-fade-in" style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4.8rem)', 
            fontWeight: 400, 
            lineHeight: 1.15, 
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-headline)',
            maxWidth: '900px'
          }}>
            The most powerful story<br />
            <span style={{ color: 'var(--accent-gold)' }}>a body has ever told.</span>
          </h1>

          <p className="maternity-fade-in" style={{ 
            fontSize: '1.15rem', 
            maxWidth: '600px', 
            marginBottom: '3rem', 
            color: 'var(--text-muted)',
            fontWeight: 300,
            lineHeight: '1.7'
          }}>
            Pregnancy is not just a phase to document at the end. It is a profound, physical transformation that deserves to be captured with artistic, quiet power.
          </p>

          <div className="maternity-fade-in" style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-gold">Book Maternity Session</Link>
            <Link to="/portfolio" className="btn-outline-white">View Silhouette Art</Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section section-cream">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="section-tagline">The Artistic Vision</span>
              <h2 className="section-title">Silhouette, shadow, and soft light.</h2>
              <p style={{ color: 'var(--text-sub)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem', fontWeight: 300 }}>
                These images are not for social media feeds. They are not designed to match transient internet trends. They are created solely for you, your child, and the day you want to remember exactly what this quiet power felt like.
              </p>
              <p style={{ color: 'var(--text-sub)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2.5rem', fontWeight: 300 }}>
                We avoid stiff studio set-ups and standard forced portraits. We play with shadows, delicate silhouette structures, and editorial compositions that capture the emotional magnitude of life creation.
              </p>
              <Link to="/packages" className="btn-outline-dark">Maternity Investment Guide</Link>
            </div>

            {/* Session details card */}
            <div style={{ backgroundColor: 'var(--bg-white)', padding: '3.5rem', borderRadius: 'var(--border-radius)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.03)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-headline)', color: 'var(--accent-gold)' }}>Session Structure</h3>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Comfortable & Intimate Environment</strong>
                    <p style={{ color: 'var(--text-sub)', fontSize: '0.85rem' }}>Sessions are conducted in a quiet, completely private studio environment or secluded, high-atmosphere outdoor landscapes.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Professional Styling Guidance</strong>
                    <p style={{ color: 'var(--text-sub)', fontSize: '0.85rem' }}>We work with you beforehand to select elegant silhouettes, drapery, and textures that accentuate form beautifully.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Meticulous Fine-Art Editing</strong>
                    <p style={{ color: 'var(--text-sub)', fontSize: '0.85rem' }}>Every image goes through an extensive black-and-white conversion and light-sculpting grading process.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-dark text-center" style={{ padding: '8rem 0' }}>
        <div className="container">
          <span className="section-tagline">Capture the transformation</span>
          <h2 className="section-title" style={{ color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            Perfect timing is usually between weeks 28 and 34.
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 3.5rem auto', color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 300, lineHeight: '1.7' }}>
            Contact us early in your pregnancy so we can reserve studio time and align on your custom editorial outline.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-gold">Enquire About Sessions</Link>
            <Link to="/packages" className="btn-outline-white">Maternity Package Options</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
