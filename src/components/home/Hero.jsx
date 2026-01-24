import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Phone } from 'lucide-react';
import './Hero.css';

// Hero slider data - 4 templates
const heroSlidesData = [
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

// Add clone of first slide for infinite scroll effect
const heroSlides = [...heroSlidesData, { ...heroSlidesData[0], id: 'clone-1' }];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoScrollDuration, setAutoScrollDuration] = useState(5000); // Default 5 seconds
    const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const scrollContainerRef = useRef(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);
    const autoScrollTimerRef = useRef(null);
    const resetTimerRef = useRef(null);

    // Check for mobile device
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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

    // Auto-scroll functionality with Infinite Loop
    useEffect(() => {
        if (!isAutoScrollEnabled || isMobile) return;

        const startAutoScroll = () => {
            autoScrollTimerRef.current = setInterval(() => {
                setCurrentSlide((prev) => {
                    const nextIndex = prev + 1;

                    // If we are moving to the clone (last item)
                    if (nextIndex === heroSlides.length - 1) {
                        scrollToSlide(nextIndex);

                        // Wait for animation to finish then silent reset
                        resetTimerRef.current = setTimeout(() => {
                            const container = scrollContainerRef.current;
                            if (container) {
                                container.style.scrollBehavior = 'auto'; // Disable smooth scroll
                                container.scrollLeft = 0; // Jump to start
                                setCurrentSlide(0);
                                setTimeout(() => { // Re-enable smooth scroll
                                    container.style.scrollBehavior = 'smooth';
                                }, 50);
                            }
                        }, 600); // 600ms matches smooth scroll duration roughly

                        return nextIndex;
                    }

                    // Normal transition
                    if (nextIndex < heroSlides.length - 1) {
                        scrollToSlide(nextIndex);
                        return nextIndex;
                    }

                    return 0; // Fallback
                });
            }, 5000); // 5 seconds
        };

        startAutoScroll();

        return () => {
            if (autoScrollTimerRef.current) clearInterval(autoScrollTimerRef.current);
            if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
        };
    }, [isAutoScrollEnabled, isMobile]);

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

            // Resume auto-scroll after a delay if not mobile
            if (!isMobile) {
                setTimeout(() => setIsAutoScrollEnabled(true), 3000);
            }
        };

        const handleMouseLeave = () => {
            if (!isDraggingRef.current) return;
            isDraggingRef.current = false;
            container.style.cursor = 'grab';
            container.style.userSelect = '';

            // Resume auto-scroll after a delay if not mobile
            if (!isMobile) {
                setTimeout(() => setIsAutoScrollEnabled(true), 3000);
            }
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



    const handleWhatsApp = () => {
        const message = encodeURIComponent('Hello! I would like to book a consultation at Niraa Aesthetics.');
        window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    };

    const handleBlockClick = (index) => {
        setCurrentSlide(index);
        scrollToSlide(index);

        // Reset auto scroll timer to restart interaction
        setIsAutoScrollEnabled(false);
        setTimeout(() => setIsAutoScrollEnabled(true), 100);
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

            {/* Progress Blocks (Replacing Indicators & Toggle) */}
            <div className="hero-controls">
                <div className="progress-blocks-container">
                    {heroSlidesData.map((_, index) => (
                        <div
                            key={index}
                            className={`progress-block ${index === (currentSlide % heroSlidesData.length) ? 'active' : ''} ${index === (currentSlide % heroSlidesData.length) && isAutoScrollEnabled && !isMobile ? 'animating' : ''}`}
                            onClick={(e) => { e.stopPropagation(); handleBlockClick(index); }}
                        >
                            <div className="progress-fill"></div>
                        </div>
                    ))}
                </div>
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
