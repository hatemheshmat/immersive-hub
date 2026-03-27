import React from 'react';
import Hero from '../components/Hero';
import WhyVRWorks from '../components/WhyVRWorks';
import ImmersiveLibrary from '../components/ImmersiveLibrary';
import AnalyticsPromo from '../components/AnalyticsPromo';
import AIAdvantage from '../components/AIAdvantage';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import BookingForm from '../components/BookingForm';

const Home = () => {
    return (
        <main>
            {/* Hero: Massive cinematic rounded container */}
            <Hero />

            {/* Why VR Works: Color A (dark surface) */}
            <div className="section-wrapper">
                <div className="section-box">
                    <WhyVRWorks />
                </div>
            </div>

            {/* Immersive Library: Color B (deep navy) */}
            <div className="section-wrapper">
                <div className="section-box-alt">
                    <ImmersiveLibrary />
                </div>
            </div>

            {/* VR analytics (footer / nav anchor) */}
            <div className="section-wrapper">
                <div className="section-box">
                    <AnalyticsPromo />
                </div>
            </div>

            {/* AI Advantage: Color A */}
            <div className="section-wrapper">
                <div className="section-box">
                    <AIAdvantage />
                </div>
            </div>

            {/* Testimonials: Color B */}
            <div className="section-wrapper">
                <div className="section-box-alt">
                    <Testimonials />
                </div>
            </div>

            {/* Pricing: Color A */}
            <div className="section-wrapper">
                <div className="section-box">
                    <Pricing />
                </div>
            </div>

            {/* Book Demo: Color B */}
            <div className="section-wrapper">
                <div className="section-box-alt">
                    <BookingForm />
                </div>
            </div>
        </main>
    );
};

export default Home;
