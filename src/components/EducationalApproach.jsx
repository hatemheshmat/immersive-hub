import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';
import './EducationalApproach.css';

const EducationalApproach = () => {
    return (
        <section id="approach" className="section approach-section">
            <div className="approach-header">
                <h2>The Evolution of <span className="text-gradient">Learning</span></h2>
                <p>Moving from passive observation to active, experiential comprehension.</p>
            </div>

            <div className="approach-content-wrapper">
                <div className="approach-image-container">
                    <img src="/vr_students.jpg" alt="Students using VR" className="approach-image" />
                    <div className="image-glow"></div>
                </div>

                <div className="approach-grid">
                    {/* The Old Way */}
                    <div className="approach-card old-way glass-card">
                        <div className="card-badge warning">The Problem</div>
                        <h3>Passive Learning</h3>
                        <p>
                            Traditional methods often leave students struggling to visualize complex,
                            abstract scientific concepts. Textbooks and 2D videos can lead to disengagement.
                        </p>
                        <ul className="approach-list">
                            <li><XCircle className="icon-warning" size={20} /> Abstract theories remain abstract</li>
                            <li><XCircle className="icon-warning" size={20} /> Low knowledge retention rates</li>
                        </ul>
                    </div>

                    {/* The Immersive Way */}
                    <div className="approach-card new-way glass-card">
                        <div className="card-badge success">Our Solution</div>
                        <h3>Active Immersive Learning</h3>
                        <p>
                            Immersive Hub provides risk-free, gamified environments where academic concepts visually come to life,
                            guaranteeing specific learning outcomes in a way that feels like play.
                        </p>
                        <ul className="approach-list">
                            <li><CheckCircle2 className="icon-success" size={20} /> Deep experiential knowledge retention</li>
                            <li><CheckCircle2 className="icon-success" size={20} /> 100% safe, limitless experimentation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationalApproach;
