import React, { useState, useEffect } from 'react';
import { Camera, Film, Compass, Heart } from 'lucide-react';
import gsap from 'gsap';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const items = [
    {
      id: 1,
      title: "Autumn Collection",
      category: "weddings",
      categoryLabel: "Wedding Film & Photo",
      location: "Adare Manor, Ireland"
    },
    {
      id: 2,
      title: "The Light Within",
      category: "maternity",
      categoryLabel: "Editorial Silhouette",
      location: "Dublin Studio, Ireland"
    },
    {
      id: 3,
      title: "Cliff House Hotel",
      category: "hotels",
      categoryLabel: "Hospitality Campaign",
      location: "Ardmore, Ireland"
    },
    {
      id: 4,
      title: "Cliffs of Moher",
      category: "weddings",
      categoryLabel: "Cinematic Elopement",
      location: "County Clare, Ireland"
    },
    {
      id: 5,
      title: "The Heritage Resort",
      category: "hotels",
      categoryLabel: "Resort & Spa Campaign",
      location: "Rajasthan, India"
    },
    {
      id: 6,
      title: "Serene Transformations",
      category: "maternity",
      categoryLabel: "Fine-Art Silhouette",
      location: "Studio Session, India"
    }
  ];

  const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

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
              style={{
                // Custom solid aesthetic backgrounds for visual placeholder effect
                background: 'linear-gradient(135deg, #181818 0%, #252525 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Fallback graphic/icon when no image is uploaded */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.05)', transition: 'color 0.4s' }} className="item-icon-hover">
                {item.category === 'weddings' && <Film size={60} />}
                {item.category === 'maternity' && <Camera size={60} />}
                {item.category === 'hotels' && <Compass size={60} />}
              </div>

              {/* Styled details overlay */}
              <div className="portfolio-overlay">
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
