import Hero from '../components/home/Hero';
import ExpertForm from '../components/home/ExpertForm';
import TreatmentsOverview from '../components/home/TreatmentsOverview';
import TechnologySection from '../components/home/TechnologySection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import BlogHighlights from '../components/home/BlogHighlights';

const Home = () => {
    return (
        <>
            <Hero />
            <ExpertForm />
            <TreatmentsOverview />
            <TechnologySection />
            <WhyChooseUs />
            <TestimonialCarousel />
            <BlogHighlights />
        </>
    );
};

export default Home;
