import React from 'react';
import { Sparkles, ArrowRight, Play, BookOpen, Headset, Cpu } from 'lucide-react';
import './Hero.css';

const CURRICULUM_BADGES = [
    { label: 'NGSS', color: '#00BFFF' },
    { label: 'IB', color: '#8A2BE2' },
    { label: 'IGCSE', color: '#10b981' },
    { label: 'National Curriculum', color: '#f59e0b' },
];

const STATS = [
    { value: '100+', label: 'VR Experiences' },
    { value: '50+', label: 'Partner Schools' },
    { value: '98%', label: 'Teacher Satisfaction' },
];

// Placeholder for the user's 16:9 VR GIF
const VR_BACKGROUND_URL = "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=2000&auto=format&fit=crop";

const Hero = () => {
    return (
        <section className="hero-section">
            {/* 16:9 VR Background Media Container */}
            <div className="hero-background-media">
                <img
                    src={VR_BACKGROUND_URL}
                    alt="VR Gameplay Background"
                    className="hero-bg-image"
                />
                <div className="hero-bg-overlay"></div>
            </div>

            <div className="hero-content section animate-fade-in-up">
                {/* Floating Glass Container around the main narrative */}
                <div className="hero-glass-container glass-card">
                    {/* Badge */}
                    <div className="hero-badge">
                        <Sparkles size={16} className="text-cyan" />
                        <span>Spatial Computing in Education</span>
                    </div>

                    {/* Headline */}
                    <h1 className="hero-title">
                        Immersive learning <br />
                        <span className="text-gradient">for the next generation</span>
                    </h1>

                    <p className="hero-subtitle">
                        Transform passive classrooms into <strong>interactive 3D environments.</strong>
                        <br />
                        Curriculum-aligned VR experiences powered by intelligent AI educators.
                    </p>

                    {/* Curriculum Badges */}
                    <div className="hero-curriculum-badges">
                        {CURRICULUM_BADGES.map((b) => (
                            <span
                                key={b.label}
                                className="curriculum-badge"
                                style={{ borderLeftColor: b.color }}
                            >
                                {b.label}
                            </span>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hero-cta-row">
                        <button
                            className="cta-button hero-cta-primary"
                            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Request Free Demo <ArrowRight size={18} />
                        </button>
                        <button className="hero-cta-secondary cta-button">
                            <Play size={16} />
                            Watch 3D Showcase
                        </button>
                    </div>
                </div>

                {/* Feature Items */}
                <div className="hero-features-row">
                    <div className="feature-item glass-card">
                        <div className="feature-icon-box">
                            <BookOpen className="feature-icon" size={28} />
                        </div>
                        <h4>Curriculum Aligned</h4>
                        <p>Fully mapped to NGSS and local standard requirements.</p>
                    </div>
                    <div className="feature-item glass-card">
                        <div className="feature-icon-box">
                            <Headset className="feature-icon" size={28} />
                        </div>
                        <h4>100+ VR Worlds</h4>
                        <p>Dozens of high-fidelity spatial experiences for every subject.</p>
                    </div>
                    <div className="feature-item glass-card">
                        <div className="feature-icon-box">
                            <Cpu className="feature-icon" size={28} />
                        </div>
                        <h4>AI Copilot</h4>
                        <p>Real-time adaptive tutoring inside the headsets.</p>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="hero-stats-bar glass-card">
                    {STATS.map((s) => (
                        <div key={s.label} className="hero-stat">
                            <span className="hero-stat-value text-gradient">{s.value}</span>
                            <span className="hero-stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
