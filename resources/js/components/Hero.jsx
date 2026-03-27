import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleCheck } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handlePilotStart = (e) => {
        e.preventDefault();
        const trimmed = email.trim();
        if (trimmed && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
            return;
        }
        navigate('/contact-us', { state: trimmed ? { prefillEmail: trimmed } : undefined });
    };

    return (
        <div className="hero-wrapper-box">
            <section className="hero-section">
                <div className="container hero-container" style={{ maxWidth: '1400px' }}>
                    <div className="hero-grid animate-fade-in-up">
                        <div className="hero-content-col">
                            <div className="caption-tag-row">
                                <div className="caption-tag hero-caption-tag">
                                    <span className="c1 white-60 uppercase">NEXT-GEN EDUCATION</span>
                                </div>
                            </div>

                            <h1 className="h1 white hero-title-main">
                                Making the<br />
                                <span className="text-gradient-blue">Impossible</span><br />
                                Possible
                            </h1>

                            <p className="b1-reg white-80 hero-subtitle-split">
                                Step into the future of learning. We bridge the gap
                                between imagination and reality with holographic education
                                environments tailored for every student.
                            </p>

                            <form className="hero-email-form" onSubmit={handlePilotStart} noValidate>
                                <div className="hero-input-wrapper">
                                    <label htmlFor="hero-email" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="hero-email"
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        className="hero-email-input"
                                        placeholder="ENTER YOUR EMAIL"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="hero-cta-btn">
                                    Start Your Pilot Program
                                </button>
                            </form>

                            <div className="hero-curriculum-checks">
                                <div className="curriculum-check">
                                    <CircleCheck size={18} className="white-80" fill="none" aria-hidden />
                                    <span className="c1 white-80 uppercase font-bold tracking-wide">IB</span>
                                </div>
                                <div className="curriculum-check">
                                    <CircleCheck size={18} className="white-80" fill="none" aria-hidden />
                                    <span className="c1 white-80 uppercase font-bold tracking-wide">IGCSE</span>
                                </div>
                                <div className="curriculum-check">
                                    <CircleCheck size={18} className="white-80" fill="none" aria-hidden />
                                    <span className="c1 white-80 uppercase font-bold tracking-wide">NGSS</span>
                                </div>
                                <div className="curriculum-check">
                                    <CircleCheck size={18} className="white-80" fill="none" aria-hidden />
                                    <span className="c1 white-80 uppercase font-bold tracking-wide">MOE</span>
                                </div>
                            </div>
                        </div>

                        <div className="hero-image-col">
                            <div className="hero-hero-img-wrap">
                                <video
                                    src="https://nextworld.b-cdn.net/home-page/next-world-home-hero-video.mp4"
                                    className="hero-hero-image"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    poster=""
                                />
                                <div className="hero-floating-stat glass-card">
                                    <div className="hero-live-exp-row">
                                        <div className="hero-green-dot" aria-hidden />
                                        <span className="c1 uppercase hero-green-text">LIVE EXPERIENCE</span>
                                    </div>
                                    <h2 className="h4-semi white" style={{ margin: 0, fontSize: '1.15rem' }}>12k+ Active Explorers</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
