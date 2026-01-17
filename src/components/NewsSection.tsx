import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import './NewsSection.css';

const newsData = [
    {
        id: 1,
        title: "Nova Tecnologia de Revestimento Cerâmico",
        date: "12 Dez, 2024",
        author: "João Silva",
        image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        excerpt: "Descubra os mais recentes avanços na proteção de pintura que duram até 5 anos."
    },
    {
        id: 2,
        title: "Dicas de Manutenção no Inverno",
        date: "28 Nov, 2024",
        author: "Ana Santos",
        image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        excerpt: "Passos essenciais de manutenção para preparar o seu veículo para os meses rigorosos de inverno."
    },
    {
        id: 3,
        title: "Top 10 Melhora de Performance",
        date: "15 Nov, 2024",
        author: "Miguel Costa",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        excerpt: "Aumente o desempenho do seu carro com estas modificações pós-venda recomendadas."
    },
    {
        id: 4,
        title: "Benefícios do Detalhamento Profissional",
        date: "05 Nov, 2024",
        author: "Ricardo Gomes",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        excerpt: "Entenda por que o detalhamento profissional valoriza o seu veículo e protege o investimento."
    },
    {
        id: 5,
        title: "Como Escolher Pneus Desportivos",
        date: "22 Out, 2024",
        author: "Pedro Martins",
        image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        excerpt: "Guia completo para selecionar os melhores pneus para maximizar a performance em pista e estrada."
    },
    {
        id: 6,
        title: "O Futuro dos Clássicos Modernos",
        date: "10 Out, 2024",
        author: "Sofia Costa",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ea240?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        excerpt: "Uma análise sobre quais carros atuais se tornarão os clássicos mais valorizados do futuro."
    }
];

interface NewsSectionProps {
    isCarousel?: boolean;
}

const NewsSection = ({ isCarousel = false }: NewsSectionProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % newsData.length);
    };

    const displayNews = isCarousel
        ? [0, 1, 2].map(offset => newsData[(currentIndex + offset) % newsData.length])
        : newsData;

    return (
        <section className="news-section">
            <div className="container">
                <div className="section-header">
                    <h2>Últimas Novidades</h2>
                    <div className="line"></div>
                </div>

                <div className="news-carousel-wrapper">
                    <div className="news-grid">
                        <AnimatePresence mode="popLayout" initial={false}>
                            {displayNews.map((item) => (
                                <motion.div
                                    className="news-item"
                                    key={item.id}
                                    layout={isCarousel}
                                    initial={isCarousel ? { opacity: 0, x: 100 } : { opacity: 0, y: 30 }}
                                    animate={isCarousel ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
                                    exit={isCarousel ? { opacity: 0, x: -100, transition: { duration: 0.2 } } : undefined}
                                    transition={{ duration: 0.4, type: "spring" }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="news-image">
                                        <img src={item.image} alt={item.title} />
                                        <div className="news-overlay"></div>
                                    </div>
                                    <div className="news-content">
                                        <div className="news-meta">
                                            <span><Calendar size={14} /> {item.date}</span>
                                            <span><User size={14} /> {item.author}</span>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.excerpt}</p>
                                        <a href="#" className="read-more">Ler Artigo</a>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {isCarousel && (
                        <button onClick={handleNext} className="carousel-next-btn-minimal" aria-label="Next news">
                            <ArrowRight size={32} strokeWidth={1.5} />
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
