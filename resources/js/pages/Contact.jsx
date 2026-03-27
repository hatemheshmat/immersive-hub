import React, { useEffect } from 'react';
import ContactForm from '../components/Contact';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="page-simple-main">
            <ContactForm />
        </main>
    );
};

export default Contact;
