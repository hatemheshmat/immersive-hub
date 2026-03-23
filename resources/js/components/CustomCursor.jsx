import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [hidden, setHidden] = useState(false);
    const [cursorType, setCursorType] = useState('hidden');

    useEffect(() => {
        const onMouseMove = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }
            if (cursorType === 'hidden') {
                // Only unhide if we aren't currently hovering an element that explicitly hides it
                if (!e.target.closest('a, button, [cursor-hover]')) {
                    setCursorType('');
                }
            }
        };

        const onMouseLeave = () => {
            setHidden(true);
            setCursorType('hidden');
        };
        const onMouseEnter = () => {
            setHidden(false);
            setCursorType('');
        };

        document.addEventListener('mousemove', onMouseMove);
        document.body.addEventListener('mouseleave', onMouseLeave);
        document.body.addEventListener('mouseenter', onMouseEnter);

        // Hide default cursor globally here or in css
        document.body.style.cursor = 'none';

        // Add event listeners to all interactive elements we want the custom cursor on
        const handleHoverIn = (e) => {
            if (e.target.closest('[cursor-hover="drag"]')) {
                setCursorType('drag');
            } else if (e.target.closest('[cursor-hover="open-case"]')) {
                setCursorType('open-case');
            } else if (e.target.closest('[cursor-hover="service"]')) {
                setCursorType('service');
            } else if (e.target.closest('[cursor-hover="playlist"]')) {
                setCursorType('playlist');
            } else if (e.target.closest('a, button, [cursor-hover="hidden"]')) {
                setCursorType('hidden'); // Optional: hide totally on standard buttons
            } else {
                setCursorType('');
            }
        };
        
        const handleHoverOut = () => {
            setCursorType('');
        };

        document.body.addEventListener('mouseover', handleHoverIn);
        document.body.addEventListener('mouseout', handleHoverOut);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.body.removeEventListener('mouseleave', onMouseLeave);
            document.body.removeEventListener('mouseenter', onMouseEnter);
            document.body.removeEventListener('mouseover', handleHoverIn);
            document.body.removeEventListener('mouseout', handleHoverOut);
            document.body.style.cursor = 'auto'; // cleanup
        };
    }, [cursorType]);

    const cursorClasses = `circle ${cursorType}`;

    return (
        <div
            ref={cursorRef}
            className={cursorClasses}
            style={{
                top: 0,
                left: 0,
                transform: `translate3d(-100px, -100px, 0)` // initial offscreen position
            }}
        >
        </div>
    );
};

export default CustomCursor;
