import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container-split">
          
          {/* Left Desktop Links */}
          <div className="nav-split-left">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : 'nav-split-link')}>
              About
            </NavLink>
            <NavLink to="/packages" className={({ isActive }) => (isActive ? 'active-link' : 'nav-split-link')}>
              Investment
            </NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active-link' : 'nav-split-link')}>
              Gallery
            </NavLink>
          </div>

          {/* Center Logo */}
          <NavLink to="/" className="nav-split-logo">
            THEO.MEDIA HOUSE
          </NavLink>

          {/* Right Desktop Call to Action */}
          <div className="nav-split-right">
            <NavLink to="/contact" className="nav-split-connect-btn">
              Let's Connect
            </NavLink>
          </div>

          {/* Mobile hamburger trigger */}
          <button
            className="mobile-menu-btn-split"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'active' : ''}`}>
        <NavLink to="/" end onClick={() => setMobileMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/weddings" onClick={() => setMobileMenuOpen(false)}>
          Weddings
        </NavLink>
        <NavLink to="/maternity" onClick={() => setMobileMenuOpen(false)}>
          Maternity
        </NavLink>
        <NavLink to="/hotels" onClick={() => setMobileMenuOpen(false)}>
          Hotels
        </NavLink>
        <NavLink to="/portfolio" onClick={() => setMobileMenuOpen(false)}>
          Portfolio
        </NavLink>
        <NavLink to="/packages" onClick={() => setMobileMenuOpen(false)}>
          Packages
        </NavLink>
        <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>
          About
        </NavLink>
        <NavLink to="/contact" className="btn-gold" style={{ marginTop: '2rem' }} onClick={() => setMobileMenuOpen(false)}>
          Book Call
        </NavLink>
      </div>

      <style>{`
        .navbar-container-split {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 4vw;
        }

        .nav-split-left {
          display: flex;
          align-items: center;
          gap: 2.2rem;
          flex: 1;
        }

        .nav-split-link {
          font-family: var(--font-body);
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: rgba(255, 255, 255, 0.65);
          transition: var(--transition-smooth);
          font-weight: 500;
        }

        .nav-split-link:hover, .active-link {
          color: var(--accent-gold);
        }

        .active-link {
          font-family: var(--font-body);
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--accent-gold);
          font-weight: 500;
          position: relative;
        }

        .active-link::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: var(--accent-gold);
        }

        .nav-split-logo {
          font-family: var(--font-editorial);
          font-size: clamp(1.2rem, 1.8vw, 1.7rem);
          font-weight: 300;
          color: var(--text-light);
          letter-spacing: 0.15em;
          text-align: center;
          flex: 0 0 auto;
          text-transform: uppercase;
        }

        .nav-split-right {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          flex: 1;
        }

        .nav-split-connect-btn {
          font-family: var(--font-body);
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-light);
          border: 1px solid rgba(255, 255, 255, 0.25);
          padding: 0.6rem 1.4rem;
          transition: var(--transition-smooth);
          font-weight: 500;
        }

        .nav-split-connect-btn:hover {
          background-color: var(--text-light);
          color: var(--bg-dark);
          border-color: var(--text-light);
          transform: translateY(-1px);
        }

        .mobile-menu-btn-split {
          display: none;
          color: var(--text-light);
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .nav-split-left, .nav-split-right {
            display: none;
          }
          .mobile-menu-btn-split {
            display: block;
          }
          .navbar-container-split {
            padding: 0 6vw;
          }
        }
      `}</style>
    </>
  );
}
