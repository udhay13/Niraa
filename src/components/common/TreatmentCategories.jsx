import { Link } from 'react-router-dom';
import { Sparkles, Zap, Heart, Scissors } from 'lucide-react';
import './TreatmentCategories.css';

const categories = [
    {
        id: 'skin-rejuvenation',
        title: 'Skin Rejuvenation',
        description: 'Restore youthful radiance with advanced skin treatments',
        icon: Sparkles,
        link: '/skin-treatments',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
        id: 'laser-treatments',
        title: 'Laser Treatments',
        description: 'Precision laser technology for flawless skin',
        icon: Zap,
        link: '/skin-treatments',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
        id: 'cosmetic-procedures',
        title: 'Cosmetic Procedures',
        description: 'Non-invasive treatments for natural beauty',
        icon: Heart,
        link: '/skin-treatments',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
        id: 'hair-restoration',
        title: 'Hair Restoration',
        description: 'Advanced solutions for healthy, thick hair',
        icon: Scissors,
        link: '/hair-treatments',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
];

const TreatmentCategories = () => {
    return (
        <section className="treatment-categories-section">
            <div className="container">
                <div className="categories-header">
                    <span className="section-badge">Explore</span>
                    <h2>Other Treatment Categories</h2>
                    <p>Discover our complete range of aesthetic treatments</p>
                </div>
                <div className="categories-grid">
                    {categories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <Link
                                to={category.link}
                                className="category-card"
                                key={category.id}
                                style={{ '--delay': `${index * 0.1}s`, '--gradient': category.gradient }}
                            >
                                <div className="category-icon">
                                    <IconComponent size={32} />
                                </div>
                                <h3>{category.title}</h3>
                                <p>{category.description}</p>
                                <span className="category-arrow">→</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TreatmentCategories;
