import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Phone, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
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
        link: '/skin-treatments'
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

const DURATIONS = [1000, 2000, 3000, 5000]; // 1s, 2s, 3s, 5s

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoScrollDuration, setAutoScrollDuration] = useState(2000); // Default 2 seconds
    const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);
    const scrollContainerRef = useRef(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);
    const autoScrollTimerRef = useRef(null);

    // Update current slide based on scroll position
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const slideWidth = container.offsetWidth;
            const newIndex = Math.round(scrollLeft / slideWidth);
            setCurrentSlide(newIndex);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    // Auto-scroll functionality
    useEffect(() => {
        if (!isAutoScrollEnabled) return;

        const startAutoScroll = () => {
            autoScrollTimerRef.current = setInterval(() => {
                setCurrentSlide((prev) => {
                    const nextSlide = (prev + 1) % heroSlides.length;
                    scrollToSlide(nextSlide);
                    return nextSlide;
                });
            }, autoScrollDuration);
        };

        startAutoScroll();

        return () => {
            if (autoScrollTimerRef.current) {
                clearInterval(autoScrollTimerRef.current);
            }
        };
    }, [autoScrollDuration, isAutoScrollEnabled]);

    // Desktop drag-to-scroll functionality
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleMouseDown = (e) => {
            // Don't start drag if clicking on a button or link
            if (e.target.closest('button, a')) return;

            // Pause auto-scroll when user starts dragging
            setIsAutoScrollEnabled(false);

            isDraggingRef.current = true;
            startXRef.current = e.pageX - container.offsetLeft;
            scrollLeftRef.current = container.scrollLeft;
            container.style.cursor = 'grabbing';
            container.style.userSelect = 'none';
        };

        const handleMouseMove = (e) => {
            if (!isDraggingRef.current) return;
            e.preventDefault();

            const x = e.pageX - container.offsetLeft;
            const walk = (x - startXRef.current) * 2; // Multiply for faster scroll
            container.scrollLeft = scrollLeftRef.current - walk;
        };

        const handleMouseUp = () => {
            if (!isDraggingRef.current) return;
            isDraggingRef.current = false;
            container.style.cursor = 'grab';
            container.style.userSelect = '';

            // Resume auto-scroll after a delay
            setTimeout(() => setIsAutoScrollEnabled(true), 3000);
        };

        const handleMouseLeave = () => {
            if (!isDraggingRef.current) return;
            isDraggingRef.current = false;
            container.style.cursor = 'grab';
            container.style.userSelect = '';

            // Resume auto-scroll after a delay
            setTimeout(() => setIsAutoScrollEnabled(true), 3000);
        };

        container.addEventListener('mousedown', handleMouseDown);
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseup', handleMouseUp);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousedown', handleMouseDown);
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseup', handleMouseUp);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const scrollToSlide = (index) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const slideWidth = container.offsetWidth;
        container.scrollTo({
            left: slideWidth * index,
            behavior: 'smooth'
        });
    };

    const goToNext = () => {
        const nextSlide = (currentSlide + 1) % heroSlides.length;
        setCurrentSlide(nextSlide);
        scrollToSlide(nextSlide);

        // Pause and resume auto-scroll
        setIsAutoScrollEnabled(false);
        setTimeout(() => setIsAutoScrollEnabled(true), 3000);
    };

    const goToPrev = () => {
        const prevSlide = currentSlide === 0 ? heroSlides.length - 1 : currentSlide - 1;
        setCurrentSlide(prevSlide);
        scrollToSlide(prevSlide);

        // Pause and resume auto-scroll
        setIsAutoScrollEnabled(false);
        setTimeout(() => setIsAutoScrollEnabled(true), 3000);
    };

    const toggleDuration = () => {
        const currentIndex = DURATIONS.indexOf(autoScrollDuration);
        const nextIndex = (currentIndex + 1) % DURATIONS.length;
        setAutoScrollDuration(DURATIONS[nextIndex]);
    };

    const handleWhatsApp = () => {
        const message = encodeURIComponent('Hello! I would like to book a consultation at Niraa Aesthetics.');
        window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    };

    return (
        <section className="hero-carousel">
            {/* Horizontal Scroll Container */}
            <div
                className="hero-scroll-container"
                ref={scrollContainerRef}
            >
                {heroSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className="hero-slide"
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
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleWhatsApp();
                                        }}
                                        className="btn btn-primary btn-lg"
                                    >
                                        <Phone size={18} />
                                        Book Consultation
                                    </button>
                                    <Link
                                        to={slide.link}
                                        className="btn btn-outline-light btn-lg"
                                        onClick={(e) => e.stopPropagation()}
                                    >
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

            {/* Desktop Navigation Controls */}
            <div className="hero-controls">
                <button
                    className="nav-arrow prev"
                    onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={32} />
                </button>

                <button
                    className="nav-arrow next"
                    onClick={(e) => { e.stopPropagation(); goToNext(); }}
                    aria-label="Next slide"
                >
                    <ChevronRight size={32} />
                </button>

                {/* Duration Toggle */}
                <button
                    className="duration-toggle"
                    onClick={(e) => { e.stopPropagation(); toggleDuration(); }}
                    title="Change auto-scroll speed"
                >
                    <Clock size={14} />
                    <span>{autoScrollDuration / 1000}s</span>
                </button>
            </div>

            {/* Slide Indicators */}
            <div className="slide-indicators">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => scrollToSlide(index)}
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
