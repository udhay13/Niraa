import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import './Header.css';
// import logo from '../../assets/logo.png';
const logo = 'https://i.ibb.co/LXzwBLgg/Niraa-1.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    }, [location]);

    const skinTreatments = [
        { name: 'Acne Treatment', path: '/treatments/chemical-peel' },
        { name: 'Acne Scar Reduction', path: '/treatments/acne-scar-surgery' },
        { name: 'Pigmentation Treatment', path: '/treatments/pigmentation-treatment' },
        { name: 'Anti-Ageing & Wrinkle Reduction', path: '/treatments/botox-treatment' },
        { name: 'Skin Brightening & Glow', path: '/treatments/photo-facial' },
        { name: 'Chemical Peels', path: '/treatments/chemical-peel' },
        { name: 'Hydra Facial', path: '/treatments/hydrafacial-treatment' },
        { name: 'Laser Skin Rejuvenation', path: '/treatments/skin-rejuvenation' },
    ];

    const hairTreatments = [
        { name: 'Laser Hair Reduction', path: '/treatments/laser-hair-removal' },
        { name: 'Hair Fall Control', path: '/treatments/hair-fall-control' },
        { name: 'PRP Hair Treatment', path: '/treatments/prp-hair-treatment' },
        { name: 'Hair Regrowth Therapy', path: '/treatments/hair-regrowth-therapy' },
        { name: 'Scalp & Dandruff Care', path: '/treatments/scalp-dandruff-care' },
    ];

    const handleWhatsApp = () => {
        const message = encodeURIComponent('Hello! I would like to book an appointment at Niraa Aesthetics.');
        window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    };

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="header-container">
                {/* Logo */}
                <Link to="/" className="header-logo">
                    <img src={logo} alt="Niraa Aesthetics" className="logo-image" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="header-nav">
                    <Link to="/" className="nav-link">Home</Link>

                    <div className="nav-dropdown">
                        <button className="nav-link dropdown-trigger">
                            Skin Treatments <ChevronDown size={16} />
                        </button>
                        <div className="dropdown-menu">
                            <Link to="/skin-treatments" className="dropdown-header">All Skin Treatments</Link>
                            <div className="dropdown-divider"></div>
                            {skinTreatments.map((item) => (
                                <Link key={item.path} to={item.path} className="dropdown-item">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="nav-dropdown">
                        <button className="nav-link dropdown-trigger">
                            Hair Treatments <ChevronDown size={16} />
                        </button>
                        <div className="dropdown-menu">
                            <Link to="/hair-treatments" className="dropdown-header">All Hair Treatments</Link>
                            <div className="dropdown-divider"></div>
                            {hairTreatments.map((item) => (
                                <Link key={item.path} to={item.path} className="dropdown-item">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link to="/blogs" className="nav-link">Blogs</Link>
                    <Link to="/about" className="nav-link">About Us</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </nav>

                {/* CTA Button */}
                <button onClick={handleWhatsApp} className="header-cta">
                    <Phone size={18} />
                    <span>Book Appointment</span>
                </button>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="mobile-overlay"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}

            {/* Mobile Sidebar Navigation */}
            <div className={`mobile-sidebar ${isMobileMenuOpen ? 'mobile-sidebar-open' : ''}`}>
                <div className="sidebar-header">
                    <Link to="/" className="header-logo" onClick={() => setIsMobileMenuOpen(false)}>
                        <img src={logo} alt="Niraa Aesthetics" className="logo-image" />
                    </Link>
                    <button
                        className="sidebar-close"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>
                </div>

                <nav className="sidebar-nav">
                    <Link to="/" className="sidebar-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

                    <div className="sidebar-dropdown">
                        <button
                            className="sidebar-link sidebar-dropdown-trigger"
                            onClick={() => toggleDropdown('skin')}
                        >
                            Skin Treatments
                            <ChevronDown className={`dropdown-icon ${activeDropdown === 'skin' ? 'rotated' : ''}`} size={18} />
                        </button>
                        <div className={`sidebar-dropdown-menu ${activeDropdown === 'skin' ? 'open' : ''}`}>
                            <Link to="/skin-treatments" className="sidebar-dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>All Skin Treatments</Link>
                            {skinTreatments.map((item) => (
                                <Link key={item.path} to={item.path} className="sidebar-dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="sidebar-dropdown">
                        <button
                            className="sidebar-link sidebar-dropdown-trigger"
                            onClick={() => toggleDropdown('hair')}
                        >
                            Hair Treatments
                            <ChevronDown className={`dropdown-icon ${activeDropdown === 'hair' ? 'rotated' : ''}`} size={18} />
                        </button>
                        <div className={`sidebar-dropdown-menu ${activeDropdown === 'hair' ? 'open' : ''}`}>
                            <Link to="/hair-treatments" className="sidebar-dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>All Hair Treatments</Link>
                            {hairTreatments.map((item) => (
                                <Link key={item.path} to={item.path} className="sidebar-dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link to="/blogs" className="sidebar-link" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
                    <Link to="/about" className="sidebar-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                    <Link to="/contact" className="sidebar-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                </nav>

                <button onClick={handleWhatsApp} className="sidebar-cta">
                    <Phone size={18} />
                    Book Appointment
                </button>
            </div>
        </header>
    );
};

export default Header;
