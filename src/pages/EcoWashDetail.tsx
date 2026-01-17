import { motion } from 'framer-motion';
import { Sparkles, Droplets, Sun, CheckCircle } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import ecoWashHero from '../assets/eco-wash-hero.png';
import ecoWashSide from '../assets/eco-wash-detail-new.png';
import cardEco from '../assets/card-eco-friendly.png';
import cardPaint from '../assets/card-paint.png';
import cardProtection from '../assets/card-protection.png';
import cardDetailing from '../assets/card-detailing.png';

const EcoWashDetail = () => {
    return (
        <div className="service-page">
            {/* Hero Section */}
            <section className="service-hero" style={{
                background: `linear-gradient(rgba(0, 34, 69, 0.9), rgba(0, 34, 69, 0.8)), url(${ecoWashHero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                padding: '160px 0 100px',
                color: 'white',
                textAlign: 'center'
            }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: 'white' }}>Eco Wash & Detail</h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
                            Eleve a estética do seu automóvel ao nível de exposição.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="service-content" style={{ padding: '80px 0' }}>
                <div className="container">
                    {/* Top Section: Text + Side Image */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
                        <div>
                            <h2 style={{ fontSize: '2.2rem', marginBottom: '30px', color: 'var(--primary)', whiteSpace: 'nowrap' }}>
                                Detalhe de Excelência
                            </h2>
                            <p style={{ marginBottom: '30px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                O nosso serviço de Eco Wash & Detail combina técnicas avançadas e produtos premium. Restauramos o brilho original do seu automóvel, tratando cada detalhe com precisão e preservando o seu investimento.
                            </p>
                        </div>
                        <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow)', height: '350px' }}>
                            <img src={ecoWashSide} alt="Detalhe Automóvel Profissional" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>

                    {/* Bottom Section: 4 Cards Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '20px'
                    }}>
                        {/* Card 1: Eco-Friendly */}
                        <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ height: '160px', overflow: 'hidden' }}>
                                <img src={cardEco} alt="Eco Friendly" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                                    <Droplets size={20} color="var(--primary)" />
                                    <h3 style={{ fontSize: '1.1rem' }}>Eco-Friendly</h3>
                                </div>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '15px', flex: 1 }}>
                                    Produtos biodegradáveis que poupam até 150L de água por lavagem.
                                </p>
                                <motion.button
                                    className="btn btn-primary"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        width: '100%',
                                        fontSize: '0.9rem'
                                    }}>
                                    Ver Método
                                </motion.button>
                            </div>
                        </div>

                        {/* Card 2: Paint Correction */}
                        <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ height: '160px', overflow: 'hidden' }}>
                                <img src={cardPaint} alt="Correção de Pintura" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                                    <Sparkles size={20} color="var(--primary)" />
                                    <h3 style={{ fontSize: '1.1rem' }}>Correção de Pintura</h3>
                                </div>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '15px', flex: 1 }}>
                                    Remoção de riscos e hologramas para um acabamento espelhado.
                                </p>
                                <motion.button
                                    className="btn btn-primary"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        width: '100%',
                                        fontSize: '0.9rem'
                                    }}>
                                    Restaurar Brilho
                                </motion.button>
                            </div>
                        </div>

                        {/* Card 3: Protection */}
                        <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ height: '160px', overflow: 'hidden' }}>
                                <img src={cardProtection} alt="Proteção Duradoura" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                                    <Sun size={20} color="var(--primary)" />
                                    <h3 style={{ fontSize: '1.1rem' }}>Proteção Cerâmica</h3>
                                </div>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '15px', flex: 1 }}>
                                    Proteção avançada contra raios UV, chuva ácida e detritos.
                                </p>
                                <motion.button
                                    className="btn btn-primary"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        width: '100%',
                                        fontSize: '0.9rem'
                                    }}>
                                    Proteger Carro
                                </motion.button>
                            </div>
                        </div>

                        {/* Card 4: Detailing */}
                        <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ height: '160px', overflow: 'hidden' }}>
                                <img src={cardDetailing} alt="Detailing Interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                                    <CheckCircle size={20} color="var(--primary)" />
                                    <h3 style={{ fontSize: '1.1rem' }}>Detailing Interior</h3>
                                </div>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '15px', flex: 1 }}>
                                    Limpeza profunda e higienização de todos os componentes.
                                </p>
                                <motion.button
                                    className="btn btn-primary"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        width: '100%',
                                        fontSize: '0.9rem'
                                    }}>
                                    Agendar Limpeza
                                </motion.button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    );
};

export default EcoWashDetail;
