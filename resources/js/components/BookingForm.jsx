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
    const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
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
            <div className="booking-container">
                <h2>Book Your Immersive Experience</h2>
                <p>Reserve your spot to explore the next generation of virtual reality.</p>

                {status === 'success' && (
                    <div className="booking-alert success">
                        Booking confirmed! We will be in touch shortly.
                    </div>
                )}

                {status === 'error' && (
                    <div className="booking-alert error">
                        There was an error submitting your booking. Please try again.
                    </div>
                )}

                <form onSubmit={handleSubmit} className="booking-form">
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

                    <div className="form-group">
                        <label htmlFor="notes">Additional Notes</label>
                        <textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Any special requests?"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={status === 'submitting'}
                    >
                        {status === 'submitting' ? 'Submitting...' : 'Confirm Booking'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default BookingForm;
