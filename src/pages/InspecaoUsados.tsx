import { motion } from 'framer-motion';
import { Search, ShieldCheck, FileText, CheckCircle } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import HotspotCar from '../components/HotspotCar';

const InspecaoUsados = () => {
    return (
        <div className="service-page">
            {/* Hero Section */}
            <section className="service-hero" style={{
                background: 'linear-gradient(rgba(0, 34, 69, 0.9), rgba(0, 34, 69, 0.8)), url("https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop")',
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
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: 'white' }}>Inspeção de Usados</h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
                            Elimine o risco na compra de usados. Saiba exatamente o que está a comprar.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Hotspot Section */}
            <HotspotCar />

            {/* Content Section */}
            <section className="service-content" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                        <div style={{ order: 2 }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: 'var(--primary)' }}>
                                Transparência Total
                            </h2>
                            <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>
                                Comprar um carro usado não tem de ser uma lotaria. O nosso serviço de inspeção profissional verifica mais de 200 pontos críticos do veículo, garantindo que não existem surpresas desagradáveis.
                            </p>
                            <p style={{ marginBottom: '30px', color: 'var(--text-secondary)' }}>
                                Seja uma compra particular ou num stand, a nossa equipa desloca-se ao local e realiza uma avaliação técnica imparcial e rigorosa.
                            </p>

                            <ul style={{ listStyle: 'none', display: 'grid', gap: '15px' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <CheckCircle size={20} color="var(--accent)" />
                                    <span>Verificação de sinistros anteriores</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <CheckCircle size={20} color="var(--accent)" />
                                    <span>Teste de estrada completo</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <CheckCircle size={20} color="var(--accent)" />
                                    <span>Análise da pintura e carroçaria</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <CheckCircle size={20} color="var(--accent)" />
                                    <span>Diagnóstico eletrónico avançado</span>
                                </li>
                            </ul>
                        </div>

                        <div style={{ order: 1, display: 'grid', gap: '20px' }}>
                            <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: 'var(--shadow)', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                                <div style={{ background: 'var(--background)', padding: '12px', borderRadius: '50%' }}>
                                    <Search size={24} color="var(--primary)" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Mecânica e Eletrónica</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Verificação detalhada do motor, transmissão, suspensão e sistemas eletrónicos.</p>
                                </div>
                            </div>

                            <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: 'var(--shadow)', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                                <div style={{ background: 'var(--background)', padding: '12px', borderRadius: '50%' }}>
                                    <ShieldCheck size={24} color="var(--primary)" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Validação de Histórico</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Confirmação de quilometragem real, registos de manutenção e histórico de acidentes.</p>
                                </div>
                            </div>

                            <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: 'var(--shadow)', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                                <div style={{ background: 'var(--background)', padding: '12px', borderRadius: '50%' }}>
                                    <FileText size={24} color="var(--primary)" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Relatório Detalhado</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Receba um dossier completo com fotos, vídeos e parecer técnico em 24 horas.</p>
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

export default InspecaoUsados;
