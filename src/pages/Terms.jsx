import { FileText, Shield, UserCheck, CreditCard, AlertCircle } from 'lucide-react';
import './Legal.css';

const Terms = () => {
    return (
        <div className="legal-page">
            <div className="legal-hero">
                <div className="container">
                    <h1>Terms of Service</h1>
                    <p>Please read these terms carefully before using our services.</p>
                </div>
            </div>

            <div className="legal-content">
                <div className="legal-card">
                    <span className="last-updated">Last Updated: January 25, 2026</span>

                    <div className="content-block">
                        <h2><FileText size={28} /> Acceptance of Terms</h2>
                        <p>
                            By accessing and using the Niraa Aesthetics website and services, you acknowledge that you have read,
                            understood, and agree to be bound by these Terms of Service. If you do not agree with any part of
                            these terms, you may not use our services.
                        </p>
                    </div>

                    <div className="content-block">
                        <h2><UserCheck size={28} /> Medical Disclaimer</h2>
                        <p>
                            The content provided on this website is for informational purposes only and is not intended as a substitute
                            for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or
                            qualified health provider with any questions you may have regarding a medical condition.
                        </p>
                    </div>

                    <div className="content-block">
                        <h2><Shield size={28} /> Privacy & Confidentiality</h2>
                        <p>
                            We are committed to protecting your privacy. Any personal information submitted via this website will be
                            handled in accordance with our Privacy Policy. We maintain strict confidentiality regarding all client
                            information and treatment records.
                        </p>
                    </div>

                    <div className="content-block">
                        <h2><CreditCard size={28} /> Appointments & Cancellations</h2>
                        <p>
                            To ensure efficient service for all clients:
                        </p>
                        <ul>
                            <li>Please arrive 10 minutes prior to your scheduled appointment time.</li>
                            <li>Cancellations must be made at least 24 hours in advance.</li>
                            <li>Late arrivals may result in reduced treatment time.</li>
                            <li>A deposit may be required to secure certain high-value bookings.</li>
                        </ul>
                    </div>

                    <div className="content-block">
                        <h2><AlertCircle size={28} /> Treatment Outcomes</h2>
                        <p>
                            While we strive for excellence in all our procedures, individual results may vary. We do not guarantee
                            specific outcomes, as aesthetic treatments depend on various biological factors. A comprehensive
                            consultation is provided before any treatment to discuss realistic expectations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
