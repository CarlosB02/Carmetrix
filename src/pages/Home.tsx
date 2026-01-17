import Hero from '../components/Hero';
import Services from '../components/Services';
import CarBrands from '../components/CarBrands';
import NewsSection from '../components/NewsSection';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Services />
            <CarBrands />
            <NewsSection isCarousel={true} />
            <FAQ />
            <ContactSection />
        </div>
    );
};

export default Home;
