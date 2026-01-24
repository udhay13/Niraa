import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Home, Droplet, Sparkles, Info, Calendar } from 'lucide-react';
import './MobileNav.css';

const MobileNav = () => {
    const navigate = useNavigate();
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
        { path: '/skin-treatments', icon: Droplet, label: 'Skin' },
        { path: '/hair-treatments', icon: Sparkles, label: 'Hair' },
        { path: '/about', icon: Info, label: 'About' }
    ];

    const handleWhatsApp = () => {
        const message = encodeURIComponent('Hello! I would like to book an appointment at Niraa Aesthetics.');
        window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    };

    const handleNavClick = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className={`mobile-bottom-nav ${isVisible ? 'visible' : 'hidden'}`}>
            {navItems.map((item) => {
                const Icon = item.icon;

                return (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        {({ isActive }) => (
                            <>
                                <div className="nav-icon-wrapper">
                                    <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                                    {isActive && <span className="active-dot"></span>}
                                </div>
                                <span className="nav-label">{item.label}</span>
                            </>
                        )}
                    </NavLink>
                );
            })}
            <button onClick={handleWhatsApp} className="mobile-nav-item mobile-nav-cta">
                <div className="nav-icon-wrapper cta-icon">
                    <Calendar size={20} strokeWidth={2} />
                </div>
                <span className="nav-label">Book</span>
            </button>
        </nav>
    );
};

export default MobileNav;
