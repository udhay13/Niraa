import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Repeat } from 'lucide-react';
import { skinTreatments, hairTreatments } from '../../data/treatments';
import './TreatmentsOverview.css';

const TreatmentsOverview = () => {
    const [activeTab, setActiveTab] = useState('skin');

    const treatments = activeTab === 'skin' ? skinTreatments : hairTreatments;

    return (
        <section className="treatments-section section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Our Services</span>
                    <h2 className="section-title">Advanced Treatments</h2>
                    <p className="section-subtitle">
                        Discover our range of dermatologist-led treatments designed to address
                        your unique skin and hair concerns with precision and care.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="treatment-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'skin' ? 'active' : ''}`}
                        onClick={() => setActiveTab('skin')}
                    >
                        Skin Treatments
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'hair' ? 'active' : ''}`}
                        onClick={() => setActiveTab('hair')}
                    >
                        Hair Treatments
                    </button>
                </div>

                {/* Treatment Cards */}
                <div className="treatments-grid">
                    {treatments.slice(0, 6).map((treatment, index) => (
                        <Link
                            to={`/treatments/${treatment.id}`}
                            className="treatment-card card"
                            key={treatment.id}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="treatment-image">
                                <img
                                    src={treatment.image}
                                    alt={treatment.title}
                                />
                                <div className="treatment-overlay">
                                    <span className="know-more">
                                        Know More <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>
                            <div className="treatment-content">
                                <h3>{treatment.title}</h3>
                                <p>{treatment.shortDescription}</p>
                                <div className="treatment-meta">
                                    <div className="meta-item">
                                        <Clock size={14} />
                                        <span>{treatment.duration}</span>
                                    </div>
                                    <div className="meta-item">
                                        <Repeat size={14} />
                                        <span>{treatment.sessions}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="treatments-cta">
                    <Link
                        to={activeTab === 'skin' ? '/skin-treatments' : '/hair-treatments'}
                        className="btn btn-secondary btn-lg"
                    >
                        View All {activeTab === 'skin' ? 'Skin' : 'Hair'} Treatments
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TreatmentsOverview;
