import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="hero-subtitle">Cuidado Automóvel Premium</h2>
                    <h1 className="hero-title">
                        Movidos pela <span className="highlight">Perfeição</span>
                    </h1>
                    <p className="hero-description">
                        Experimente o auge da estética automóvel e serviços de performance.
                        Tratamos o seu veículo com a precisão que ele merece.
                    </p>
                    <motion.button
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explorar Serviços <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                    </motion.button>
                </motion.div>
            </div>

            {/* Abstract decorative elements */}
            <div className="hero-shape shape-1"></div>
            <div className="hero-shape shape-2"></div>
        </section>
    );
};

export default Hero;
