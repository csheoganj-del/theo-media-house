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
    <div style={{ paddingTop: '140px', paddingBottom: '8rem', backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
      <div className="container">
        
        {/* Title Header */}
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
            Get In Touch
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
            Tell Us About Your Project<span>.</span>
          </h1>
          <p style={{ 
            fontSize: '0.92rem', 
            maxWidth: '600px', 
            margin: '0 auto', 
            color: '#a0a0a0',
            fontWeight: 300,
            lineHeight: '1.8'
          }}>
            Based in Ireland and India. Connect with us via standard proposal request, or instantly lock in a custom visual discovery session using our VIP Scheduler.
          </p>
        </div>

        {/* Split Grid Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          {/* Left Column: Direct Contacts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} className="contact-fade-in">
            
            {/* WhatsApp Highlight Box */}
            <div 
              style={{ 
                backgroundColor: '#0b0b0b', 
                padding: '2.5rem', 
                borderRadius: '4px', 
                boxShadow: '0 15px 35px rgba(0,0,0,0.5)', 
                border: '1px solid rgba(255,255,255,0.03)' 
              }}
            >
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent-gold)', display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Fastest Response</span>
              <h3 className="packages-editorial-font" style={{ fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 300 }}>WhatsApp Chat</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.82rem', lineHeight: '1.6', marginBottom: '1.8rem' }}>
                Need immediate date checks or package answers? Connect with our visual producers directly on WhatsApp.
              </p>
              <a 
                href="https://wa.me/353852258004" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="tall-card-btn" 
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', width: '100%', maxWidth: 'none' }}
              >
                <span>WhatsApp Now</span>
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Direct Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', padding: '1.5rem', backgroundColor: '#0b0b0b', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.03)' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', flexShrink: 0 }}>
                  <Phone size={18} />
                </div>
                <div>
                  <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#a0a0a0', display: 'block' }}>Call Us</span>
                  <a href="tel:+353852258004" style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 500 }}>+353 85 225 8004</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', padding: '1.5rem', backgroundColor: '#0b0b0b', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.03)' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', flexShrink: 0 }}>
                  <Mail size={18} />
                </div>
                <div>
                  <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#a0a0a0', display: 'block' }}>Email Us</span>
                  <a href="mailto:hello@theomedia.co.uk" style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 500 }}>hello@theomedia.co.uk</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', padding: '1.5rem', backgroundColor: '#0b0b0b', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.03)' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', flexShrink: 0 }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#a0a0a0', display: 'block' }}>Primary Regions</span>
                  <span style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 500 }}>Ireland & India (Worldwide coverage)</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interaction Hub */}
          <div className="contact-fade-in" style={{ width: '100%' }}>
            
            {/* Tab Switcher */}
            <div className="interactive-tabs-dark">
              <button 
                className={`tab-btn-dark ${activeTab === 'form' ? 'active' : ''}`}
                onClick={() => setActiveTab('form')}
              >
                Proposal Request Form
              </button>
              <button 
                className={`tab-btn-dark ${activeTab === 'scheduler' ? 'active' : ''}`}
                onClick={() => { setActiveTab('scheduler'); resetScheduler(); }}
              >
                VIP Live Discovery Scheduler
              </button>
            </div>

            {/* TAB 1: STANDARD PROPOSAL FORM */}
            {activeTab === 'form' && (
              submitted ? (
                <div className="contact-card-dark success-card-dark">
                  <CheckCircle2 size={56} style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }} />
                  <h3 className="packages-editorial-font" style={{ fontSize: '2rem', textTransform: 'uppercase', fontWeight: 300, letterSpacing: '0.05em' }}>Outline Received</h3>
                  <p style={{ color: '#a0a0a0', maxWidth: '400px', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                    We have successfully received your project outline. A production manager will review dates and email you a custom proposal within 24 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline-white" style={{ borderRadius: '0' }}>Send Another Enquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-dark">
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
                        className="form-control-dark" 
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
                        className="form-control-dark" 
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
                        className="form-control-dark" 
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
                        className="form-control-dark"
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
                        className="form-control-dark" 
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
                        className="form-control-dark"
                      >
                        <option value="search">Google / Search Engine</option>
                        <option value="instagram">Instagram / Social Media</option>
                        <option value="wordofmouth">Word of Mouth / Friend Recommendation</option>
                        <option value="hotel">Recommended by a Venue</option>
                      </select>
                    </div>

                  </div>

                  <button type="submit" className="tall-card-btn" style={{ width: '100%', maxWidth: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', padding: '0.9rem' }}>
                    <span>Submit Proposal Request</span>
                    <ArrowRight size={14} />
                  </button>
                </form>
              )
            )}

            {/* TAB 2: VIP LUXURY SCHEDULER */}
            {activeTab === 'scheduler' && (
              <div className="contact-card-dark">
                
                {schedulerStep === 1 && (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                      <Calendar className="text-gold" size={20} />
                      <h3 className="packages-editorial-font" style={{ fontSize: '1.4rem', textTransform: 'uppercase', fontWeight: 300 }}>1. Select Date & Slot</h3>
                    </div>
                    
                    <p style={{ fontSize: '0.82rem', color: '#a0a0a0', marginBottom: '2rem', lineHeight: '1.6' }}>
                      Lock in a live video session with our director. Choose a preferred date next week and select an available time. All bookings include a custom visual brief review.
                    </p>

                    {/* Date Selector Row */}
                    <div className="scheduler-days-row-dark">
                      {nextFiveDays.map((item, idx) => (
                        <div 
                          key={idx} 
                          className={`scheduler-day-box-dark ${selectedDay === idx ? 'active' : ''}`}
                          onClick={() => { setSelectedDay(idx); setSelectedTime(null); }}
                        >
                          <span className="day-name">{item.dayName}</span>
                          <span className="day-date">{item.date}</span>
                          <span className="day-month">{item.month}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', margin: '2.5rem 0 1.2rem 0' }}>
                      <Clock className="text-gold" size={16} />
                      <span style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#fff' }}>Available Times</span>
                    </div>

                    {/* Slots Grid */}
                    <div className="scheduler-slots-grid-dark">
                      {availableSlots.map((slot, idx) => (
                        <button
                          key={idx}
                          className={`scheduler-slot-btn-dark ${selectedTime === slot ? 'active' : ''}`}
                          onClick={() => setSelectedTime(slot)}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>

                    <button
                      className="tall-card-btn"
                      style={{ width: '100%', maxWidth: 'none', marginTop: '2.5rem', opacity: selectedTime ? 1 : 0.5, cursor: selectedTime ? 'pointer' : 'not-allowed', padding: '0.9rem' }}
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
                      <Sparkles className="text-gold" size={20} />
                      <h3 className="packages-editorial-font" style={{ fontSize: '1.4rem', textTransform: 'uppercase', fontWeight: 300 }}>2. Live Session Details</h3>
                    </div>

                    <div className="selected-slot-banner-dark">
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
                        className="form-control-dark" 
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
                        className="form-control-dark" 
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
                        className="form-control-dark" 
                        placeholder="Share a brief overview of your venue, dates, or booking inquiries..." 
                      />
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <button type="button" className="btn-outline-white" style={{ flexGrow: 1, borderRadius: '0' }} onClick={() => setSchedulerStep(1)}>
                        Back
                      </button>
                      <button type="submit" className="tall-card-btn" style={{ flexGrow: 2, maxWidth: 'none', padding: '0.9rem' }}>
                        Confirm VIP Booking
                      </button>
                    </div>
                  </form>
                )}

                {schedulerStep === 3 && (
                  <div className="success-container-dark" style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <CheckCircle2 size={56} style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }} />
                    <h3 className="packages-editorial-font" style={{ fontSize: '2rem', textTransform: 'uppercase', fontWeight: 300, letterSpacing: '0.05em', marginBottom: '1rem' }}>Session Locked!</h3>
                    
                    <div className="booked-receipt-dark">
                      <span className="receipt-lbl-dark">VIP Video Blueprinting Session</span>
                      <strong className="receipt-val-dark packages-editorial-font">{nextFiveDays[selectedDay].dayName}, {nextFiveDays[selectedDay].month} {nextFiveDays[selectedDay].date}</strong>
                      <span className="receipt-time-dark">{selectedTime}</span>
                    </div>

                    <p style={{ color: '#a0a0a0', maxWidth: '400px', margin: '1.5rem auto 2.5rem auto', fontSize: '0.85rem', lineHeight: '1.6' }}>
                      A secure Google Meet invitation, session calendar event, and brief outline outline have been dispatched to <strong>{schedulerData.email}</strong>. Let's create something extraordinary.
                    </p>
                    <button onClick={resetScheduler} className="tall-card-btn" style={{ maxWidth: 'none', padding: '0.8rem 2rem' }}>Book Another Slot</button>
                  </div>
                )}

              </div>
            )}

          </div>

        </div>

      </div>

      {/* Styled calendar and form overrides local to page */}
      <style>{`
        .interactive-tabs-dark {
          display: flex;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 2.5rem;
          gap: 1rem;
        }

        .tab-btn-dark {
          padding: 1rem 0;
          font-weight: 500;
          font-size: 0.75rem;
          color: #a0a0a0;
          position: relative;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          transition: var(--transition-smooth);
          cursor: pointer;
        }

        .tab-btn-dark.active {
          color: var(--accent-gold);
        }

        .tab-btn-dark::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 1px;
          background-color: var(--accent-gold);
          transform: scaleX(0);
          transition: var(--transition-smooth);
        }

        .tab-btn-dark.active::after {
          transform: scaleX(1);
        }

        .contact-card-dark {
          background-color: #0b0b0b;
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 3.5rem 3rem;
          border-radius: 4px;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5);
          width: 100%;
        }

        @media (max-width: 768px) {
          .contact-card-dark {
            padding: 2.5rem 1.8rem;
          }
        }

        .contact-form-dark {
          background-color: #0b0b0b;
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 3.5rem 3rem;
          border-radius: 4px;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5);
          width: 100%;
        }

        @media (max-width: 768px) {
          .contact-form-dark {
            padding: 2.5rem 1.8rem;
          }
        }

        .success-card-dark {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .form-control-dark {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background-color: rgba(255, 255, 255, 0.01);
          padding: 0.9rem 1.2rem;
          border-radius: 0px;
          font-size: 0.88rem;
          color: #fff;
          transition: var(--transition-smooth);
          outline: none;
          width: 100%;
        }

        .form-control-dark:focus {
          border-color: var(--accent-gold);
          background-color: rgba(255, 255, 255, 0.03);
        }

        select.form-control-dark option {
          background-color: #0b0b0b;
          color: #fff;
        }

        /* Scheduler Calendar Styles */
        .scheduler-days-row-dark {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0.6rem;
          margin-bottom: 1.5rem;
        }

        .scheduler-day-box-dark {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background-color: rgba(255, 255, 255, 0.01);
          border-radius: 0px;
          padding: 1rem 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          transition: var(--transition-smooth);
          color: #a0a0a0;
        }

        .scheduler-day-box-dark:hover {
          border-color: var(--accent-gold);
          color: var(--accent-gold);
        }

        .scheduler-day-box-dark.active {
          border-color: #c4b097;
          background-color: #c4b097;
          color: #121212;
          box-shadow: 0 8px 20px rgba(196, 176, 151, 0.2);
        }

        .day-name {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0.7;
          margin-bottom: 0.2rem;
        }

        .day-date {
          font-size: 1.3rem;
          font-weight: bold;
          font-family: var(--font-headline);
        }

        .day-month {
          font-size: 0.6rem;
          text-transform: uppercase;
          opacity: 0.7;
          letter-spacing: 0.05em;
        }

        .scheduler-slots-grid-dark {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 0.8rem;
        }

        .scheduler-slot-btn-dark {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background-color: rgba(255, 255, 255, 0.01);
          padding: 0.9rem;
          border-radius: 0px;
          font-size: 0.78rem;
          font-weight: 500;
          color: #a0a0a0;
          text-align: center;
          transition: var(--transition-smooth);
          cursor: pointer;
        }

        .scheduler-slot-btn-dark:hover {
          border-color: var(--accent-gold);
          color: var(--accent-gold);
        }

        .scheduler-slot-btn-dark.active {
          background-color: #c4b097;
          color: #121212;
          border-color: #c4b097;
          box-shadow: 0 8px 16px rgba(196, 176, 151, 0.2);
        }

        .selected-slot-banner-dark {
          background-color: rgba(201, 168, 76, 0.04);
          border: 1px solid rgba(201, 168, 76, 0.15);
          border-radius: 0px;
          padding: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          margin-bottom: 2rem;
          font-size: 0.88rem;
        }

        .selected-slot-banner-dark span {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-gold);
        }

        .booked-receipt-dark {
          background-color: rgba(255, 255, 255, 0.01);
          border: 1px dashed rgba(201, 168, 76, 0.4);
          border-radius: 0px;
          padding: 1.8rem;
          max-width: 320px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .receipt-lbl-dark {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #a0a0a0;
        }

        .receipt-val-dark {
          font-size: 1.5rem;
          color: #fff;
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .receipt-time-dark {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--accent-gold);
        }
      `}</style>

    </div>
  );
}
