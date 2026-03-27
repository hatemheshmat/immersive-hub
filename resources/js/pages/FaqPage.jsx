import React, { useEffect } from 'react';

const FAQ_ITEMS = [
    {
        q: 'What hardware do we need for Immersive Hub?',
        a: 'We support common school VR headsets and mixed-reality devices. During onboarding we audit your existing lab or recommend a package that fits your budget and curriculum.',
    },
    {
        q: 'Is content aligned with our curriculum?',
        a: 'Our library maps to major frameworks (including IB, IGCSE, NGSS, and local MOE expectations). We also build custom VR modules for Premium tiers.',
    },
    {
        q: 'How does billing work?',
        a: 'Plans are billed per semester to match your academic calendar. Enterprise and multi-campus options are quoted after a short discovery call.',
    },
    {
        q: 'Do you train our teachers?',
        a: 'Yes. Teacher handbooks, lesson plans, and live onboarding sessions are included. Premium includes extended professional development.',
    },
];

const FaqPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="page-simple-main">
            <section className="section" style={{ paddingTop: '7rem', maxWidth: '800px' }}>
                <div className="caption-tag">
                    <span className="c1 white-60">FAQ</span>
                </div>
                <h1 className="h1 white">Common questions</h1>
                <p className="b1-reg white-80" style={{ marginBottom: '3rem' }}>
                    Quick answers about hardware, curriculum fit, and how we work with schools.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {FAQ_ITEMS.map((item) => (
                        <article key={item.q} className="glass-card" style={{ textAlign: 'left' }}>
                            <h2 className="h5-semi white" style={{ marginBottom: '0.75rem' }}>
                                {item.q}
                            </h2>
                            <p className="b1-reg white-80" style={{ margin: 0 }}>
                                {item.a}
                            </p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default FaqPage;
