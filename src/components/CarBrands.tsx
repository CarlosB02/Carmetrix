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
                                <img
                                    src={`/brands/${brand.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}.png`}
                                    alt={brand}
                                    className="brand-logo"
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        // If we haven't tried SVG yet, try it
                                        if (!target.src.endsWith('.svg') && !target.dataset.triedSvg) {
                                            target.dataset.triedSvg = "true";
                                            target.src = `/brands/${brand.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}.svg`;
                                        } else {
                                            // If we already tried SVG or it was already an SVG and failed, hide it
                                            target.style.display = 'none';
                                        }
                                    }}
                                />
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
