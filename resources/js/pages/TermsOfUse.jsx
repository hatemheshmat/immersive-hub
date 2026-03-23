import React from 'react';

const TermsOfUse = () => {
    return (
        <main className="section" style={{ paddingTop: '8rem', minHeight: '100vh', paddingBottom: '4rem' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 className="h2 white" style={{ marginBottom: '2rem' }}>Terms of Use</h1>
                <div className="glass-card" style={{ padding: '3rem', borderRadius: '24px' }}>
                    <p className="b1-reg white-80" style={{ marginBottom: '1.5rem' }}>
                        Welcome to Immersive Hub!
                    </p>
                    <p className="b1-reg white-80" style={{ marginBottom: '1.5rem' }}>
                        These terms and conditions outline the rules and regulations for the use of Immersive Hub's Website, located at immersivehub.org.
                    </p>
                    <p className="b1-reg white-80" style={{ marginBottom: '1.5rem' }}>
                        By accessing this website we assume you accept these terms and conditions. Do not continue to use Immersive Hub if you do not agree to take all of the terms and conditions stated on this page.
                    </p>
                    <h2 className="h4-semi white" style={{ marginTop: '2rem', marginBottom: '1rem' }}>Cookies</h2>
                    <p className="b1-reg white-80" style={{ marginBottom: '1.5rem' }}>
                        We employ the use of cookies. By accessing Immersive Hub, you agreed to use cookies in agreement with the Immersive Hub's Privacy Policy.
                        Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website.
                    </p>
                    <h2 className="h4-semi white" style={{ marginTop: '2rem', marginBottom: '1rem' }}>License</h2>
                    <p className="b1-reg white-80" style={{ marginBottom: '1.5rem' }}>
                        Unless otherwise stated, Immersive Hub and/or its licensors own the intellectual property rights for all material on Immersive Hub. All intellectual property rights are reserved. You may access this from Immersive Hub for your own personal use subjected to restrictions set in these terms and conditions.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default TermsOfUse;
