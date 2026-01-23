import { Link } from 'react-router-dom';
import {
    MapPin,
    Phone,
    Mail,
    Instagram,
    Facebook,
    Youtube,
    Clock,
    ArrowRight
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const skinTreatments = [
        { name: 'Acne Treatment', path: '/treatments/acne-treatment' },
        { name: 'Pigmentation', path: '/treatments/pigmentation-treatment' },
        { name: 'Anti-Ageing', path: '/treatments/anti-ageing-treatment' },
        { name: 'Hydra Facial', path: '/treatments/hydra-facial' },
    ];

    const hairTreatments = [
        { name: 'Laser Hair Reduction', path: '/treatments/laser-hair-reduction' },
        { name: 'PRP Treatment', path: '/treatments/prp-hair-treatment' },
        { name: 'Hair Fall Control', path: '/treatments/hair-fall-control' },
    ];

    const quickLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Our Technology', path: '/technology' },
        { name: 'Blog', path: '/blogs' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <footer className="footer">
            {/* CTA Section */}
            <div className="footer-cta">
                <div className="container">
                    <div className="cta-content">
                        <div className="cta-text">
                            <h3>Ready to Transform Your Skin & Hair?</h3>
                            <p>Book your consultation today and take the first step towards your aesthetic goals.</p>
                        </div>
                        <a
                            href="https://wa.me/919876543210?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment%20at%20Nira%20Aesthetics."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-white btn-lg"
                        >
                            Book Appointment <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand Column */}
                        <div className="footer-brand">
                            <Link to="/" className="footer-logo">
                                <img src="/logo-full.png" alt="Niraa Aesthetics" className="logo-full" />
                            </Link>
                            <p className="brand-description">
                                Expert-led dermatology clinic offering premium skin and hair care treatments
                                with cutting-edge technology and personalized care plans.
                            </p>
                            <div className="social-links">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <Instagram size={22} />
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <Facebook size={22} />
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                    <Youtube size={22} />
                                </a>
                            </div>
                        </div>

                        {/* Skin Treatments */}
                        <div className="footer-column">
                            <h4 className="footer-title">Skin Treatments</h4>
                            <ul className="footer-links">
                                {skinTreatments.map((item) => (
                                    <li key={item.path}>
                                        <Link to={item.path}>{item.name}</Link>
                                    </li>
                                ))}
                                <li>
                                    <Link to="/skin-treatments" className="view-all">View All →</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Hair Treatments */}
                        <div className="footer-column">
                            <h4 className="footer-title">Hair Treatments</h4>
                            <ul className="footer-links">
                                {hairTreatments.map((item) => (
                                    <li key={item.path}>
                                        <Link to={item.path}>{item.name}</Link>
                                    </li>
                                ))}
                                <li>
                                    <Link to="/hair-treatments" className="view-all">View All →</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div className="footer-column footer-contact">
                            <h4 className="footer-title">Contact Us</h4>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <MapPin size={18} />
                                    <span>123 Premium Plaza, HSR Layout, Bangalore - 560102</span>
                                </div>
                                <div className="contact-item">
                                    <Phone size={18} />
                                    <a href="tel:+919876543210">+91 98765 43210</a>
                                </div>
                                <div className="contact-item">
                                    <Mail size={18} />
                                    <a href="mailto:hello@niraaesthetics.com">hello@niraaesthetics.com</a>
                                </div>
                                <div className="contact-item">
                                    <Clock size={18} />
                                    <span>Mon - Sat: 10AM - 8PM</span>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="footer-column footer-map-column">
                            <h4 className="footer-title">Find Us</h4>
                            <div className="footer-map-small">
                                <iframe
                                    title="Niraa Aesthetics Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.9472538986356!2d78.1373442750545!3d11.627109088578186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babef687b1917eb%3A0x3a1e06f3365519e4!2sPaavai%20Hospital!5e0!3m2!1sen!2sin!4v1769197511474!5m2!1sen!2sin"
                                    width="100%"
                                    height="120"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                <a
                                    href="https://maps.app.goo.gl/yqrasX9yCTH5N2bK7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="map-link"
                                >
                                    View larger map →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="bottom-content">
                        <p>© {currentYear} Nira Aesthetics. All rights reserved.</p>
                        <div className="bottom-links">
                            <Link to="/privacy-policy">Privacy Policy</Link>
                            <span className="divider">|</span>
                            <Link to="/terms">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
