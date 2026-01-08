import { motion } from 'framer-motion';
import { Sparkles, Droplets, Sun, CheckCircle } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const EcoWashDetail = () => {
    return (
        <div className="service-page">
            {/* Hero Section */}
            <section className="service-hero" style={{
                background: 'linear-gradient(rgba(0, 34, 69, 0.9), rgba(0, 34, 69, 0.8)), url("https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
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
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: 'var(--primary)' }}>
                                Detalhe de Excelência
                            </h2>
                            <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>
                                O nosso serviço de Eco Wash & Detail combina técnicas avançadas, produtos premium e uma preocupação genuína com o meio ambiente. Não lavamos apenas o seu carro; restauramos o seu brilho original.
                            </p>
                            <p style={{ marginBottom: '30px', color: 'var(--text-secondary)' }}>
                                Desde a limpeza profunda de estofos até à correção de pintura e proteção cerâmica, cada detalhe é tratado com precisão cirúrgica.
                            </p>

                            <div className="benefits-grid" style={{ display: 'grid', gap: '15px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <CheckCircle size={20} color="var(--accent)" />
                                    <span style={{ fontWeight: 500 }}>Lavagem manual ecológica sem água</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <CheckCircle size={20} color="var(--accent)" />
                                    <span style={{ fontWeight: 500 }}>Higienização profunda de interiores</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <CheckCircle size={20} color="var(--accent)" />
                                    <span style={{ fontWeight: 500 }}>Polimento e correção de pintura</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <CheckCircle size={20} color="var(--accent)" />
                                    <span style={{ fontWeight: 500 }}>Revestimento cerâmico (Ceramic Coating)</span>
                                </div>
                            </div>
                        </div>

                        <div style={{
                            background: 'white',
                            padding: '40px',
                            borderRadius: '16px',
                            boxShadow: 'var(--shadow)',
                            display: 'grid',
                            gap: '30px'
                        }}>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ background: 'var(--background)', padding: '15px', borderRadius: '12px', height: 'fit-content' }}>
                                    <Droplets size={32} color="var(--primary)" />
                                </div>
                                <div>
                                    <h3 style={{ marginBottom: '10px' }}>Eco-Friendly</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Utilizamos produtos biodegradáveis e técnicas que poupam até 150L de água por lavagem.</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ background: 'var(--background)', padding: '15px', borderRadius: '12px', height: 'fit-content' }}>
                                    <Sparkles size={32} color="var(--primary)" />
                                </div>
                                <div>
                                    <h3 style={{ marginBottom: '10px' }}>Correção de Pintura</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Remoção de riscos, "swirls" e hologramas para um acabamento espelhado perfeito.</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ background: 'var(--background)', padding: '15px', borderRadius: '12px', height: 'fit-content' }}>
                                    <Sun size={32} color="var(--primary)" />
                                </div>
                                <div>
                                    <h3 style={{ marginBottom: '10px' }}>Proteção Duradoura</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Proteja o seu investimento contra raios UV, chuva ácida e detritos com os nossos revestimentos.</p>
                                </div>
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
