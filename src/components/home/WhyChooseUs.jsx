import {
    UserCheck,
    Cpu,
    FileHeart,
    Shield,
    Award,
    Clock
} from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const features = [
        {
            icon: UserCheck,
            title: 'Dermatologist-Led',
            description: 'All treatments supervised by certified dermatologists with years of experience.'
        },
        {
            icon: Cpu,
            title: 'Advanced Technology',
            description: 'State-of-the-art FDA-approved equipment for safe and effective treatments.'
        },
        {
            icon: FileHeart,
            title: 'Personalized Care',
            description: 'Customized treatment plans designed specifically for your unique needs.'
        },
        {
            icon: Shield,
            title: 'Safe Procedures',
            description: 'Non-invasive and minimally invasive options with minimal downtime.'
        },
        {
            icon: Award,
            title: 'Proven Results',
            description: 'Thousands of satisfied clients with visible, lasting transformations.'
        },
        {
            icon: Clock,
            title: 'Convenient Care',
            description: 'Flexible appointments and quick procedures that fit your schedule.'
        }
    ];

    return (
        <section className="why-choose-section section">
            <div className="container">
                <div className="why-choose-wrapper">
                    <div className="why-choose-content">
                        <span className="section-badge">Why Niraa?</span>
                        <h2>Why Choose <span className="accent">Niraa Aesthetics</span></h2>
                        <p className="why-choose-desc">
                            At Niraa Aesthetics, we combine clinical expertise with cutting-edge
                            technology to deliver transformative results you can trust.
                        </p>
                    </div>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div
                                className="feature-card"
                                key={index}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="feature-icon">
                                    <feature.icon size={28} />
                                </div>
                                <div className="feature-text">
                                    <h4>{feature.title}</h4>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
