import React from 'react';
import { Brain, Zap, Target } from 'lucide-react';
import './EducationalApproach.css';

const EducationalApproach = () => {
    return (
        <section id="approach" className="section approach-section">
            <div className="container">
                <div className="approach-header">
                    <div className="caption-tag">
                        <span className="c1 white-60">WHY IMMERSIVE HUB WORKS</span>
                    </div>
                    <h2 className="h2 white">
                        The evolution of <br />
                        <span className="text-gradient">active learning.</span>
                    </h2>
                    <p className="b1-reg white-80" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Moving from passive observation to experiential comprehension. Real retention happens when students actively participate in their education.
                    </p>
                </div>

                <div className="approach-grid">
                    {/* The Old Way */}
                    <div className="approach-card old-way glass-card">
                        <div className="card-top">
                            <h3 className="h4-semi white">Passive Learning</h3>
                            <div className="card-badge warning">The Problem</div>
                        </div>
                        <p className="b1-reg white-60">
                            Traditional methods leave students struggling to visualize complex,
                            abstract scientific concepts. Textbooks and 2D videos lead to disengagement and low retention.
                        </p>
                    </div>

                    {/* The Immersive Way */}
                    <div className="approach-card new-way style-accent">
                        <div className="card-top">
                            <h3 className="h4-semi white">Active Immersive</h3>
                            <div className="card-badge success">Our Solution</div>
                        </div>
                        <p className="b1-reg white-80">
                            Immersive Hub provides risk-free, gamified environments where academic concepts visually come to life,
                            guaranteeing specific learning outcomes in a way that feels like play.
                        </p>
                        
                        <div className="approach-metrics">
                            <div className="metric">
                                <Brain size={24} className="deep" />
                                <span className="b1-reg white">4x Faster Training</span>
                            </div>
                            <div className="metric">
                                <Zap size={24} className="deep" />
                                <span className="b1-reg white">275% Confidence Boost</span>
                            </div>
                            <div className="metric">
                                <Target size={24} className="deep" />
                                <span className="b1-reg white">90% Retention Rate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationalApproach;
