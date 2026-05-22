import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'weddings',
    details: '',
    referrer: 'search'
  });

  useEffect(() => {
    gsap.fromTo('.contact-fade-in', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate premium visual submission success
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: '140px', paddingBottom: '6rem', backgroundColor: 'var(--bg-cream)', minHeight: '100vh' }}>
      <div className="container">
        
        {/* Title Header */}
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <span className="section-tagline contact-fade-in">GET IN TOUCH</span>
          <h1 className="contact-fade-in" style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
            fontWeight: 400, 
            lineHeight: 1.2, 
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-headline)'
          }}>
            Tell Us About Your Project<span>.</span>
          </h1>
          <p className="contact-fade-in" style={{ 
            fontSize: '1.1rem', 
            maxWidth: '600px', 
            margin: '0 auto', 
            color: 'var(--text-sub)',
            fontWeight: 300,
            lineHeight: '1.7'
          }}>
            Based in Ireland and India. We read every single message personally and respond to all enquiries within 24 hours.
          </p>
        </div>

        {/* Split Grid Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          {/* Left Column: Direct Contacts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} className="contact-fade-in">
            
            {/* WhatsApp Highlight Box */}
            <div style={{ backgroundColor: 'var(--bg-white)', padding: '2.5rem', borderRadius: 'var(--border-radius)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.03)' }}>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-gold)', display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Fastest Response</span>
              <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-headline)', marginBottom: '1rem' }}>WhatsApp Chat</h3>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.8rem' }}>
                Need immediate date checks or package answers? Connect with our visual producers directly on WhatsApp.
              </p>
              <a 
                href="https://wa.me/353852258004" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-gold" 
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }}
              >
                <span>WhatsApp Now</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Direct Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', padding: '1.5rem', backgroundColor: 'var(--bg-white)', borderRadius: 'var(--border-radius)', border: '1px solid rgba(0,0,0,0.02)' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'var(--bg-cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', flexShrink: 0 }}>
                  <Phone size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-sub)', display: 'block' }}>Call Us</span>
                  <a href="tel:+353852258004" style={{ fontSize: '1.05rem', color: 'var(--text-dark)', fontWeight: 500 }}>+353 85 225 8004</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', padding: '1.5rem', backgroundColor: 'var(--bg-white)', borderRadius: 'var(--border-radius)', border: '1px solid rgba(0,0,0,0.02)' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'var(--bg-cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', flexShrink: 0 }}>
                  <Mail size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-sub)', display: 'block' }}>Email Us</span>
                  <a href="mailto:hello@theomedia.co.uk" style={{ fontSize: '1.05rem', color: 'var(--text-dark)', fontWeight: 500 }}>hello@theomedia.co.uk</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', padding: '1.5rem', backgroundColor: 'var(--bg-white)', borderRadius: 'var(--border-radius)', border: '1px solid rgba(0,0,0,0.02)' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'var(--bg-cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', flexShrink: 0 }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-sub)', display: 'block' }}>Primary Regions</span>
                  <span style={{ fontSize: '1.05rem', color: 'var(--text-dark)', fontWeight: 500 }}>Ireland & India (Worldwide coverage)</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-fade-in" style={{ width: '100%' }}>
            {submitted ? (
              <div style={{ backgroundColor: 'var(--bg-white)', padding: '5rem 3.5rem', borderRadius: 'var(--border-radius)', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.02)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', border: '1px solid rgba(0,0,0,0.03)' }}>
                <CheckCircle2 size={64} style={{ color: 'var(--accent-gold)' }} />
                <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-headline)' }}>Thank you!</h3>
                <p style={{ color: 'var(--text-sub)', maxWidth: '400px', fontSize: '1rem', lineHeight: '1.6' }}>
                  We have successfully received your project outline. A production manager will review dates and email you a custom proposal within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-outline-dark" style={{ marginTop: '1rem' }}>Send Another Enquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" style={{ backgroundColor: 'var(--bg-white)', border: '1px solid rgba(0,0,0,0.03)' }}>
                <div className="form-grid">
                  
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      required 
                      className="form-control" 
                      placeholder="e.g. Sarah Connor" 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      required 
                      className="form-control" 
                      placeholder="e.g. sarah@example.com" 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange}
                      required 
                      className="form-control" 
                      placeholder="e.g. +353 85..." 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Project Category</label>
                    <select 
                      id="service" 
                      name="service" 
                      value={formData.service} 
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option value="weddings">Cinematic Wedding Film + Photo</option>
                      <option value="maternity">Editorial Maternity Silhouette</option>
                      <option value="hotels">Hospitality Visual Campaign</option>
                      <option value="other">Other Creative Project</option>
                    </select>
                  </div>

                  <div className="form-group form-group-full">
                    <label htmlFor="details">Project Details & Dates</label>
                    <textarea 
                      id="details" 
                      name="details" 
                      value={formData.details} 
                      onChange={handleChange}
                      required 
                      className="form-control" 
                      placeholder="Please detail your venue, dates, specific creative goals..." 
                    />
                  </div>

                  <div className="form-group form-group-full">
                    <label htmlFor="referrer">How did you find us?</label>
                    <select 
                      id="referrer" 
                      name="referrer" 
                      value={formData.referrer} 
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option value="search">Google / Search Engine</option>
                      <option value="instagram">Instagram / Social Media</option>
                      <option value="wordofmouth">Word of Mouth / Friend Recommendation</option>
                      <option value="hotel">Recommended by a Venue</option>
                    </select>
                  </div>

                </div>

                <button type="submit" className="btn-gold" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }}>
                  <span>Submit Inquiry Outline</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
