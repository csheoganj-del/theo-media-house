import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Film, Compass, CheckCircle } from 'lucide-react';
import gsap from 'gsap';

export default function Packages() {
  useEffect(() => {
    gsap.fromTo('.packages-fade-in', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
    );
  }, []);

  return (
    <div style={{ paddingTop: '140px', paddingBottom: '6rem', backgroundColor: 'var(--bg-dark)', color: 'var(--text-light)' }}>
      <div className="container">
        
        {/* Page Title Header */}
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <span className="section-tagline packages-fade-in">INVESTMENT GUIDE</span>
          <h1 className="packages-fade-in" style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
            fontWeight: 400, 
            lineHeight: 1.2, 
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-headline)'
          }}>
            Transparent Investment.<br />
            <span style={{ color: 'var(--accent-gold)' }}>No Hidden Fees.</span>
          </h1>
          <p className="packages-fade-in" style={{ 
            fontSize: '1.1rem', 
            maxWidth: '650px', 
            margin: '0 auto', 
            color: 'var(--text-muted)',
            fontWeight: 300,
            lineHeight: '1.7'
          }}>
            We believe in complete clarity. We offer structured packages for ease of planning, alongside custom quotes for unique or multi-day international commissions.
          </p>
        </div>

        {/* Wedding Services Segment */}
        <div style={{ marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-headline)', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1rem', marginBottom: '3rem' }}>
            Wedding Collections
          </h2>
          
          <div className="pricing-grid">
            {/* Package 1 */}
            <div className="pricing-card-glass">
              <div className="pricing-header" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="pricing-title">Photography Only</h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '1rem 0' }}>Perfect for couples looking purely for editorial still portraiture.</div>
              </div>
              <ul className="pricing-features" style={{ color: 'var(--text-muted)' }}>
                <li style={{ color: 'var(--text-muted)' }}>Full wedding day coverage</li>
                <li style={{ color: 'var(--text-muted)' }}>500+ fully-edited high-res images</li>
                <li style={{ color: 'var(--text-muted)' }}>Private digital download gallery</li>
                <li style={{ color: 'var(--text-muted)' }}>8-week meticulously-graded delivery</li>
              </ul>
              <Link to="/contact" className="btn-outline-white" style={{ textAlign: 'center' }}>Enquire Collection</Link>
            </div>

            {/* Package 2 */}
            <div className="pricing-card-glass-featured">
              <span className="pricing-badge">Popular</span>
              <div className="pricing-header" style={{ borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
                <h3 className="pricing-title" style={{ color: 'var(--text-light)' }}>Film + Still</h3>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', margin: '1rem 0' }}>Our classic dual capture package combining cinema and stills.</div>
              </div>
              <ul className="pricing-features">
                <li style={{ color: 'var(--text-light)' }}>Full wedding day coverage</li>
                <li style={{ color: 'var(--text-light)' }}>5-8 minute cinematic feature film</li>
                <li style={{ color: 'var(--text-light)' }}>500+ fully-edited high-res images</li>
                <li style={{ color: 'var(--text-light)' }}>Private digital gallery delivery</li>
                <li style={{ color: 'var(--text-light)' }}>6-week advanced delivery schedule</li>
              </ul>
              <Link to="/contact" className="btn-gold" style={{ textAlign: 'center' }}>Enquire Collection</Link>
            </div>

            {/* Package 3 */}
            <div className="pricing-card-glass">
              <div className="pricing-header" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="pricing-title">The Reel Collection</h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '1rem 0' }}>Complete commercial-grade visual coverage.</div>
              </div>
              <ul className="pricing-features">
                <li style={{ color: 'var(--text-muted)' }}>Two professional operators</li>
                <li style={{ color: 'var(--text-muted)' }}>5-8 min feature film + highlight cuts</li>
                <li style={{ color: 'var(--text-muted)' }}>Comprehensive photo coverage (600+ pics)</li>
                <li style={{ color: 'var(--text-muted)' }}>Full aerial drone coverage</li>
                <li style={{ color: 'var(--text-muted)' }}>Instagram vertical reels (60s edits)</li>
              </ul>
              <Link to="/contact" className="btn-outline-white" style={{ textAlign: 'center' }}>Enquire Collection</Link>
            </div>
          </div>
        </div>

        {/* Maternity Services Segment */}
        <div style={{ marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-headline)', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1rem', marginBottom: '3rem' }}>
            Maternity Sessions
          </h2>
          
          <div className="pricing-grid">
            <div className="pricing-card-glass">
              <div className="pricing-header" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="pricing-title">Starter Session</h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '1rem 0' }}>Perfect for high-impact silhouette captures.</div>
              </div>
              <ul className="pricing-features">
                <li style={{ color: 'var(--text-muted)' }}>1 hour private session</li>
                <li style={{ color: 'var(--text-muted)' }}>Studio or scenic outdoor setting</li>
                <li style={{ color: 'var(--text-muted)' }}>30 meticulously-edited high-res images</li>
                <li style={{ color: 'var(--text-muted)' }}>2-week fine-art delivery schedule</li>
              </ul>
              <Link to="/contact" className="btn-outline-white" style={{ textAlign: 'center' }}>Book Session</Link>
            </div>

            <div className="pricing-card-glass-featured">
              <div className="pricing-header" style={{ borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
                <h3 className="pricing-title" style={{ color: 'var(--text-light)' }}>Extended Session</h3>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', margin: '1rem 0' }}>Full transformational portraiture experience.</div>
              </div>
              <ul className="pricing-features">
                <li style={{ color: 'var(--text-light)' }}>2 hours private session</li>
                <li style={{ color: 'var(--text-light)' }}>Multiple styling & drapery changes</li>
                <li style={{ color: 'var(--text-light)' }}>Both indoor studio and outdoor setups</li>
                <li style={{ color: 'var(--text-light)' }}>60 meticulously-edited high-res images</li>
                <li style={{ color: 'var(--text-light)' }}>2-week fine-art delivery schedule</li>
              </ul>
              <Link to="/contact" className="btn-gold" style={{ textAlign: 'center' }}>Book Session</Link>
            </div>
          </div>
        </div>

        {/* Hotels Services Segment */}
        <div>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-headline)', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1rem', marginBottom: '3rem' }}>
            Hospitality Campaign Packages
          </h2>
          
          <div className="pricing-grid">
            <div className="pricing-card-glass">
              <div className="pricing-header" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="pricing-title">Starter Content Day</h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '1rem 0' }}>Designed for rapid, high-impact social and web updates.</div>
              </div>
              <ul className="pricing-features">
                <li style={{ color: 'var(--text-muted)' }}>Up to 10 guest rooms & suite outlines</li>
                <li style={{ color: 'var(--text-muted)' }}>Main lobby and restaurant photography</li>
                <li style={{ color: 'var(--text-muted)' }}>80 fully-edited commercial images</li>
                <li style={{ color: 'var(--text-muted)' }}>2-week fast-track delivery</li>
              </ul>
              <Link to="/contact" className="btn-outline-white" style={{ textAlign: 'center' }}>Request Proposal</Link>
            </div>

            <div className="pricing-card-glass-featured">
              <span className="pricing-badge">Recommended</span>
              <div className="pricing-header" style={{ borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
                <h3 className="pricing-title" style={{ color: 'var(--text-light)' }}>Full Property Campaign</h3>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', margin: '1rem 0' }}>Complete commercial asset re-scaffolding campaign.</div>
              </div>
              <ul className="pricing-features">
                <li style={{ color: 'var(--text-light)' }}>Multi-day structured production</li>
                <li style={{ color: 'var(--text-light)' }}>Full room, exterior, and amenities coverage</li>
                <li style={{ color: 'var(--text-light)' }}>200+ fully-edited commercial images</li>
                <li style={{ color: 'var(--text-light)' }}>Complete professional drone coverage</li>
                <li style={{ color: 'var(--text-light)' }}>5 high-impact edited social reels</li>
              </ul>
              <Link to="/contact" className="btn-gold" style={{ textAlign: 'center' }}>Request Proposal</Link>
            </div>

            <div className="pricing-card-glass">
              <div className="pricing-header" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="pricing-title">Monthly Retainer</h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '1rem 0' }}>Perfect for brands seeking continuous digital performance.</div>
              </div>
              <ul className="pricing-features">
                <li style={{ color: 'var(--text-muted)' }}>Ongoing content planning alignment</li>
                <li style={{ color: 'var(--text-muted)' }}>Fresh monthly visual updates</li>
                <li style={{ color: 'var(--text-muted)' }}>Consistent social media vertical clips</li>
                <li style={{ color: 'var(--text-muted)' }}>Priority booking calendars</li>
              </ul>
              <Link to="/contact" className="btn-outline-white" style={{ textAlign: 'center' }}>Request Proposal</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
