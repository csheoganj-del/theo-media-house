import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Film, Compass, ChevronDown, Check, Heart, Shield, Award } from 'lucide-react';
import gsap from 'gsap';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeReview, setActiveReview] = useState(0);

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
    // Review rotation timer
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
  }, []);

  return (
    <div>
      {/* Premium Hero Section */}
      <section style={{ 
        position: 'relative', 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0d0d0d 0%, #151515 50%, #000000 100%)',
        color: 'var(--text-light)',
        textAlign: 'center',
        paddingTop: '80px'
      }}>
        {/* Abstract luxury ambient overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 70% 30%, rgba(201, 168, 76, 0.08) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ zIndex: 2 }}>
          <span className="section-tagline hero-fade-in">ONE PRODUCTION HOUSE &bull; IRELAND & INDIA</span>
          
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', 
            fontWeight: 400, 
            lineHeight: 1.1, 
            marginBottom: '2rem',
            fontFamily: 'var(--font-headline)'
          }}>
            <div className="hero-title-line">Cinematic Wedding Films.</div>
            <div className="hero-title-line" style={{ color: 'var(--accent-gold)' }}>Premium Hotel Campaigns.</div>
          </h1>

          <p className="hero-fade-in" style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
            maxWidth: '650px', 
            margin: '0 auto 3.5rem auto', 
            color: 'var(--text-muted)',
            fontWeight: 300,
            lineHeight: '1.7'
          }}>
            We produce high-impact, cinematic visual stories for clients who demand excellence, from intimate wedding productions to international hospitality campaigns.
          </p>

          <div className="hero-fade-in" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-gold">Book Discovery Call</Link>
            <Link to="/portfolio" className="btn-outline-white">View Portfolio</Link>
          </div>
        </div>

        {/* Floating scroll indicator */}
        <div className="hero-fade-in" style={{ 
          position: 'absolute', 
          bottom: '40px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--text-muted)',
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }}>
          <span>Scroll Down</span>
          <ChevronDown size={16} className="text-gold" style={{ animation: 'bounce 2s infinite' }} />
        </div>
      </section>

      {/* Styled animation keyframe for bounce inside Javascript style injection */}
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }
      `}</style>

      {/* Category Showcase Cards */}
      <section className="section section-cream">
        <div className="container">
          <div className="text-center">
            <span className="section-tagline">Visual Expertise</span>
            <h2 className="section-title">What We Create</h2>
            <p className="section-desc">We combine premium production equipment, editorial eyes, and technical precision to deliver unmatched quality across three dedicated services.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginTop: '2rem' }}>
            
            {/* Weddings Card */}
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'var(--bg-white)', borderRadius: 'var(--border-radius)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <div style={{ height: '240px', background: 'linear-gradient(135deg, #181818 0%, #2c2c2c 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ color: 'rgba(201,168,76,0.1)', position: 'absolute', right: '10px', bottom: '-20px', fontSize: '10rem', fontWeight: 'bold' }}>01</div>
                <Film size={54} style={{ color: 'var(--accent-gold)', zIndex: 2 }} />
              </div>
              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Cinematic Wedding Films</h3>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem', flexGrow: 1 }}>
                  Your wedding day lasts one day. Our films last forever. Editorial and intimate portraiture mixed with raw documentary style to preserve your once-in-a-lifetime moments in true cinema format.
                </p>
                <Link to="/weddings" className="btn-outline-dark" style={{ textAlign: 'center' }}>Explore Weddings</Link>
              </div>
            </div>

            {/* Maternity Card */}
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'var(--bg-white)', borderRadius: 'var(--border-radius)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <div style={{ height: '240px', background: 'linear-gradient(135deg, #181818 0%, #2c2c2c 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ color: 'rgba(201,168,76,0.1)', position: 'absolute', right: '10px', bottom: '-20px', fontSize: '10rem', fontWeight: 'bold' }}>02</div>
                <Camera size={54} style={{ color: 'var(--accent-gold)', zIndex: 2 }} />
              </div>
              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Editorial Maternity</h3>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem', flexGrow: 1 }}>
                  The most powerful story a body has ever told. Pregnancy is not a phase to document at the end; it is a transformation. Intimate silhouette imagery created purely for you and your family.
                </p>
                <Link to="/maternity" className="btn-outline-dark" style={{ textAlign: 'center' }}>Explore Maternity</Link>
              </div>
            </div>

            {/* Hotels Card */}
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'var(--bg-white)', borderRadius: 'var(--border-radius)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <div style={{ height: '240px', background: 'linear-gradient(135deg, #181818 0%, #2c2c2c 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ color: 'rgba(201,168,76,0.1)', position: 'absolute', right: '10px', bottom: '-20px', fontSize: '10rem', fontWeight: 'bold' }}>03</div>
                <Compass size={54} style={{ color: 'var(--accent-gold)', zIndex: 2 }} />
              </div>
              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Hospitality Campaigns</h3>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem', flexGrow: 1 }}>
                  Guests book what they can see. Poor visuals cost bookings; great visuals fill them. Complete campaign visual packages—resort photography, aerial drone, and optimized social reels designed to convert.
                </p>
                <Link to="/hotels" className="btn-outline-dark" style={{ textAlign: 'center' }}>Explore Campaigns</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

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
