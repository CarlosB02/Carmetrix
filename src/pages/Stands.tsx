import { motion } from 'framer-motion';
import { ShoppingCart, Tag, Search, ShieldCheck, DollarSign, Handshake, CheckCircle, Users } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const Stands = () => {
    return (
        <div className="service-page">
            {/* Hero Section */}
            <section className="service-hero" style={{
                background: 'linear-gradient(rgba(0, 34, 69, 0.95), rgba(0, 34, 69, 0.9)), url("https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '160px 0 60px',
                color: 'white',
                textAlign: 'center'
            }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: 'white' }}>Para Stands</h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
                            Soluções dedicadas para profissionais. Compre com segurança e venda com facilidade.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content - Split into Buy and Sell */}
            <section className="service-content" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>

                        {/* Comprar Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            style={{
                                background: 'white',
                                padding: '40px',
                                borderRadius: '20px',
                                boxShadow: 'var(--shadow)'
                            }}
                        >
                            <div style={{
                                background: 'var(--primary)',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '24px'
                            }}>
                                <ShoppingCart size={28} color="white" />
                            </div>

                            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary)' }}>Comprar</h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '30px', color: 'var(--text-secondary)' }}>
                                Oferecemos um serviço de importação premium, trabalhando exclusivamente por procura para garantir o veículo exato que o seu cliente deseja.
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                                    <Search size={24} color="var(--accent)" style={{ marginRight: '15px', marginTop: '2px', minWidth: '24px' }} />
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Trabalho por Procura</h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Encontramos exatamente o que precisa, sem stocks parados.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                                    <DollarSign size={24} color="var(--accent)" style={{ marginRight: '15px', marginTop: '2px', minWidth: '24px' }} />
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Sem Investimento Inicial</h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Não necessita de investir capital próprio. Processo transparente e seguro.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <ShieldCheck size={24} color="var(--accent)" style={{ marginRight: '15px', marginTop: '2px', minWidth: '24px' }} />
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Segurança Garantida</h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Todo o processo de importação é gerido por nós com total garantia.</p>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Vender Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            style={{
                                background: 'white',
                                padding: '40px',
                                borderRadius: '20px',
                                boxShadow: 'var(--shadow)'
                            }}
                        >
                            <div style={{
                                background: 'var(--accent)',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '24px'
                            }}>
                                <Tag size={28} color="white" />
                            </div>

                            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary)' }}>Vender</h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '30px', color: 'var(--text-secondary)' }}>
                                Aceda ao nosso marketplace interno exclusivo. Facilitamos a venda dos seus veículos para a nossa rede de clientes qualificados.
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                                    <Handshake size={24} color="var(--primary)" style={{ marginRight: '15px', marginTop: '2px', minWidth: '24px' }} />
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Marketplace Interno</h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Divulgação direta para o nosso leque de clientes compradores.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                                    <CheckCircle size={24} color="var(--primary)" style={{ marginRight: '15px', marginTop: '2px', minWidth: '24px' }} />
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Compra Facilitada</h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Processo simplificado. Nós tratamos da angariação do cliente.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <Users size={24} color="var(--primary)" style={{ marginRight: '15px', marginTop: '2px', minWidth: '24px' }} />
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Apenas Mostre o Carro</h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Não tem de se preocupar com nada. Apenas receba o cliente para a visita.</p>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                    </div>
                    {/* Add responsive styles */}
                    <style>{`
                        @media (max-width: 900px) {
                            .service-content .container > div {
                                grid-template-columns: 1fr !important;
                            }
                        }
                    `}</style>
                </div>
            </section>

            <ContactSection />
        </div>
    );
};

export default Stands;
