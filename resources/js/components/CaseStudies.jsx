import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './CaseStudies.css';

const CASE_STUDIES = [
    {
        title: "Scaling Safety Training at Global Logistics",
        company: "ACME Global",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        metric: "75%",
        metricLabel: "Reduction in incident response time"
    },
    {
        title: "Virtual Manufacturing Onboarding",
        company: "Nexus Industries",
        image: "https://images.unsplash.com/photo-1565439390708-cb864dd13bb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        metric: "3x",
        metricLabel: "Faster onboarding for new machine operators"
    },
    {
        title: "Medical Device Assembly Simulation",
        company: "BioTech Solutions",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        metric: "99.9%",
        metricLabel: "Assembly accuracy post-VR training"
    },
    {
        title: "High-Risk Environment Preparedness",
        company: "AeroSpace Intl",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        metric: "-40%",
        metricLabel: "Decrease in critical error rates"
    }
];

const CaseStudies = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="section case-studies-section">
            <div className="container" style={{ paddingBottom: '0' }}>
                <div className="case-studies-header">
                    <div className="cs-text-content">
                        <div className="caption-tag">
                            <span className="c1 white-60">PROVEN IMPACT</span>
                        </div>
                        <h2 className="h2 white" style={{ marginBottom: '1rem' }}>
                            Success stories<br />from the real world.
                        </h2>
                    </div>
                    
                    <div className="cs-nav-controls">
                        <button type="button" className="nav-btn" onClick={() => scroll('left')} aria-label="Scroll case studies left">
                            <ArrowLeft size={24} aria-hidden />
                        </button>
                        <button type="button" className="nav-btn" onClick={() => scroll('right')} aria-label="Scroll case studies right">
                            <ArrowRight size={24} aria-hidden />
                        </button>
                    </div>
                </div>
            </div>

            <div className="case-studies-slider-container" cursor-hover="drag">
                <div className="case-studies-slider" ref={scrollRef}>
                    {CASE_STUDIES.map((study, idx) => (
                        <div key={idx} className="cs-card">
                            <div className="cs-image-wrapper">
                                <img src={study.image} alt={study.title} className="cs-image" />
                                <div className="cs-company-badge">
                                    <span className="c1">{study.company}</span>
                                </div>
                            </div>
                            <div className="cs-content glass-card">
                                <h3 className="h5-semi white" style={{ marginBottom: '1.5rem' }}>{study.title}</h3>
                                <div className="cs-metric-block flex gap-1 items-end">
                                    <span className="h4-semi deep">{study.metric}</span>
                                    <span className="b1-reg white-60" style={{ paddingBottom: '4px', paddingLeft: '8px' }}>{study.metricLabel}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Spacer for right edge */}
                    <div className="cs-spacer" style={{ width: '5vw', flexShrink: 0 }}></div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
