import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: "Mrs. Doha",
        role: "Grade 5 ELA Teacher",
        school: "Cairo International School",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face",
        quote: "I was amazed by how the VR lab visits inspired my students' writing! Exploring animal habitats in VR made them so excited to write about their experiences in both fiction and non-fiction formats.",
        rating: 5,
    },
    {
        id: 2,
        name: "Mrs. Esraa",
        role: "Grade 6 Science Teacher",
        school: "Alexandria Modern School",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=face",
        quote: "Seeing the kids so happy while understanding the difference between conducting and non-conducting materials was incredible. The VR simulation safely interconnected complex science concepts with real-life applications, significantly boosting their learning rate.",
        rating: 5,
    },
    {
        id: 3,
        name: "Mr. Mathew",
        role: "Grade 9 Social Studies Teacher",
        school: "Giza STEM Academy",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
        quote: "Immersive Hub completely changed how we teach history. My students were able to virtually walk through the Egyptian Museum and explore ancient tombs right from the classroom. Engagement has never been higher.",
        rating: 5,
    },
    {
        id: 4,
        name: "Mrs. Youmna",
        role: "Grade 2 STEM Teacher",
        school: "Cairo STEM School",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
        quote: "My students took a virtual trip to Mars and were so inspired they immediately started drawing the Martian landscape! It has also been an amazing tool for teaching them about different animal habitats.",
        rating: 5,
    }
];

const STATS = [
    { value: '98%', label: 'Teacher Satisfaction' },
    { value: '30%', label: 'Average Grade Improvement' },
    { value: '95%', label: 'Student Engagement Rate' },
];

const StarRating = ({ count }) => (
    <div className="star-rating">
        {Array.from({ length: count }).map((_, i) => (
            <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
        ))}
    </div>
);

const Testimonials = () => {
    return (
        <section id="testimonials" className="section testimonials-section">
            <div className="testimonials-header text-center">
                <span className="section-badge">Success Stories</span>
                <h2>Loved by <span className="text-gradient">Teachers & Students</span></h2>
                <p>Real feedback from our pilot program participants.</p>
            </div>

            <div className="testimonials-grid">
                {testimonials.map(t => (
                    <div key={t.id} className="testimonial-card glass-card">
                        {/* Quote Icon */}
                        <div className="quote-icon-box">
                            <span className="quote-mark-inner">"</span>
                        </div>
                        {/* Star Rating */}
                        <StarRating count={t.rating} />
                        {/* Quote text */}
                        <p className="testimonial-text">"{t.quote}"</p>
                        {/* Author with real avatar */}
                        <div className="testimonial-author">
                            <img
                                src={t.image}
                                alt={t.name}
                                className="author-avatar-img"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                            <div className="author-info">
                                <h4>{t.name}</h4>
                                <p>{t.role}</p>
                                <span className="author-school">{t.school}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Stats Bar */}
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
