import React, { useState, useRef, useEffect } from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const CARDS = [
    {
        id: 1,
        name: "Mrs. Doha",
        role: "Grade 5 ELA Teacher",
        school: "Cairo International School",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face",
        before: "I was amazed — the VR lab visits ",
        highlight: "inspired my students to write with genuine excitement",
        after: ". Exploring animal habitats made them eager to express themselves.",
        rating: 5,
    },
    {
        id: 2,
        name: "Mrs. Esraa",
        role: "Grade 6 Science Teacher",
        school: "Alexandria Modern School",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=face",
        before: "Seeing the kids so happy while learning was incredible. The VR simulation ",
        highlight: "safely connected complex science to real life",
        after: ", and significantly boosted their learning rate.",
        rating: 5,
    },
    {
        id: 3,
        name: "Mr. Mathew",
        role: "Grade 9 Social Studies Teacher",
        school: "Giza STEM Academy",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
        before: "Immersive Hub completely changed how we teach history. My students ",
        highlight: "virtually walked through the Egyptian Museum",
        after: " — engagement has never been higher.",
        rating: 5,
    },
    {
        id: 4,
        name: "Mrs. Youmna",
        role: "Grade 2 STEM Teacher",
        school: "Cairo STEM School",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
        before: "My students took a virtual trip to Mars — so inspired they started drawing the Martian landscape. ",
        highlight: "It has transformed how young learners see the universe",
        after: ".",
        rating: 5,
    }
];

const STATS = [
    { value: '98%', label: 'Teacher Satisfaction' },
    { value: '30%', label: 'Average Grade Improvement' },
    { value: '95%', label: 'Student Engagement Rate' },
];

const SPEED = 0.5; // px per animation frame

const StarRating = ({ count }) => (
    <div className="t-star-row">
        {Array.from({ length: count }).map((_, i) => (
            <Star key={i} size={16} fill="#05CCF4" color="#05CCF4" />
        ))}
    </div>
);

const Testimonials = () => {
    const trackRef      = useRef(null);
    const animRef       = useRef(null);
    const pausedRef     = useRef(false);

    const [cursor, setCursor]         = useState({ x: 0, y: 0, visible: false, side: 'right' });

    /* ─── Seamless RAF scroll ─── */
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const tick = () => {
            if (!pausedRef.current) {
                // Seamless loop: when we've scrolled half (= one full set of cards), reset
                if (track.scrollLeft >= track.scrollWidth / 2) {
                    track.scrollLeft = 0;
                } else {
                    track.scrollLeft += SPEED;
                }
            }
            animRef.current = requestAnimationFrame(tick);
        };

        animRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(animRef.current);
    }, []);

    /* ─── Pause / resume on hover ─── */
    const handleMouseEnter = () => { pausedRef.current = true; };
    const handleMouseLeave = () => {
        pausedRef.current = false;
        setCursor(prev => ({ ...prev, visible: false }));
    };

    /* ─── Cursor tracking ─── */
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;
        const side = relX < rect.width / 2 ? 'left' : 'right';
        setCursor({ x: relX, y: relY, visible: true, side });
    };

    /* ─── Click to scroll one card ─── */
    const handleClick = (e) => {
        const track = trackRef.current;
        if (!track) return;
        const rect  = e.currentTarget.getBoundingClientRect();
        const dir   = e.clientX - rect.left < rect.width / 2 ? -1 : 1;
        const card  = track.querySelector('.t-card');
        const step  = card ? card.offsetWidth + 24 : 420;
        track.scrollBy({ left: dir * step, behavior: 'smooth' });
    };

    return (
        <section id="testimonials" className="testimonials-section">
            {/* Header */}
            <div className="testimonials-header">
                <h2>Loved by <span className="text-gradient">Teachers &amp; Students</span></h2>
                <p>Real feedback from our pilot program participants.</p>
            </div>

            {/* Carousel wrapper — relative for the cursor overlay */}
            <div
                className="t-carousel-wrap"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                onClick={handleClick}
                cursor-hover="hidden"
            >
                {/* Custom cursor overlay */}
                {cursor.visible && (
                    <div
                        className="t-custom-cursor"
                        style={{ left: cursor.x, top: cursor.y }}
                    >
                        {/* left side shows >, right side shows < */}
                        {cursor.side === 'left' ? '›' : '‹'}
                    </div>
                )}

                {/* Scrollable track — cards × 2 for seamless loop */}
                <div className="t-carousel-track" ref={trackRef}>
                    {[...CARDS, ...CARDS].map((t, i) => (
                        <div key={`${t.id}-${i}`} className="t-card">
                            <div className="t-quote-icon">"</div>
                            <p className="t-quote">
                                "{t.before}
                                <span className="t-highlight">{t.highlight}</span>
                                {t.after}"
                            </p>
                            <div className="t-author-row">
                                <div className="t-author-left">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="t-avatar"
                                        loading="lazy"
                                        onError={(e) => { e.target.style.display = 'none'; }}
                                    />
                                    <div className="t-author-info">
                                        <span className="t-author-name">{t.name}</span>
                                        <span className="t-author-role">{t.role}, {t.school}</span>
                                    </div>
                                </div>
                                <StarRating count={t.rating} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats */}
            <div className="testimonials-stats-bar">
                {STATS.map((s) => (
                    <div key={s.label} className="testimonials-stat">
                        <span className="stat-value">{s.value}</span>
                        <span className="stat-label">{s.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
