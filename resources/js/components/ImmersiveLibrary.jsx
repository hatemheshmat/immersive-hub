import React from 'react';
import './ImmersiveLibrary.css';

const ImmersiveLibrary = () => {
    const products = [
        {
            id: 1,
            title: "360° Explorations",
            description: "Virtual field trips that transport students from historical landmarks to the surface of Mars.",
            subjects: "Science, Social Studies, ELA",
            span: "2"
        },
        {
            id: 2,
            title: "Interactive Simulations",
            description: "Hands-on virtual labs for safely experimenting with concepts in physics, chemistry, and biology.",
            span: "2"
        },
        {
            id: 3,
            title: "Cultural Heritage Tours",
            description: "Immersive walkthroughs of the Egyptian Museum and other globally significant cultural sites.",
            span: "2"
        },
        {
            id: 4,
            title: "Teacher-Led Mixed Reality",
            description: "Tools that empower educators to manipulate and explain complex 3D models, like human anatomy, in the physical classroom.",
            span: "3"
        },
        {
            id: 5,
            title: "Living History Museums",
            description: "Interactive virtual spaces where students engage with the lives and contributions of pivotal historical figures.",
            span: "3"
        }
    ];

    return (
        <section id="library" className="section library-section">
            <div className="library-header text-center">
                <h2>A diverse library built for every <span className="text-gradient">subject</span> and learning style.</h2>
                <p>5 core educational products, limitless possibilities.</p>
            </div>

            <div className="library-masonry">
                {products.map(product => (
                    <div key={product.id} className={`library-card glass-card span-${product.span}`}>
                        <div className={`library-card-bg bg-${product.id}`}></div>
                        <div className="library-card-overlay"></div>
                        <div className="library-card-content">
                            <h3>{product.title}</h3>
                            <div className="library-card-details">
                                <p>{product.description}</p>
                                {product.subjects && <span className="subjects-badge">Subjects: {product.subjects}</span>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ImmersiveLibrary;
