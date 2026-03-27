import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <main className="page-simple-main">
        <section className="section" style={{ textAlign: 'center', paddingTop: '8rem' }}>
            <h1 className="h1 white">Page not found</h1>
            <p className="b1-reg white-80" style={{ maxWidth: '32rem', margin: '1rem auto 2rem' }}>
                The page you are looking for does not exist or has moved.
            </p>
            <Link to="/" className="cta-button">
                Back to home
            </Link>
        </section>
    </main>
);

export default NotFound;
