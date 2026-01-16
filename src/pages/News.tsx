import NewsSection from '../components/NewsSection';

const News = () => {
    return (
        <div style={{ paddingTop: '0' }}>
            <div
                style={{
                    width: '100%',
                    height: '60vh',
                    minHeight: '400px',
                    backgroundImage: 'url("/images/bmw-nature-hero.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    marginBottom: '50px',
                    position: 'relative'
                }}
            >
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 40%, var(--background-default))'
                }} />
            </div>

            <NewsSection />
        </div>
    );
};

export default News;
