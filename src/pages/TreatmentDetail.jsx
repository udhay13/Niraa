import { useParams, Link } from 'react-router-dom';
import {
    ArrowRight,
    Clock,
    Repeat,
    Shield,
    CheckCircle,
    ChevronDown,
    ChevronUp,
    Phone
} from 'lucide-react';
import { useState } from 'react';
import { getTreatmentById, skinTreatments, hairTreatments } from '../data/treatments';
import './TreatmentDetail.css';

const TreatmentDetail = () => {
    const { id } = useParams();
    const treatment = getTreatmentById(id);
    const [openFaq, setOpenFaq] = useState(null);

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
        ? skinTreatments.filter(t => t.id !== id).slice(0, 3)
        : hairTreatments.filter(t => t.id !== id).slice(0, 3);

    return (
        <div className="treatment-detail-page">
            {/* Hero Section */}
            <section className="treatment-hero">
                <div className="hero-bg-overlay"></div>
                <div className="container">
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
                        <h1>{treatment.title}</h1>
                        <p>{treatment.description}</p>
                        <div className="hero-meta">
                            <div className="meta-item">
                                <Clock size={20} />
                                <div>
                                    <span className="label">Duration</span>
                                    <span className="value">{treatment.duration}</span>
                                </div>
                            </div>
                            <div className="meta-item">
                                <Repeat size={20} />
                                <div>
                                    <span className="label">Sessions</span>
                                    <span className="value">{treatment.sessions}</span>
                                </div>
                            </div>
                            <div className="meta-item">
                                <Shield size={20} />
                                <div>
                                    <span className="label">Recovery</span>
                                    <span className="value">{treatment.recovery}</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={handleWhatsApp} className="btn btn-primary btn-lg">
                            Book Consultation <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="treatment-benefits section">
                <div className="container">
                    <h2>Key Benefits</h2>
                    <div className="benefits-grid">
                        {treatment.benefits.map((benefit, index) => (
                            <div className="benefit-item" key={index}>
                                <CheckCircle size={24} />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Procedure Section */}
            <section className="treatment-procedure section">
                <div className="container">
                    <h2>Treatment Procedure</h2>
                    <div className="procedure-timeline">
                        {treatment.procedure.map((step, index) => (
                            <div className="timeline-item" key={index}>
                                <div className="timeline-number">{step.step}</div>
                                <div className="timeline-content">
                                    <h4>{step.title}</h4>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Section */}
            <section className="treatment-technology section">
                <div className="container">
                    <div className="tech-content">
                        <h2>Technology & Equipment Used</h2>
                        <p>We use the latest FDA-approved technology to ensure safe and effective treatment:</p>
                        <div className="tech-tags">
                            {treatment.technology.split(', ').map((tech, index) => (
                                <span className="tech-tag" key={index}>{tech}</span>
                            ))}
                        </div>
                    </div>
                    <div className="tech-image">
                        <img
                            src={treatment.image}
                            alt="Treatment Technology"
                        />
                    </div>
                </div>
            </section>

            {/* Safety Section */}
            <section className="treatment-safety section">
                <div className="container">
                    <div className="safety-card">
                        <Shield size={48} />
                        <h3>Your Safety is Our Priority</h3>
                        <p>
                            All treatments at Niraa Aesthetics are performed under the supervision of
                            certified dermatologists. We follow strict safety protocols and use only
                            FDA-approved technology to ensure your safety and comfort.
                        </p>
                        <div className="safety-features">
                            <span>✓ Dermatologist Supervised</span>
                            <span>✓ FDA-Approved Technology</span>
                            <span>✓ Sterile Environment</span>
                            <span>✓ Personalized Care</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="treatment-faq section">
                <div className="container">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-list">
                        {treatment.faqs.map((faq, index) => (
                            <div
                                className={`faq-item ${openFaq === index ? 'open' : ''}`}
                                key={index}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <span>{faq.question}</span>
                                    {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
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
                <div className="container">
                    <div className="cta-card">
                        <h2>Ready to Start Your Transformation?</h2>
                        <p>Book a consultation with our experts and take the first step towards your aesthetic goals.</p>
                        <button onClick={handleWhatsApp} className="btn btn-primary btn-lg">
                            <Phone size={20} />
                            Book on WhatsApp
                        </button>
                    </div>
                </div>
            </section>

            {/* Related Treatments */}
            <section className="related-treatments section">
                <div className="container">
                    <h2>Related Treatments</h2>
                    <div className="related-grid">
                        {relatedTreatments.map((t) => (
                            <Link to={`/treatments/${t.id}`} className="related-card card" key={t.id}>
                                <div className="related-image">
                                    <img
                                        src={t.image}
                                        alt={t.title}
                                    />
                                </div>
                                <div className="related-content">
                                    <h4>{t.title}</h4>
                                    <p>{t.shortDescription}</p>
                                    <span className="view-link">Learn More <ArrowRight size={16} /></span>
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
