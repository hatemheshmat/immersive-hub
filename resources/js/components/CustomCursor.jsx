import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const fine = window.matchMedia('(pointer: fine)');
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

        const sync = () => setEnabled(fine.matches && !reduceMotion.matches);
        sync();
        fine.addEventListener('change', sync);
        reduceMotion.addEventListener('change', sync);
        return () => {
            fine.removeEventListener('change', sync);
            reduceMotion.removeEventListener('change', sync);
        };
    }, []);

    useEffect(() => {
        if (!enabled) return;

        const el = cursorRef.current;
        if (!el) return;

        document.body.classList.add('custom-cursor-active');

        const paint = (type, hide) => {
            el.className = 'circle';
            if (hide) el.classList.add('hidden');
            else if (type && ['drag', 'open-case', 'service', 'playlist'].includes(type)) el.classList.add(type);
        };

        let currentType = '';
        let currentHidden = false;

        const onMouseMove = (e) => {
            el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        };

        const onMouseLeave = () => {
            currentHidden = true;
            paint('', true);
        };

        const onMouseEnter = () => {
            currentHidden = false;
            paint(currentType, false);
        };

        const handleHoverIn = (e) => {
            const t = e.target;
            if (!t || typeof t.closest !== 'function') return;
            let next = '';
            if (t.closest('[cursor-hover="drag"]')) next = 'drag';
            else if (t.closest('[cursor-hover="open-case"]')) next = 'open-case';
            else if (t.closest('[cursor-hover="service"]')) next = 'service';
            else if (t.closest('[cursor-hover="playlist"]')) next = 'playlist';
            else if (t.closest('a, button, [role="button"], [cursor-hover="hidden"]')) next = 'hidden';

            currentType = next;
            if (next === 'hidden') {
                paint('hidden', true);
                return;
            }
            paint(next, currentHidden);
        };

        const handleHoverOut = () => {
            currentType = '';
            paint('', currentHidden);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.body.addEventListener('mouseleave', onMouseLeave);
        document.body.addEventListener('mouseenter', onMouseEnter);
        document.body.addEventListener('mouseover', handleHoverIn);
        document.body.addEventListener('mouseout', handleHoverOut);

        return () => {
            document.body.classList.remove('custom-cursor-active');
            document.removeEventListener('mousemove', onMouseMove);
            document.body.removeEventListener('mouseleave', onMouseLeave);
            document.body.removeEventListener('mouseenter', onMouseEnter);
            document.body.removeEventListener('mouseover', handleHoverIn);
            document.body.removeEventListener('mouseout', handleHoverOut);
        };
    }, [enabled]);

    if (!enabled) {
        return null;
    }

    return (
        <div
            ref={cursorRef}
            className="circle"
            aria-hidden
            style={{
                top: 0,
                left: 0,
                transform: 'translate3d(-100px, -100px, 0)',
            }}
        />
    );
}
