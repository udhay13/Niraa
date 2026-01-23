import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { equipment } from '../data/equipment';
import './Technology.css';

const Technology = () => {
    return (
        <div className="technology-page">
            {/* Hero */}
            <section className="page-hero tech-hero">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>Technology & Equipment</span>
                    </div>
                    <h1>Advanced Technology & Equipment</h1>
                    <p>
                        At Niraa Aesthetics, we invest in the latest FDA-approved technology
                        to deliver safe, effective, and comfortable treatments with superior results.
                    </p>
                </div>
            </section>

            {/* Equipment Grid */}
            <section className="equipment-section section">
                <div className="container">
                    <div className="equipment-list">
                        {equipment.map((item, index) => (
                            <div
                                className={`equipment-detail ${index % 2 === 1 ? 'reverse' : ''}`}
                                key={item.id}
                            >
                                <div className="equipment-image">
                                    <img
                                        src={`https://images.unsplash.com/photo-162909961365${index + 4}-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                                        alt={item.name}
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                                        }}
                                    />
                                </div>
                                <div className="equipment-info">
                                    <span className="equipment-category-badge">{item.category}</span>
                                    <h2>{item.name}</h2>
                                    <p className="equipment-desc">{item.description}</p>

                                    <h4>Key Advantages</h4>
                                    <ul className="advantages-list">
                                        {item.advantages.map((advantage, i) => (
                                            <li key={i}>
                                                <Check size={18} />
                                                <span>{advantage}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="specifications">
                                        <h4>Specifications</h4>
                                        <div className="spec-grid">
                                            {Object.entries(item.specifications).map(([key, value]) => (
                                                <div className="spec-item" key={key}>
                                                    <span className="spec-label">{key}</span>
                                                    <span className="spec-value">{value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="suitable-tags">
                                        <h4>Suitable For</h4>
                                        <div className="tags">
                                            {item.suitableFor.map((tag, i) => (
                                                <span className="tag" key={i}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="trust-section section">
                <div className="container">
                    <div className="trust-card">
                        <h2>Why Our Technology Matters</h2>
                        <p>
                            We carefully select equipment based on clinical efficacy, safety profile,
                            and patient comfort. All our devices are FDA-approved and operated by
                            trained professionals under dermatologist supervision.
                        </p>
                        <div className="trust-features">
                            <div className="trust-item">
                                <span className="trust-number">100%</span>
                                <span className="trust-label">FDA Approved</span>
                            </div>
                            <div className="trust-item">
                                <span className="trust-number">4+</span>
                                <span className="trust-label">Advanced Platforms</span>
                            </div>
                            <div className="trust-item">
                                <span className="trust-number">5+</span>
                                <span className="trust-label">Years Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Technology;
