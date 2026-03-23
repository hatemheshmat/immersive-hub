import React from 'react';

const RefundPolicy = () => {
    return (
        <main className="section" style={{ paddingTop: '8rem', minHeight: '100vh', paddingBottom: '4rem' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 className="h2 white" style={{ marginBottom: '2rem' }}>Refund Policy</h1>
                <div className="glass-card" style={{ padding: '3rem', borderRadius: '24px' }}>
                    <p className="b1-reg white-80" style={{ marginBottom: '1.5rem' }}>
                        Thank you for subscribing to Immersive Hub's services.
                    </p>
                    <h2 className="h4-semi white" style={{ marginTop: '2rem', marginBottom: '1rem' }}>Subscription Refunds</h2>
                    <p className="b1-reg white-80" style={{ marginBottom: '1.5rem' }}>
                        We offer a 14-day money-back guarantee on all our subscription tiers. If you are not entirely satisfied with your purchase, we're here to help.
                    </p>
                    <ul className="b1-reg white-80" style={{ paddingLeft: '20px', marginBottom: '1.5rem' }}>
                        <li>To be eligible for a refund, you must request it within 14 days of your initial purchase or subscription renewal.</li>
                        <li>After the 14-day period, you will no longer be eligible and won't be able to receive a refund.</li>
                    </ul>
                    <h2 className="h4-semi white" style={{ marginTop: '2rem', marginBottom: '1rem' }}>Custom VR Development Refunds</h2>
                    <p className="b1-reg white-80" style={{ marginBottom: '1.5rem' }}>
                        For custom VR experiences and specialized curriculum development, refund terms are outlined specifically in your individual contract and statement of work. Generally, milestones completed and approved are non-refundable.
                    </p>
                    <h2 className="h4-semi white" style={{ marginTop: '2rem', marginBottom: '1rem' }}>How to Request a Refund</h2>
                    <p className="b1-reg white-80" style={{ marginBottom: '1.5rem' }}>
                        To request a refund, please contact us at info@immersivehub.org with your account details and reason for the request. We will notify you of the approval or rejection of your refund within 3 business days.
                        If approved, your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default RefundPolicy;
