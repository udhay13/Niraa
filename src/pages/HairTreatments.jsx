import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Repeat } from 'lucide-react';
import { hairTreatments } from '../data/treatments';
import './TreatmentsList.css';

const HairTreatments = () => {
    return (
        <div className="treatments-list-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>Hair Treatments</span>
                    </div>
                    <h1>Hair Treatments</h1>
                    <p>
                        Expert hair restoration and hair reduction treatments using advanced
                        technology for visible, lasting results.
                    </p>
                </div>
            </section>

            {/* Treatments Grid */}
            <section className="treatments-list section">
                <div className="container">
                    <div className="treatments-grid">
                        {hairTreatments.map((treatment, index) => (
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
                                        <span className="know-more">View Details <ArrowRight size={16} /></span>
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
                </div>
            </section>
        </div>
    );
};

export default HairTreatments;
