import { useParams, Link } from 'react-router-dom';
import {
    ArrowRight,
    Clock,
    Repeat,
    Shield,
    CheckCircle,
    ChevronDown,
    ChevronUp,
    Phone,
    Sparkles
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { getTreatmentById, skinTreatments, hairTreatments } from '../data/treatments';
import TreatmentCategories from '../components/common/TreatmentCategories';
import './TreatmentDetail.css';

const TreatmentDetail = () => {
    const { id } = useParams();
    const treatment = getTreatmentById(id);
    const [openFaq, setOpenFaq] = useState(null);
    const [visibleSections, setVisibleSections] = useState({});
    const sectionRefs = useRef({});

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) => ({
                            ...prev,
                            [entry.target.id]: true
                        }));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const sections = document.querySelectorAll('.animate-section');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [treatment]);

    if (!treatment) {
        return (
            <div className="not-found">
                <div className="container">
                    <h1>Treatment Not Found</h1>
                    <p>The treatment you're looking for doesn't exist.</p>
                    <Link to="/skin-treatments" className="btn btn-primary">
                        View All Treatments
                    </Link>
                </div>
            </div>
        );
    }

    const handleWhatsApp = () => {
        const message = encodeURIComponent(
            `Hello! I'm interested in the ${treatment.title} treatment at Niraa Aesthetics. Please share more details.`
        );
        window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    };

    const isSkinTreatment = skinTreatments.some(t => t.id === id);
    const relatedTreatments = isSkinTreatment
        ? skinTreatments.filter(t => t.id !== id).slice(0, 4)
        : hairTreatments.filter(t => t.id !== id).slice(0, 4);

    return (
        <div className="treatment-detail-page">
            {/* Hero Section - Compact Layout */}
            <section className="treatment-hero">
                <div className="hero-bg-pattern"></div>
                <div className="container">
                    <div className="hero-grid">
                        <div className="hero-content">
                            <div className="breadcrumb">
                                <Link to="/">Home</Link>
                                <span>/</span>
                                <Link to={isSkinTreatment ? '/skin-treatments' : '/hair-treatments'}>
                                    {isSkinTreatment ? 'Skin Treatments' : 'Hair Treatments'}
                                </Link>
                                <span>/</span>
                                <span>{treatment.title}</span>
                            </div>
                            <h1 className="hero-title">{treatment.title}</h1>
                            <p className="hero-description">{treatment.description}</p>

                            <div className="hero-meta">
                                <div className="meta-item">
                                    <div className="meta-icon">
                                        <Clock size={20} />
                                    </div>
                                    <div className="meta-text">
                                        <span className="label">Duration</span>
                                        <span className="value">{treatment.duration}</span>
                                    </div>
                                </div>
                                <div className="meta-item">
                                    <div className="meta-icon">
                                        <Repeat size={20} />
                                    </div>
                                    <div className="meta-text">
                                        <span className="label">Sessions</span>
                                        <span className="value">{treatment.sessions}</span>
                                    </div>
                                </div>
                                <div className="meta-item">
                                    <div className="meta-icon">
                                        <Shield size={20} />
                                    </div>
                                    <div className="meta-text">
                                        <span className="label">Recovery</span>
                                        <span className="value">{treatment.recovery}</span>
                                    </div>
                                </div>
                            </div>

                            <button onClick={handleWhatsApp} className="btn btn-primary btn-lg hero-cta">
                                <Sparkles size={20} />
                                Book Consultation
                                <ArrowRight size={20} />
                            </button>
                        </div>

                        <div className="hero-image-wrapper">
                            <div className="hero-image-container">
                                <img src={treatment.image} alt={treatment.title} />
                                <div className="image-glow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section
                id="benefits"
                className={`treatment-benefits section animate-section ${visibleSections.benefits ? 'visible' : ''}`}
            >
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Why Choose This</span>
                        <h2>Key Benefits</h2>
                    </div>
                    <div className="benefits-grid">
                        {treatment.benefits.map((benefit, index) => (
                            <div
                                className="benefit-card"
                                key={index}
                                style={{ '--delay': `${index * 0.1}s` }}
                            >
                                <div className="benefit-icon">
                                    <CheckCircle size={24} />
                                </div>
                                <span className="benefit-text">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Procedure Section */}
            <section
                id="procedure"
                className={`treatment-procedure section animate-section ${visibleSections.procedure ? 'visible' : ''}`}
            >
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">The Process</span>
                        <h2>Treatment Procedure</h2>
                    </div>
                    <div className="procedure-stepper">
                        {treatment.procedure.map((step, index) => (
                            <div
                                className="stepper-item"
                                key={index}
                                style={{ '--delay': `${index * 0.15}s` }}
                            >
                                <div className="stepper-number">
                                    <span>{step.step}</span>
                                </div>
                                <div className="stepper-content">
                                    <h4>{step.title}</h4>
                                    <p>{step.description}</p>
                                </div>
                                {index < treatment.procedure.length - 1 && (
                                    <div className="stepper-connector"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Section */}
            <section
                id="technology"
                className={`treatment-technology section animate-section ${visibleSections.technology ? 'visible' : ''}`}
            >
                <div className="container">
                    <div className="tech-layout">
                        <div className="tech-image">
                            <img src={treatment.image} alt="Treatment Technology" />
                            <div className="tech-overlay">
                                <Shield size={40} />
                                <span>FDA Approved</span>
                            </div>
                        </div>
                        <div className="tech-content">
                            <span className="section-badge">Advanced Care</span>
                            <h2>Technology & Equipment</h2>
                            <p>We use the latest FDA-approved technology to ensure safe and effective treatment with optimal results.</p>
                            <div className="tech-tags">
                                {treatment.technology.split(', ').map((tech, index) => (
                                    <span
                                        className="tech-tag"
                                        key={index}
                                        style={{ '--delay': `${index * 0.1}s` }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety Section */}
            <section
                id="safety"
                className={`treatment-safety section animate-section ${visibleSections.safety ? 'visible' : ''}`}
            >
                <div className="container">
                    <div className="safety-card">
                        <div className="safety-icon">
                            <Shield size={48} />
                        </div>
                        <h3>Your Safety is Our Priority</h3>
                        <p>
                            All treatments at Niraa Aesthetics are performed under the supervision of
                            certified dermatologists. We follow strict safety protocols and use only
                            FDA-approved technology.
                        </p>
                        <div className="safety-features">
                            <div className="safety-feature">
                                <CheckCircle size={18} />
                                <span>Dermatologist Supervised</span>
                            </div>
                            <div className="safety-feature">
                                <CheckCircle size={18} />
                                <span>FDA-Approved Technology</span>
                            </div>
                            <div className="safety-feature">
                                <CheckCircle size={18} />
                                <span>Sterile Environment</span>
                            </div>
                            <div className="safety-feature">
                                <CheckCircle size={18} />
                                <span>Personalized Care</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section
                id="faq"
                className={`treatment-faq section animate-section ${visibleSections.faq ? 'visible' : ''}`}
            >
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Got Questions?</span>
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="faq-list">
                        {treatment.faqs.map((faq, index) => (
                            <div
                                className={`faq-item ${openFaq === index ? 'open' : ''}`}
                                key={index}
                                style={{ '--delay': `${index * 0.1}s` }}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <span>{faq.question}</span>
                                    <div className="faq-toggle">
                                        {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </div>
                                </button>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="treatment-cta section">
                <div className="cta-bg-pattern"></div>
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Start Your Transformation?</h2>
                        <p>Book a consultation with our experts and take the first step towards your aesthetic goals.</p>
                        <button onClick={handleWhatsApp} className="btn btn-white btn-lg cta-button">
                            <Phone size={20} />
                            Book on WhatsApp
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Explore Other Treatments */}
            <TreatmentCategories />

            {/* Related Treatments */}
            <section
                id="related"
                className={`related-treatments section animate-section ${visibleSections.related ? 'visible' : ''}`}
            >
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">You May Also Like</span>
                        <h2>Related Treatments</h2>
                    </div>
                    <div className="related-grid">
                        {relatedTreatments.map((t, index) => (
                            <Link
                                to={`/treatments/${t.id}`}
                                className="related-card"
                                key={t.id}
                                style={{ '--delay': `${index * 0.1}s` }}
                            >
                                <div className="related-image">
                                    <img src={t.image} alt={t.title} />
                                    <div className="related-overlay">
                                        <span>View Details</span>
                                    </div>
                                </div>
                                <div className="related-content">
                                    <h4>{t.title}</h4>
                                    <p>{t.shortDescription}</p>
                                    <span className="view-link">
                                        Learn More <ArrowRight size={16} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TreatmentDetail;
