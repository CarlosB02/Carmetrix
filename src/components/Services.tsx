import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import importAnimation from '../assets/lottie/import.json';
import inspectionAnimation from '../assets/lottie/inspection.json';
import washAnimation from '../assets/lottie/wash.json';
import conciergeAnimation from '../assets/lottie/concierge.json';
import './Services.css';

const services = [
    {
        id: 1,
        title: "Consultoria e Importação",
        description: "Acompanhamento completo na escolha e importação do seu veículo de sonho.",
        animation: importAnimation,
        color: "#00d2ff"
    },
    {
        id: 2,
        title: "Inspeção de Usados",
        description: "Verificação detalhada para garantir a qualidade e segurança na sua compra.",
        animation: inspectionAnimation,
        color: "#ff0055"
    },
    {
        id: 3,
        title: "Eco Wash & Detail",
        description: "Lavagem ecológica e detalhe interior para um acabamento impecável.",
        animation: washAnimation,
        color: "#00ff88"
    },
    {
        id: 4,
        title: "Concierge Automóvel",
        description: "Serviço premium de gestão e manutenção para a sua frota ou viatura pessoal.",
        animation: conciergeAnimation,
        color: "#ffaa00"
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5
        }
    })
};

const Services = () => {
    return (
        <section className="services-section" id="services">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2>Nossos Serviços</h2>
                    <div className="line"></div>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.id}
                            id={`service-${service.id}`}
                            className="service-card"
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                        >
                            <div className="card-bg-glow" style={{ background: service.color }}></div>
                            <div className="icon-wrapper">
                                <Lottie
                                    animationData={service.animation}
                                    loop={true}
                                    style={{ width: 90, height: 90 }}
                                />
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <button className="service-btn">Saber Mais</button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
