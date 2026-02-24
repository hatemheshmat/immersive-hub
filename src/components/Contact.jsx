import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, MessageSquare, User, Building2, ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', school: '', role: '', message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
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
                            <p>45 Cornish El Nile St., Maadi,<br />Giza Governorate 4211201</p>
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
                    <div className="contact-social-row">
                        <a href="https://www.facebook.com/ImmersiveHub.Official/" target="_blank" rel="noopener noreferrer" className="social-chip">Facebook</a>
                        <a href="https://www.instagram.com/ImmersiveHub.Official/" target="_blank" rel="noopener noreferrer" className="social-chip">Instagram</a>
                        <a href="https://www.linkedin.com/company/ImmersiveHub.Official/" target="_blank" rel="noopener noreferrer" className="social-chip">LinkedIn</a>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="contact-form-card glass-card">
                    {submitted ? (
                        <div className="form-success">
                            <div className="success-icon-wrap">
                                <Send size={32} color="#0d9488" />
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
                            <button type="submit" className="cta-button contact-submit-btn">
                                Send Message <ArrowRight size={18} />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
