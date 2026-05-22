import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, CheckCircle, TrendingUp, Users, Target } from 'lucide-react';
import gsap from 'gsap';
import LensFocusImage from '../components/LensFocusImage';

export default function Hotels() {
  useEffect(() => {
    gsap.fromTo('.hotels-fade-in', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
    );
  }, []);

  return (
    <div>
      {/* Editorial Commercial Hero */}
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
          <LensFocusImage src="/images/hotel_hero_bg.png" alt="Hotels Hero Background" />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.75), rgba(10, 10, 10, 0.98))'
          }} />
        </div>

        {/* Soft emerald/teal atmospheric overlay */}
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
          <span className="section-tagline hotels-fade-in">HOSPITALITY VISUAL CAMPAIGNS</span>
          
          <h1 className="hotels-fade-in" style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4.8rem)', 
            fontWeight: 400, 
            lineHeight: 1.15, 
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-headline)',
            maxWidth: '900px'
          }}>
            Your hotel has a story.<br />
            <span style={{ color: 'var(--accent-gold)' }}>Guests who see it will book it.</span>
          </h1>

          <p className="hotels-fade-in" style={{ 
            fontSize: '1.15rem', 
            maxWidth: '600px', 
            marginBottom: '3rem', 
            color: 'var(--text-muted)',
            fontWeight: 300,
            lineHeight: '1.7'
          }}>
            We produce complete high-end campaign assets designed for modern digital environments, OTA listings, and premium branding.
          </p>

          <div className="hotels-fade-in" style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-gold">Enquire About Hotel Shoots</Link>
            <Link to="/portfolio" className="btn-outline-white">View Hotel Work</Link>
          </div>
        </div>
      </section>

      {/* Commercial Rationale Section */}
      <section className="section section-cream">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="section-tagline">The Business Logic</span>
              <h2 className="section-title">Visuals that increase direct bookings.</h2>
              <p style={{ color: 'var(--text-sub)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem', fontWeight: 300 }}>
                Beautiful images aren't just decorations; they are active sales assets. Poor imagery degrades confidence and increases OTA bounce rates. Great visuals capture spatial elegance, tell stories, and generate bookings.
              </p>
              <p style={{ color: 'var(--text-sub)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2.5rem', fontWeight: 300 }}>
                We structure complete campaign schedules covering interiors, architectural outlines, lifestyle shoots, culinary storytelling, aerial landscapes, and dynamic high-converting vertical reels.
              </p>
              <Link to="/packages" className="btn-outline-dark">Hotel Shooting Packages</Link>
            </div>

            {/* Campaign package details */}
            <div style={{ backgroundColor: 'var(--bg-white)', padding: '3.5rem', borderRadius: 'var(--border-radius)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.03)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-headline)', color: 'var(--accent-gold)' }}>What We Deliver</h3>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Architecture & Interior Photography</strong>
                    <p style={{ color: 'var(--text-sub)', fontSize: '0.85rem' }}>Elite interior photography using high-dynamic ambient lighting that accurately represents space and design.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Culinary & F&B Storytelling</strong>
                    <p style={{ color: 'var(--text-sub)', fontSize: '0.85rem' }}>Dynamic lifestyle and food/drink captures representing the gourmet experiences you offer.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem' }}>High-Impact Social Reels</strong>
                    <p style={{ color: 'var(--text-sub)', fontSize: '0.85rem' }}>60-second social-first vertical video assets designed to perform on Instagram, YouTube Shorts, and TikTok.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Drone Landscape Cinematography</strong>
                    <p style={{ color: 'var(--text-sub)', fontSize: '0.85rem' }}>Professional 4K drone cinematography representing the landscape, scale, and neighborhood of your property.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-dark text-center" style={{ padding: '8rem 0' }}>
        <div className="container">
          <span className="section-tagline">The Visual Investment</span>
          <h2 className="section-title" style={{ color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
            Elevate your property's value.
          </h2>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem' }}>
            <div style={{ flex: '1 1 200px' }}>
              <div style={{ fontSize: '3.5rem', color: 'var(--accent-gold)', fontFamily: 'var(--font-headline)', fontWeight: 'bold', marginBottom: '0.5rem' }}>30%+</div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Average Direct Booking Increase</p>
            </div>
            <div style={{ flex: '1 1 200px' }}>
              <div style={{ fontSize: '3.5rem', color: 'var(--accent-gold)', fontFamily: 'var(--font-headline)', fontWeight: 'bold', marginBottom: '0.5rem' }}>45%</div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>OTA Click-Through Improvement</p>
            </div>
            <div style={{ flex: '1 1 200px' }}>
              <div style={{ fontSize: '3.5rem', color: 'var(--accent-gold)', fontFamily: 'var(--font-headline)', fontWeight: 'bold', marginBottom: '0.5rem' }}>14 Days</div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Standard Campaign Package Delivery</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '5rem' }}>
            <Link to="/contact" className="btn-gold">Request Custom Pitch</Link>
            <Link to="/packages" className="btn-outline-white">Explore Hotel Packages</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
