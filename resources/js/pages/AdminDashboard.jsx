import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, MessageSquare, LogOut, Calendar } from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = ({ setIsAuthenticated }) => {
    const [activeTab, setActiveTab] = useState('bookings');
    const [data, setData] = useState({ bookings: [], contacts: [] });
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            const response = await axios.get('/api/admin/dashboard-data');
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch dashboard data:', error);
            if (error.response?.status === 401) {
                // Not authenticated
                setIsAuthenticated(false);
                navigate('/admin');
            } else {
                setErrorMsg('Error loading data. Please try again.');
                setLoading(false);
            }
        }
    };

    const handleLogout = async () => {
        try {
            await axios.post('/api/logout');
            setIsAuthenticated(false);
            navigate('/admin');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (loading) {
        return (
            <main className="dashboard-layout loading-state">
                <div className="spinner"></div>
                <p>Loading Secure Data...</p>
            </main>
        );
    }

    return (
        <main className="dashboard-layout">
            <div className="dashboard-sidebar">
                <div className="sidebar-brand">
                    <LayoutDashboard size={24} color="#0d9488" />
                    <h2>Admin Panel</h2>
                </div>

                <nav className="sidebar-nav">
                    <button
                        className={`nav-btn ${activeTab === 'bookings' ? 'active' : ''}`}
                        onClick={() => setActiveTab('bookings')}
                    >
                        <Calendar size={18} /> Bookings ({data.bookings?.length || 0})
                    </button>
                    <button
                        className={`nav-btn ${activeTab === 'contacts' ? 'active' : ''}`}
                        onClick={() => setActiveTab('contacts')}
                    >
                        <MessageSquare size={18} /> Contacts ({data.contacts?.length || 0})
                    </button>

                    <button className="nav-btn logout-btn" onClick={handleLogout}>
                        <LogOut size={18} /> Log Out
                    </button>
                </nav>
            </div>

            <div className="dashboard-content">
                <div className="dashboard-header">
                    <h2>{activeTab === 'bookings' ? 'Demo Bookings' : 'Contact Us Messages'}</h2>
                    <p>Manage your client requests securely.</p>
                </div>

                {errorMsg && <div className="dashboard-error">{errorMsg}</div>}

                <div className="table-container glass-card">
                    {activeTab === 'bookings' && (
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Submitted On</th>
                                    <th>Client Name</th>
                                    <th>Email</th>
                                    <th>Requested Date</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.bookings?.length === 0 ? (
                                    <tr><td colSpan="5" className="empty-state">No bookings found.</td></tr>
                                ) : (
                                    data.bookings.map(book => (
                                        <tr key={book.id}>
                                            <td className="date-cell">{formatDate(book.created_at)}</td>
                                            <td className="bold-cell">{book.name}</td>
                                            <td><a href={`mailto:${book.email}`}>{book.email}</a></td>
                                            <td className="date-cell">{new Date(book.date).toLocaleDateString()}</td>
                                            <td className="notes-cell">{book.notes || '-'}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    )}

                    {activeTab === 'contacts' && (
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Submitted On</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>School</th>
                                    <th>Role</th>
                                    <th>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.contacts?.length === 0 ? (
                                    <tr><td colSpan="6" className="empty-state">No contact messages found.</td></tr>
                                ) : (
                                    data.contacts.map(contact => (
                                        <tr key={contact.id}>
                                            <td className="date-cell">{formatDate(contact.created_at)}</td>
                                            <td className="bold-cell">{contact.name}</td>
                                            <td><a href={`mailto:${contact.email}`}>{contact.email}</a></td>
                                            <td>{contact.school || '-'}</td>
                                            <td><span className="role-badge">{contact.role || '-'}</span></td>
                                            <td className="notes-cell">{contact.message}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </main>
    );
};

export default AdminDashboard;
