import React from 'react';
import './AnimatedButton.css';

const AnimatedButton = ({ children, onClick, className = '', href, type = 'button' }) => {
    // Split the text into an array of characters, keeping spaces as &nbsp; or standard space
    const chars = typeof children === 'string' ? children.split('') : [];

    const innerContent = (
        <span className="btn-text-wrapper" data-button-animate-chars>
            {chars.map((char, index) => (
                <span
                    key={index}
                    style={{ transitionDelay: `${index * 0.03}s` }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
            {!chars.length && <span>{children}</span>}
        </span>
    );

    const fullClass = `cta-button animated-btn ${className}`;

    if (href) {
        return (
            <a href={href} className={fullClass} onClick={onClick}>
                {innerContent}
            </a>
        );
    }

    return (
        <button type={type} className={fullClass} onClick={onClick}>
            {innerContent}
        </button>
    );
};

export default AnimatedButton;
