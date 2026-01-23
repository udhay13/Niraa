import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = encodeURIComponent(
            `Hello Niraa Aesthetics!\n\n` +
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone}\n` +
            `Subject: ${formData.subject}\n\n` +
            `Message:\n${formData.message}`
        );

        window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    };

    return (
        <div className="contact-page">
            {/* Hero */}
            <section className="page-hero contact-hero">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>Contact Us</span>
                    </div>
                    <h1>Get In Touch</h1>
                    <p>
                        Have questions or ready to book? We're here to help you on your
                        journey to beautiful skin and hair.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <h2>Contact Information</h2>
                            <p>Reach out to us through any of the following channels. We're here to assist you.</p>

                            <div className="info-cards">
                                <div className="info-card">
                                    <MapPin size={24} />
                                    <div>
                                        <h4>Visit Us</h4>
                                        <p>123 Premium Plaza, HSR Layout<br />Bangalore - 560102</p>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <Phone size={24} />
                                    <div>
                                        <h4>Call Us</h4>
                                        <p><a href="tel:+919876543210">+91 98765 43210</a></p>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <Mail size={24} />
                                    <div>
                                        <h4>Email Us</h4>
                                        <p><a href="mailto:hello@niraaesthetics.com">hello@niraaesthetics.com</a></p>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <Clock size={24} />
                                    <div>
                                        <h4>Working Hours</h4>
                                        <p>Mon - Sat: 10:00 AM - 8:00 PM<br />Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <form className="contact-form card" onSubmit={handleSubmit}>
                                <h3>Send Us a Message</h3>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Your Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Subject</label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="form-input form-select"
                                        >
                                            <option value="">Select a topic</option>
                                            <option value="Appointment">Book an Appointment</option>
                                            <option value="Skin Treatment">Skin Treatment Inquiry</option>
                                            <option value="Hair Treatment">Hair Treatment Inquiry</option>
                                            <option value="Pricing">Pricing Information</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Your Message *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="form-input"
                                        rows="5"
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg">
                                    <Send size={18} />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <iframe
                    title="Niraa Aesthetics Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.9472538986356!2d78.1373442750545!3d11.627109088578186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babef687b1917eb%3A0x3a1e06f3365519e4!2sPaavai%20Hospital!5e0!3m2!1sen!2sin!4v1769197511474!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                    href="https://maps.app.goo.gl/yqrasX9yCTH5N2bK7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-external-link"
                >
                    Open in Google Maps →
                </a>
            </section>
        </div>
    );
};

export default Contact;
