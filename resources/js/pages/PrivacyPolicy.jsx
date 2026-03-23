import React from 'react';

const PrivacyPolicy = () => {
    return (
        <main className="section" style={{ paddingTop: '8rem', minHeight: '100vh', paddingBottom: '4rem' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 className="h2 white" style={{ marginBottom: '2rem' }}>Privacy Policy</h1>
                <div className="glass-card" style={{ padding: '3rem', borderRadius: '24px' }}>
                    <p className="b1-reg white-80" style={{ marginBottom: '1.5rem' }}>
                        At Immersive Hub, accessible from immersivehub.org, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Immersive Hub and how we use it.
                    </p>
                    <h2 className="h4-semi white" style={{ marginTop: '2rem', marginBottom: '1rem' }}>Information We Collect</h2>
                    <p className="b1-reg white-80" style={{ marginBottom: '1.5rem' }}>
                        The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                        If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                    </p>
                    <h2 className="h4-semi white" style={{ marginTop: '2rem', marginBottom: '1rem' }}>How We Use Your Information</h2>
                    <p className="b1-reg white-80" style={{ marginBottom: '1.5rem' }}>
                        We use the information we collect in various ways, including to:
                    </p>
                    <ul className="b1-reg white-80" style={{ paddingLeft: '20px', marginBottom: '1.5rem' }}>
                        <li>Provide, operate, and maintain our website</li>
                        <li>Improve, personalize, and expand our website</li>
                        <li>Understand and analyze how you use our website</li>
                        <li>Develop new products, services, features, and functionality</li>
                        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                        <li>Send you emails</li>
                        <li>Find and prevent fraud</li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default PrivacyPolicy;
