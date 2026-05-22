import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Film, Award, Map, Sparkles, Compass, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import LensFocusImage from '../components/LensFocusImage';

export default function Weddings() {
  useEffect(() => {
    gsap.fromTo('.wedding-fade-in', 
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
          <LensFocusImage src="/images/wedding_hero_bg.png" alt="Weddings Hero Background" />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.95))'
          }} />
        </div>

        {/* Fine gold light glow */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 80% 50%, rgba(201, 168, 76, 0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 2
        }} />

        <div className="container" style={{ zIndex: 2 }}>
          <span className="section-tagline wedding-fade-in">CINEMATIC WEDDING FILMS</span>
          
          <h1 className="wedding-fade-in" style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4.8rem)', 
            fontWeight: 400, 
            lineHeight: 1.15, 
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-headline)',
            maxWidth: '900px'
          }}>
            Your wedding day will never happen again.<br />
            <span style={{ color: 'var(--accent-gold)' }}>Make sure you feel it forever.</span>
          </h1>

          <p className="wedding-fade-in" style={{ 
            fontSize: '1.15rem', 
            maxWidth: '600px', 
            marginBottom: '3rem', 
            color: 'var(--text-muted)',
            fontWeight: 300,
            lineHeight: '1.7'
          }}>
            We believe your wedding film should feel like a piece of authentic cinema—no forced posture, no intrusive direction. Just raw, honest, and timeless storytelling.
          </p>

          <div className="wedding-fade-in" style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-gold">Request Wedding Quote</Link>
            <Link to="/portfolio" className="btn-outline-white">View Gallery</Link>
          </div>
        </div>
      </section>

      {/* Core Narrative / Philosophy */}
      <section className="section section-cream">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="section-tagline">The Approach</span>
              <h2 className="section-title">A feature film, not just a highlight reel.</h2>
              <p style={{ color: 'var(--text-sub)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem', fontWeight: 300 }}>
                We do not just document events; we capture the feeling. We believe your wedding film should capture the quiet glances, the atmospheric lighting, the laughter, and the subtle interactions you didn't even notice were happening.
              </p>
              <p style={{ color: 'var(--text-sub)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2.5rem', fontWeight: 300 }}>
                By blending editorial fashion portraiture with authentic documentary filmmaking, we construct a custom piece of cinematic legacy that your family will treasure for generations.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <Link to="/packages" className="btn-outline-dark">View Pricing Plans</Link>
              </div>
            </div>

            {/* Premium detail points */}
            <div style={{ backgroundColor: 'var(--bg-white)', padding: '3.5rem', borderRadius: 'var(--border-radius)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.03)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-headline)', color: 'var(--accent-gold)' }}>What's Included</h3>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Feature-Length Narrative Editing</strong>
                    <p style={{ color: 'var(--text-sub)', fontSize: '0.85rem' }}>A fully realized 5-8 minute cinematic feature film containing detailed audio mixing and sound design.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Timeless Documentary Portraiture</strong>
                    <p style={{ color: 'var(--text-sub)', fontSize: '0.85rem' }}>500+ fully-edited, high-resolution digital images delivered in a premium private online gallery.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Breathtaking Aerial Coverage</strong>
                    <p style={{ color: 'var(--text-sub)', fontSize: '0.85rem' }}>Full professional drone coverage of your wedding venue, landscape, and outdoor events (weather permitting).</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Vertical Social Cuts</strong>
                    <p style={{ color: 'var(--text-sub)', fontSize: '0.85rem' }}>High-impact 60-second vertical reels optimized perfectly for Instagram and TikTok sharing.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Callout */}
      <section className="section section-dark text-center" style={{ padding: '8rem 0' }}>
        <div className="container">
          <span className="section-tagline">Exclusive Availability</span>
          <h2 className="section-title" style={{ color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            We only document 25 weddings per year globally.
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 3.5rem auto', color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 300, lineHeight: '1.7' }}>
            This guarantee ensures that we can dedicate our complete creative focus, time, and premium post-production attention to your cinematic feature film.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-gold">Check Date Availability</Link>
            <Link to="/packages" className="btn-outline-white">Wedding Pricing Tiers</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
