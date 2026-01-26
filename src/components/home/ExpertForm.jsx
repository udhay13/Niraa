import { useState } from 'react';
import { Phone, User, CheckCircle, Stethoscope } from 'lucide-react';
import './ExpertForm.css';

const ExpertForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        gender: '',
        treatment: '',
        consent: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.consent) {
            alert('Please provide consent to proceed.');
            return;
        }

        setIsSubmitting(true);

        // Construct WhatsApp message
        const message = encodeURIComponent(
            `Hello! I would like to book an appointment at Niraa Aesthetics.\n\n` +
            `Name: ${formData.name}\n` +
            `Mobile: ${formData.mobile}\n` +
            `Gender: ${formData.gender}\n` +
            `Treatment: ${formData.treatment}`
        );

        // Short delay for UX
        setTimeout(() => {
            window.open(`https://wa.me/917200854999?text=${message}`, '_blank');
            setIsSubmitting(false);
        }, 500);
    };

    return (
        <section className="expert-form-section">
            <div className="container">
                <div className="expert-form-wrapper">
                    <div className="form-content">
                        <span className="form-badge">Free Consultation</span>
                        <h2>Talk to Our Experts</h2>
                        <p>
                            Get personalized advice from our certified dermatologists.
                            Fill in your details and we'll connect with you shortly.
                        </p>

                        <div className="expert-features">
                            <div className="expert-feature">
                                <CheckCircle size={20} />
                                <span>Certified Dermatologists</span>
                            </div>
                            <div className="expert-feature">
                                <CheckCircle size={20} />
                                <span>Personalized Treatment Plans</span>
                            </div>
                            <div className="expert-feature">
                                <CheckCircle size={20} />
                                <span>No Obligation Consultation</span>
                            </div>
                        </div>
                    </div>

                    <form className="expert-form card card-glass" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div className="input-wrapper">
                                <User className="input-icon" size={20} />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-wrapper">
                                <Phone className="input-icon" size={20} />
                                <input
                                    type="tel"
                                    name="mobile"
                                    placeholder="Mobile Number"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className="form-input"
                                    pattern="[0-9]{10}"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-wrapper">
                                <User className="input-icon" size={20} />
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className="form-input form-select"
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-wrapper">
                                <Stethoscope className="input-icon" size={20} />
                                <input
                                    type="text"
                                    name="treatment"
                                    placeholder="What kind of treatment do you want?"
                                    value={formData.treatment}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                />
                            </div>
                        </div>

                        <label className="form-checkbox">
                            <input
                                type="checkbox"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleChange}
                            />
                            <span>
                                I consent to receive communications from Niraa Aesthetics regarding
                                treatments and offers. By submitting, I agree to the Privacy Policy.
                            </span>
                        </label>

                        <button
                            type="submit"
                            className={`btn btn-primary btn-lg form-submit ${isSubmitting ? 'loading' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Connecting...' : 'Book Free Consultation'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ExpertForm;
