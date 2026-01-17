import { motion } from 'framer-motion';
import { Key, Clock, Calendar, CheckCircle } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const ConciergeAutomovel = () => {
    return (
        <div className="service-page">
            {/* Hero Section */}
            <section className="service-hero" style={{
                background: 'linear-gradient(rgba(0, 34, 69, 0.9), rgba(0, 34, 69, 0.8)), url("https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop")',
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
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: 'white' }}>Concierge Automóvel</h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
                            Recupere o seu tempo. Nós cuidamos do seu automóvel por si.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            {/* Content Section */}
            <section className="service-content" style={{ padding: '80px 0' }}>
                <div className="container">
                    {/* Top Section: Text + Side Image */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: 'var(--primary)' }}>
                                Gestão 360º
                            </h2>
                            <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>
                                O nosso serviço de Concierge Automóvel foi desenhado para quem valoriza o seu tempo e exige o melhor para os seus veículos. Assumimos a gestão completa das necessidades do seu automóvel.
                            </p>
                            <p style={{ marginBottom: '30px', color: 'var(--text-secondary)' }}>
                                Desde a manutenção preventiva até à inspeção periódica obrigatória, tratamos de tudo com o máximo profissionalismo e discrição.
                            </p>

                            <ul style={{ listStyle: 'none', display: 'grid', gap: '15px' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <CheckCircle size={20} color="var(--accent)" />
                                    <span>Serviço Pick-up & Delivery (Porto e arredores)</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <CheckCircle size={20} color="var(--accent)" />
                                    <span>Gestão de manutenção e revisões</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <CheckCircle size={20} color="var(--accent)" />
                                    <span>Levar o carro à Inspeção (IPO)</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <CheckCircle size={20} color="var(--accent)" />
                                    <span>Gestão de frota para empresas</span>
                                </li>
                            </ul>
                        </div>

                        <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow)', height: '400px' }}>
                            <img
                                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
                                alt="Concierge Profissional"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                        {/* Card 1: Chave na Mão */}
                        <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop"
                                    alt="Chave na Mão"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ padding: '30px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                                    <div style={{ background: 'var(--background)', padding: '10px', borderRadius: '50%' }}>
                                        <Key size={24} color="var(--primary)" />
                                    </div>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Chave na Mão</h4>
                                </div>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                    Recolhemos o seu veículo em casa ou no escritório, tratamos do serviço necessário e devolvemos onde preferir.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Gestão de Prazos */}
                        <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop"
                                    alt="Gestão de Prazos"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ padding: '30px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                                    <div style={{ background: 'var(--background)', padding: '10px', borderRadius: '50%' }}>
                                        <Calendar size={24} color="var(--primary)" />
                                    </div>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Gestão de Prazos</h4>
                                </div>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                    Nunca mais se esqueça de um seguro, inspeção ou revisão. Nós monitorizamos todos os prazos por si.
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Disponibilidade Total */}
                        <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
                                    alt="Disponibilidade Total"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ padding: '30px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                                    <div style={{ background: 'var(--background)', padding: '10px', borderRadius: '50%' }}>
                                        <Clock size={24} color="var(--primary)" />
                                    </div>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Disponibilidade Total</h4>
                                </div>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                    Um gestor dedicado sempre disponível para resolver qualquer questão relacionada com o seu automóvel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    );
};

export default ConciergeAutomovel;
