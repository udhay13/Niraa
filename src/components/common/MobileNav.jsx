import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Sparkles, Phone, Info, Calendar } from 'lucide-react';
import './MobileNav.css';

const MobileNav = () => {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show nav when scrolling up, hide when scrolling down
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navItems = [
        { path: '/', icon: Home, label: 'Home' },
        { path: '/skin-treatments', icon: Sparkles, label: 'Skin' },
        { path: '/hair-treatments', icon: Sparkles, label: 'Hair' },
        { path: '/about', icon: Info, label: 'About' }
    ];

    const handleWhatsApp = () => {
        const message = encodeURIComponent('Hello! I would like to book an appointment at Niraa Aesthetics.');
        window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    };

    return (
        <nav className={`mobile-bottom-nav ${isVisible ? 'visible' : 'hidden'}`}>
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                    >
                        <div className="nav-icon-wrapper">
                            <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
                            {isActive && <span className="active-dot"></span>}
                        </div>
                        <span className="nav-label">{item.label}</span>
                    </Link>
                );
            })}
            <button onClick={handleWhatsApp} className="mobile-nav-item mobile-nav-cta">
                <div className="nav-icon-wrapper cta-icon">
                    <Calendar size={18} strokeWidth={2} />
                </div>
                <span className="nav-label">Book</span>
            </button>
        </nav>
    );
};

export default MobileNav;
