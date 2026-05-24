import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Film, Compass, ChevronDown, Check, Heart, Shield, Award, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import gsap from 'gsap';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeReview, setActiveReview] = useState(0);
  const [heroMuted, setHeroMuted] = useState(true);
  const [heroPlaying, setHeroPlaying] = useState(true);
  const videoRef = useRef(null);

  const reviews = [
    {
      text: "Theomedia didn't just capture our wedding, they captured the exact feeling of it. Watching the film back brought tears to our eyes. Pure cinematic perfection.",
      author: "Sarah & David",
      location: "Cliff House Hotel, Ireland"
    },
    {
      text: "Theomedia completely transformed our hotel's online presence. The new visuals drove a 30% increase in direct bookings within two months.",
      author: "General Manager",
      location: "The Heritage Resort, India"
    },
    {
      text: "Pregnancy is such a fleeting moment. The silhouette photography session was so comfortable, and the images are editorial masterpieces.",
      author: "Elena R.",
      location: "Dublin Studio, Ireland"
    }
  ];

  const faqs = [
    {
      q: "Do you work across India and Ireland?",
      a: "Yes, we are uniquely positioned with teams in both Ireland and India, allowing us to cover projects seamlessly across both regions and internationally."
    },
    {
      q: "How far in advance should we book?",
      a: "For weddings, we recommend booking 9-12 months in advance. For commercial and hotel shoots, 4-8 weeks is usually ideal."
    },
    {
      q: "What is the delivery time for a wedding film?",
      a: "Our standard delivery time is 6-8 weeks for a feature wedding film, ensuring meticulous editing, custom audio design, and premium colour grading."
    },
    {
      q: "Do you offer packages or custom quotes?",
      a: "We offer structured packages for transparency, but we can also create custom quotes for unique, multi-day, or international projects."
    },
    {
      q: "Can you travel internationally?",
      a: "Absolutely. We regularly travel across Europe, the UK, and Asia to capture visual campaigns and cinematic productions."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Elegant GSAP Entry Animation
    gsap.fromTo('.hero-title-line', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: 'power4.out' }
    );
    gsap.fromTo('.hero-fade-in', 
      { opacity: 0 }, 
      { opacity: 1, duration: 1.5, delay: 0.8, ease: 'power2.out' }
    );
    gsap.fromTo('.hero-widget-anim',
      { opacity: 0, scale: 0.96, x: 30 },
      { opacity: 1, scale: 1, x: 0, duration: 1.5, delay: 0.4, ease: 'power3.out' }
    );
  }, []);

  const toggleHeroPlay = () => {
    if (videoRef.current) {
      if (heroPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setHeroPlaying(!heroPlaying);
    }
  };

  const toggleHeroMute = () => {
    setHeroMuted(!heroMuted);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-light)' }}>
      
      {/* Redesigned Premium Asymmetrical Hero Section */}
      <section style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        paddingTop: '120px',
        paddingBottom: '4rem',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 10% 20%, #151515 0%, #0a0a0a 100%)'
      }}>
        {/* Soft luxury ambient background glow */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 80% 30%, rgba(201, 168, 76, 0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 1
        }} />

        <div className="container" style={{ zIndex: 2, position: 'relative' }}>
          <div className="hero-split-grid">
            
            {/* Left Panel: High-End Copywriting */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="section-tagline hero-fade-in" style={{ marginBottom: '1.2rem' }}>
                ONE PRODUCTION HOUSE &bull; IRELAND & INDIA
              </span>
              
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 4.8vw, 4.8rem)', 
                fontWeight: 400, 
                lineHeight: 1.15, 
                marginBottom: '1.8rem',
                fontFamily: 'var(--font-headline)',
                letterSpacing: '-0.02em'
              }}>
                <div className="hero-title-line">Cinematic Legacy.</div>
                <div className="hero-title-line" style={{ color: 'var(--accent-gold)' }}>Commercial Authority.</div>
              </h1>

              <p className="hero-fade-in" style={{ 
                fontSize: 'clamp(1rem, 1.2vw, 1.2rem)', 
                maxWidth: '560px', 
                marginBottom: '3rem', 
                color: 'var(--text-muted)',
                fontWeight: 300,
                lineHeight: '1.75'
              }}>
                We construct custom visual campaigns and feature-length wedding films for clients who demand uncompromising quality. Operating locally in Ireland and India.
              </p>

              <div className="hero-fade-in" style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-gold">Book Discovery Call</Link>
                <Link to="/portfolio" className="btn-outline-white">View Curated Works</Link>
              </div>
            </div>

            {/* Right Panel: Stunning Interactive Director's Viewfinder Widget */}
            <div className="hero-widget-anim" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="viewfinder-frame">
                
                {/* Director's Telemetry Corner Marks */}
                <div className="viewfinder-corner top-left"></div>
                <div className="viewfinder-corner top-right"></div>
                <div className="viewfinder-corner bottom-left"></div>
                <div className="viewfinder-corner bottom-right"></div>

                {/* Telemetry Header */}
                <div className="viewfinder-telemetry-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span className="rec-dot-anim"></span>
                    <span>REC [8K]</span>
                  </div>
                  <span>THEOMEDIA // SHOWCASE</span>
                  <span>24 FPS</span>
                </div>

                {/* Video Loop Container */}
                <div className="viewfinder-video-container">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted={heroMuted}
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-bridegroom-couple-dancing-in-nature-41589-large.mp4" type="video/mp4" />
                  </video>

                  {/* Glassmorphic control shelf */}
                  <div className="viewfinder-controls">
                    <button onClick={toggleHeroPlay} className="viewfinder-btn" aria-label="Toggle Play">
                      {heroPlaying ? <Pause size={14} /> : <Play size={14} />}
                    </button>
                    <button onClick={toggleHeroMute} className="viewfinder-btn" aria-label="Toggle Mute">
                      {heroMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    </button>
                  </div>
                </div>

                {/* Telemetry Footer */}
                <div className="viewfinder-telemetry-footer">
                  <span>ISO 400</span>
                  <span>5600K</span>
                  <span>SHUTTER 180°</span>
                  <span>f/2.8</span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Floating scroll indicator */}
        <div className="hero-fade-in" style={{ 
          position: 'absolute', 
          bottom: '30px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: '0.4rem',
          color: 'var(--text-muted)',
          fontSize: '0.7rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          zIndex: 5
        }}>
          <span>Scroll Down</span>
          <ChevronDown size={14} className="text-gold" style={{ animation: 'bounce 2s infinite' }} />
        </div>
      </section>

      {/* Styled animation keyframes and split grid layout responsive CSS */}
      <style>{`
        .hero-split-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          min-height: 70vh;
        }

        @media (max-width: 991px) {
          .hero-split-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
            text-align: center;
          }
          .hero-split-grid > div {
            align-items: center;
          }
          .hero-fade-in {
            justify-content: center;
          }
        }

        /* Director's Viewfinder Styling */
        .viewfinder-frame {
          position: relative;
          width: 100%;
          max-width: 540px;
          aspect-ratio: 16 / 10;
          background-color: #000;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 1.5rem 1rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .viewfinder-corner {
          position: absolute;
          width: 16px;
          height: 16px;
          border: 1.5px solid var(--accent-gold);
          z-index: 5;
          pointer-events: none;
        }

        .viewfinder-corner.top-left { top: 6px; left: 6px; border-right: none; border-bottom: none; }
        .viewfinder-corner.top-right { top: 6px; right: 6px; border-left: none; border-bottom: none; }
        .viewfinder-corner.bottom-left { bottom: 6px; left: 6px; border-right: none; border-top: none; }
        .viewfinder-corner.bottom-right { bottom: 6px; right: 6px; border-left: none; border-top: none; }

        .viewfinder-telemetry-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.65rem;
          color: var(--text-muted);
          font-family: monospace;
          letter-spacing: 0.05em;
          margin-bottom: 0.6rem;
          padding: 0 0.5rem;
        }

        .rec-dot-anim {
          width: 6px;
          height: 6px;
          background-color: #ff3b30;
          border-radius: 50%;
          display: inline-block;
          animation: blink 1.2s infinite;
        }

        .viewfinder-video-container {
          position: relative;
          flex-grow: 1;
          background-color: #080808;
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.04);
        }

        .viewfinder-controls {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          display: flex;
          gap: 0.5rem;
          z-index: 6;
        }

        .viewfinder-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: rgba(10, 10, 10, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(4px);
          transition: var(--transition-smooth);
          cursor: pointer;
        }

        .viewfinder-btn:hover {
          background-color: var(--accent-gold);
          border-color: var(--accent-gold);
        }

        .viewfinder-telemetry-footer {
          display: flex;
          justify-content: space-between;
          font-size: 0.65rem;
          color: var(--text-muted);
          font-family: monospace;
          letter-spacing: 0.05em;
          margin-top: 0.6rem;
          padding: 0 0.5rem;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-6px) translateX(-50%); }
          60% { transform: translateY(-3px) translateX(-50%); }
        }
      `}</style>

      {/* Category Showcase Cards Upgraded with Visual Backgrounds */}
      <section className="section section-cream">
        <div className="container">
          <div className="text-center">
            <span className="section-tagline">Visual Expertise</span>
            <h2 className="section-title">What We Create</h2>
            <p className="section-desc">We combine premium production equipment, editorial eyes, and technical precision to deliver unmatched quality across three dedicated services.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: '3rem', marginTop: '2rem' }}>
            
            {/* Weddings Card */}
            <div className="showcase-card">
              <div className="showcase-media-header" style={{ backgroundImage: 'url("/images/wedding_adare_manor.png")' }}>
                <div className="showcase-vignette"></div>
                <div className="showcase-number">01</div>
                <div className="showcase-icon-box">
                  <Film size={26} />
                </div>
              </div>
              <div className="showcase-body">
                <h3 className="showcase-heading">Cinematic Wedding Films</h3>
                <p className="showcase-text">
                  Your wedding day lasts one day. Our films last forever. Editorial and intimate portraiture mixed with raw documentary style to preserve your once-in-a-lifetime moments in true cinema format.
                </p>
                <Link to="/weddings" className="btn-outline-dark" style={{ textAlign: 'center', width: '100%', marginTop: 'auto' }}>Explore Weddings</Link>
              </div>
            </div>

            {/* Maternity Card */}
            <div className="showcase-card">
              <div className="showcase-media-header" style={{ backgroundImage: 'url("/images/maternity_silhouette_light.png")' }}>
                <div className="showcase-vignette"></div>
                <div className="showcase-number">02</div>
                <div className="showcase-icon-box">
                  <Camera size={26} />
                </div>
              </div>
              <div className="showcase-body">
                <h3 className="showcase-heading">Editorial Maternity</h3>
                <p className="showcase-text">
                  The most powerful story a body has ever told. Pregnancy is not a phase to document at the end; it is a transformation. Intimate silhouette imagery created purely for you and your family.
                </p>
                <Link to="/maternity" className="btn-outline-dark" style={{ textAlign: 'center', width: '100%', marginTop: 'auto' }}>Explore Maternity</Link>
              </div>
            </div>

            {/* Hotels Card */}
            <div className="showcase-card">
              <div className="showcase-media-header" style={{ backgroundImage: 'url("/images/cliff_house_hotel.png")' }}>
                <div className="showcase-vignette"></div>
                <div className="showcase-number">03</div>
                <div className="showcase-icon-box">
                  <Compass size={26} />
                </div>
              </div>
              <div className="showcase-body">
                <h3 className="showcase-heading">Hospitality Campaigns</h3>
                <p className="showcase-text">
                  Guests book what they can see. Poor visuals cost bookings; great visuals fill them. Complete campaign visual assets—resort photography, aerial drone sweeps, and optimized social clips.
                </p>
                <Link to="/hotels" className="btn-outline-dark" style={{ textAlign: 'center', width: '100%', marginTop: 'auto' }}>Explore Campaigns</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Styled card showcase responsive layout styling */}
      <style>{`
        .showcase-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          background-color: var(--bg-white);
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.02);
          border: 1px solid rgba(0, 0, 0, 0.03);
          transition: var(--transition-smooth);
        }

        .showcase-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.05);
          border-color: rgba(201, 168, 76, 0.2);
        }

        .showcase-media-header {
          height: 220px;
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: var(--transition-smooth);
        }

        .showcase-card:hover .showcase-media-header {
          transform: scale(1.02);
        }

        .showcase-vignette {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 100%);
          z-index: 1;
        }

        .showcase-number {
          position: absolute;
          top: 1rem;
          right: 1.5rem;
          font-family: var(--font-headline);
          font-size: 3.5rem;
          font-weight: bold;
          color: rgba(201, 168, 76, 0.2);
          z-index: 2;
          line-height: 1;
        }

        .showcase-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: rgba(10, 10, 10, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          backdrop-filter: blur(4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.25);
        }

        .showcase-body {
          padding: 2.2rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .showcase-heading {
          font-size: 1.45rem;
          font-family: var(--font-headline);
          margin-bottom: 0.8rem;
          color: var(--text-dark);
        }

        .showcase-text {
          color: var(--text-sub);
          font-size: 0.92rem;
          line-height: 1.65;
          margin-bottom: 2rem;
          flex-grow: 1;
        }
      `}</style>

      {/* Philosophy Section */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="section-tagline">Our Philosophy</span>
              <h2 className="section-title" style={{ color: 'var(--text-light)' }}>Built on a belief that visuals change decisions.</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem', fontWeight: 300 }}>
                We are not just a photography agency. We are a dedicated production house that treats every single project as a serious creative investment. 
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2.5rem', fontWeight: 300 }}>
                We choose not to shoot 80 weddings or 200 campaigns a year. We deliberately limit our bookings so that every single client receives our undivided creative focus, meticulous post-production, and elite visual output.
              </p>
              <Link to="/about" className="btn-gold">Our Complete Ethos</Link>
            </div>

            {/* Premium feature highlight cards */}
            <div style={{ display: 'grid', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', padding: '2rem', backgroundColor: '#111', borderRadius: 'var(--border-radius)', border: '1px solid rgba(255,255,255,0.03)' }}>
                <Award size={32} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-light)' }}>Uncompromising Quality</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>We shoot using advanced ultra-HD cinematic cameras, commercial grade lighting, and top-tier drone units.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', padding: '2rem', backgroundColor: '#111', borderRadius: 'var(--border-radius)', border: '1px solid rgba(255,255,255,0.03)' }}>
                <Shield size={32} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-light)' }}>On-Time Delivery</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>We guarantee precise delivery schedules: 6-8 weeks for weddings and 2 weeks for hospitality visual packs.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', padding: '2rem', backgroundColor: '#111', borderRadius: 'var(--border-radius)', border: '1px solid rgba(255,255,255,0.03)' }}>
                <Heart size={32} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-light)' }}>International Positioning</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>With local production bases in both Ireland and India, we eliminate extensive travel overheads for global commissions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Carousel Section */}
      <section className="section section-cream" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="section-tagline">Client Experience</span>
            <h2 className="section-title">What They Say</h2>
          </div>

          <div style={{ position: 'relative', minHeight: '260px' }}>
            {reviews.map((rev, index) => (
              <div 
                key={index} 
                className="testimonial-card"
                style={{ 
                  display: activeReview === index ? 'block' : 'none',
                  animation: 'fadeIn 0.8s ease-in-out'
                }}
              >
                <p className="testimonial-text">"{rev.text}"</p>
                <div className="testimonial-author">{rev.author}</div>
                <div className="testimonial-location">{rev.location}</div>
              </div>
            ))}
          </div>

          {/* Carousel dots navigation */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginTop: '3rem' }}>
            {reviews.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setActiveReview(index)}
                style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  backgroundColor: activeReview === index ? 'var(--accent-gold)' : 'rgba(0,0,0,0.15)',
                  transition: 'background-color 0.3s'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center">
            <span className="section-tagline">Have Questions?</span>
            <h2 className="section-title" style={{ color: 'var(--text-light)' }}>Frequently Asked Questions</h2>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item ${activeFaq === idx ? 'active' : ''}`}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <div className="faq-question-container">
                  <span className="faq-question">{faq.q}</span>
                  <span className="faq-icon" style={{ transform: activeFaq === idx ? 'rotate(180deg)' : 'none' }}>
                    <ChevronDown size={18} />
                  </span>
                </div>
                <div className="faq-answer" style={{ 
                  maxHeight: activeFaq === idx ? '180px' : '0px',
                  opacity: activeFaq === idx ? 1 : 0,
                  transition: 'max-height 0.4s ease, opacity 0.3s ease'
                }}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call To Action */}
      <section className="section section-cream" style={{ textAlign: 'center', padding: '7rem 0' }}>
        <div className="container">
          <span className="section-tagline">Start Your Project</span>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Let's capture what matters.</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.1rem', color: 'var(--text-sub)', fontWeight: 300, lineHeight: '1.7' }}>
            Get in touch to book a discovery call. We discuss your creative goals, verify dates, and supply custom outlines within 24 hours.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-gold">Enquire Now</Link>
            <Link to="/packages" className="btn-outline-dark">View Investment Guide</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
