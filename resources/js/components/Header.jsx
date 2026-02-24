import React, { useState, useEffect } from 'react';
import { Headset, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logoImg from '../assets/logo.png';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Our Library', href: '/library' },
  { label: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensure header is always frosted glass on sub-pages (not home)
  const isHomePage = location.pathname === '/';
  const headerClass = (isScrolled || !isHomePage) ? 'header-scrolled' : 'header-transparent';
  const navClass = (isScrolled || !isHomePage) ? 'nav-links-dark' : 'nav-links-light';
  const toggleClass = (isScrolled || !isHomePage) ? 'toggle-dark' : 'toggle-light';

  return (
    <header className={`header ${headerClass}`}>
      <div className="header-container">
        <Link to="/" className="logo-container">
          <img src={logoImg} alt="Immersive Hub Logo" className="logo-image" />
        </Link>

        <nav className={`nav-links ${navClass}`}>
          {NAV_ITEMS.map((item) => (
            <Link key={item.label} to={item.href} className="nav-link">
              {item.label}
              {location.pathname === item.href && <span className="nav-link-underline" style={{ width: '100%' }} />}
              <span className="nav-link-underline" />
            </Link>
          ))}
        </nav>

        <div className="cta-container">
          <Link to="/contact" className="cta-button header-cta">Request Free Demo</Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`mobile-toggle ${toggleClass}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileOpen && (
        <div className="mobile-menu">
          {NAV_ITEMS.map((item) => (
            <Link key={item.label} to={item.href} className="mobile-nav-link" onClick={() => setIsMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="cta-button mobile-cta" onClick={() => setIsMobileOpen(false)}>Request Free Demo</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
