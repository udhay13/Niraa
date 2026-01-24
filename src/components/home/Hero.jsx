import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Phone } from 'lucide-react';
import './Hero.css';

// Hero slider data - 4 templates
const heroSlides = [
    {
        id: 1,
        title: 'Flaunt Your Glow',
        subtitle: 'Complete Skin Transformation',
        highlight: 'Premium Facial Package',
        description: 'Experience our signature facial treatments for radiant, youthful skin',
        image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=1920&q=80',
        treatments: ['HydraFacial', 'Chemical Peel', 'LED Therapy'],
        cta: 'Book Now',
        link: '/skin-treatments'
    },
    {
        id: 2,
        title: 'Age-Defying Beauty',
        subtitle: 'Turn Back Time',
        highlight: 'Anti-Aging Solutions',
        description: 'Advanced treatments to reduce fine lines and restore youthful radiance',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80',
        treatments: ['Botox', 'Dermal Fillers', 'Skin Tightening'],
        cta: 'Explore Treatments',
        link: '/skin-treatments'
    },
    {
        id: 3,
        title: 'Laser Precision',
        subtitle: 'Advanced Technology',
        highlight: 'Laser Treatments',
        description: 'State-of-the-art laser technology for flawless, even-toned skin',
        image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=1920&q=80',
        treatments: ['Hair Removal', 'Pigmentation', 'Skin Resurfacing'],
        cta: 'Learn More',
        link: '/technology'
    },
    {
        id: 4,
        title: 'Healthy Hair',
        subtitle: 'Restore & Regrow',
        highlight: 'Hair Restoration',
        description: 'Expert solutions for hair fall, thinning, and scalp health',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80',
        treatments: ['PRP Therapy', 'Hair Fall Control', 'Scalp Treatment'],
        cta: 'Get Started',
        link: '/hair-treatments'
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-scroll effect
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        // Resume auto-play after 10 seconds
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const handleWhatsApp = () => {
        const message = encodeURIComponent('Hello! I would like to book a consultation at Niraa Aesthetics.');
        window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    };

    return (
        <section className="hero-carousel">
            {/* Slides Container */}
            <div className="slides-container">
                {heroSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="slide-overlay"></div>

                        <div className="container slide-content">
                            <div className="slide-text">
                                <span className="slide-badge">
                                    <Sparkles size={14} />
                                    {slide.highlight}
                                </span>
                                <h1 className="slide-title">{slide.title}</h1>
                                <p className="slide-subtitle">{slide.subtitle}</p>
                                <p className="slide-description">{slide.description}</p>

                                <div className="slide-cta">
                                    <button onClick={handleWhatsApp} className="btn btn-primary btn-lg">
                                        <Phone size={18} />
                                        Book Consultation
                                    </button>
                                    <Link to={slide.link} className="btn btn-outline-light btn-lg">
                                        {slide.cta}
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>

                            <div className="slide-treatments">
                                {slide.treatments.map((treatment, i) => (
                                    <div key={i} className="treatment-badge" style={{ '--delay': `${i * 0.1}s` }}>
                                        <span className="treatment-number">{i + 1}</span>
                                        <span className="treatment-name">{treatment}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Slide Indicators */}
            <div className="slide-indicators">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        <span className="indicator-progress"></span>
                    </button>
                ))}
            </div>

            {/* Bottom Contact Bar */}
            <div className="hero-contact-bar">
                <div className="container contact-bar-content">
                    <span className="contact-label">Talk to our experts</span>
                    <a href="tel:+919876543210" className="contact-phone">
                        <Phone size={16} />
                        +91 98765 43210
                    </a>
                    <span className="contact-divider">|</span>
                    <span className="contact-trust">⭐ Rated 4.9/5 by 10,000+ clients</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
