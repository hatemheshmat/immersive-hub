import React, { useState } from 'react';
import axios from 'axios';
import { Send, MapPin, Phone, Mail, MessageSquare, User, Building2, ArrowRight, Facebook, Instagram, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', school: '', role: '', message: ''
    });
    const [status, setStatus] = useState('idle');
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            await axios.post('/api/contacts', formData);
            setSubmitted(true);
            setStatus('idle');
        } catch (error) {
            console.error('Failure saving contact info:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact-form" className="section contact-section">
            <div className="contact-header text-center">
                <span className="section-badge">Get In Touch</span>
                <h2>Ready to Transform Your <span className="text-gradient">Classroom?</span></h2>
                <p>Schedule a free demo call or reach out with any questions.</p>
            </div>

            <div className="contact-layout">
                {/* Left: Info Cards */}
                <div className="contact-info-column">
                    <div className="info-card glass-card">
                        <div className="info-icon-box">
                            <MapPin size={22} color="#fff" />
                        </div>
                        <div>
                            <h4>Visit Us</h4>
                            <p>1171 9th Street Next to Misr Insurance Club,<br />Mokattam, Cairo</p>
                        </div>
                    </div>

                    <div className="info-card glass-card">
                        <div className="info-icon-box">
                            <Phone size={22} color="#fff" />
                        </div>
                        <div>
                            <h4>Call Us</h4>
                            <p>01111833320</p>
                        </div>
                    </div>

                    <div className="info-card glass-card">
                        <div className="info-icon-box">
                            <Mail size={22} color="#fff" />
                        </div>
                        <div>
                            <h4>Email Us</h4>
                            <p>
                                <a href="mailto:info@immersivehub.org">info@immersivehub.org</a><br />
                            </p>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div className="contact-social-row" style={{ display: 'flex', gap: '15px' }}>
                        <a href="https://www.facebook.com/ImmersiveHub.Official/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook"><Facebook size={28} /></a>
                        <a href="https://www.instagram.com/ImmersiveHub.Official/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram"><Instagram size={28} /></a>
                        <a href="https://www.linkedin.com/company/ImmersiveHub.Official/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><Linkedin size={28} /></a>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="contact-form-card glass-card">
                    {submitted ? (
                        <div className="form-success">
                            <div className="success-icon-wrap">
                                <Send size={32} color="#a3e635" />
                            </div>
                            <h3>Thank You!</h3>
                            <p>Your message has been sent. Our team will get back to you within 24 hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label><User size={14} /> Full Name</label>
                                    <input type="text" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label><Mail size={14} /> Email</label>
                                    <input type="email" name="email" placeholder="john@school.edu" value={formData.email} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label><Building2 size={14} /> School / Institution</label>
                                    <input type="text" name="school" placeholder="Cairo International School" value={formData.school} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Role</label>
                                    <select name="role" value={formData.role} onChange={handleChange}>
                                        <option value="">Select your role</option>
                                        <option value="teacher">Teacher</option>
                                        <option value="admin">School Administrator</option>
                                        <option value="principal">Principal</option>
                                        <option value="parent">Parent</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group full-width">
                                <label><MessageSquare size={14} /> Message</label>
                                <textarea name="message" rows="4" placeholder="Tell us about your school's needs..." value={formData.message} onChange={handleChange} required />
                            </div>

                            {status === 'error' && (
                                <div style={{ color: '#ef4444', marginBottom: '15px', fontSize: '14px', textAlign: 'center' }}>
                                    There was an error sending your message. Please try again.
                                </div>
                            )}

                            <button type="submit" className="cta-button contact-submit-btn" disabled={status === 'submitting'}>
                                {status === 'submitting' ? 'Sending...' : 'Send Message'} <ArrowRight size={18} />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
