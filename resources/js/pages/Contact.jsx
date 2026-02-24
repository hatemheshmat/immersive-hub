import React, { useEffect } from 'react';
import ContactForm from '../components/Contact';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <ContactForm />
        </main>
    );
};

export default Contact;
