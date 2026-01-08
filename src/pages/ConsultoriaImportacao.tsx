import { motion } from 'framer-motion';
import { Globe, Truck, FileCheck, CheckCircle } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const ConsultoriaImportacao = () => {
    const benefits = [
        "Pesquisa personalizada em toda a Europa",
        "Verificação do histórico e quilometragem",
        "Negociação de preço com o vendedor",
        "Transporte seguro até à sua porta",
        "Tratamento de toda a legalização e burocracia",
        "Garantia e financiamento disponíveis"
    ];

    return (
        <div className="service-page">
            {/* Hero Section */}
            <section className="service-hero" style={{
                background: 'linear-gradient(rgba(0, 34, 69, 0.9), rgba(0, 34, 69, 0.8)), url("https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop")',
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
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: 'white' }}>Consultoria e Importação</h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
                            Trazemos o carro dos seus sonhos até si, sem complicações e com total segurança.
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
                                Importação Premium
                            </h2>
                            <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>
                                O processo de importar um veículo pode parecer complexo e arriscado. Na Carmetrix, tornamos tudo simples.
                                A nossa equipa especializada trata de cada etapa, desde a procura do veículo ideal até à entrega chave na mão.
                            </p>
                            <p style={{ marginBottom: '30px', color: 'var(--text-secondary)' }}>
                                Trabalhamos apenas com parceiros verificados e garantimos que cada viatura cumpre os nossos rigorosos
                                padrões de qualidade antes de chegar até si.
                            </p>

                            <div className="benefits-grid" style={{ display: 'grid', gap: '15px' }}>
                                {benefits.map((benefit, index) => (
                                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <CheckCircle size={20} color="var(--accent)" />
                                        <span style={{ fontWeight: 500 }}>{benefit}</span>
                                    </div>
                                ))}
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
                                    <Globe size={32} color="var(--primary)" />
                                </div>
                                <div>
                                    <h3 style={{ marginBottom: '10px' }}>Sem Fronteiras</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Acesso ao vasto mercado europeu para encontrar a configuração exata que procura.</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ background: 'var(--background)', padding: '15px', borderRadius: '12px', height: 'fit-content' }}>
                                    <FileCheck size={32} color="var(--primary)" />
                                </div>
                                <div>
                                    <h3 style={{ marginBottom: '10px' }}>Legalização Total</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Tratamos da inspeção, registo, ISV e toda a documentação necessária.</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ background: 'var(--background)', padding: '15px', borderRadius: '12px', height: 'fit-content' }}>
                                    <Truck size={32} color="var(--primary)" />
                                </div>
                                <div>
                                    <h3 style={{ marginBottom: '10px' }}>Logística Segura</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Transporte segurado e monitorizado desde a origem até à sua garagem.</p>
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

export default ConsultoriaImportacao;
