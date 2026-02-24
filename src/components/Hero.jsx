import React, { useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, Play, BookOpen, Headset, Cpu } from 'lucide-react';
import './Hero.css';

const CURRICULUM_BADGES = [
    { label: 'NGSS', color: '#0d9488', glow: '#0d9488' },
    { label: 'IB', color: '#3b82f6', glow: '#3b82f6' },
    { label: 'IGCSE', color: '#8b5cf6', glow: '#8b5cf6' },
    { label: 'National Curriculum', color: '#EE8B22', glow: '#EE8B22' },
];

const STATS = [
    { value: '100+', label: 'VR Experiences' },
    { value: '50+', label: 'Partner Schools' },
    { value: '98%', label: 'Teacher Satisfaction' },
];

const Hero = () => {
    const orb1Ref = useRef(null);
    const orb2Ref = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 30;
            const y = (e.clientY / innerHeight - 0.5) * 30;
            if (orb1Ref.current) {
                orb1Ref.current.style.transform = `translate(${x}px, ${y}px)`;
            }
            if (orb2Ref.current) {
                orb2Ref.current.style.transform = `translate(${-x * 0.6}px, ${-y * 0.6}px)`;
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="hero-section" ref={sectionRef}>
            {/* Animated Background Orbs */}
            <div className="hero-orbs">
                <div className="hero-orb orb-1" ref={orb1Ref}></div>
                <div className="hero-orb orb-2" ref={orb2Ref}></div>
                <div className="hero-orb orb-3"></div>
            </div>
            {/* Particle Grid Background */}
            <div className="hero-particles">
                {Array.from({ length: 30 }).map((_, i) => (
                    <span key={i} className="hero-particle" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 8}s`,
                        animationDuration: `${Math.random() * 10 + 8}s`,
                    }} />
                ))}
            </div>

            <div className="hero-content section animate-fade-in-up">
                {/* Badge */}
                <div className="hero-badge">
                    <Sparkles size={14} style={{ color: '#fbbf24' }} />
                    <span>Transforming Education with VR & AI</span>
                </div>

                {/* Headline */}
                <h1 className="hero-title">
                    <span className="text-dark">Our mission is to solve one of</span>
                    <br />
                    <span className="text-dark">education's most</span>{' '}
                    <span className="text-accent-italic">impossible</span>{' '}
                    <span className="text-dark">tasks.</span>
                </h1>

                <p className="hero-subtitle">
                    Transform passive classrooms into <strong>immersive adventures.</strong>
                    <br />
                    VR experiences aligned with NGSS, IB, IGCSE &amp; National Curriculum, powered by AI education agents.
                </p>

                {/* Curriculum Badges */}
                <div className="hero-curriculum-badges">
                    {CURRICULUM_BADGES.map((b) => (
                        <span
                            key={b.label}
                            className="curriculum-badge"
                            style={{ '--badge-color': b.color }}
                        >
                            ✓ {b.label}
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
                    <button className="hero-cta-secondary">
                        <Play size={16} />
                        Watch Demo
                    </button>
                </div>

                {/* Feature Items */}
                <div className="hero-features-row">
                    <div className="feature-item">
                        <div className="feature-icon-box">
                            <BookOpen className="feature-icon" size={32} />
                        </div>
                        <h4>Curriculum Aligned</h4>
                        <p>Aligned for NGSS with clear pathways for Egyptian national curriculum integration.</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon-box">
                            <Headset className="feature-icon" size={32} />
                        </div>
                        <h4>Immersive VR</h4>
                        <p>100+ immersive VR and Mixed Reality experiences for all learning styles and abilities.</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon-box">
                            <Cpu className="feature-icon" size={32} />
                        </div>
                        <h4>AI-Powered</h4>
                        <p>Our AI agent personalizes each student's learning journey for maximum retention.</p>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="hero-stats-bar">
                    {STATS.map((s) => (
                        <div key={s.label} className="hero-stat">
                            <span className="hero-stat-value">{s.value}</span>
                            <span className="hero-stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
