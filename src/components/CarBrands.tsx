import './CarBrands.css';

const brands = [
    "Skoda", "Smart", "Tesla", "Volkswagen", "Volvo",
    "Audi", "BMW", "BYD", "Chevrolet", "Citroën",
    "Cupra", "Dacia", "Ferrari", "Ford", "Honda",
    "Hyundai", "Kia", "Mercedes", "Mini", "Nissan",
    "Peugeot", "Porsche", "Renault", "Toyota"
];

const CarBrands = () => {
    // Duplicate the brands list to create a seamless infinite scroll
    const marqueeBrands = [...brands, ...brands];

    return (
        <section className="car-brands-section">
            <div className="brands-container">
                <div className="brands-header">
                    <h3>Encontre as melhores marcas</h3>
                </div>

                <div className="marquee-wrapper">
                    <div className="marquee-content">
                        {marqueeBrands.map((brand, index) => (
                            <div key={`${brand}-${index}`} className="brand-item">
                                {/* Since we don't have logos yet, we just display the name nicely */}
                                {/* In the future, <img src={...} /> would go here */}
                                <span className="brand-name">{brand}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarBrands;
