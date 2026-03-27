import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logoImg from '../assets/logo.png';

const NAV_ITEMS = [
  { label: 'HOME', to: '/' },
  { label: 'OUR LIBRARY', to: '/library' },
  { label: 'PRICING', to: '/#pricing' },
  { label: 'CUSTOM PRODUCTS', to: '/contact-us' },
  {
    label: 'LEARN MORE',
    dropdown: [
      { label: 'CASE STUDIES', to: '/case-studies' },
      { label: 'FAQ', to: '/faq' },
      { label: 'BLOG', to: '/blog' },
    ],
  },
];

function navItemActive(item, location) {
  if (item.to === '/#pricing') {
    return location.pathname === '/' && location.hash === '#pricing';
  }
  if (item.to === '/') {
    return location.pathname === '/' && !location.hash;
  }
  return item.to && location.pathname === item.to;
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className={`header-3-pill ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-pill pill-logo-nav glass-card">
        <Link to="/" className="pill-logo-link">
          <img src={logoImg} alt="Immersive Hub" className="pill-logo-img" />
        </Link>

        <nav className="pill-inline-nav desktop-only" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            if (item.dropdown) {
              return (
                <div className="nav-dropdown-wrapper" key={item.label}>
                  <span className="pill-nav-link nav-dropdown-trigger" tabIndex={0}>
                    {item.label}
                  </span>
                  <div className="nav-dropdown-menu glass-card" role="menu">
                    {item.dropdown.map((sub) => (
                      <Link key={sub.label} to={sub.to} className="dropdown-link" role="menuitem">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`pill-nav-link ${navItemActive(item, location) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="header-pill pill-actions glass-card desktop-only">
        <button type="button" className="btn-pill-contact" onClick={() => navigate('/contact-us')}>
          CONTACT SALES
        </button>
        <button type="button" className="btn-pill-login" onClick={() => navigate('/admin')}>
          LOGIN
        </button>
      </div>

      <div className="header-pill pill-mobile-toggle glass-card mobile-only">
        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-primary-nav"
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileOpen ? <X size={24} className="white" /> : <Menu size={24} className="white" />}
        </button>
      </div>

      {isMobileOpen && (
        <nav id="mobile-primary-nav" className="mobile-menu glass-card" aria-label="Mobile primary">
          {NAV_ITEMS.map((item) => {
            if (item.dropdown) {
              return (
                <div key={item.label} className="mobile-nav-group">
                  <span className="mobile-nav-heading">{item.label}</span>
                  {item.dropdown.map((sub) => (
                    <Link key={sub.label} to={sub.to} className="mobile-nav-link mobile-nav-sublink">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              );
            }
            return (
              <Link key={item.label} to={item.to} className="mobile-nav-link">
                {item.label}
              </Link>
            );
          })}
          <div className="mobile-actions">
            <button type="button" className="btn-pill-contact" onClick={() => navigate('/contact-us')}>
              CONTACT SALES
            </button>
            <button type="button" className="btn-pill-login" onClick={() => navigate('/admin')}>
              LOGIN
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
