import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Film, Compass, Heart, X, Play, Pause, Volume2, VolumeX, Check } from 'lucide-react';
import gsap from 'gsap';
import LensFocusImage from '../components/LensFocusImage';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeThumb, setActiveThumb] = useState(0);
  const [viewImage, setViewImage] = useState(null);
  const videoRef = useRef(null);

  const items = [
    {
      id: 1,
      title: "Autumn Collection",
      category: "weddings",
      categoryLabel: "Wedding Film & Photo",
      location: "Adare Manor, Ireland",
      image: "/images/wedding_adare_manor.png",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-cinematic-shot-of-a-couple-hugging-in-nature-41584-large.mp4",
      brief: "To capture the multi-day wedding celebrations of a couple under rain-heavy Irish skies, utilizing the historic stone archways of Adare Manor.",
      solution: "We deployed dual camera units equipped with anamorphic lenses and custom-calibrated warm lighting kits to combat overcast skies. High-altitude drone trajectories captured dramatic sweeps of the manor house between showers, rendering a truly epic editorial aesthetic.",
      metrics: [
        { label: "High-Res Stills", value: "650+" },
        { label: "Sound Design", value: "Custom" },
        { label: "Delivery Time", value: "6 Weeks" },
        { label: "Keepsake Format", value: "Video Book" }
      ],
      deliverables: ["8-Min Cinematic Feature Film", "60-Second Instagram Trailer", "Private High-Res Digital Gallery", "Physical Leather Video Book"],
      gallery: ["/images/wedding_adare_manor.png", "/images/cliffs_of_moher_wedding.png", "/images/wedding_hero_bg.png"]
    },
    {
      id: 2,
      title: "The Light Within",
      category: "maternity",
      categoryLabel: "Editorial Silhouette",
      location: "Dublin Studio, Ireland",
      image: "/images/maternity_silhouette_light.png",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-mother-holding-her-pregnant-belly-in-a-field-44654-large.mp4",
      brief: "An intimate maternity silhouette campaign celebrating body transformation using classical high-contrast studio setups.",
      solution: "Using single-source backlighting and custom silk drapery, we focused purely on form, light, and motion. Shadows were hand-tuned in-camera to ensure zero distortion and maximum focus on silhouette details.",
      metrics: [
        { label: "Studio Setups", value: "3 Unique" },
        { label: "Silhouette Files", value: "45 Stills" },
        { label: "Delivery Time", value: "10 Days" },
        { label: "Prints Supplied", value: "10 Museum" }
      ],
      deliverables: ["2-Hour Silhouette Session", "45 Fine-Art Silhouette Stills", "10 High-Texture Printed Frames", "Custom Digital Archive Portfolio"],
      gallery: ["/images/maternity_silhouette_light.png", "/images/maternity_silhouette_dark.png", "/images/maternity_hero_bg.png"]
    },
    {
      id: 3,
      title: "Cliff House Hotel",
      category: "hotels",
      categoryLabel: "Hospitality Campaign",
      location: "Ardmore, Ireland",
      image: "/images/cliff_house_hotel.png",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-luxury-resort-with-swimming-pools-in-bali-41525-large.mp4",
      brief: "Re-scaffold the visual identity of a five-star seaside luxury hotel built directly into Cliffside rocks.",
      solution: "We filmed across three days, matching drone flights with Ardmore tide patterns. Dynamic, stabilized resort interior clips were captured alongside slow-paced dining, spa transitions, and outdoor infinity pool sweeps optimized for direct booking conversions.",
      metrics: [
        { label: "Booking Increase", value: "30% Direct" },
        { label: "Total Asset Count", value: "150+ Commercial" },
        { label: "Drone Flights", value: "12 Sessions" },
        { label: "Turnaround", value: "2 Weeks" }
      ],
      deliverables: ["Complete Resort Stills Library", "4 High-Impact Social Reels", "3-Minute Master Suite Film", "Unlimited Digital Usage Licensing"],
      gallery: ["/images/cliff_house_hotel.png", "/images/hotel_hero_bg.png", "/images/about_hero_bg.png"]
    },
    {
      id: 4,
      title: "Cliffs of Moher",
      category: "weddings",
      categoryLabel: "Cinematic Elopement",
      location: "County Clare, Ireland",
      image: "/images/cliffs_of_moher_wedding.png",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-bridegroom-couple-dancing-in-nature-41589-large.mp4",
      brief: "An elopement shoot directly on the wild wind-lashed cliffs of Moher, Ireland, under intense gusts.",
      solution: "To achieve stable, highly cinematic framing under 40km/h cliffside winds, we utilized advanced mechanical stabilizing rigs and compact wireless audio receivers hidden inside collars. The editing combined dark color-grading with classical ambient violin tracks.",
      metrics: [
        { label: "Wind Conditions", value: "40km/h Stable" },
        { label: "Highlight Edit", value: "3 Minutes" },
        { label: "Delivery Time", value: "4 Weeks" },
        { label: "Photo Files", value: "250 High-Res" }
      ],
      deliverables: ["3-Minute Cinematic Highlight", "250+ Color-Graded Stills", "Aerial Venues B-Roll Clips", "Secure Web Delivery Link"],
      gallery: ["/images/cliffs_of_moher_wedding.png", "/images/wedding_hero_bg.png", "/images/wedding_adare_manor.png"]
    },
    {
      id: 5,
      title: "The Heritage Resort",
      category: "hotels",
      categoryLabel: "Resort & Spa Campaign",
      location: "Rajasthan, India",
      image: "/images/heritage_resort_india.png",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-drone-shot-of-a-resort-surrounded-by-nature-41908-large.mp4",
      brief: "Rebrand a magnificent 18th-century fort palace converted into a luxury resort in desert lands.",
      solution: "Over five days, our Indian crew captured sunrise silhouettes of the fort gates, swimming pool dynamics in 40°C heat, and candlelight fine-dining setups. Warm HSL color grading highlighted natural sandstones and gold palace trims, driving corporate interest.",
      metrics: [
        { label: "ROI Booking Gain", value: "45% Leads" },
        { label: "Asset Count", value: "220+ Commercial" },
        { label: "Timelapse Hours", value: "18 Session Hrs" },
        { label: "Turnaround", value: "3 Weeks" }
      ],
      deliverables: ["Fort Palace Stills Library", "6 Corporate Vertical Reels", "5-Min Luxury Master Promo", "Full Drone Master Shots"],
      gallery: ["/images/heritage_resort_india.png", "/images/about_hero_bg.png", "/images/hotel_hero_bg.png"]
    },
    {
      id: 6,
      title: "Serene Transformations",
      category: "maternity",
      categoryLabel: "Fine-Art Silhouette",
      location: "Studio Session, India",
      image: "/images/maternity_silhouette_dark.png",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-pregnant-woman-walking-slowly-in-nature-44651-large.mp4",
      brief: "A high-concept silhouette shoot utilizing golden hour lighting transitions in an indoor/outdoor courtyard.",
      solution: "We blended classical Indian architecture shadows with golden light flares to create editorial, painterly silhouettes that express deep motherhood grace without conventional studio staging.",
      metrics: [
        { label: "Courtyard Setups", value: "2 Unique" },
        { label: "Fine-Art Files", value: "35 Stills" },
        { label: "Turnaround Time", value: "7 Days" },
        { label: "Custom Framing", value: "5 Wood Frames" }
      ],
      deliverables: ["2-Hour Courtyard Session", "35 Painterly Silhouettes", "5 Museum Framed Works", "Custom Digital Archive Link"],
      gallery: ["/images/maternity_silhouette_dark.png", "/images/maternity_silhouette_light.png", "/images/maternity_hero_bg.png"]
    }
  ];

  const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    gsap.to(card, {
      rotateY: x * 12,
      rotateX: -y * 12,
      transformPerspective: 1000,
      ease: 'power3.out',
      duration: 0.5
    });
    
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

  const openModal = (item) => {
    setSelectedItem(item);
    setIsPlaying(true);
    setIsMuted(true);
    setActiveThumb(0);
    setViewImage(null);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleThumbClick = (img, idx) => {
    setActiveThumb(idx);
    if (idx === 0) {
      setViewImage(null); // Show video
    } else {
      setViewImage(img); // Show still image
    }
  };

  useEffect(() => {
    gsap.fromTo('.portfolio-card-anim', 
      { opacity: 0, scale: 0.95, y: 20 }, 
      { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
    );
  }, [filter]);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', paddingTop: '140px', paddingBottom: '8rem' }}>
      <div className="container">
        
        {/* Page Title Header */}
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <span 
            style={{ 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.3em', 
              color: 'var(--accent-gold)', 
              display: 'block', 
              marginBottom: '1rem' 
            }}
          >
            Visual Archive
          </span>
          <h1 
            className="packages-editorial-font"
            style={{ 
              fontSize: 'clamp(2.8rem, 5vw, 4.8rem)', 
              fontWeight: 300, 
              lineHeight: 1.2, 
              marginBottom: '1.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            Selected Works
          </h1>
          <p style={{ 
            fontSize: '0.92rem', 
            maxWidth: '650px', 
            margin: '0 auto', 
            color: '#a0a0a0',
            fontWeight: 300,
            lineHeight: '1.8'
          }}>
            Explore our curated creations across cinematic wedding films, editorial maternity silhouettes, and luxury hospitality campaigns in Ireland and India. Click any item to explore its narrative case study.
          </p>
        </div>

        {/* Filter Navigation */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem', 
          flexWrap: 'wrap', 
          marginBottom: '5rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          paddingBottom: '2.5rem'
        }}>
          {['all', 'weddings', 'maternity', 'hotels'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.6rem 1.6rem',
                borderRadius: '0px',
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontWeight: 500,
                border: '1px solid',
                borderColor: filter === cat ? '#c4b097' : 'rgba(255,255,255,0.15)',
                backgroundColor: filter === cat ? '#c4b097' : 'transparent',
                color: filter === cat ? '#121212' : '#a0a0a0',
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
              onClick={() => openModal(item)}
              style={{
                background: '#0b0b0b',
                border: '1px solid rgba(255, 255, 255, 0.03)',
                position: 'relative',
                overflow: 'hidden',
                transformStyle: 'preserve-3d'
              }}
            >
              <LensFocusImage 
                src={item.image} 
                alt={item.title} 
                loading="lazy"
              />

              <div className="portfolio-overlay" style={{ transformStyle: 'preserve-3d', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.3) 60%, transparent 100%)' }}>
                <span className="portfolio-category" style={{ color: 'var(--accent-gold)', letterSpacing: '0.15em' }}>{item.categoryLabel}</span>
                <h3 className="portfolio-title" style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.4rem', textTransform: 'uppercase', fontWeight: 300, letterSpacing: '0.05em' }}>{item.title}</h3>
                <span style={{ fontSize: '0.72rem', color: '#a0a0a0', marginTop: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Narrative Case Study Modal */}
        {selectedItem && (
          <div className="case-study-overlay" onClick={() => setSelectedItem(null)}>
            <div className="case-study-container" onClick={(e) => e.stopPropagation()}>
              
              <button className="case-study-close" onClick={() => setSelectedItem(null)} aria-label="Close Case Study">
                <X size={20} />
              </button>

              <div className="case-study-grid">
                
                {/* Media Column */}
                <div className="case-study-media-col">
                  <div className="case-study-viewer">
                    {viewImage ? (
                      <img src={viewImage} alt="Large Showcase" className="case-still-image" />
                    ) : (
                      <div className="case-video-wrapper">
                        <video
                          ref={videoRef}
                          key={selectedItem.id}
                          autoPlay
                          loop
                          muted={isMuted}
                          playsInline
                          className="case-video-element"
                        >
                          <source src={selectedItem.videoUrl} type="video/mp4" />
                        </video>
                        <div className="video-controls">
                          <button onClick={togglePlay} className="video-ctrl-btn" aria-label={isPlaying ? 'Pause' : 'Play'}>
                            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                          </button>
                          <button onClick={toggleMute} className="video-ctrl-btn" aria-label={isMuted ? 'Unmute' : 'Mute'}>
                            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Selector */}
                  <div className="case-thumbs-row">
                    {selectedItem.gallery.map((img, index) => (
                      <div 
                        key={index} 
                        className={`case-thumb-box ${activeThumb === index ? 'active' : ''}`}
                        onClick={() => handleThumbClick(img, index)}
                      >
                        {index === 0 ? (
                          <div className="video-thumb-indicator">
                            <Play size={14} style={{ zIndex: 3 }} />
                            <img src={img} alt="Video Thumbnail" />
                          </div>
                        ) : (
                          <img src={img} alt={`Thumbnail ${index}`} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Narrative Text Column */}
                <div className="case-study-details-col">
                  
                  <div className="case-badge-container">
                    <span className="case-badge-gold" style={{ background: 'var(--accent-gold)', borderRadius: '0px' }}>{selectedItem.categoryLabel}</span>
                    <span className="case-badge-outline" style={{ borderRadius: '0px', borderColor: 'rgba(255,255,255,0.15)' }}>{selectedItem.location}</span>
                  </div>

                  <h2 className="case-heading packages-editorial-font" style={{ textTransform: 'uppercase', fontWeight: 300 }}>{selectedItem.title}</h2>
                  
                  <div className="case-divider" />

                  <div className="case-section">
                    <h4 className="case-section-lbl" style={{ color: 'var(--accent-gold)' }}>The Creative Brief</h4>
                    <p className="case-section-desc">{selectedItem.brief}</p>
                  </div>

                  <div className="case-section">
                    <h4 className="case-section-lbl" style={{ color: 'var(--accent-gold)' }}>The Visual Solution</h4>
                    <p className="case-section-desc">{selectedItem.solution}</p>
                  </div>

                  <div className="case-section">
                    <h4 className="case-section-lbl" style={{ color: 'var(--accent-gold)' }}>Signature Deliverables</h4>
                    <ul className="case-deliverables">
                      {selectedItem.deliverables.map((item, i) => (
                        <li key={i}>
                          <Check size={14} className="text-gold" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="case-divider" />

                  {/* Operational Metrics Panel */}
                  <div className="case-metrics">
                    {selectedItem.metrics.map((met, i) => (
                      <div key={i} className="case-metric-box" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '0px' }}>
                        <span className="case-metric-val" style={{ fontFamily: 'var(--font-editorial)', fontWeight: 300 }}>{met.value}</span>
                        <span className="case-metric-lbl">{met.label}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '2.5rem' }}>
                    <Link to="/contact" className="btn-gold" style={{ width: '100%', textAlign: 'center', display: 'block', letterSpacing: '0.12em' }}>
                      Enquire For Similar Project
                    </Link>
                  </div>

                </div>

              </div>

            </div>
          </div>
        )}

        {/* Dedicated Styles for Premium Modal Overlay */}
        <style>{`
          .case-study-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(4, 4, 4, 0.95);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2.5rem;
            overflow-y: auto;
            animation: overlayFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .case-study-container {
            position: relative;
            background-color: #0b0b0b;
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 4px;
            width: 100%;
            max-width: 1100px;
            overflow: hidden;
            box-shadow: 0 30px 65px rgba(0,0,0,0.8);
            animation: containerSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .case-study-close {
            position: absolute;
            top: 1.2rem;
            right: 1.2rem;
            z-index: 10;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: rgba(0,0,0,0.5);
            border: 1px solid rgba(255,255,255,0.06);
            color: var(--text-light);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition-smooth);
          }

          .case-study-close:hover {
            background-color: var(--accent-gold);
            border-color: var(--accent-gold);
            color: var(--bg-white);
            transform: rotate(90deg);
          }

          .case-study-grid {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            min-height: 580px;
          }

          @media (max-width: 900px) {
            .case-study-grid {
              grid-template-columns: 1fr;
            }
            .case-study-overlay {
              padding: 1rem;
            }
          }

          /* Media Column Styles */
          .case-study-media-col {
            background-color: #050505;
            display: flex;
            flex-direction: column;
            border-right: 1px solid rgba(255, 255, 255, 0.04);
          }

          .case-study-viewer {
            position: relative;
            width: 100%;
            aspect-ratio: 16 / 10;
            background-color: #000;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .case-still-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            animation: fadeIn 0.4s ease-out;
          }

          .case-video-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
          }

          .case-video-element {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .video-controls {
            position: absolute;
            bottom: 1.2rem;
            right: 1.2rem;
            display: flex;
            gap: 0.6rem;
            z-index: 5;
          }

          .video-ctrl-btn {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background-color: rgba(10, 10, 10, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.12);
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(4px);
            transition: var(--transition-smooth);
          }

          .video-ctrl-btn:hover {
            background-color: var(--accent-gold);
            border-color: var(--accent-gold);
          }

          .case-thumbs-row {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1px;
            background-color: rgba(255, 255, 255, 0.04);
            margin-top: auto;
          }

          .case-thumb-box {
            position: relative;
            aspect-ratio: 16 / 9;
            cursor: pointer;
            overflow: hidden;
            opacity: 0.5;
            transition: var(--transition-smooth);
          }

          .case-thumb-box:hover,
          .case-thumb-box.active {
            opacity: 1;
          }

          .case-thumb-box img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .video-thumb-indicator {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
          }

          .video-thumb-indicator::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0,0,0,0.3);
            z-index: 2;
          }

          /* Details Column Styles */
          .case-study-details-col {
            padding: 2.5rem;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
            max-height: 650px;
          }

          @media (max-width: 900px) {
            .case-study-details-col {
              max-height: none;
              padding: 2.5rem 1.8rem;
            }
          }

          .case-badge-container {
            display: flex;
            gap: 0.8rem;
            margin-bottom: 1.2rem;
            flex-wrap: wrap;
          }

          .case-badge-gold {
            background-color: var(--accent-gold);
            color: var(--bg-white);
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1rem;
            padding: 0.4rem 0.8rem;
          }

          .case-badge-outline {
            border: 1px solid rgba(255,255,255,0.15);
            color: var(--text-muted);
            font-size: 0.7rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.1rem;
            padding: 0.4rem 0.8rem;
          }

          .case-heading {
            font-size: clamp(1.8rem, 3.5vw, 2.4rem);
            font-family: var(--font-editorial);
            margin-bottom: 1rem;
            color: var(--text-light);
          }

          .case-divider {
            height: 1px;
            background-color: rgba(255,255,255,0.06);
            margin: 1.5rem 0;
            width: 100%;
          }

          .case-section {
            margin-bottom: 1.5rem;
          }

          .case-section-lbl {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: var(--accent-gold);
            margin-bottom: 0.5rem;
            font-weight: 600;
          }

          .case-section-desc {
            font-size: 0.88rem;
            line-height: 1.6;
            color: #a0a0a0;
            font-weight: 300;
          }

          .case-deliverables {
            list-style: none;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 0.6rem;
            margin-top: 0.5rem;
          }

          .case-deliverables li {
            font-size: 0.82rem;
            color: #a0a0a0;
            display: flex;
            gap: 0.5rem;
            align-items: flex-start;
          }

          .case-metrics {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.2rem;
          }

          .case-metric-box {
            padding: 1.2rem;
            background-color: rgba(255,255,255,0.02);
            border: 1px solid rgba(255,255,255,0.04);
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .case-metric-val {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--accent-gold);
            font-family: var(--font-headline);
            margin-bottom: 0.2rem;
          }

          .case-metric-lbl {
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--text-muted);
          }

          @keyframes overlayFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes containerSlideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

      </div>
    </div>
  );
}
