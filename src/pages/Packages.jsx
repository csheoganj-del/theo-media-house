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
    <div style={{ paddingTop: '140px', paddingBottom: '6rem', backgroundColor: 'var(--bg-cream)' }}>
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
            color: 'var(--text-sub)',
            fontWeight: 300,
            lineHeight: '1.7'
          }}>
            We believe in complete clarity. We offer structured packages for ease of planning, alongside custom quotes for unique or multi-day international commissions.
          </p>
        </div>

        {/* Wedding Services Segment */}
        <div style={{ marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-headline)', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '1rem', marginBottom: '3rem' }}>
            Wedding Collections
          </h2>
          
          <div className="pricing-grid">
            {/* Package 1 */}
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-title">Photography Only</h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-sub)', margin: '1rem 0' }}>Perfect for couples looking purely for editorial still portraiture.</div>
              </div>
              <ul className="pricing-features">
                <li>Full wedding day coverage</li>
                <li>500+ fully-edited high-res images</li>
                <li>Private digital download gallery</li>
                <li>8-week meticulously-graded delivery</li>
              </ul>
              <Link to="/contact" className="btn-outline-dark" style={{ textAlign: 'center' }}>Enquire Collection</Link>
            </div>

            {/* Package 2 */}
            <div className="pricing-card pricing-card-dark">
              <span className="pricing-badge">Popular</span>
              <div className="pricing-header">
                <h3 className="pricing-title" style={{ color: 'var(--text-light)' }}>Film + Still</h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '1rem 0' }}>Our classic dual capture package combining cinema and stills.</div>
              </div>
              <ul className="pricing-features">
                <li>Full wedding day coverage</li>
                <li>5-8 minute cinematic feature film</li>
                <li>500+ fully-edited high-res images</li>
                <li>Private digital gallery delivery</li>
                <li>6-week advanced delivery schedule</li>
              </ul>
              <Link to="/contact" className="btn-gold" style={{ textAlign: 'center' }}>Enquire Collection</Link>
            </div>

            {/* Package 3 */}
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-title">The Reel Collection</h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-sub)', margin: '1rem 0' }}>Complete commercial-grade visual coverage.</div>
              </div>
              <ul className="pricing-features">
                <li>Two professional operators</li>
                <li>5-8 min feature film + highlight cuts</li>
                <li>Comprehensive photo coverage (600+ pics)</li>
                <li>Full aerial drone coverage</li>
                <li>Instagram vertical reels (60s edits)</li>
              </ul>
              <Link to="/contact" className="btn-outline-dark" style={{ textAlign: 'center' }}>Enquire Collection</Link>
            </div>
          </div>
        </div>

        {/* Maternity Services Segment */}
        <div style={{ marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-headline)', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '1rem', marginBottom: '3rem' }}>
            Maternity Sessions
          </h2>
          
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-title">Starter Session</h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-sub)', margin: '1rem 0' }}>Perfect for high-impact silhouette captures.</div>
              </div>
              <ul className="pricing-features">
                <li>1 hour private session</li>
                <li>Studio or scenic outdoor setting</li>
                <li>30 meticulously-edited high-res images</li>
                <li>2-week fine-art delivery schedule</li>
              </ul>
              <Link to="/contact" className="btn-outline-dark" style={{ textAlign: 'center' }}>Book Session</Link>
            </div>

            <div className="pricing-card pricing-card-dark">
              <div className="pricing-header">
                <h3 className="pricing-title" style={{ color: 'var(--text-light)' }}>Extended Session</h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '1rem 0' }}>Full transformational portraiture experience.</div>
              </div>
              <ul className="pricing-features">
                <li>2 hours private session</li>
                <li>Multiple styling & drapery changes</li>
                <li>Both indoor studio and outdoor setups</li>
                <li>60 meticulously-edited high-res images</li>
                <li>2-week fine-art delivery schedule</li>
              </ul>
              <Link to="/contact" className="btn-gold" style={{ textAlign: 'center' }}>Book Session</Link>
            </div>
          </div>
        </div>

        {/* Hotels Services Segment */}
        <div>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-headline)', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '1rem', marginBottom: '3rem' }}>
            Hospitality Campaign Packages
          </h2>
          
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-title">Starter Content Day</h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-sub)', margin: '1rem 0' }}>Designed for rapid, high-impact social and web updates.</div>
              </div>
              <ul className="pricing-features">
                <li>Up to 10 guest rooms & suite outlines</li>
                <li>Main lobby and restaurant photography</li>
                <li>80 fully-edited commercial images</li>
                <li>2-week fast-track delivery</li>
              </ul>
              <Link to="/contact" className="btn-outline-dark" style={{ textAlign: 'center' }}>Request Proposal</Link>
            </div>

            <div className="pricing-card pricing-card-dark">
              <span className="pricing-badge">Recommended</span>
              <div className="pricing-header">
                <h3 className="pricing-title" style={{ color: 'var(--text-light)' }}>Full Property Campaign</h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '1rem 0' }}>Complete commercial asset re-scaffolding campaign.</div>
              </div>
              <ul className="pricing-features">
                <li>Multi-day structured production</li>
                <li>Full room, exterior, and amenities coverage</li>
                <li>200+ fully-edited commercial images</li>
                <li>Complete professional drone coverage</li>
                <li>5 high-impact edited social reels</li>
              </ul>
              <Link to="/contact" className="btn-gold" style={{ textAlign: 'center' }}>Request Proposal</Link>
            </div>

            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-title">Monthly Retainer</h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-sub)', margin: '1rem 0' }}>Perfect for brands seeking continuous digital performance.</div>
              </div>
              <ul className="pricing-features">
                <li>Ongoing content planning alignment</li>
                <li>Fresh monthly visual updates</li>
                <li>Consistent social media vertical clips</li>
                <li>Priority booking calendars</li>
              </ul>
              <Link to="/contact" className="btn-outline-dark" style={{ textAlign: 'center' }}>Request Proposal</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
