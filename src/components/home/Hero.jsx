import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const handleWhatsApp = () => {
        const message = encodeURIComponent('Hello! I would like to book a consultation at Niraa Aesthetics.');
        window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    };

    return (
        <section className="hero">
            {/* Animated Background */}
            <div className="hero-bg">
                <div className="hero-gradient"></div>
                <div className="hero-grid"></div>
                <div className="hero-orb hero-orb-1"></div>
                <div className="hero-orb hero-orb-2"></div>
                <div className="hero-orb hero-orb-3"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge animate-fadeInDown">
                        <Sparkles size={14} />
                        <span>Dermatologist-Led Excellence</span>
                    </div>

                    <h1 className="hero-title animate-fadeInUp">
                        Transform Your
                        <span className="hero-title-accent gradient-text"> Skin & Hair</span>
                        <br />With Expert Care
                    </h1>

                    <p className="hero-subtitle animate-fadeInUp animate-delay-1">
                        Experience science-backed dermatology with cutting-edge technology.
                        Personalized treatments designed for visible, lasting results.
                    </p>

                    <div className="hero-cta animate-fadeInUp animate-delay-2">
                        <button onClick={handleWhatsApp} className="btn btn-primary btn-lg">
                            Book Free Consultation
                            <ArrowRight size={20} />
                        </button>
                        <Link to="/skin-treatments" className="btn btn-secondary btn-lg">
                            <Play size={18} />
                            Explore Treatments
                        </Link>
                    </div>

                    <div className="hero-trust animate-fadeInUp animate-delay-3">
                        <div className="trust-avatars">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" />
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
                            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client" />
                            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Client" />
                            <span className="more-count">+10K</span>
                        </div>
                        <div className="trust-text">
                            <div className="trust-rating">
                                <span className="stars">★★★★★</span>
                                <span className="rating-score">4.9/5</span>
                            </div>
                            <span className="trust-label">Trusted by 10,000+ Happy Clients</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-image-wrapper animate-scaleIn">
                        <div className="hero-image-main">
                            <img
                                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Premium skincare treatment"
                            />
                            <div className="image-overlay"></div>
                        </div>

                        {/* Floating Elements */}
                        <div className="floating-card floating-card-1 animate-float">
                            <div className="floating-icon">✨</div>
                            <div className="floating-text">
                                <span className="floating-value">98%</span>
                                <span className="floating-label">Success Rate</span>
                            </div>
                        </div>

                        <div className="floating-card floating-card-2 animate-float animate-delay-2">
                            <div className="floating-icon">🏆</div>
                            <div className="floating-text">
                                <span className="floating-value">FDA</span>
                                <span className="floating-label">Approved Tech</span>
                            </div>
                        </div>

                        <div className="floating-card floating-card-3 animate-float animate-delay-4">
                            <div className="floating-icon">⚡</div>
                            <div className="floating-text">
                                <span className="floating-value">15+</span>
                                <span className="floating-label">Treatments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll animate-bounce">
                <div className="scroll-line"></div>
                <span>Scroll</span>
            </div>
        </section>
    );
};

export default Hero;
