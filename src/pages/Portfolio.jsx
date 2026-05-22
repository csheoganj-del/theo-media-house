import React, { useState, useEffect } from 'react';
import { Camera, Film, Compass, Heart } from 'lucide-react';
import gsap from 'gsap';
import LensFocusImage from '../components/LensFocusImage';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const items = [
    {
      id: 1,
      title: "Autumn Collection",
      category: "weddings",
      categoryLabel: "Wedding Film & Photo",
      location: "Adare Manor, Ireland",
      image: "/images/wedding_adare_manor.png"
    },
    {
      id: 2,
      title: "The Light Within",
      category: "maternity",
      categoryLabel: "Editorial Silhouette",
      location: "Dublin Studio, Ireland",
      image: "/images/maternity_silhouette_light.png"
    },
    {
      id: 3,
      title: "Cliff House Hotel",
      category: "hotels",
      categoryLabel: "Hospitality Campaign",
      location: "Ardmore, Ireland",
      image: "/images/cliff_house_hotel.png"
    },
    {
      id: 4,
      title: "Cliffs of Moher",
      category: "weddings",
      categoryLabel: "Cinematic Elopement",
      location: "County Clare, Ireland",
      image: "/images/cliffs_of_moher_wedding.png"
    },
    {
      id: 5,
      title: "The Heritage Resort",
      category: "hotels",
      categoryLabel: "Resort & Spa Campaign",
      location: "Rajasthan, India",
      image: "/images/heritage_resort_india.png"
    },
    {
      id: 6,
      title: "Serene Transformations",
      category: "maternity",
      categoryLabel: "Fine-Art Silhouette",
      location: "Studio Session, India",
      image: "/images/maternity_silhouette_dark.png"
    }
  ];

  const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Physics 3D tilt
    gsap.to(card, {
      rotateY: x * 12,
      rotateX: -y * 12,
      transformPerspective: 1000,
      ease: 'power3.out',
      duration: 0.5
    });
    
    // Shift image in opposite direction for parallax depth
    const img = card.querySelector('img');
    if (img) {
      gsap.to(img, {
        x: -x * 18,
        y: -y * 18,
        scale: 1.1,
        ease: 'power3.out',
        duration: 0.5
      });
    }

    // Floating text overlay depth offset
    const overlay = card.querySelector('.portfolio-overlay');
    if (overlay) {
      gsap.to(overlay, {
        x: x * 8,
        y: y * 8,
        ease: 'power3.out',
        duration: 0.5
      });
    }
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    
    // Snap back with spring elastic physics!
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      transformPerspective: 1000,
      ease: 'elastic.out(1.2, 0.4)',
      duration: 0.9
    });
    
    const img = card.querySelector('img');
    if (img) {
      gsap.to(img, {
        x: 0,
        y: 0,
        scale: 1,
        ease: 'elastic.out(1.2, 0.4)',
        duration: 0.9
      });
    }

    const overlay = card.querySelector('.portfolio-overlay');
    if (overlay) {
      gsap.to(overlay, {
        x: 0,
        y: 0,
        ease: 'elastic.out(1.2, 0.4)',
        duration: 0.9
      });
    }
  };

  useEffect(() => {
    // Trigger GSAP fade-in grid animation on filter change
    gsap.fromTo('.portfolio-card-anim', 
      { opacity: 0, scale: 0.95, y: 20 }, 
      { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
    );
  }, [filter]);

  return (
    <div style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-light)', minHeight: '100vh', paddingTop: '140px', paddingBottom: '6rem' }}>
      <div className="container">
        
        {/* Page Title Header */}
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="section-tagline">Visual Archive</span>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
            fontWeight: 400, 
            lineHeight: 1.2, 
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-headline)'
          }}>
            Selected Works
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            maxWidth: '650px', 
            margin: '0 auto', 
            color: 'var(--text-muted)',
            fontWeight: 300,
            lineHeight: '1.7'
          }}>
            Explore our curated creations across cinematic wedding films, editorial maternity silhouettes, and luxury hospitality campaigns in Ireland and India.
          </p>
        </div>

        {/* Filter Navigation */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem', 
          flexWrap: 'wrap', 
          marginBottom: '4rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          paddingBottom: '2rem'
        }}>
          {['all', 'weddings', 'maternity', 'hotels'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.8rem 1.8rem',
                borderRadius: '30px',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontWeight: 500,
                border: '1px solid',
                borderColor: filter === cat ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)',
                backgroundColor: filter === cat ? 'var(--accent-gold)' : 'transparent',
                color: filter === cat ? 'var(--bg-white)' : 'var(--text-muted)',
                transition: 'var(--transition-smooth)'
              }}
            >
              {cat === 'all' ? 'View All' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="portfolio-item portfolio-card-anim"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                background: 'var(--bg-card-dark)',
                position: 'relative',
                overflow: 'hidden',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Luxury Rendered Image */}
              <LensFocusImage 
                src={item.image} 
                alt={item.title} 
                loading="lazy"
              />

              {/* Styled details overlay */}
              <div className="portfolio-overlay" style={{ transformStyle: 'preserve-3d' }}>
                <span className="portfolio-category">{item.categoryLabel}</span>
                <h3 className="portfolio-title">{item.title}</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>{item.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CSS Hover Styling for fallback icons */}
        <style>{`
          .portfolio-item:hover .item-icon-hover {
            color: rgba(201, 168, 76, 0.15) !important;
          }
        `}</style>

      </div>
    </div>
  );
}
