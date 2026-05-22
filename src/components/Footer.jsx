import React from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Instagram = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Youtube = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-light)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '5rem 0 3rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3.5rem', marginBottom: '4rem' }}>
          
          {/* Logo & Description */}
          <div>
            <h3 className="logo" style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>
              THEOMEDIA<span>.</span>
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem', fontWeight: 300 }}>
              Cinematic films and editorial photography capturing your once-in-a-lifetime moments. Based in Ireland and India, working worldwide.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} onMouseOver={(e)=>e.currentTarget.style.color='var(--accent-gold)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--text-muted)'}>
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} onMouseOver={(e)=>e.currentTarget.style.color='var(--accent-gold)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--text-muted)'}>
                <Youtube size={20} />
              </a>
              <a href="https://wa.me/353852258004" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} onMouseOver={(e)=>e.currentTarget.style.color='var(--accent-gold)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--text-muted)'}>
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent-gold)', marginBottom: '1.5rem', fontWeight: 600 }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.95rem' }}>
              <li>
                <NavLink to="/weddings" style={{ color: 'var(--text-muted)' }} onMouseOver={(e)=>e.currentTarget.style.color='var(--text-light)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--text-muted)'}>
                  Cinematic Weddings
                </NavLink>
              </li>
              <li>
                <NavLink to="/maternity" style={{ color: 'var(--text-muted)' }} onMouseOver={(e)=>e.currentTarget.style.color='var(--text-light)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--text-muted)'}>
                  Editorial Maternity
                </NavLink>
              </li>
              <li>
                <NavLink to="/hotels" style={{ color: 'var(--text-muted)' }} onMouseOver={(e)=>e.currentTarget.style.color='var(--text-light)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--text-muted)'}>
                  Hospitality Visuals
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" style={{ color: 'var(--text-muted)' }} onMouseOver={(e)=>e.currentTarget.style.color='var(--text-light)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--text-muted)'}>
                  View Portfolio
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent-gold)', marginBottom: '1.5rem', fontWeight: 600 }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.95rem' }}>
              <li>
                <NavLink to="/about" style={{ color: 'var(--text-muted)' }} onMouseOver={(e)=>e.currentTarget.style.color='var(--text-light)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--text-muted)'}>
                  About Our Ethos
                </NavLink>
              </li>
              <li>
                <NavLink to="/packages" style={{ color: 'var(--text-muted)' }} onMouseOver={(e)=>e.currentTarget.style.color='var(--text-light)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--text-muted)'}>
                  Investment Guide
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" style={{ color: 'var(--text-muted)' }} onMouseOver={(e)=>e.currentTarget.style.color='var(--text-light)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--text-muted)'}>
                  Book Discovery Call
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent-gold)', marginBottom: '1.5rem', fontWeight: 600 }}>
              Locations & Contact
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 300 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <MapPin size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.2rem' }} />
                <span>Ireland & India (Available Worldwide)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Phone size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <a href="tel:+353852258004" style={{ color: 'var(--text-muted)' }} onMouseOver={(e)=>e.currentTarget.style.color='var(--text-light)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--text-muted)'}>
                  +353 85 225 8004
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Mail size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <a href="mailto:hello@theomedia.co.uk" style={{ color: 'var(--text-muted)' }} onMouseOver={(e)=>e.currentTarget.style.color='var(--text-light)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--text-muted)'}>
                  hello@theomedia.co.uk
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom border & Copyright */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <p>&copy; {currentYear} Theomedia. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'var(--text-muted)' }} onMouseOver={(e)=>e.currentTarget.style.color='var(--text-light)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--text-muted)'}>Privacy Policy</a>
            <a href="#" style={{ color: 'var(--text-muted)' }} onMouseOver={(e)=>e.currentTarget.style.color='var(--text-light)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--text-muted)'}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
