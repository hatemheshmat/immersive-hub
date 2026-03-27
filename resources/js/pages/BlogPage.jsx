import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="page-simple-main">
            <section className="section" style={{ paddingTop: '7rem', textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
                <div className="caption-tag">
                    <span className="c1 white-60">Blog</span>
                </div>
                <h1 className="h1 white">Insights coming soon</h1>
                <p className="b1-reg white-80" style={{ margin: '1.5rem 0 2rem' }}>
                    We are preparing articles on VR in the classroom, learning analytics, and school success stories.
                    In the meantime, reach out for a demo or pilot discussion.
                </p>
                <Link to="/contact-us" className="cta-button">
                    Contact us
                </Link>
            </section>
        </main>
    );
};

export default BlogPage;
