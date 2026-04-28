import { useState } from 'react';
import { supabase } from '../services/supabaseClient';
import './styles/CommonPages.css';

function AdminDashboard() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [password, setPassword] = useState('');

    const fetchFeedbacks = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('feedbacks')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setFeedbacks(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'ecogreen2026') {
            setAuthenticated(true);
            fetchFeedbacks();
        } else {
            alert('Invalid Password');
        }
    };

    if (!authenticated) {
        return (
            <div className="page-container admin-login">
                <div className="container" style={{ maxWidth: '400px', marginTop: '100px' }}>
                    <div className="content-section" style={{ textAlign: 'center' }}>
                        <h2>Admin Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Enter Admin Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={{ width: '100%', padding: '12px', marginBottom: '20px' }}
                                />
                            </div>
                            <button type="submit" className="btn-primary" style={{ width: '100%' }}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Feedback Management Dashboard</h1>
                <p>Review and manage user suggestions and inquiries</p>
            </div>

            <div className="container">
                <section className="page-content">
                    <div className="content-section">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <h2>Recent Feedbacks ({feedbacks.length})</h2>
                            <button onClick={fetchFeedbacks} className="btn-explore" style={{ fontSize: '0.8rem' }}>Refresh Data</button>
                        </div>

                        {loading ? (
                            <p>Loading feedback...</p>
                        ) : error ? (
                            <p style={{ color: 'red' }}>Error: {error}</p>
                        ) : feedbacks.length === 0 ? (
                            <p>No feedback found.</p>
                        ) : (
                            <div style={{ overflowX: 'auto' }}>
                                <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
                                    <thead>
                                        <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--secondary-green)' }}>
                                            <th style={{ padding: '15px' }}>Date</th>
                                            <th style={{ padding: '15px' }}>User Info</th>
                                            <th style={{ padding: '15px' }}>Category</th>
                                            <th style={{ padding: '15px' }}>Message</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {feedbacks.map((item) => (
                                            <tr key={item.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                                <td style={{ padding: '15px', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>{new Date(item.created_at).toLocaleDateString()}</td>
                                                <td style={{ padding: '15px' }}>
                                                    <strong>{item.name}</strong><br />
                                                    <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>{item.email}</span><br />
                                                    <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>{item.phone}</span>
                                                </td>
                                                <td style={{ padding: '15px' }}>
                                                    <span style={{
                                                        padding: '4px 8px',
                                                        borderRadius: '4px',
                                                        fontSize: '0.75rem',
                                                        backgroundColor: 'rgba(16, 185, 129, 0.15)',
                                                        color: '#10b981',
                                                        textTransform: 'capitalize'
                                                    }}>
                                                        {item.category}
                                                    </span>
                                                </td>
                                                <td style={{ padding: '15px', fontSize: '0.9rem', maxWidth: '400px' }}>{item.message}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AdminDashboard;
