import React from 'react';
import Hero from '../components/Hero';
import EducationalApproach from '../components/EducationalApproach';
import ImmersiveLibrary from '../components/ImmersiveLibrary';
import AIAdvantage from '../components/AIAdvantage';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';

const Home = () => {
    return (
        <main>
            <Hero />
            <EducationalApproach />
            <ImmersiveLibrary />
            <AIAdvantage />
            <Testimonials />
            <Pricing />
        </main>
    );
};

export default Home;
