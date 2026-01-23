import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { useBlog } from '../../context/BlogContext';
import './AdminLogin.css';

const AdminLogin = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login, isAdmin } = useBlog();
    const navigate = useNavigate();

    // Redirect if already logged in
    if (isAdmin) {
        navigate('/admin/dashboard');
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        setTimeout(() => {
            if (login(password)) {
                navigate('/admin/dashboard');
            } else {
                setError('Invalid password. Please try again.');
            }
            setIsLoading(false);
        }, 500);
    };

    return (
        <div className="admin-login-page">
            <div className="login-container">
                <div className="login-card card">
                    <div className="login-header">
                        <div className="login-logo">
                            <span className="logo-text">Niraa</span>
                            <span className="logo-accent">Aesthetics</span>
                        </div>
                        <h1>Admin Login</h1>
                        <p>Access the blog management dashboard</p>
                    </div>

                    <form onSubmit={handleSubmit} className="login-form">
                        {error && (
                            <div className="error-message">
                                {error}
                            </div>
                        )}

                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <div className="password-input">
                                <Lock className="input-icon" size={20} />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-input"
                                    placeholder="Enter admin password"
                                    required
                                />
                                <button
                                    type="button"
                                    className="toggle-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className={`btn btn-primary btn-lg ${isLoading ? 'loading' : ''}`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    <p className="demo-note">
                        <strong>Demo Password:</strong> nira2024
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
