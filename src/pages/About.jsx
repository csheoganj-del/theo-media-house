import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Users, Video, Calendar } from 'lucide-react';
import gsap from 'gsap';
import LensFocusImage from '../components/LensFocusImage';

export default function About() {
  useEffect(() => {
    gsap.fromTo('.about-fade-in', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
    );
  }, []);

  return (
    <div>
      {/* Editorial Page Hero */}
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
          <LensFocusImage src="/images/about_hero_bg.png" alt="About Us Hero Background" />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.75), rgba(10, 10, 10, 0.98))'
          }} />
        </div>

        {/* Fine gold ambient glow */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 80% 50%, rgba(201, 168, 76, 0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 2
        }} />

        <div className="container" style={{ zIndex: 2 }}>
          <span className="section-tagline about-fade-in">ABOUT OUR ETHOS</span>
          
          <h1 className="about-fade-in" style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4.8rem)', 
            fontWeight: 400, 
            lineHeight: 1.15, 
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-headline)',
            maxWidth: '900px'
          }}>
            We are Theomedia.<br />
            <span style={{ color: 'var(--accent-gold)' }}>A production house, not an agency.</span>
          </h1>

          <p className="about-fade-in" style={{ 
            fontSize: '1.15rem', 
            maxWidth: '600px', 
            marginBottom: '3rem', 
            color: 'var(--text-muted)',
            fontWeight: 300,
            lineHeight: '1.7'
          }}>
            Built on a belief that visuals change decisions. We construct premium visual campaigns and cinematic stories that make you feel.
          </p>

          <div className="about-fade-in" style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-gold">Book a Discovery Call</Link>
            <Link to="/portfolio" className="btn-outline-white">View Our Works</Link>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section section-cream">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="section-tagline">Why We Exist</span>
              <h2 className="section-title">Visuals should drive emotions and outcomes.</h2>
              <p style={{ color: 'var(--text-sub)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem', fontWeight: 300 }}>
                Theomedia was built because weddings deserve cinematic quality, maternity deserves more than a quick studio session, and hotels deserve content that actually drives bookings—not decorative images that sit on a website and do nothing.
              </p>
              <p style={{ color: 'var(--text-sub)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2.5rem', fontWeight: 300 }}>
                If you want someone to show up, take standard photos, and send you a link—we are not the right fit. If you want a production team that treats your project as a serious creative investment, we should talk.
              </p>
              <Link to="/packages" className="btn-outline-dark">Check Our Investment Packages</Link>
            </div>

            {/* Ethos Cards */}
            <div style={{ display: 'grid', gap: '2rem' }}>
              
              <div style={{ display: 'flex', gap: '1.5rem', padding: '2.5rem', backgroundColor: 'var(--bg-white)', borderRadius: 'var(--border-radius)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.03)' }}>
                <Video size={36} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-headline)' }}>Meticulous Production</h3>
                  <p style={{ color: 'var(--text-sub)', fontSize: '0.85rem', lineHeight: '1.6' }}>We treat every project with elite-level visual standards, utilizing professional cinema gear, advanced lighting arrays, and top-tier drone crafts.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', padding: '2.5rem', backgroundColor: 'var(--bg-white)', borderRadius: 'var(--border-radius)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.03)' }}>
                <Compass size={36} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-headline)' }}>Two Primary Regions</h3>
                  <p style={{ color: 'var(--text-sub)', fontSize: '0.85rem', lineHeight: '1.6' }}>With fully-equipped production bases in both Ireland and India, we are uniquely positioned to cover projects seamlessly across Europe and Asia.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', padding: '2.5rem', backgroundColor: 'var(--bg-white)', borderRadius: 'var(--border-radius)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.03)' }}>
                <Calendar size={36} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-headline)' }}>Limited Appointments</h3>
                  <p style={{ color: 'var(--text-sub)', fontSize: '0.85rem', lineHeight: '1.6' }}>By intentionally restricting our annual bookings, we guarantee that every client receives our absolute best creative focus and post-production detail.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Location / Geography Section */}
      <section className="section section-dark text-center" style={{ padding: '8rem 0' }}>
        <div className="container">
          <span className="section-tagline">Global Reach</span>
          <h2 className="section-title" style={{ color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            Operating seamlessly between Ireland and India.
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 4rem auto', color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 300, lineHeight: '1.7' }}>
            Our dual-base model allows us to deploy production crew across Ireland, the UK, Europe, India, and broader Asia without extensive travel overhead.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-gold">Discuss International Commissions</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
