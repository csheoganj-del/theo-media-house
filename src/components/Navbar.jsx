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
        <div className="container navbar-container">
          <NavLink to="/" className="logo">
            THEOMEDIA<span>.</span>
          </NavLink>

          <ul className="nav-links">
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/weddings" className={({ isActive }) => (isActive ? 'active' : '')}>
                Weddings
              </NavLink>
            </li>
            <li>
              <NavLink to="/maternity" className={({ isActive }) => (isActive ? 'active' : '')}>
                Maternity
              </NavLink>
            </li>
            <li>
              <NavLink to="/hotels" className={({ isActive }) => (isActive ? 'active' : '')}>
                Hotels
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/packages" className={({ isActive }) => (isActive ? 'active' : '')}>
                Packages
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="btn-gold" style={{ padding: '0.6rem 1.4rem', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                Book Call
              </NavLink>
            </li>
          </ul>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
        <NavLink to="/contact" className="btn-gold" onClick={() => setMobileMenuOpen(false)}>
          Book Call
        </NavLink>
      </div>
    </>
  );
}
