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

// Bidirectional Infinite Scroll: [Clone Last, ...Originals, Clone First]
const heroSlides = [
    { ...heroSlidesData[heroSlidesData.length - 1], id: 'clone-last' },
    ...heroSlidesData,
    { ...heroSlidesData[0], id: 'clone-first' }
];

const Hero = () => {
    // Start at index 1 (First Real Slide)
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const scrollContainerRef = useRef(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);
    const autoScrollTimerRef = useRef(null);
    const initializedRef = useRef(false);

    // 1. Initial Setup: Jump to Index 1 immediately on mount
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container && !initializedRef.current) {
            // Wait for layout
            setTimeout(() => {
                const slideWidth = container.offsetWidth;
                container.scrollLeft = slideWidth; // Jump to Slide 1
                initializedRef.current = true;
            }, 50);
        }
    }, [isMobile]); // Re-run if mobile breakpoint changes (layout shift)

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
            if (!initializedRef.current) return;

            const scrollLeft = container.scrollLeft;
            const slideWidth = container.offsetWidth;
            const newIndex = Math.round(scrollLeft / slideWidth);

            // Only update if changed to avoid loop
            if (newIndex !== currentSlide) {
                setCurrentSlide(newIndex);
            }
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [currentSlide]);

    // Infinite Loop Logic (Bidirectional)
    useEffect(() => {
        if (!initializedRef.current) return;

        // If at Index 0 (Clone Last) -> Jump to Real Last (Length - 2)
        if (currentSlide === 0) {
            const timer = setTimeout(() => {
                const container = scrollContainerRef.current;
                if (container) {
                    const slideWidth = container.offsetWidth;
                    container.style.scrollBehavior = 'auto'; // Silent jump
                    const realLastIndex = heroSlides.length - 2;
                    container.scrollLeft = slideWidth * realLastIndex;
                    setCurrentSlide(realLastIndex);

                    // Force Reflow
                    void container.offsetWidth;
                    setTimeout(() => container.style.scrollBehavior = 'smooth', 50);
                }
            }, 500); // Wait for scroll animation to finish
            return () => clearTimeout(timer);
        }

        // If at Index Length-1 (Clone First) -> Jump to Real First (1)
        if (currentSlide === heroSlides.length - 1) {
            const timer = setTimeout(() => {
                const container = scrollContainerRef.current;
                if (container) {
                    const slideWidth = container.offsetWidth;
                    container.style.scrollBehavior = 'auto'; // Silent jump
                    const realFirstIndex = 1;
                    container.scrollLeft = slideWidth * realFirstIndex;
                    setCurrentSlide(realFirstIndex);

                    // Force Reflow
                    void container.offsetWidth;
                    setTimeout(() => container.style.scrollBehavior = 'smooth', 50);
                }
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [currentSlide]);

    // Auto-scroll functionality
    useEffect(() => {
        if (!isAutoScrollEnabled) return;

        const startAutoScroll = () => {
            autoScrollTimerRef.current = setInterval(() => {
                setCurrentSlide((prev) => {
                    const nextIndex = prev + 1;
                    scrollToSlide(nextIndex);
                    return nextIndex;
                });
            }, 5000); // 5 seconds
        };

        startAutoScroll();

        return () => {
            if (autoScrollTimerRef.current) clearInterval(autoScrollTimerRef.current);
        };
    }, [isAutoScrollEnabled, isMobile]); // Removed isMobile check to allow mobile auto-scroll

    // Desktop/Mobile Touch Drag Logic
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleMouseDown = (e) => {
            if (e.target.closest('button, a')) return;
            setIsAutoScrollEnabled(false); // Pause auto-scroll
            isDraggingRef.current = true;
            startXRef.current = e.pageX - container.offsetLeft;
            scrollLeftRef.current = container.scrollLeft;
            container.style.cursor = 'grabbing';
        };

        const handleMouseMove = (e) => {
            if (!isDraggingRef.current) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startXRef.current) * 2;
            container.scrollLeft = scrollLeftRef.current - walk;
        };

        const handleMouseUp = () => {
            if (!isDraggingRef.current) return;
            isDraggingRef.current = false;
            container.style.cursor = 'grab';
            setTimeout(() => setIsAutoScrollEnabled(true), 3000); // Resume
        };

        const handleMouseLeave = () => {
            if (!isDraggingRef.current) return;
            isDraggingRef.current = false;
            container.style.cursor = 'grab';
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

    const handleBlockClick = (index) => {
        // Map 0-based index (0..3) to real slides (1..4)
        const realIndex = index + 1;
        setCurrentSlide(realIndex);
        scrollToSlide(realIndex);
        setIsAutoScrollEnabled(false);
        setTimeout(() => setIsAutoScrollEnabled(true), 100);
    };

    const handleWhatsApp = () => {
        const message = encodeURIComponent('Hello! I would like to book a consultation at Niraa Aesthetics.');
        window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    };

    // Calculate active indicator index (0-3)
    // currentSlide ranges from 0 (Clone L) to 5 (Clone F)
    // Real slides are 1, 2, 3, 4 -> Indices 0, 1, 2, 3
    let activeIndicatorIndex = 0;
    if (currentSlide === 0) activeIndicatorIndex = heroSlidesData.length - 1;
    else if (currentSlide === heroSlides.length - 1) activeIndicatorIndex = 0;
    else activeIndicatorIndex = currentSlide - 1;

    return (
        <section className="hero-carousel">
            <div className="hero-scroll-container" ref={scrollContainerRef}>
                {heroSlides.map((slide, index) => (
                    <div
                        key={`${slide.id}-${index}`}
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
                                        onClick={(e) => { e.stopPropagation(); handleWhatsApp(); }}
                                        className="btn btn-primary btn-lg"
                                    >
                                        <Phone size={18} /> Book Consultation
                                    </button>
                                    <Link
                                        to={slide.link}
                                        className="btn btn-outline-light btn-lg"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {slide.cta} <ArrowRight size={18} />
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

            <div className="hero-controls">
                <div className="progress-blocks-container">
                    {heroSlidesData.map((_, index) => (
                        <div
                            key={index}
                            className={`progress-block ${index === activeIndicatorIndex ? 'active' : ''} ${index === activeIndicatorIndex && isAutoScrollEnabled ? 'animating' : ''}`}
                            onClick={(e) => { e.stopPropagation(); handleBlockClick(index); }}
                        >
                            <div className="progress-fill"></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="hero-contact-bar">
                <div className="container contact-bar-content">
                    <span className="contact-label">Talk to our experts</span>
                    <a href="tel:+919876543210" className="contact-phone">
                        <Phone size={16} /> +91 98765 43210
                    </a>
                    <span className="contact-divider">|</span>
                    <span className="contact-trust">⭐ Rated 4.9/5 by 10,000+ clients</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
