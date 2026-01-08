import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const faqData = [
    {
        question: "Quanto tempo dura um revestimento cerâmico?",
        answer: "Os nossos revestimentos cerâmicos premium podem durar de 2 a 5 anos, dependendo do pacote que escolher e da manutenção do veículo."
    },
    {
        question: "Preciso de marcar hora?",
        answer: "Sim, trabalhamos principalmente por marcação para garantir que cada veículo recebe a atenção dedicada que merece. Pode marcar diretamente no nosso site ou ligando-nos."
    },
    {
        question: "Que produtos utilizam?",
        answer: "Utilizamos apenas produtos de topo e líderes de indústria como Gtechniq, XPEL e Rupes para garantir os melhores resultados."
    },
    {
        question: "Oferecem serviços de detalhe móvel?",
        answer: "Sim, para pacotes selecionados podemos ir até à sua localização, desde que exista um espaço de trabalho seguro e adequado."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section" id="faq">
            <div className="container">
                <div className="section-header">
                    <h2>Perguntas Frequentes</h2>
                    <div className="line"></div>
                </div>

                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
                            <div className="faq-question">
                                <h3>{item.question}</h3>
                                <span className="faq-icon">
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </div>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="faq-answer"
                                    >
                                        <p>{item.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
