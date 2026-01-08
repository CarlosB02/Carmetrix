import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';
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
    }
];

const NewsSection = () => {
    return (
        <section className="news-section">
            <div className="container">
                <div className="section-header">
                    <h2>Últimas Novidades</h2>
                    <div className="line"></div>
                </div>

                <div className="news-grid">
                    {newsData.map((item, i) => (
                        <motion.div
                            className="news-item"
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
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
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
