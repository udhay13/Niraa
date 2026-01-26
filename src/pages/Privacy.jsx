import { Lock, Eye, Database, Share2, Mail } from 'lucide-react';
import './Legal.css';

const Privacy = () => {
    return (
        <div className="legal-page">
            <div className="legal-hero">
                <div className="container">
                    <h1>Privacy Policy</h1>
                    <p>We value your trust and are committed to protecting your personal information.</p>
                </div>
            </div>

            <div className="legal-content">
                <div className="legal-card">
                    <span className="last-updated">Last Updated: January 25, 2026</span>

                    <div className="content-block">
                        <h2><Lock size={28} /> Information We Collect</h2>
                        <p>
                            We collect information necessary to provide you with safe and effective aesthetic treatments. This may include:
                        </p>
                        <ul>
                            <li>Personal identification (Name, email, phone number)</li>
                            <li>Medical history and skin/hair concerns relevant to treatment</li>
                            <li>Appointment history and treatment records</li>
                            <li>Payment and billing information</li>
                        </ul>
                    </div>

                    <div className="content-block">
                        <h2><Eye size={28} /> How We Use Your Information</h2>
                        <p>
                            Your data is used primarily to:
                        </p>
                        <ul>
                            <li>Create personalized treatment plans suited to your needs.</li>
                            <li>Schedule and confirm appointments.</li>
                            <li>Send important updates regarding your treatment or post-care instructions.</li>
                            <li>Improve our clinic services and website experience.</li>
                        </ul>
                    </div>

                    <div className="content-block">
                        <h2><Database size={28} /> Data Security</h2>
                        <p>
                            We implement industry-standard security measures to protect your personal and medical information.
                            Your records are stored securely in compliance with applicable healthcare data protection regulations.
                            Access is strictly limited to authorized medical and administrative staff.
                        </p>
                    </div>

                    <div className="content-block">
                        <h2><Share2 size={28} /> Information Sharing</h2>
                        <p>
                            We do not sell, trade, or rent your personal identification information to others. We may share
                            generic aggregated demographic information not linked to any personal identification information
                            regarding visitors and users with our business partners and trusted affiliates.
                        </p>
                    </div>

                    <div className="content-block">
                        <h2><Mail size={28} /> Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, the practices of this site, or your dealings
                            with this site, please contact us at hello@niraaesthetics.com.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
