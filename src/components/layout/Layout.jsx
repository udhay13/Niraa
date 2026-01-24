import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from '../common/WhatsAppFloat';
import MobileNav from '../common/MobileNav';
import './Layout.css';

const Layout = () => {
    return (
        <>
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
            <WhatsAppFloat />
            <MobileNav />
        </>
    );
};

export default Layout;
