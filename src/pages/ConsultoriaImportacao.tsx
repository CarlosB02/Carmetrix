import { motion } from 'framer-motion';
import { CheckCircle, UserCheck, Search, Truck, FileText, Key } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import './ConsultoriaImportacao.css';

const ConsultoriaImportacao = () => {
    // Reduced benefits list - removed "Negociação de preço"
    const benefits = [
        "Pesquisa personalizada em toda a Europa",
        "Verificação do histórico e quilometragem",
        "Transporte seguro até à sua porta",
        "Tratamento de toda a legalização e burocracia",
        "Garantia e financiamento disponíveis"
    ];

    const cards = [
        {
            title: "Sem Fronteiras",
            text: "Acesso ao vasto mercado europeu para encontrar a configuração exata.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" // Map/Globe vibe
        },
        {
            title: "Legalização Total",
            text: "Tratamos do ISV, inspeção e toda a burocracia necessária.",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" // Documents/Signing
        },
        {
            title: "Logística Segura",
            text: "Transporte segurado e monitorizado desde a origem até si.",
            image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2070&auto=format&fit=crop" // Truck on road (verified ID)
        },
        {
            title: "Estado Impecável",
            text: "Verificação rigorosa para garantir a máxima segurança e qualidade.",
            image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070&auto=format&fit=crop" // Row of cars (verified ID)
        }
    ];

    const steps = [
        { icon: Search, label: "Pesquisa" },
        { icon: UserCheck, label: "Verificação" },
        { icon: Truck, label: "Transporte" },
        { icon: FileText, label: "Legalização" },
        { icon: Key, label: "Entrega" }
    ];

    return (
        <div className="service-page">
            {/* Hero Section */}
            <section className="consultoria-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: 'white' }}>Consultoria e Importação</h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
                            Importamos o seu carro de sonho de forma simples, segura e chave na mão.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="service-content" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px' }}>

                        {/* Intro Text & Benefits Text */}
                        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--primary)' }}>
                                Importação Premium
                            </h2>
                            <p style={{ marginBottom: '30px', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                                Simplificamos o processo complexo de importação. A nossa equipa trata de tudo, garantindo viaturas certificadas e entrega pronta a circular.
                            </p>
                        </div>

                        {/* Cards Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '30px',
                            marginBottom: '40px'
                        }}>
                            {cards.map((card, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    style={{
                                        background: 'white',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <div style={{ height: '200px', overflow: 'hidden' }}>
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div style={{ padding: '25px' }}>
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--primary)' }}>{card.title}</h3>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{card.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Reduced Benefits List (Horizontal or clean list) */}
                        <div style={{
                            background: 'var(--background)',
                            padding: '30px',
                            borderRadius: '12px',
                            maxWidth: '800px',
                            margin: '0 auto'
                        }}>
                            <div className="benefits-grid" style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                gap: '15px'
                            }}>
                                {benefits.map((benefit, index) => (
                                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <CheckCircle size={20} color="var(--accent)" style={{ flexShrink: 0 }} />
                                        <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Progress Bar Section */}
            <section style={{ padding: '80px 0', background: 'white', borderTop: '1px solid #eee' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '10px', color: 'var(--primary)' }}>Processo Transparente</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Acompanhe cada etapa do seu novo carro</p>
                    </div>

                    <div style={{ position: 'relative', marginTop: '40px' }}>
                        {/* Connecting Line */}
                        <div style={{
                            position: 'absolute',
                            top: '25px',
                            left: '10%',
                            right: '10%',
                            height: '2px',
                            background: '#e0e0e0',
                            zIndex: 1
                        }}>
                            <div style={{
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(90deg, var(--accent) 0%, var(--primary) 100%)',
                                opacity: 0.2
                            }}></div>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(5, 1fr)',
                            gap: '20px',
                            position: 'relative',
                            zIndex: 2
                        }}>
                            {steps.map((step, index) => (
                                <div key={index} style={{ textAlign: 'center' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: 'white',
                                        border: `2px solid var(--accent)`,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 15px',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                                    }}>
                                        <step.icon size={24} color="var(--accent)" />
                                    </div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--primary)' }}>{step.label}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{
                        marginTop: '50px',
                        textAlign: 'center',
                        padding: '20px',
                        background: 'rgba(5, 117, 230, 0.05)',
                        borderRadius: '12px',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        <p style={{ fontWeight: 500, color: 'var(--primary)' }}>
                            🚀 Acompanhamento total: Receba notificações em tempo real de cada passo via Email ou WhatsApp.
                        </p>
                    </div>

                </div>
            </section>

            <ContactSection />
        </div>
    );
};

export default ConsultoriaImportacao;
