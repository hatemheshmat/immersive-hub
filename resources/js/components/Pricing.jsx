import React from 'react';
import { Check, Gift } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
    return (
        <section id="pricing" className="section pricing-section">
            <div className="pricing-header text-center">
                <h2>Simple, Transparent <span className="text-gradient">Pricing</span></h2>
                <p>Billed per semester to align with your school's academic calendar.</p>
            </div>

            <div className="pricing-grid">
                {/* Tier 1 */}
                <div className="pricing-card glass-card">
                    <div className="tier-name">TIER 1</div>
                    <h3 className="tier-title">Starter</h3>
                    <div className="tier-price">
                        <span className="currency">EGP</span>
                        <span className="amount">120,000</span>
                        <span className="period">/ Semester</span>
                    </div>
                    <p className="tier-desc">Perfect for schools exploring immersive education with existing hardware.</p>

                    <ul className="tier-features">
                        <li><Check className="check" size={20} /> Access to 50 VR educational projects per semester.</li>
                        <li><Check className="check" size={20} /> Software access for your school's existing hardware.</li>
                        <li><Check className="check" size={20} /> Teacher Handbooks & Lesson Plans included.</li>
                    </ul>
                </div>

                {/* Tier 2 */}
                <div className="pricing-card glass-card popular">
                    <div className="popular-badge">MOST POPULAR</div>
                    <div className="tier-name gradient-text">TIER 2</div>
                    <h3 className="tier-title">Growth</h3>
                    <div className="tier-price">
                        <span className="currency">EGP</span>
                        <span className="amount">150,000</span>
                        <span className="period">/ Semester</span>
                    </div>
                    <p className="tier-desc">The ideal package for expanding your curriculum with custom content.</p>

                    <ul className="tier-features">
                        <li><Check className="check" size={20} /> Access to 100 VR educational projects per semester.</li>
                        <li><Check className="check highlight" size={20} /> <span>Includes <strong>5 Custom Educational VR Projects</strong> built for your curriculum.</span></li>
                        <li><Check className="check" size={20} /> Free promotional VR tour of your school for your own marketing.</li>
                    </ul>
                </div>

                {/* Tier 3 */}
                <div className="pricing-card glass-card premium">
                    <div className="tier-name premium-text">TIER 3</div>
                    <h3 className="tier-title">Premium Ecosystem</h3>
                    <div className="tier-price">
                        <span className="currency">EGP</span>
                        <span className="amount">165,000</span>
                        <span className="period">/ Semester</span>
                    </div>
                    <p className="tier-desc">The ultimate all-in-one immersive learning environment for innovative schools.</p>

                    <ul className="tier-features">
                        <li><Check className="check" size={20} /> Full Access to our entire VR & Mixed Reality Library.</li>
                        <li><Check className="check" size={20} /> <span>The <strong>AI Educational Agent</strong>: Personalized learning profiles.</span></li>
                        <li><Check className="check" size={20} /> Includes 2 VR Labs & Extra Mixed Reality Headsets.</li>
                        <li><Check className="check" size={20} /> 24/7 Premium Customer Support.</li>
                    </ul>

                    <div className="bonus-box">
                        <Gift className="bonus-icon text-accent" size={20} />
                        <p><strong>Special 1-Year Renewal Bonus:</strong> Sign a full-year contract and receive <strong>3 EXTRA VR Headsets absolutely FREE</strong>!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
