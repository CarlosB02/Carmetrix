import NewsSection from '../components/NewsSection';

const News = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <div className="container" style={{ paddingTop: '50px' }}>
                <h1>Todas as Novidades</h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Mantenha-se atualizado com o mundo automóvel.</p>
            </div>
            <NewsSection />
        </div>
    );
};

export default News;
