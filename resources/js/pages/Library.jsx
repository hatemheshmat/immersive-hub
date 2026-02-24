import React, { useEffect } from 'react';
import LibraryCatalog from '../components/LibraryCatalog';

const Library = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <LibraryCatalog />
        </main>
    );
};

export default Library;
