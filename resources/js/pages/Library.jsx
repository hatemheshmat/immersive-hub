import React, { useEffect } from 'react';
import LibraryCatalog from '../components/LibraryCatalog';

const Library = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="page-simple-main">
            <LibraryCatalog />
        </main>
    );
};

export default Library;
