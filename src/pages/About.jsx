import { Link } from 'react-router-dom';
import { Award, Users, Heart, Target } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero */}
            <section className="page-hero about-hero">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>About Us</span>
                    </div>
                    <h1>About Niraa Aesthetics</h1>
                    <p>
                        Where science meets beauty. We're dedicated to helping you achieve
                        your aesthetic goals with expert care and cutting-edge technology.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="story-section section">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-content">
                            <h2>Our Story</h2>
                            <p>
                                Niraa Aesthetics was founded with a simple mission: to provide world-class
                                dermatological care in a warm, welcoming environment. Our team of certified
                                dermatologists and aesthetic specialists bring together years of experience
                                and a passion for helping people look and feel their best.
                            </p>
                            <p>
                                We believe that everyone deserves access to premium skincare and hair care
                                treatments. That's why we've invested in the latest FDA-approved technology
                                and created personalized treatment plans that deliver real, lasting results.
                            </p>
                            <p>
                                From acne treatment to laser hair reduction, from anti-aging solutions to
                                hair restoration, we offer a comprehensive range of services designed to
                                address your unique concerns with precision and care.
                            </p>
                        </div>
                        <div className="story-image">
                            <img
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                                alt="Niraa Aesthetics Clinic - Modern Dermatology"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section section">
                <div className="container">
                    <h2 className="section-title">Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-image">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80"
                                    alt="Excellence in Healthcare"
                                />
                            </div>
                            <div className="value-icon">
                                <Award size={32} />
                            </div>
                            <h3>Excellence</h3>
                            <p>We strive for excellence in every treatment, using only the best technology and techniques.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-image">
                                <img
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80"
                                    alt="Compassionate Care"
                                />
                            </div>
                            <div className="value-icon">
                                <Heart size={32} />
                            </div>
                            <h3>Compassion</h3>
                            <p>We treat every patient with empathy, understanding their unique concerns and goals.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-image">
                                <img
                                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80"
                                    alt="Trusted Healthcare"
                                />
                            </div>
                            <div className="value-icon">
                                <Users size={32} />
                            </div>
                            <h3>Trust</h3>
                            <p>We build lasting relationships based on transparency, honesty, and proven results.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-image">
                                <img
                                    src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&q=80"
                                    alt="Medical Innovation"
                                />
                            </div>
                            <div className="value-icon">
                                <Target size={32} />
                            </div>
                            <h3>Innovation</h3>
                            <p>We continuously invest in the latest advancements in dermatological science.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section section">
                <div className="container">
                    <h2 className="section-title">Meet Our Expert</h2>
                    <p className="section-subtitle">
                        Our lead dermatologist brings expertise and passion to help you achieve healthy, beautiful skin.
                    </p>
                    <div className="team-featured">
                        <div className="team-card-featured">
                            <div className="team-image-featured">
                                <img
                                    src="https://productimages.withfloats.com/staffimages/actual/68559670b518f3eb4b07f0deWhatsAppImage2025-06-07at12.02.25"
                                    alt="Dr. Paavai Senthil"
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80';
                                    }}
                                />
                            </div>
                            <div className="team-info-featured">
                                <h3>Dr. Paavai Senthil</h3>
                                <span className="team-title">Dermatologist & Aesthetic Physician</span>
                                <div className="team-qualifications">
                                    <span className="qualification-badge">MBBS</span>
                                    <span className="qualification-badge">MD (DVL)</span>
                                    <span className="qualification-badge">FRGUHS</span>
                                </div>
                                <p className="team-bio">
                                    A leading Dermatologist and Aesthetic Physician with 6 years of experience
                                    in treating skin, hair, and cosmetic concerns. Her areas of expertise include
                                    medical dermatology, aesthetic procedures, and advanced skin rejuvenation therapies.
                                    With a focus on safe, evidence-based treatments, she helps patients achieve
                                    healthy skin and enhanced confidence.
                                </p>
                                <div className="team-expertise">
                                    <h4>Areas of Expertise</h4>
                                    <div className="expertise-tags">
                                        <span>Medical Dermatology</span>
                                        <span>Aesthetic Procedures</span>
                                        <span>Skin Rejuvenation</span>
                                        <span>Cosmetic Treatments</span>
                                        <span>Hair Treatments</span>
                                    </div>
                                </div>
                                <div className="team-memberships">
                                    <h4>Professional Memberships</h4>
                                    <ul>
                                        <li>Indian Association of Dermatologists, Venereologists and Leprologists (IADVL)</li>
                                        <li>Association of Cutaneous Surgeons of India (ACSI)</li>
                                        <li>Indian Society of Teledermatology (INSTED)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-number">10K+</span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Treatments</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">4.9</span>
                            <span className="stat-label">Average Rating</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
