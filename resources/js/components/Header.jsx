import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logoImg from '../assets/logo.png';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Our Library', href: '/library' },
  { label: 'Contact Us', href: '/contact-us' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`floating-header ${isScrolled ? 'header-shrunk' : ''}`}>
      <div className="header-island glass-card">
        <Link to="/" className="logo-container">
          <img src={logoImg} alt="Immersive Hub" className="logo-image" />
        </Link>

        <nav className="nav-links">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`nav-link ${location.pathname === item.href ? 'active-link' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="cta-container">
          <Link to="/contact-us" className="cta-button header-cta">Book Demo</Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileOpen && (
        <div className="mobile-menu glass-card">
          {NAV_ITEMS.map((item) => (
            <Link key={item.label} to={item.href} className="mobile-nav-link" onClick={() => setIsMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link to="/contact-us" className="cta-button mobile-cta" onClick={() => setIsMobileOpen(false)}>Book Demo</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
