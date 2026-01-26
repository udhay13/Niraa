import { MessageCircle } from 'lucide-react';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
    const handleClick = () => {
        const message = encodeURIComponent('Hello! I would like to book an appointment at Niraa Aesthetics.');
        window.open(`https://wa.me/917200854999?text=${message}`, '_blank');
    };

    return (
        <button
            className="whatsapp-float"
            onClick={handleClick}
            aria-label="Chat on WhatsApp"
        >
            <div className="whatsapp-pulse"></div>
            <MessageCircle size={22} />
            <span className="whatsapp-tooltip">Chat with us!</span>
        </button>
    );
};

export default WhatsAppFloat;
