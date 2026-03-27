import React, { useEffect } from 'react';
import CaseStudies from '../components/CaseStudies';

const CaseStudiesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="page-simple-main">
            <div className="section-wrapper" style={{ paddingTop: '6rem' }}>
                <CaseStudies />
            </div>
        </main>
    );
};

export default CaseStudiesPage;
