import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import './Header.css';

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
        { name: 'Acne Treatment', path: '/treatments/acne-treatment' },
        { name: 'Acne Scar Reduction', path: '/treatments/acne-scar-reduction' },
        { name: 'Pigmentation Treatment', path: '/treatments/pigmentation-treatment' },
        { name: 'Anti-Ageing & Wrinkle Reduction', path: '/treatments/anti-ageing-treatment' },
        { name: 'Skin Brightening & Glow', path: '/treatments/skin-brightening' },
        { name: 'Chemical Peels', path: '/treatments/chemical-peels' },
        { name: 'Hydra Facial', path: '/treatments/hydra-facial' },
        { name: 'Laser Skin Rejuvenation', path: '/treatments/laser-skin-rejuvenation' },
    ];

    const hairTreatments = [
        { name: 'Laser Hair Reduction', path: '/treatments/laser-hair-reduction' },
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
                    <span className="logo-text">Niraa</span>
                    <span className="logo-accent">Aesthetics</span>
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

                    <Link to="/technology" className="nav-link">Technology</Link>
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

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
                <Link to="/" className="mobile-nav-link">Home</Link>

                <div className="mobile-nav-dropdown">
                    <button
                        className="mobile-nav-link mobile-dropdown-trigger"
                        onClick={() => toggleDropdown('skin')}
                    >
                        Skin Treatments
                        <ChevronDown className={`dropdown-icon ${activeDropdown === 'skin' ? 'rotated' : ''}`} size={18} />
                    </button>
                    <div className={`mobile-dropdown-menu ${activeDropdown === 'skin' ? 'open' : ''}`}>
                        <Link to="/skin-treatments" className="mobile-dropdown-item">All Skin Treatments</Link>
                        {skinTreatments.map((item) => (
                            <Link key={item.path} to={item.path} className="mobile-dropdown-item">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="mobile-nav-dropdown">
                    <button
                        className="mobile-nav-link mobile-dropdown-trigger"
                        onClick={() => toggleDropdown('hair')}
                    >
                        Hair Treatments
                        <ChevronDown className={`dropdown-icon ${activeDropdown === 'hair' ? 'rotated' : ''}`} size={18} />
                    </button>
                    <div className={`mobile-dropdown-menu ${activeDropdown === 'hair' ? 'open' : ''}`}>
                        <Link to="/hair-treatments" className="mobile-dropdown-item">All Hair Treatments</Link>
                        {hairTreatments.map((item) => (
                            <Link key={item.path} to={item.path} className="mobile-dropdown-item">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <Link to="/technology" className="mobile-nav-link">Technology</Link>
                <Link to="/blogs" className="mobile-nav-link">Blogs</Link>
                <Link to="/about" className="mobile-nav-link">About Us</Link>
                <Link to="/contact" className="mobile-nav-link">Contact</Link>

                <button onClick={handleWhatsApp} className="mobile-cta">
                    <Phone size={18} />
                    Book Appointment
                </button>
            </div>
        </header>
    );
};

export default Header;
