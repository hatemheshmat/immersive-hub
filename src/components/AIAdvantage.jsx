import React from 'react';
import { BrainCircuit, LineChart, Target, TrendingUp, Bot, Activity, CheckCircle2 } from 'lucide-react';
import './AIAdvantage.css';

const AIAdvantage = () => {
    return (
        <section id="ai" className="ai-section">
            <div className="ai-container section">
                <div className="ai-content">
                    <div className="ai-badge">Premium Feature</div>
                    <h2 className="ai-title">Personalized Learning <br /> Powered by <span className="text-gradient">AI</span></h2>
                    <p className="ai-description">
                        Our proprietary AI Educational Agent tracks and analyzes student behavior within the
                        VR simulations. It creates a custom Learning Profile for each student to determine
                        their optimal learning methods, ensuring no student is left behind.
                    </p>

                    <div className="ai-features-grid">
                        <div className="ai-feature">
                            <BrainCircuit className="ai-icon text-primary" size={32} />
                            <h4>Behavior Analysis</h4>
                            <p>Real-time tracking of student choices and engagement levels.</p>
                        </div>
                        <div className="ai-feature">
                            <LineChart className="ai-icon text-accent" size={32} />
                            <h4>Learning Profiles</h4>
                            <p>Custom educational roadmaps tailored to individual cognitive strengths.</p>
                        </div>
                        <div className="ai-feature">
                            <Target className="ai-icon text-primary" size={32} />
                            <h4>Adaptive Difficulty</h4>
                            <p>Simulations that scale in complexity based on student performance.</p>
                        </div>
                        <div className="ai-feature">
                            <TrendingUp className="ai-icon text-accent" size={32} />
                            <h4>Teacher Insights</h4>
                            <p>Comprehensive dashboards to monitor progress and identify learning gaps.</p>
                        </div>
                    </div>
                </div>

                <div className="ai-visual">
                    <div className="clean-mockup-container">
                        <div className="mockup-card main-card">
                            <Bot size={64} className="mockup-icon primary" />
                            <div className="mockup-line w-full"></div>
                            <div className="mockup-line w-3-4"></div>
                            <div className="mockup-line w-1-2"></div>
                        </div>
                        <div className="mockup-card floating-card card-1">
                            <Activity size={24} className="mockup-icon accent" />
                            <span>Processing Data</span>
                        </div>
                        <div className="mockup-card floating-card card-2">
                            <CheckCircle2 size={24} className="mockup-icon success" />
                            <span>Path Optimized</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIAdvantage;
