import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import './AdminLogin.css';

const AdminLogin = ({ setIsAuthenticated }) => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [status, setStatus] = useState('idle');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        setErrorMsg('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            await axios.post('/api/login', credentials);
            setIsAuthenticated(true);
            navigate('/admin');
        } catch (error) {
            console.error('Login failed:', error);
            setErrorMsg('Invalid credentials. Please try again.');
            setStatus('idle');
        }
    };

    return (
        <main className="admin-login-layout">
            <div className="login-card glass-card">
                <div className="login-header">
                    <div className="shield-icon-wrap">
                        <ShieldCheck size={32} color="#0d9488" />
                    </div>
                    <h2>Admin Portal</h2>
                    <p>Enter your credentials to access the secure area.</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group full-width">
                        <label><Mail size={14} /> Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="admin@immersivehub.org"
                            value={credentials.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group full-width">
                        <label><Lock size={14} /> Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            value={credentials.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {errorMsg && (
                        <div className="login-error">
                            {errorMsg}
                        </div>
                    )}

                    <button type="submit" className="cta-button login-submit-btn" disabled={status === 'submitting'}>
                        {status === 'submitting' ? 'Authenticating...' : 'Secure Login'} <ArrowRight size={18} />
                    </button>
                </form>
            </div>
        </main>
    );
};

export default AdminLogin;
