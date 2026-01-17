import NewsSection from '../components/NewsSection';

const News = () => {
    return (
        <div style={{ paddingTop: '0' }}>
            <div
                style={{
                    width: '100%',
                    height: '60vh',
                    minHeight: '400px',
                    backgroundImage: 'url("/images/bmw-cinematic.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                }}
            >
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(10, 25, 60, 0.65)',
                    zIndex: 10
                }} />
            </div>

            <NewsSection />
        </div>
    );
};

export default News;
