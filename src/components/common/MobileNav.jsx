import { Link, useLocation } from 'react-router-dom';
import { Home, Grid3X3, Phone, User, Sparkles } from 'lucide-react';
import './MobileNav.css';

const MobileNav = () => {
    const location = useLocation();

    const navItems = [
        { path: '/', icon: Home, label: 'Home' },
        { path: '/skin-treatments', icon: Sparkles, label: 'Treatments' },
        { path: '/contact', icon: Phone, label: 'Contact' },
        { path: '/about', icon: User, label: 'About' }
    ];

    const handleWhatsApp = () => {
        const message = encodeURIComponent('Hello! I would like to book an appointment at Niraa Aesthetics.');
        window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    };

    return (
        <nav className="mobile-bottom-nav">
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                    >
                        <Icon size={22} />
                        <span>{item.label}</span>
                    </Link>
                );
            })}
            <button onClick={handleWhatsApp} className="mobile-nav-item mobile-nav-cta">
                <Phone size={22} />
                <span>Book</span>
            </button>
        </nav>
    );
};

export default MobileNav;
