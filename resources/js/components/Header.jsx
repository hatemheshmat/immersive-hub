import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logoImg from '../assets/logo.png';

const NAV_ITEMS = [
  { label: 'HOME', href: '/' },
  { label: 'OUR LIBRARY', href: '/library' },
  { label: 'PRICING', href: '#pricing' },
  { label: 'CUSTOM PRODUCTS', href: '/custom' },
  { 
    label: 'LEARN MORE', 
    dropdown: [
        { label: 'CASE STUDIES', href: '/case-studies' },
        { label: 'FAQ', href: '/faq' },
        { label: 'BLOG', href: '/blog' }
    ]
  },
];

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

  return (
    <header className={`header-3-pill ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-pill pill-logo-nav glass-card">
        <Link to="/" className="pill-logo-link">
            <img src={logoImg} alt="Immersive Hub" className="pill-logo-img" />
        </Link>

        <nav className="pill-inline-nav desktop-only">
          {NAV_ITEMS.map((item) => {
            if (item.dropdown) {
               return (
                 <div className="nav-dropdown-wrapper" key={item.label}>
                   <span className="pill-nav-link" style={{cursor: 'pointer'}}>
                     {item.label}
                   </span>
                   <div className="nav-dropdown-menu glass-card">
                     {item.dropdown.map(sub => (
                       <Link key={sub.label} to={sub.href} className="dropdown-link">
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
                to={item.href}
                className={`pill-nav-link ${location.pathname === item.href ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="header-pill pill-actions glass-card desktop-only">
        <button className="btn-pill-contact" onClick={() => navigate('/contact-us')}>CONTACT SALES</button>
        <button className="btn-pill-login" onClick={() => navigate('/login')}>LOGIN</button>
      </div>

      {/* Mobile toggle */}
      <div className="header-pill pill-mobile-toggle glass-card mobile-only">
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileOpen ? <X size={24} className="white" /> : <Menu size={24} className="white" />}
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
          <div className="mobile-actions" style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem'}}>
             <button className="btn-pill-contact" onClick={() => navigate('/contact-us')}>CONTACT SALES</button>
             <button className="btn-pill-login" onClick={() => navigate('/login')}>LOGIN</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
