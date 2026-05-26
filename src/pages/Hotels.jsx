import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, CheckCircle, TrendingUp, Users, Target } from 'lucide-react';
import gsap from 'gsap';

export default function Hotels() {
  useEffect(() => {
    gsap.fromTo('.hotels-hero-anim', 
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
          backgroundImage: 'url("/images/hotel_hero_bg.png")',
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
            className="hotels-hero-anim" 
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
            Hospitality Visual Campaigns
          </span>
          <h1 
            className="hotels-hero-anim packages-editorial-font"
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
            Your hotel has a story.<br />
            <span style={{ color: 'var(--accent-gold)' }}>Guests who see it will book it.</span>
          </h1>
          <p 
            className="hotels-hero-anim"
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
            We produce complete high-end campaign assets designed for modern digital environments, OTA listings, and premium branding.
          </p>
          <div className="hotels-hero-anim" style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-gold" style={{ letterSpacing: '0.12em' }}>Enquire About Hotel Shoots</Link>
            <Link to="/portfolio" className="btn-outline-white" style={{ letterSpacing: '0.12em' }}>View Hotel Work</Link>
          </div>
        </div>
      </section>

      {/* 2. Narrative / Philosophy Section (Olive Background) */}
      <section className="olive-pricing-section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            
            <div>
              <span className="olive-title-pre">The Business Logic</span>
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
                Visuals that increase direct bookings.
              </h2>
              <p style={{ color: '#d4d3c9', fontSize: '0.88rem', lineHeight: '1.8', marginBottom: '1.5rem', fontWeight: 300 }}>
                Beautiful images aren't just decorations; they are active sales assets. Poor imagery degrades confidence and increases OTA bounce rates. Great visuals capture spatial elegance, tell stories, and generate bookings.
              </p>
              <p style={{ color: '#d4d3c9', fontSize: '0.88rem', lineHeight: '1.8', marginBottom: '3rem', fontWeight: 300 }}>
                We structure complete campaign schedules covering interiors, architectural outlines, lifestyle shoots, culinary storytelling, aerial landscapes, and dynamic high-converting vertical reels.
              </p>
              <Link to="/packages" className="tall-card-btn" style={{ padding: '0.9rem 2.2rem', display: 'inline-block', maxWidth: 'none', width: 'auto' }}>
                Hotel Shooting Packages
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
              <h3 className="packages-editorial-font" style={{ fontSize: '1.5rem', marginBottom: '2rem', letterSpacing: '0.05em', color: 'var(--accent-gold)', textTransform: 'uppercase', fontWeight: 300 }}>What We Deliver</h3>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.2rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Architecture & Interior Photography</strong>
                    <p style={{ color: '#d4d3c9', fontSize: '0.8rem', lineHeight: '1.5' }}>Elite interior photography using high-dynamic ambient lighting that accurately represents space and design.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.2rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Culinary & F&B Storytelling</strong>
                    <p style={{ color: '#d4d3c9', fontSize: '0.8rem', lineHeight: '1.5' }}>Dynamic lifestyle and food/drink captures representing the gourmet experiences you offer.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.2rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>High-Impact Social Reels</strong>
                    <p style={{ color: '#d4d3c9', fontSize: '0.8rem', lineHeight: '1.5' }}>60-second social-first vertical video assets designed to perform on Instagram, YouTube Shorts, and TikTok.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.88rem', marginBottom: '0.2rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Drone Landscape Cinematography</strong>
                    <p style={{ color: '#d4d3c9', fontSize: '0.8rem', lineHeight: '1.5' }}>Professional 4K drone cinematography representing the landscape, scale, and neighborhood of your property.</p>
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
            The Visual Investment
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
              margin: '0 auto 4rem auto', 
              lineHeight: 1.15 
            }}
          >
            Elevate your property's value.
          </h2>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem' }}>
            <div style={{ flex: '1 1 200px' }}>
              <div className="packages-editorial-font" style={{ fontSize: '3.5rem', color: 'var(--accent-gold)', fontWeight: 300, marginBottom: '0.5rem' }}>30%+</div>
              <p style={{ color: '#a0a0a0', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Average Direct Booking Increase</p>
            </div>
            <div style={{ flex: '1 1 200px' }}>
              <div className="packages-editorial-font" style={{ fontSize: '3.5rem', color: 'var(--accent-gold)', fontWeight: 300, marginBottom: '0.5rem' }}>45%</div>
              <p style={{ color: '#a0a0a0', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>OTA Click-Through Improvement</p>
            </div>
            <div style={{ flex: '1 1 200px' }}>
              <div className="packages-editorial-font" style={{ fontSize: '3.5rem', color: 'var(--accent-gold)', fontWeight: 300, marginBottom: '0.5rem' }}>14 Days</div>
              <p style={{ color: '#a0a0a0', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Standard Campaign Package Delivery</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '5rem' }}>
            <Link to="/contact" className="btn-gold" style={{ letterSpacing: '0.12em' }}>Request Custom Pitch</Link>
            <Link to="/packages" className="btn-outline-white" style={{ letterSpacing: '0.12em' }}>Explore Hotel Packages</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
