import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Users, Video, Calendar } from 'lucide-react';
import gsap from 'gsap';

export default function About() {
  useEffect(() => {
    // Staggered luxury fade animations
    gsap.fromTo('.about-hero-anim', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.4, stagger: 0.25, ease: 'power4.out' }
    );

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.fromTo('.about-scroll-fade',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1.2, stagger: 0.12, ease: 'power3.out' }
          );
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const triggerEl = document.querySelector('.trigger-about-scroll');
    if (triggerEl) observer.observe(triggerEl);

    return () => {
      if (triggerEl) observer.unobserve(triggerEl);
    };
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
          backgroundImage: 'url("/images/about_hero_bg.png")',
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

        <div style={{ position: 'relative', zIndex: 2, padding: '0 2rem', maxWidth: '900px' }}>
          <span 
            className="about-hero-anim" 
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
            About Our Ethos
          </span>
          <h1 
            className="about-hero-anim packages-editorial-font"
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
            We are Theomedia.<br />
            <span style={{ color: 'var(--accent-gold)' }}>A production house, not an agency.</span>
          </h1>
          <p 
            className="about-hero-anim"
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
            Built on a belief that visuals change decisions. We construct premium visual campaigns and cinematic stories that make you feel.
          </p>
        </div>
      </section>

      {/* 2. Narrative Split Section (Olive-Green Background) */}
      <section className="olive-pricing-section trigger-about-scroll">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            
            <div className="about-scroll-fade">
              <span className="olive-title-pre">Why We Exist</span>
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
                Visuals should drive emotions and outcomes.
              </h2>
              <p style={{ color: '#d4d3c9', fontSize: '0.88rem', lineHeight: '1.8', marginBottom: '1.5rem', fontWeight: 300 }}>
                Theomedia was built because weddings deserve cinematic quality, maternity deserves more than a quick studio session, and hotels deserve content that actually drives bookings—not decorative images that sit on a website and do nothing.
              </p>
              <p style={{ color: '#d4d3c9', fontSize: '0.88rem', lineHeight: '1.8', marginBottom: '3rem', fontWeight: 300 }}>
                If you want someone to show up, take standard photos, and send you a link—we are not the right fit. If you want a production team that treats your project as a serious creative investment, we should talk.
              </p>
              <Link to="/packages" className="tall-card-btn" style={{ padding: '0.9rem 2.2rem', display: 'inline-block', maxWidth: 'none', width: 'auto' }}>
                Check Our Investment Guide
              </Link>
            </div>

            {/* Ethos Cards */}
            <div style={{ display: 'grid', gap: '2rem' }} className="about-scroll-fade">
              
              {/* Card 1 */}
              <div 
                style={{ 
                  display: 'flex', 
                  gap: '1.5rem', 
                  padding: '2.2rem', 
                  backgroundColor: '#1b1a12', 
                  borderRadius: '4px', 
                  border: '1px solid rgba(255,255,255,0.03)' 
                }}
              >
                <Video size={32} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <div>
                  <h3 className="packages-editorial-font" style={{ fontSize: '1.35rem', marginBottom: '0.5rem', letterSpacing: '0.05em', color: '#fff', textTransform: 'uppercase', fontWeight: 300 }}>Meticulous Production</h3>
                  <p style={{ color: '#d4d3c9', fontSize: '0.82rem', lineHeight: '1.6', fontWeight: 300 }}>
                    We treat every project with elite-level visual standards, utilizing professional cinema gear, advanced lighting arrays, and top-tier drone crafts.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div 
                style={{ 
                  display: 'flex', 
                  gap: '1.5rem', 
                  padding: '2.2rem', 
                  backgroundColor: '#1b1a12', 
                  borderRadius: '4px', 
                  border: '1px solid rgba(255,255,255,0.03)' 
                }}
              >
                <Compass size={32} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <div>
                  <h3 className="packages-editorial-font" style={{ fontSize: '1.35rem', marginBottom: '0.5rem', letterSpacing: '0.05em', color: '#fff', textTransform: 'uppercase', fontWeight: 300 }}>Two Primary Regions</h3>
                  <p style={{ color: '#d4d3c9', fontSize: '0.82rem', lineHeight: '1.6', fontWeight: 300 }}>
                    With fully-equipped production bases in both Ireland and India, we are uniquely positioned to cover projects seamlessly across Europe and Asia.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div 
                style={{ 
                  display: 'flex', 
                  gap: '1.5rem', 
                  padding: '2.2rem', 
                  backgroundColor: '#1b1a12', 
                  borderRadius: '4px', 
                  border: '1px solid rgba(255,255,255,0.03)' 
                }}
              >
                <Calendar size={32} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <div>
                  <h3 className="packages-editorial-font" style={{ fontSize: '1.35rem', marginBottom: '0.5rem', letterSpacing: '0.05em', color: '#fff', textTransform: 'uppercase', fontWeight: 300 }}>Limited Appointments</h3>
                  <p style={{ color: '#d4d3c9', fontSize: '0.82rem', lineHeight: '1.6', fontWeight: 300 }}>
                    By intentionally restricting our annual bookings, we guarantee that every client receives our absolute best creative focus and post-production detail.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Location / Geography Section */}
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
            Global Reach
          </span>
          <h2 
            className="packages-editorial-font" 
            style={{ 
              color: '#fff', 
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.06em', 
              fontWeight: 300, 
              maxWidth: '850px', 
              margin: '0 auto 2rem auto', 
              lineHeight: 1.15 
            }}
          >
            Operating seamlessly between Ireland and India.
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 4rem auto', color: '#a0a0a0', fontSize: '0.92rem', fontWeight: 300, lineHeight: '1.8' }}>
            Our dual-base model allows us to deploy production crew across Ireland, the UK, Europe, India, and broader Asia without extensive travel overhead.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-gold" style={{ letterSpacing: '0.12em' }}>Discuss International Commissions</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
