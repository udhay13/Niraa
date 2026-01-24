import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import Home from './pages/Home';
import SkinTreatments from './pages/SkinTreatments';
import HairTreatments from './pages/HairTreatments';
import TreatmentDetail from './pages/TreatmentDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

// Styles
import './index.css';

function App() {
  return (
    <BlogProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Admin Routes (without header/footer) */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* Public Routes (with header/footer) */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="skin-treatments" element={<SkinTreatments />} />
            <Route path="hair-treatments" element={<HairTreatments />} />
            <Route path="treatments/:id" element={<TreatmentDetail />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<BlogList />} />
            <Route path="blogs/:slug" element={<BlogDetail />} />
          </Route>
        </Routes>
      </Router>
    </BlogProvider>
  );
}

export default App;
