import React from 'react';
import { Headset, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-top section">

                <div className="footer-brand">
                    <Link to="/" className="logo-container" style={{ textDecoration: 'none' }}>
                        <Headset className="logo-icon" size={28} />
                        <span className="logo-text text-gradient">Immersive Hub</span>
                    </Link>
                    <p className="brand-desc">
                        Revolutionizing classrooms with NGSS-aligned VR experiences, games, and simulations.
                        Joyful Learning Meets Academic Excellence.
                    </p>
                    <div className="trust-badges">
                        <span className="badge">✓ Aligned with NGSS</span>
                        <span className="badge">✓ Egyptian National Curriculum</span>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="link-column">
                        <h4>Quick Links</h4>
                        <Link to="/">Home</Link>
                        <Link to="/library">Our Library</Link>
                        <Link to="/contact">Contact</Link>
                    </div>

                    <div className="link-column">
                        <h4>Resources</h4>
                        <a href="#">Support</a>
                        <a href="#">Teacher Handbook</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>

                    <div className="link-column contact-column">
                        <h4>Contact Info</h4>
                        <div className="contact-item">
                            <MapPin className="icon" size={20} />
                            <p>45 Cornish El Nile St., Maadi,<br /> Giza Governorate 4211201</p>
                        </div>
                        <div className="contact-item">
                            <Phone className="icon" size={20} />
                            <p>01111833320</p>
                        </div>
                        <div className="contact-item">
                            <Mail className="icon" size={20} />
                            <p>
                                <a href="mailto:info@immersivehub.org">info@immersivehub.org</a><br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="bottom-container">
                    <p>&copy; {new Date().getFullYear()} Immersive Hub. All rights reserved.</p>
                    <div className="social-links">
                        <a href="https://www.facebook.com/ImmersiveHub.Official/" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.instagram.com/ImmersiveHub.Official/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://www.linkedin.com/company/ImmersiveHub.Official/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
