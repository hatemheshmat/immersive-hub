import React from 'react';
import { BrainCircuit, LineChart, Target, TrendingUp, Sparkles } from 'lucide-react';
import './AIAdvantage.css';

const features = [
    {
        icon: <BrainCircuit size={24} />,
        title: 'Behavior Analysis',
        desc: 'Real-time tracking of student choices and engagement levels.'
    },
    {
        icon: <LineChart size={24} />,
        title: 'Learning Profiles',
        desc: 'Custom educational roadmaps tailored to individual cognitive strengths.'
    },
    {
        icon: <Target size={24} />,
        title: 'Adaptive Difficulty',
        desc: 'Simulations that scale in complexity based on student performance.'
    },
    {
        icon: <TrendingUp size={24} />,
        title: 'Teacher Insights',
        desc: 'Comprehensive dashboards to monitor progress and identify learning gaps.'
    },
];

const AIAdvantage = () => {
    return (
        <section id="ai" className="ai-section">
            <div className="ai-two-col">

                {/* ── LEFT: Copy ── */}
                <div className="ai-left">
                    <div className="ai-badge">
                        <Sparkles size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                        Premium Feature
                    </div>

                    <h2 className="ai-title">
                        Personalized Learning<br />
                        Powered by <span className="text-gradient">AI</span>
                    </h2>

                    <p className="ai-description">
                        Our proprietary AI Educational Agent tracks and analyzes student behavior
                        within the VR simulations. It creates a custom Learning Profile for each
                        student to determine their optimal learning methods, ensuring no student
                        is left behind.
                    </p>

                    {/* 2-column feature mini-cards */}
                    <div className="ai-features-grid">
                        {features.map((f) => (
                            <div key={f.title} className="ai-feature-card">
                                <div className="ai-feat-icon">{f.icon}</div>
                                <h4>{f.title}</h4>
                                <p>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── RIGHT: App mockup panel ── */}
                <div className="ai-right">
                    <div className="ai-mockup-panel">
                        {/* Glow background */}
                        <div className="ai-panel-glow" />

                        {/* Student profile row */}
                        <div className="ai-profile-row">
                            <div className="ai-avatar">
                                <span>S</span>
                            </div>
                            <div className="ai-profile-info">
                                <span className="ai-student-name">Sarah J.</span>
                                <span className="ai-focus">Focus: High</span>
                            </div>
                            <span className="ai-subject-badge">Algebra II</span>
                        </div>

                        {/* Progress bar */}
                        <div className="ai-progress-block">
                            <div className="ai-progress-header">
                                <span>Concept Mastery</span>
                                <span className="ai-progress-pct">87%</span>
                            </div>
                            <div className="ai-progress-track">
                                <div className="ai-progress-fill" style={{ width: '87%' }} />
                            </div>
                        </div>

                        {/* AI Recommendation box */}
                        <div className="ai-rec-box">
                            <p>
                                <strong>AI Recommendation:</strong> Increasing complexity of
                                polynomial simulations. Next module unlocked.
                            </p>
                        </div>

                        {/* Insights mini-stats */}
                        <div className="ai-insight-row">
                            <div className="ai-insight-stat">
                                <span className="ai-ins-val">86</span>
                                <span className="ai-ins-label">Licenses allocated</span>
                                <span className="ai-ins-delta negative">-10% last 30d</span>
                            </div>
                            <div className="ai-insight-stat">
                                <span className="ai-ins-val">120</span>
                                <span className="ai-ins-label">Total users</span>
                                <span className="ai-ins-delta positive">+24% last 30d</span>
                            </div>
                            <div className="ai-insight-stat">
                                <span className="ai-ins-val">180</span>
                                <span className="ai-ins-label">VR sessions</span>
                                <span className="ai-ins-delta positive">+13% last 30d</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AIAdvantage;
