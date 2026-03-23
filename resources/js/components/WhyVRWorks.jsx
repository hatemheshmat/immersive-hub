import React, { useRef } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import './WhyVRWorks.css';

const VR_BENEFITS = [
    {
        title: "Accelerated Learning via Emotional Engagement",
        description: "VR triggers real emotional and physiological responses, anchoring knowledge deeper in memory. Immersive Hub students show a x4 acceleration in learning complex STEM concepts.",
        stat: "4x",
        statLabel: "Faster comprehension in 3D versus 2D textbook environments."
    },
    {
        title: "Zero-Risk Scientific Experimentation",
        description: "Students can mix volatile chemicals, witness nuclear reactions, or explore inside an active volcano without any physical danger, encouraging limitless curiosity.",
        stat: "100%",
        statLabel: "Safe environment for high-risk STEM laboratory simulations."
    },
    {
        title: "Distraction-Free Deep Focus",
        description: "Once the headset is on, smartphones and classroom distractions vanish. Immersive learning commands 100% of a student's visual and auditory attention.",
        stat: "275%",
        statLabel: "Increase in student confidence to discuss taught materials."
    }
];

const WhyVRWorks = () => {
    const sliderRef = useRef(null);

    return (
        <section className="why-vr-section section">
            {/* Evolution of Learning Block */}
            <div className="container" style={{ paddingBottom: '3rem', maxWidth: '1400px' }}>
                <div className="evolution-header">
                    <h2 className="h2 text-gradient evolution-title">The Evolution of Learning</h2>
                    <p className="b1-reg white-60 evolution-subtitle">Moving from passive observation to active, experiential comprehension.</p>
                </div>

                <div className="evolution-list-wrapper">
                    {/* The Problem */}
                    <div className="evolution-flex-row">
                        <div className="evolution-image-side">
                            <img src="/images/passive_students.jpg" alt="Passive Learning" className="evolution-side-img" />
                        </div>
                        <div className="glass-panel evolution-card problem-card">
                            <div className="evolution-card-badge">The Problem</div>
                            <h3 className="evolution-card-title">Passive Learning</h3>
                            <p className="evolution-card-desc">Traditional methods often leave students struggling to visualize complex, abstract scientific concepts. Textbooks and 2D videos can lead to disengagement.</p>
                            <ul className="evolution-card-list">
                                <li>
                                    <XCircle className="evol-icon-purple" size={24} />
                                    <span>Abstract theories remain abstract</span>
                                </li>
                                <li>
                                    <XCircle className="evol-icon-purple" size={24} />
                                    <span>Low knowledge retention rates</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* The Solution */}
                    <div className="evolution-flex-row reverse">
                        <div className="evolution-image-side">
                            <img src="/images/vr_students.png" alt="VR Learning" className="evolution-side-img" />
                        </div>
                        <div className="glass-panel evolution-card active-card">
                            <div className="evolution-card-badge">Our Solution</div>
                            <h3 className="evolution-card-title">Active Immersive Learning</h3>
                            <p className="evolution-card-desc">Immersive Hub provides risk-free, gamified environments where academic concepts visually come to life, guaranteeing specific learning outcomes in a way that feels like play.</p>
                            <ul className="evolution-card-list">
                                <li>
                                    <CheckCircle2 className="evol-icon-purple" size={24} />
                                    <span>Deep experiential knowledge retention</span>
                                </li>
                                <li>
                                    <CheckCircle2 className="evol-icon-purple" size={24} />
                                    <span>100% safe, limitless experimentation</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Compact Benefits Section */}
            <div className="container" style={{ paddingBottom: '0', maxWidth: '1400px' }}>
                <div className="why-vr-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="h2 text-gradient">
                        Immersive simulation benefits
                    </h2>
                </div>

                <div className="benefits-grid">
                    {VR_BENEFITS.map((item, index) => (
                        <div key={index} className="glass-panel benefit-compact-card">
                            <div className="benefit-text-content">
                                <h3 className="h4-semi white benefit-title" style={{ marginBottom: '0.75rem' }}>{item.title}</h3>
                                <p className="b2-reg white-60 benefit-desc" style={{ marginBottom: '1.5rem' }}>{item.description}</p>
                            </div>
                            <div className="benefit-stat-box">
                                <div className="stat-value deep h2" style={{ marginBottom: '0' }}>{item.stat}</div>
                                <p className="b2-medium white-80 stat-label" style={{ margin: 0 }}>{item.statLabel}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyVRWorks;
