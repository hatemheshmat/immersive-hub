import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Facebook, Instagram } from 'lucide-react';
import './Footer.css';
import logoImg from '../assets/logo.png';

// Custom X (Twitter) Logo
const XIcon = ({ size = 20, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LOCATIONS = [
  "Cairo", "Alexandria", "Giza"
];

const Footer = () => {
    return (
        <footer className="footer-v2">
            <div className="footer-v2-container">
                {/* Left Column */}
                <div className="footer-left-col">
                    <div className="footer-content-wrapper">
                        <Link to="/" className="footer-huge-logo">
                            <img src={logoImg} alt="Immersive Hub" />
                        </Link>
                        
                        <h2 className="footer-subtitle white">
                            Transforming Education <br /> with VR & AI
                        </h2>
                        
                        <p className="footer-desc white-60">
                            Our mission is to solve one of education's most impossible tasks.
                        </p>
                        
                        <Link to="/contact-us" className="footer-solid-pill">
                            CONTACT US
                        </Link>
                    </div>

                    <div className="footer-legal-links">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <Link to="/terms-of-use">Terms Of Use</Link>
                        <Link to="/refund-policy">Refund Policy</Link>
                    </div>
                </div>

                {/* Right Column */}
                <div className="footer-right-col">
                    <div className="footer-content-wrapper">
                        <nav className="footer-top-nav" aria-label="Footer">
                            <Link to="/library" className="nav-item">VR LIBRARY</Link>
                            <Link to="/#analytics" className="nav-item">ANALYTICS</Link>
                            <Link to="/contact-us" className="nav-item">CUSTOM VR</Link>
                            <Link to="/#pricing" className="nav-item">PRICING</Link>
                        </nav>

                        <a href="mailto:info@immersivehub.org" className="footer-huge-email text-gradient">
                            info@immersivehub.org
                        </a>

                        <div className="footer-social-block">
                            <h4 className="block-title">SOCIAL LINKS</h4>
                            <div className="social-icons-row">
                                <a href="https://www.linkedin.com/company/immersivehub/" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="LinkedIn">
                                    <Linkedin size={18} />
                                </a>
                                <a href="https://x.com/immersivehub" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="X (Twitter)">
                                    <XIcon size={18} />
                                </a>
                                <a href="https://www.youtube.com/channel/ImmersiveHub" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="YouTube">
                                    <Youtube size={18} />
                                </a>
                                <a href="https://www.facebook.com/ImmersiveHub.Official/" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Facebook">
                                    <Facebook size={18} />
                                </a>
                                <a href="https://www.instagram.com/immersive.hub/" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Instagram">
                                    <Instagram size={18} />
                                </a>
                            </div>
                        </div>

                        <div className="footer-locations-block">
                            <h4 className="block-title">LOCATIONS</h4>
                            <div className="locations-grid">
                                {LOCATIONS.map((loc) => (
                                    <span key={loc} className="location-pill">{loc}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <p className="footer-copyright">© 2026 Immersive Hub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
