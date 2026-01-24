import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from '../common/WhatsAppFloat';

const Layout = () => {
    return (
        <>
            <Header />
            <main style={{ flex: 1 }}>
                <Outlet />
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    );
};

export default Layout;
