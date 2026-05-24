import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2, Calendar, Clock, Sparkles } from 'lucide-react';
import gsap from 'gsap';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('form'); // 'form' or 'scheduler'
  
  // Standard Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'weddings',
    details: '',
    referrer: 'search'
  });

  // Scheduler State
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);
  const [schedulerStep, setSchedulerStep] = useState(1); // 1 = select time, 2 = enter details, 3 = booked success
  const [schedulerData, setSchedulerData] = useState({
    name: '',
    email: '',
    notes: ''
  });

  const nextFiveDays = [
    { dayName: "Mon", date: "25", month: "May" },
    { dayName: "Tue", date: "26", month: "May" },
    { dayName: "Wed", date: "27", month: "May" },
    { dayName: "Thu", date: "28", month: "May" },
    { dayName: "Fri", date: "29", month: "May" }
  ];

  const availableSlots = [
    "09:30 AM (BST/IST)",
    "11:00 AM (BST/IST)",
    "02:00 PM (BST/IST)",
    "03:30 PM (BST/IST)",
    "05:00 PM (BST/IST)"
  ];

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

  const handleSchedulerChange = (e) => {
    const { name, value } = e.target;
    setSchedulerData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSchedulerSubmit = (e) => {
    e.preventDefault();
    setSchedulerStep(3); // Booked state!
  };

  const resetScheduler = () => {
    setSelectedDay(0);
    setSelectedTime(null);
    setSchedulerStep(1);
    setSchedulerData({ name: '', email: '', notes: '' });
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
            Based in Ireland and India. Connect with us via standard proposal request, or instantly lock in a custom visual discovery session using our VIP Scheduler.
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

          {/* Right Column: Interaction Hub */}
          <div className="contact-fade-in" style={{ width: '100%' }}>
            
            {/* Elegant Tab Switcher */}
            <div className="interactive-tabs">
              <button 
                className={`tab-btn ${activeTab === 'form' ? 'active' : ''}`}
                onClick={() => setActiveTab('form')}
              >
                Proposal Request Form
              </button>
              <button 
                className={`tab-btn ${activeTab === 'scheduler' ? 'active' : ''}`}
                onClick={() => { setActiveTab('scheduler'); resetScheduler(); }}
              >
                VIP Live Discovery Scheduler
              </button>
            </div>

            {/* TAB 1: STANDARD PROPOSAL FORM */}
            {activeTab === 'form' && (
              submitted ? (
                <div className="contact-card success-card">
                  <CheckCircle2 size={64} style={{ color: 'var(--accent-gold)' }} />
                  <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-headline)' }}>Outline Received</h3>
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
                    <span>Submit Proposal Request</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )
            )}

            {/* TAB 2: VIP LUXURY SCHEDULER */}
            {activeTab === 'scheduler' && (
              <div className="contact-card scheduler-card" style={{ backgroundColor: 'var(--bg-white)', border: '1px solid rgba(0,0,0,0.03)' }}>
                
                {schedulerStep === 1 && (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                      <Calendar className="text-gold" size={22} />
                      <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-headline)' }}>1. Select Date & Slot</h3>
                    </div>
                    
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-sub)', marginBottom: '2rem', lineHeight: '1.6' }}>
                      Lock in a live video session with our director. Choose a preferred date next week and select an available time. All bookings include a custom visual brief review.
                    </p>

                    {/* Date Selector Row */}
                    <div className="scheduler-days-row">
                      {nextFiveDays.map((item, idx) => (
                        <div 
                          key={idx} 
                          className={`scheduler-day-box ${selectedDay === idx ? 'active' : ''}`}
                          onClick={() => { setSelectedDay(idx); setSelectedTime(null); }}
                        >
                          <span className="day-name">{item.dayName}</span>
                          <span className="day-date">{item.date}</span>
                          <span className="day-month">{item.month}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', margin: '2rem 0 1rem 0' }}>
                      <Clock className="text-gold" size={18} />
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Available Times</span>
                    </div>

                    {/* Slots Grid */}
                    <div className="scheduler-slots-grid">
                      {availableSlots.map((slot, idx) => (
                        <button
                          key={idx}
                          className={`scheduler-slot-btn ${selectedTime === slot ? 'active' : ''}`}
                          onClick={() => setSelectedTime(slot)}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>

                    <button
                      className="btn-gold"
                      style={{ width: '100%', marginTop: '2.5rem', opacity: selectedTime ? 1 : 0.5, cursor: selectedTime ? 'pointer' : 'not-allowed' }}
                      disabled={!selectedTime}
                      onClick={() => setSchedulerStep(2)}
                    >
                      Continue To Briefing Details
                    </button>
                  </div>
                )}

                {schedulerStep === 2 && (
                  <form onSubmit={handleSchedulerSubmit}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                      <Sparkles className="text-gold" size={22} />
                      <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-headline)' }}>2. Live Session Details</h3>
                    </div>

                    <div className="selected-slot-banner">
                      <span>Selected Session:</span>
                      <strong>{nextFiveDays[selectedDay].dayName}, {nextFiveDays[selectedDay].month} {nextFiveDays[selectedDay].date} at {selectedTime}</strong>
                    </div>

                    <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                      <label htmlFor="sched-name">Your Full Name</label>
                      <input 
                        type="text" 
                        id="sched-name" 
                        name="name" 
                        value={schedulerData.name} 
                        onChange={handleSchedulerChange}
                        required 
                        className="form-control" 
                        placeholder="e.g. David Beckham" 
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                      <label htmlFor="sched-email">Email Address</label>
                      <input 
                        type="email" 
                        id="sched-email" 
                        name="email" 
                        value={schedulerData.email} 
                        onChange={handleSchedulerChange}
                        required 
                        className="form-control" 
                        placeholder="e.g. david@example.com" 
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: '2rem' }}>
                      <label htmlFor="sched-notes">Creative Brief Notes (Optional)</label>
                      <textarea 
                        id="sched-notes" 
                        name="notes" 
                        value={schedulerData.notes} 
                        onChange={handleSchedulerChange}
                        className="form-control" 
                        placeholder="Share a brief overview of your venue, dates, or booking inquiries..." 
                      />
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <button type="button" className="btn-outline-dark" style={{ flexGrow: 1 }} onClick={() => setSchedulerStep(1)}>
                        Back
                      </button>
                      <button type="submit" className="btn-gold" style={{ flexGrow: 2 }}>
                        Confirm VIP Booking
                      </button>
                    </div>
                  </form>
                )}

                {schedulerStep === 3 && (
                  <div className="success-container" style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <CheckCircle2 size={64} style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }} />
                    <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-headline)', marginBottom: '1rem' }}>Session Locked!</h3>
                    
                    <div className="booked-receipt">
                      <span className="receipt-lbl">VIP Video Blueprinting Session</span>
                      <strong className="receipt-val">{nextFiveDays[selectedDay].dayName}, {nextFiveDays[selectedDay].month} {nextFiveDays[selectedDay].date}</strong>
                      <span className="receipt-time">{selectedTime}</span>
                    </div>

                    <p style={{ color: 'var(--text-sub)', maxWidth: '400px', margin: '1.5rem auto 2.5rem auto', fontSize: '0.92rem', lineHeight: '1.6' }}>
                      A secure Google Meet invitation, session calendar event, and brief outline outline have been dispatched to <strong>{schedulerData.email}</strong>. Let's create something extraordinary.
                    </p>
                    <button onClick={resetScheduler} className="btn-gold">Book Another Slot</button>
                  </div>
                )}

              </div>
            )}

          </div>

        </div>

      </div>

      {/* Styled calendar overlays local to page */}
      <style>{`
        .interactive-tabs {
          display: flex;
          border-bottom: 2px solid rgba(0, 0, 0, 0.05);
          margin-bottom: 2rem;
          gap: 1rem;
        }

        .tab-btn {
          padding: 1rem 1.5rem;
          font-weight: 500;
          font-size: 0.88rem;
          color: var(--text-sub);
          position: relative;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: var(--transition-smooth);
        }

        .tab-btn.active {
          color: var(--accent-gold);
          font-weight: 600;
        }

        .tab-btn::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--accent-gold);
          transform: scaleX(0);
          transition: var(--transition-smooth);
        }

        .tab-btn.active::after {
          transform: scaleX(1);
        }

        .contact-card {
          background-color: var(--bg-white);
          padding: 4rem 3.5rem;
          border-radius: var(--border-radius);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.02);
          width: 100%;
        }

        @media (max-width: 768px) {
          .contact-card {
            padding: 2.5rem 1.8rem;
          }
        }

        .success-card {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
        }

        /* Scheduler Calendar Styles */
        .scheduler-days-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0.6rem;
          margin-bottom: 1.5rem;
        }

        .scheduler-day-box {
          border: 1px solid rgba(0, 0, 0, 0.06);
          background-color: rgba(0, 0, 0, 0.01);
          border-radius: 6px;
          padding: 1rem 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .scheduler-day-box:hover {
          border-color: var(--accent-gold);
          background-color: rgba(201, 168, 76, 0.02);
        }

        .scheduler-day-box.active {
          border-color: var(--accent-gold);
          background-color: var(--accent-gold);
          color: #fff;
          box-shadow: 0 8px 20px rgba(201, 168, 76, 0.2);
        }

        .day-name {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0.7;
          margin-bottom: 0.2rem;
        }

        .day-date {
          font-size: 1.4rem;
          font-weight: bold;
          font-family: var(--font-headline);
        }

        .day-month {
          font-size: 0.65rem;
          text-transform: uppercase;
          opacity: 0.7;
          letter-spacing: 0.05em;
        }

        .scheduler-slots-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 0.8rem;
        }

        .scheduler-slot-btn {
          border: 1px solid rgba(0, 0, 0, 0.06);
          background-color: #fff;
          padding: 1rem;
          border-radius: 6px;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--text-dark);
          text-align: center;
          transition: var(--transition-smooth);
        }

        .scheduler-slot-btn:hover {
          border-color: var(--accent-gold);
          color: var(--accent-gold);
          background-color: rgba(201, 168, 76, 0.02);
        }

        .scheduler-slot-btn.active {
          background-color: var(--accent-gold);
          color: #fff;
          border-color: var(--accent-gold);
          box-shadow: 0 8px 16px rgba(201, 168, 76, 0.15);
        }

        .selected-slot-banner {
          background-color: rgba(201, 168, 76, 0.04);
          border: 1px solid rgba(201, 168, 76, 0.15);
          border-radius: 6px;
          padding: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          margin-bottom: 2rem;
          font-size: 0.9rem;
        }

        .selected-slot-banner span {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-gold);
        }

        .booked-receipt {
          background-color: rgba(0, 0, 0, 0.02);
          border: 1px dashed rgba(201, 168, 76, 0.4);
          border-radius: 8px;
          padding: 1.8rem;
          max-width: 320px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .receipt-lbl {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-sub);
        }

        .receipt-val {
          font-size: 1.4rem;
          font-family: var(--font-headline);
          color: var(--text-dark);
        }

        .receipt-time {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--accent-gold);
        }
      `}</style>

    </div>
  );
}
