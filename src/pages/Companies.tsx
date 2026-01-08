import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle, Users, Building2, Briefcase, FileText } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const Companies = () => {
    return (
        <div className="service-page">
            {/* Hero Section */}
            <section className="service-hero" style={{
                background: 'linear-gradient(rgba(0, 34, 69, 0.9), rgba(0, 34, 69, 0.8)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop")',
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
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: 'white' }}>Soluções Corporativas</h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
                            Eleve a sua frota empresarial com a nossa consultoria especializada e gestão dedicada.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="service-content" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: 'var(--primary)' }}>
                                Porquê a Carmetrix?
                            </h2>
                            <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>
                                Entendemos que a frota automóvel é uma ferramenta essencial para o seu negócio. Oferecemos um serviço completo de gestão e aquisição de viaturas focado na otimização de custos e eficiência operacional.
                            </p>
                            <p style={{ marginBottom: '40px', color: 'var(--text-secondary)' }}>
                                Desde startups a grandes empresas, adaptamos as nossas soluções à dimensão e necessidades da sua organização.
                            </p>

                            <div style={{ display: 'grid', gap: '30px' }}>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ background: 'white', padding: '15px', borderRadius: '12px', height: 'fit-content', boxShadow: 'var(--shadow)' }}>
                                        <TrendingUp size={28} color="var(--primary)" />
                                    </div>
                                    <div>
                                        <h3 style={{ marginBottom: '8px', fontSize: '1.2rem' }}>Otimização Fiscal</h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Análise detalhada para maximizar os benefícios fiscais e reduzir o TCO (Total Cost of Ownership).</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ background: 'white', padding: '15px', borderRadius: '12px', height: 'fit-content', boxShadow: 'var(--shadow)' }}>
                                        <CheckCircle size={28} color="var(--primary)" />
                                    </div>
                                    <div>
                                        <h3 style={{ marginBottom: '8px', fontSize: '1.2rem' }}>Processo Chave-na-mão</h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Tratamos de toda a burocracia, legalização, transporte e preparação das viaturas.</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ background: 'white', padding: '15px', borderRadius: '12px', height: 'fit-content', boxShadow: 'var(--shadow)' }}>
                                        <Users size={28} color="var(--primary)" />
                                    </div>
                                    <div>
                                        <h3 style={{ marginBottom: '8px', fontSize: '1.2rem' }}>Gestor Dedicado</h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Um ponto de contacto único para resolver todas as questões da sua frota.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div style={{ background: 'var(--primary)', padding: '30px', borderRadius: '16px', color: 'white', gridColumn: '1 / -1', textAlign: 'center' }}>
                                <Building2 size={48} style={{ marginBottom: '15px', opacity: 0.8 }} />
                                <h3 style={{ color: 'white', marginBottom: '10px' }}>Frota Executiva</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>Viaturas premium para administração e gestão de topo.</p>
                            </div>

                            <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: 'var(--shadow)', textAlign: 'center' }}>
                                <Briefcase size={32} color="var(--accent)" style={{ marginBottom: '15px' }} />
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Comerciais</h3>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Soluções robustas e eficientes para equipas de vendas.</p>
                            </div>

                            <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: 'var(--shadow)', textAlign: 'center' }}>
                                <FileText size={32} color="var(--accent)" style={{ marginBottom: '15px' }} />
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Consultoria</h3>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Estudos de mercado e prospeção de frota.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    );
};

export default Companies;
