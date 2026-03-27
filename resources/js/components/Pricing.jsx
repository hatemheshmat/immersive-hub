import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Gift } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
    return (
        <section id="pricing" className="section pricing-section">
            <div className="pricing-header text-center">
                <h2>Simple, Transparent <span className="text-gradient">Pricing</span></h2>
                <p>Billed per semester to align with your school's academic calendar.</p>
            </div>

            <div className="pricing-grid bento-layout">
                {/* Lite Tier */}
                <div className="pricing-card glass-card bento-span-5 hover-lift">
                    <div className="tier-name">STARTER</div>
                    <div className="tier-price">
                        <span className="currency">EGP</span>
                        <span className="amount">90,000</span>
                        <span className="period">/ Semester</span>
                    </div>
                    <p className="tier-desc">Perfect for schools exploring immersive education with existing hardware.</p>

                    <ul className="tier-features">
                        <li><Check className="check" size={20} /> Access to 50 VR educational projects per semester.</li>
                        <li><Check className="check" size={20} /> Software access for your school's existing hardware.</li>
                        <li><Check className="check" size={20} /> Teacher Handbooks & Lesson Plans included.</li>
                    </ul>
                    <Link to="/contact-us" className="pricing-card-cta">
                        Get started
                    </Link>
                </div>

                {/* Essentials Tier */}
                <div className="pricing-card glass-card popular bento-span-7 hover-lift">
                    <div className="popular-badge">DISCOUNTED</div>
                    <div className="tier-name gradient-text">GROWTH</div>
                    <div className="tier-price">
                        <span className="currency">EGP</span>
                        <span className="amount" style={{textDecoration: 'line-through', fontSize: '1.5rem', marginRight: '8px', color: 'var(--color-text-muted)'}}>150,000</span>
                        <span className="amount">120,000</span>
                        <span className="period">/ Semester</span>
                    </div>
                    <p className="tier-desc">The ideal package for expanding your curriculum with custom content.</p>

                    <ul className="tier-features">
                        <li><Check className="check" size={20} /> Access to 100 VR educational projects per semester.</li>
                        <li><Check className="check highlight" size={20} /> <span>Includes <strong>5 Custom Educational VR Projects</strong> built for your curriculum.</span></li>
                        <li><Check className="check" size={20} /> Free promotional VR tour of your school for your own marketing.</li>
                    </ul>
                    <Link to="/contact-us" className="pricing-card-cta pricing-card-cta-accent">
                        Get started
                    </Link>
                </div>

                {/* Suite Tier (Full Width Bento Item) */}
                <div className="pricing-card glass-card premium bento-span-12 hover-lift bento-internal-split">
                    <div className="bento-split-left">
                        <div className="tier-name premium-text">PREMIUM ECOSYSTEM</div>
                        <div className="tier-price">
                            <span className="currency">EGP</span>
                            <span className="amount">195,000</span>
                            <span className="period">/ Semester</span>
                        </div>
                        <p className="tier-desc">The ultimate all-in-one immersive learning environment for innovative schools.</p>
                    </div>

                    <div className="bento-split-right">
                        <ul className="tier-features">
                            <li><Check className="check" size={20} /> Full Access to our entire VR & Mixed Reality Library.</li>
                            <li><Check className="check" size={20} /> <span>The <strong>AI Educational Agent</strong>: Personalized learning profiles.</span></li>
                            <li><Check className="check" size={20} /> Includes 2 VR Labs & Extra Mixed Reality Headsets.</li>
                            <li><Check className="check" size={20} /> 24/7 Premium Customer Support.</li>
                        </ul>

                        <div className="bonus-box">
                            <Gift className="bonus-icon" size={20} />
                            <p><strong>Special 1-Year Renewal Bonus:</strong> Sign a full-year contract and receive <strong>3 EXTRA VR Headsets absolutely FREE</strong>!</p>
                        </div>
                        <Link to="/contact-us" className="pricing-card-cta pricing-card-cta-premium">
                            Contact us for Premium
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
