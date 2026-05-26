import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Sparkles, Check, Clock, ShieldCheck, Heart } from 'lucide-react';
import gsap from 'gsap';

export default function Packages() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    // Premium GSAP Stagger Animations
    gsap.fromTo('.packages-hero-anim',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.4, stagger: 0.25, ease: 'power4.out' }
    );

    gsap.fromTo('.packages-card-anim',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.12, ease: 'power3.out', delay: 0.4 }
    );

    // Scroll triggered style entries (simulate using threshold for premium feel)
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('trigger-testimonial')) {
            gsap.fromTo('.testimonial-fade',
              { opacity: 0, scale: 0.98, y: 20 },
              { opacity: 1, scale: 1, y: 0, duration: 1.2, stagger: 0.2, ease: 'power2.out' }
            );
          } else if (entry.target.classList.contains('trigger-olive')) {
            gsap.fromTo('.olive-fade-left',
              { opacity: 0, x: -50 },
              { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out' }
            );
            gsap.fromTo('.olive-fade-right',
              { opacity: 0, x: 50 },
              { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', delay: 0.2 }
            );
          }
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const testimonialEl = document.querySelector('.trigger-testimonial');
    const oliveEl = document.querySelector('.trigger-olive');

    if (testimonialEl) observer.observe(testimonialEl);
    if (oliveEl) observer.observe(oliveEl);

    return () => {
      if (testimonialEl) observer.unobserve(testimonialEl);
      if (oliveEl) observer.unobserve(oliveEl);
    };
  }, []);

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  const categories = [
    {
      title: 'Weddings',
      image: '/images/packages_weddings.png',
      link: '/weddings'
    },
    {
      title: 'Elopements',
      image: '/images/packages_elopements.png',
      link: '/weddings'
    },
    {
      title: 'Intimate',
      image: '/images/packages_intimate.png',
      link: '/maternity'
    },
    {
      title: 'Adventure',
      image: '/images/packages_adventure.png',
      link: '/portfolio'
    },
    {
      title: 'Lifestyle',
      image: '/images/packages_lifestyle.png',
      link: '/maternity'
    }
  ];

  const accordionItems = [
    {
      title: 'Half Day (6 Hours)',
      body: 'Ideal for intimate weddings, mid-size celebrations, or elopements. This package covers guest arrivals, key ceremony highlights, editorial portrait sessions, and early reception moments. Includes high-resolution color-graded files, a private digital download gallery, and custom curation.'
    },
    {
      title: 'Full Day (8 Hours)',
      body: 'Our most sought-after coverage. Captures the complete narrative from morning preparations and fine-art detail closeups, all the way to late-night dancing. Features a second cinematographer/photographer, comprehensive coverage of vows, and high-impact custom color grading.'
    },
    {
      title: 'Full Day Plus (10 Hours)',
      body: 'For couples seeking complete peace of mind. Covers late-night farewells, full-scale receptions, luxury morning spreads, drone flyovers, a cinematic social highlight reel, and priority 4-week delivery.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', overflow: 'hidden' }}>
      
      {/* 1. Curved Hero Section */}
      <section 
        className="hero-curved-bottom"
        style={{
          position: 'relative',
          height: '92vh',
          width: '100%',
          backgroundImage: 'url("/images/packages_hero.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
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

        <div style={{ position: 'relative', zIndex: 2, padding: '0 2rem' }}>
          <span 
            className="packages-hero-anim" 
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
            Explore The
          </span>
          <h1 
            className="packages-hero-anim packages-editorial-font"
            style={{
              fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
              fontWeight: 300,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              lineHeight: 1.1,
              color: '#fff',
              margin: 0
            }}
          >
            Packages
          </h1>
        </div>
      </section>

      {/* 2. 5-Column Tall Cards Grid Section */}
      <section style={{ backgroundColor: '#000', padding: '6rem 0 10rem 0' }}>
        <div className="container">
          <div className="tall-packages-grid">
            {categories.map((cat, idx) => (
              <div key={idx} className="tall-package-card packages-card-anim">
                <div className="tall-card-image-wrapper">
                  <img src={cat.image} alt={cat.title} loading="lazy" />
                </div>
                <div className="tall-card-content">
                  <h3 className="tall-card-title">{cat.title}</h3>
                  <Link to={cat.link} className="tall-card-btn">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Parallax Testimonial Banner Section */}
      <section 
        className="parallax-testimonial-section trigger-testimonial"
        style={{ backgroundImage: 'url("/images/packages_memorable_bg.png")' }}
      >
        <div className="dark-overlay-mask" />
        <div className="testimonial-overlay-content">
          <h2 
            className="testimonial-fade packages-editorial-font"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.8rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontWeight: 300,
              color: '#fff',
              marginBottom: '2.5rem'
            }}
          >
            "Memorable Moments"
          </h2>
          <p 
            className="testimonial-fade"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)',
              lineHeight: 1.8,
              color: '#d4d3c9',
              fontWeight: 300,
              fontStyle: 'italic',
              margin: '0 auto',
              maxWidth: '720px'
            }}
          >
            Karen literally makes you feel like she is a great friend that came to shoot
            one of your most special days. People asked me multiple times after our
            wedding how long we have known the gal that did our photography,
            because she was so personable and friendly. She truly was invested and
            part of our day, not just someone shooting from the sidelines. Thank you
            for shooting our most memorable moments.
          </p>
        </div>
      </section>

      {/* 4. Detailed Pricing splits & Accordion (Olive background #2b2a1e) */}
      <section className="olive-pricing-section trigger-olive">
        <div className="container">
          <div className="olive-pricing-grid">
            
            {/* Left Image column */}
            <div className="olive-pricing-image-wrapper olive-fade-left">
              <img 
                src="/images/packages_wedding_detail.png" 
                alt="Wedding couple embrace detailed view" 
                loading="lazy"
              />
            </div>

            {/* Right Information Column */}
            <div className="olive-pricing-content olive-fade-right">
              <span className="olive-title-pre">Wedding</span>
              <h2 className="olive-title">Packages</h2>

              <p className="olive-desc">
                No matter how you envision your wedding day or how much coverage you require, we have collections crafted to capture every fleeting emotion, from fine detail to sweeping aerial drone views. We preserve your day so it lives forever.
              </p>
              <p className="olive-desc">
                Getting married outside our local area? We are highly experienced destination documentarians—reach out for custom travel breakdowns and priority availability bookings.
              </p>

              <h4 className="olive-subtitle">Whats Included?</h4>
              
              <ul className="olive-inclusions-list">
                <li>Optional engagement fine-art portraits</li>
                <li>Complete morning-to-exit detail coverage</li>
                <li>Meticulously edited high-resolution files</li>
                <li>Private digital download gallery & print release</li>
                <li>Custom cinematic audio & score design (for films)</li>
              </ul>

              {/* Accordion dropdowns */}
              <div className="premium-accordion">
                {accordionItems.map((item, idx) => (
                  <div 
                    key={idx}
                    className={`premium-accordion-item ${activeAccordion === idx ? 'active' : ''}`}
                    onClick={() => toggleAccordion(idx)}
                  >
                    <div className="premium-accordion-header">
                      <h5 className="premium-accordion-title">{item.title}</h5>
                      <span className="premium-accordion-icon">
                        <ChevronDown size={18} />
                      </span>
                    </div>
                    <div className="premium-accordion-content">
                      <div className="premium-accordion-body">
                        {item.body}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div style={{ marginTop: '4rem' }}>
                <Link to="/contact" className="btn-gold" style={{ display: 'inline-block' }}>
                  Enquire Collection
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
