import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './HotspotCar.css';

interface Hotspot {
    id: number;
    x: number; // percentage left
    y: number; // percentage top
    title: string;
    description: string;
}

// Coordinates based on side profile of a sedan facing right (assumed)
const hotspots: Hotspot[] = [
    {
        id: 1,
        x: 82,
        y: 45,
        title: 'Motor e Mecânica',
        description: 'Verificação completa de fugas, ruídos, correias, níveis de fluidos e estado geral do bloco do motor.'
    },
    {
        id: 2,
        x: 12,
        y: 42,
        title: 'Bagageira e Traseira',
        description: 'Inspeção do fundo da mala, roda suplente, macaco e alinhamento dos painéis traseiros.'
    },
    {
        id: 3,
        x: 48,
        y: 32,
        title: 'Interior e Equipamentos',
        description: 'Teste de todos os botões, ar condicionado, estofos, cintos de segurança e painel de instrumentos.'
    },
    {
        id: 4,
        x: 78,
        y: 68,
        title: 'Rodas e Suspensão',
        description: 'Análise do rasto dos pneus, estado das jantes, discos de travão, pastilhas e amortecedores.'
    },
    {
        id: 5,
        x: 50,
        y: 55,
        title: 'Pintura e Carroçaria',
        description: 'Medição micrométrica da espessura da tinta para detetar reparações de acidentes anteriores.'
    },
    {
        id: 6,
        x: 22,
        y: 68,
        title: 'Travões Traseiros e Eixo',
        description: 'Verificação visual do sistema de travagem traseiro e integridade do eixo.'
    }
];

const HotspotCar: React.FC = () => {
    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <section className="hotspot-section">
            <div className="hotspot-container">
                <div className="hotspot-wrapper">
                    <img
                        src="/images/inspection-sedan.png"
                        alt="Pontos de Inspeção Automóvel"
                        className="hotspot-image"
                    />

                    {hotspots.map((spot) => (
                        <div
                            key={spot.id}
                            className="hotspot-point"
                            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                        >
                            <button
                                className={`hotspot-btn ${activeId === spot.id ? 'active' : ''}`}
                                onMouseEnter={() => setActiveId(spot.id)}
                                onMouseLeave={() => setActiveId(null)}
                                onClick={() => setActiveId(activeId === spot.id ? null : spot.id)}
                                aria-label={spot.title}
                            >
                                <span className="hotspot-ping"></span>
                                <span className="hotspot-dot"></span>
                            </button>

                            <AnimatePresence>
                                {activeId === spot.id && (
                                    <motion.div
                                        className="hotspot-tooltip"
                                        initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                                        exit={{ opacity: 0, y: 10, x: "-50%", scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <h4 className="hotspot-title">{spot.title}</h4>
                                        <p className="hotspot-desc">{spot.description}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
                <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#888', fontStyle: 'italic' }}>
                    Interaja com os pontos para descobrir o que analisamos.
                </p>
            </div>
        </section>
    );
};

export default HotspotCar;
