import React, { useState } from 'react';
import axios from 'axios';
import './BookingForm.css';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        notes: ''
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            await axios.post('/api/bookings', formData);
            setStatus('success');
            setFormData({ name: '', email: '', date: '', notes: '' });
        } catch (error) {
            console.error('Error submitting booking:', error);
            setStatus('error');
        }
    };

    return (
        <section className="booking-section" id="booking">
            <div className="booking-horizontal">

                {/* Left: Copy */}
                <div className="booking-copy">

                    <h2 className="booking-title">
                        Book Your <span className="text-gradient">Immersive</span> Experience
                    </h2>

                    <p className="booking-tagline">
                        Reserve your spot to explore the next generation of virtual reality.
                    </p>

                    <p className="booking-desc">
                        Ready to transform your school? Our team works closely with educators
                        to design the perfect immersive ecosystem. Let's build the future of learning, together.
                    </p>

                    {status === 'success' && (
                        <div className="booking-alert success">
                            ✓ Your booking is confirmed! We'll reach out to you very soon.
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="booking-alert error">
                            Something went wrong. Please try again or email us directly.
                        </div>
                    )}
                </div>

                {/* Right: Form */}
                <div className="booking-form-col">
                    <form onSubmit={handleSubmit} className="booking-form">

                        {/* Row: Full Name + Email side by side */}
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        {/* Preferred Date */}
                        <div className="form-group">
                            <label htmlFor="date">Preferred Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Additional Notes */}
                        <div className="form-group">
                            <label htmlFor="notes">Additional Notes</label>
                            <textarea
                                id="notes"
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Tell us about your school, grade levels, or any special requirements..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={status === 'submitting'}
                        >
                            {status === 'submitting' ? 'Sending...' : 'Submit'}
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default BookingForm;
