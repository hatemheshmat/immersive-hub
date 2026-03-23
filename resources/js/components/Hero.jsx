import React from 'react';
import { CircleCheck } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-wrapper-box">
            <section className="hero-section">
                <div className="container hero-container" style={{ maxWidth: '1400px' }}>
                    <div className="hero-grid animate-fade-in-up">
                        {/* Left Column Text content */}
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

                            {/* Email Capture Form */}
                            <div className="hero-email-form">
                                <div className="hero-input-wrapper">
                                    <input
                                        type="email"
                                        className="hero-email-input"
                                        placeholder="ENTER YOUR EMAIL"
                                    />
                                </div>
                                <button className="hero-cta-btn">Start Your Pilot Program</button>
                            </div>

                            {/* Bottom Curriculum Checks */}
                            <div className="hero-curriculum-checks">
                                <div className="curriculum-check">
                                    <CircleCheck size={18} className="white-80" fill="none" />
                                    <span className="c1 white-80 uppercase font-bold tracking-wide">IB</span>
                                </div>
                                <div className="curriculum-check">
                                    <CircleCheck size={18} className="white-80" fill="none" />
                                    <span className="c1 white-80 uppercase font-bold tracking-wide">IGCSE</span>
                                </div>
                                <div className="curriculum-check">
                                    <CircleCheck size={18} className="white-80" fill="none" />
                                    <span className="c1 white-80 uppercase font-bold tracking-wide">NGSS</span>
                                </div>
                                <div className="curriculum-check">
                                    <CircleCheck size={18} className="white-80" fill="none" />
                                    <span className="c1 white-80 uppercase font-bold tracking-wide">MOE</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column Video */}
                        <div className="hero-image-col">
                            <div className="hero-hero-img-wrap">
                                <video
                                    src="https://nextworld.b-cdn.net/home-page/next-world-home-hero-video.mp4"
                                    className="hero-hero-image"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                                {/* Floating Stats Card */}
                                <div className="hero-floating-stat glass-card">
                                    <div className="hero-live-exp-row">
                                        <div className="hero-green-dot"></div>
                                        <span className="c1 uppercase hero-green-text">LIVE EXPERIENCE</span>
                                    </div>
                                    <h4 className="h4-semi white" style={{ margin: 0, fontSize: '1.15rem' }}>12k+ Active Explorers</h4>
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
