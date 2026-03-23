import React from 'react';
import { ArrowRight } from 'lucide-react';
import './ImmersiveLibrary.css';

const LIBRARY_PRODUCTS = [
    {
        id: 'science',
        badge: 'SCIENCE',
        title: 'Science Labs',
        desc: 'Safe, virtual chemical experiments and biology...',
        badgeColor: '#60a5fa', // lighter blue for text
        badgeBg: '#1e3a8a',    // solid dark blue background
        image: '/images/science_labs.jpg'
    },
    {
        id: 'history',
        badge: 'HISTORY',
        title: 'Historical Trips',
        desc: 'Walk through Rome, Egypt, and major historical events.',
        badgeColor: '#fbbf24', // lighter amber for text
        badgeBg: '#78350f',    // solid dark amber/brown background
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=800&fit=crop'
    },
    {
        id: 'language',
        badge: 'LANGUAGE',
        title: 'Immersion',
        desc: 'Practice conversations in realistic foreign environments.',
        badgeColor: '#c084fc', // lighter purple for text
        badgeBg: '#4c1d95',    // solid dark purple background
        image: 'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=600&h=800&fit=crop'
    },
    {
        id: 'math',
        badge: 'MATH',
        title: 'Math Gamified',
        desc: 'Visualizing geometry and algebra in 3D space.',
        badgeColor: '#34d399', // lighter green for text
        badgeBg: '#064e3b',    // solid dark green background
        image: '/images/math_gamified.jpg'
    },
    {
        id: 'stem',
        badge: 'STEM',
        title: 'Engineering Sims',
        desc: 'Build, test, and refine structures with physics engines.',
        badgeColor: '#fb7185', // lighter rose for text
        badgeBg: '#881337',    // solid dark rose/red background
        image: '/images/engineering_sims.jpg'
    }
];

const ImmersiveLibrary = () => {
    return (
        <section id="library" className="lib-section">
            {/* Header */}
            <div className="lib-header-row">
                <div className="lib-header-left">
                    <h2 className="lib-title">A diverse library built for every <span className="text-gradient" style={{color: '#60a5fa'}}>subject</span> and learning style.</h2>
                    <p className="lib-subtitle">5 core educational products, limitless possibilities.</p>
                    <p className="lib-subtitle" style={{marginTop: '0.75rem'}}>Browse our full library of immersive educational modules designed to inspire students and guarantee academic outcomes.</p>
                </div>
                <div className="lib-header-right">
                    <a href="/catalog" className="lib-view-all">
                        Explore Our Library <ArrowRight size={18} />
                    </a>
                </div>
            </div>

            {/* Grid of 5 vertical cards */}
            <div className="lib-grid">
                {LIBRARY_PRODUCTS.map((prod) => (
                    <div key={prod.id} className="lib-card">
                        {/* Background Image */}
                        <img 
                            src={prod.image} 
                            alt={prod.title} 
                            className="lib-card-img" 
                            loading="lazy" 
                        />
                        
                        {/* Dark gradient overlay for text readability */}
                        <div className="lib-card-overlay"></div>

                        {/* Content at bottom */}
                        <div className="lib-card-content">
                            <span 
                                className="lib-badge" 
                                style={{ color: prod.badgeColor, backgroundColor: prod.badgeBg }}
                            >
                                {prod.badge}
                            </span>
                            <h3>{prod.title}</h3>
                            <p>{prod.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ImmersiveLibrary;
