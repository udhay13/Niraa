import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { equipment } from '../../data/equipment';
import './TechnologySection.css';

const TechnologySection = () => {
    return (
        <section className="technology-section section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">State-of-the-Art</span>
                    <h2 className="section-title">Advanced Technology & Equipment</h2>
                    <p className="section-subtitle">
                        We invest in the latest FDA-approved technology to deliver safe,
                        effective, and comfortable treatments with superior results.
                    </p>
                </div>

                <div className="equipment-grid">
                    {equipment.map((item, index) => (
                        <div
                            className="equipment-card card"
                            key={item.id}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="equipment-image">
                                <img
                                    src={`https://images.unsplash.com/photo-162909961365${index + 4}-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                                    alt={item.name}
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
                                    }}
                                />
                                <div className="equipment-category">{item.category}</div>
                            </div>
                            <div className="equipment-content">
                                <h3>{item.name}</h3>
                                <p>{item.shortDescription}</p>
                                <ul className="equipment-features">
                                    {item.advantages.slice(0, 3).map((advantage, i) => (
                                        <li key={i}>
                                            <Check size={16} />
                                            <span>{advantage}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="suitable-for">
                                    <span className="label">Suitable for:</span>
                                    <div className="tags">
                                        {item.suitableFor.slice(0, 3).map((tag, i) => (
                                            <span key={i} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="technology-cta">
                    <Link to="/technology" className="btn btn-secondary btn-lg">
                        Explore Our Technology
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TechnologySection;
