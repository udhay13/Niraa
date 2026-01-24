import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './TestimonialCarousel.css';

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const testimonials = [
        {
            id: 1,
            name: 'Priya Sharma',
            treatment: 'Laser Hair Reduction',
            rating: 5,
            text: 'After just 4 sessions, I can see a dramatic reduction in hair growth. The treatment was virtually painless thanks to their advanced cooling technology. The staff is professional and the clinic feels so premium!',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80'
        },
        {
            id: 2,
            name: 'Rahul Mehta',
            treatment: 'Acne Scar Treatment',
            rating: 5,
            text: 'I had deep acne scars for years that affected my confidence. Dr. Niraa\'s team used a combination of lasers and PRP that gave me incredible results. My skin texture has improved significantly!',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80'
        },
        {
            id: 3,
            name: 'Anjali Reddy',
            treatment: 'HydraFacial',
            rating: 5,
            text: 'The HydraFacial here is the best I\'ve ever had! My skin was glowing immediately after, and the results lasted for weeks. I\'ve made it a monthly ritual now. Highly recommend!',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80'
        },
        {
            id: 4,
            name: 'Vikram Singh',
            treatment: 'PRP Hair Treatment',
            rating: 5,
            text: 'Was skeptical about PRP at first, but the results speak for themselves. My hairline has improved and new hair growth is visible. The team explained everything thoroughly and made me feel comfortable.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
        },
        {
            id: 5,
            name: 'Sneha Kapoor',
            treatment: 'Anti-Ageing Treatment',
            rating: 5,
            text: 'The RF skin tightening treatment has taken years off my face! The fine lines around my eyes are barely visible now. Love how natural the results look - no one knows I had any work done!',
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80'
        }
    ];

    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setCurrentIndex(prev => (prev + 1) % testimonials.length);
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    const goToPrev = () => {
        setIsAutoPlaying(false);
        setCurrentIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex(prev => (prev + 1) % testimonials.length);
    };

    const goToSlide = (index) => {
        setIsAutoPlaying(false);
        setCurrentIndex(index);
    };

    // Touch handlers for mobile swipe
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const swipeThreshold = 50;
        const diff = touchStartX.current - touchEndX.current;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swiped left - go to next
                goToNext();
            } else {
                // Swiped right - go to previous
                goToPrev();
            }
        }
    };

    return (
        <section className="testimonials-section section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Testimonials</span>
                    <h2 className="section-title">What Our Clients Say</h2>
                    <p className="section-subtitle">
                        Real stories from real clients who have experienced transformative
                        results at Nira Aesthetics.
                    </p>
                </div>

                <div className="testimonials-carousel">
                    <button className="carousel-btn prev" onClick={goToPrev} aria-label="Previous">
                        <ChevronLeft size={24} />
                    </button>

                    <div
                        className="carousel-container"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className="carousel-track"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div className="testimonial-slide" key={testimonial.id}>
                                    <div className="testimonial-card">
                                        <Quote className="quote-icon" size={48} />

                                        <div className="rating">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} size={20} fill="currentColor" />
                                            ))}
                                        </div>

                                        <p className="testimonial-text">{testimonial.text}</p>

                                        <div className="testimonial-author">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="author-image"
                                            />
                                            <div className="author-info">
                                                <span className="author-name">{testimonial.name}</span>
                                                <span className="author-treatment">{testimonial.treatment}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="carousel-btn next" onClick={goToNext} aria-label="Next">
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className="carousel-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;
