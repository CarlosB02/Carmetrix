import { useState } from 'react';
import './Marketplace.css';
import {
    Search,
    Car,
    Bike,
    Zap,
    Truck,
    RotateCcw,
    SlidersHorizontal,
    MapPin,
    ChevronRight,
    ChevronDown,
    Heart,
    Wallet,
    Star,

    Users
} from 'lucide-react';

/* Dummy Data for Simulation */
const CARS_DATA = [
    {
        id: 1,
        title: "Porsche 911 Carrera S",
        brand: "Porsche",
        model: "911",
        year: 2022,
        km: 15000,
        fuel: "Gasolina",
        price: 145000,
        image: "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2070&auto=format&fit=crop",
        status: "Disponível"
    },
    {
        id: 2,
        title: "BMW M4 Competition",
        brand: "BMW",
        model: "M4",
        year: 2023,
        km: 5200,
        fuel: "Gasolina",
        price: 112500,
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop",
        status: "Novo"
    },
    {
        id: 3,
        title: "Mercedes-AMG GT 63",
        brand: "Mercedes-Benz",
        model: "AMG GT",
        year: 2021,
        km: 28000,
        fuel: "Híbrido",
        price: 138900,
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
        status: "Reservado"
    },
    {
        id: 4,
        title: "Audi RS6 Avant",
        brand: "Audi",
        model: "RS6",
        year: 2024,
        km: 0,
        fuel: "Gasolina",
        price: 165000,
        image: "https://images.unsplash.com/photo-1603584173870-7b299f589889?q=80&w=2070&auto=format&fit=crop",
        status: "Encomenda"
    },
    {
        id: 5,
        title: "Tesla Model S Plaid",
        brand: "Tesla",
        model: "Model S",
        year: 2023,
        km: 12000,
        fuel: "Elétrico",
        price: 105000,
        image: "https://images.unsplash.com/photo-1617704548623-340376564e68?q=80&w=2070&auto=format&fit=crop",
        status: "Disponível"
    },
    {
        id: 6,
        title: "Model X Plaid",
        brand: "Tesla",
        model: "Model X",
        year: 2023,
        km: 8000,
        fuel: "Elétrico",
        price: 115000,
        image: "https://images.unsplash.com/photo-1626555123996-037ce6d02850?q=80&w=1932&auto=format&fit=crop",
        status: "Disponível"
    }
];

const CATEGORIES = [
    { id: 1, title: "Desportivos", icon: <Car size={32} />, subtitle: "Performance pura", bg: "var(--primary-light)" },
    { id: 2, title: "Familiar / SUV", icon: <Users size={32} />, subtitle: "Espaço e conforto", bg: "#557799" },
    { id: 3, title: "Elétricos", icon: <Zap size={32} />, subtitle: "Eco-consciente", bg: "var(--accent)" },
    { id: 4, title: "Cabriolet", icon: <Star size={32} />, subtitle: "Liberdade total", bg: "#00b8d4" },
];

const Marketplace = () => {
    const [activeTab, setActiveTab] = useState('cars');
    const [paymentType, setPaymentType] = useState('buy');
    const [filters, setFilters] = useState({
        make: '',
        model: '',
        yearFrom: '',
        kmTo: '',
        priceTo: '',
        location: '',
        onlyElectric: false
    });

    const handleFilterChange = (key: string, value: any) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const filteredCars = CARS_DATA.filter(car => {
        if (filters.make && car.brand !== filters.make) return false;
        if (filters.model && !car.model.includes(filters.model)) return false;
        if (filters.yearFrom && car.year < Number(filters.yearFrom)) return false;
        if (filters.kmTo && car.km > Number(filters.kmTo)) return false;
        if (filters.priceTo && car.price > Number(filters.priceTo)) return false;
        if (filters.onlyElectric && car.fuel !== 'Elétrico') return false;
        return true;
    });

    return (
        <div className="marketplace-page">
            <div className="marketplace-hero">
                <div className="container">
                    <h1>Milhares de carros. Uma pesquisa simples.</h1>

                    <div className="hero-search-bar">
                        <Search className="search-icon" size={20} />
                        <input type="text" placeholder="Ex: Elétrico, Porsche, SUV..." />
                        <button className="search-btn">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="container search-container-wrapper">
                <div className="search-interface">
                    {/* Vertical Tabs */}
                    <div className="search-tabs">
                        <button
                            className={`tab-btn ${activeTab === 'cars' ? 'active' : ''}`}
                            onClick={() => setActiveTab('cars')}
                        >
                            <Car size={24} />
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'bikes' ? 'active' : ''}`}
                            onClick={() => setActiveTab('bikes')}
                        >
                            <Bike size={24} />
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'electric' ? 'active' : ''}`}
                            onClick={() => setActiveTab('electric')}
                        >
                            <Zap size={24} />
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'trucks' ? 'active' : ''}`}
                            onClick={() => setActiveTab('trucks')}
                        >
                            <Truck size={24} />
                        </button>
                    </div>

                    {/* Main Filter Area */}
                    <div className="search-filters">
                        <div className="filters-grid">

                            {/* Row 1 */}
                            <div className="filter-group">
                                <label>Marca</label>
                                <div className="select-wrapper">
                                    <select
                                        value={filters.make}
                                        onChange={(e) => handleFilterChange('make', e.target.value)}
                                    >
                                        <option value="">Todas</option>
                                        <option value="Porsche">Porsche</option>
                                        <option value="BMW">BMW</option>
                                        <option value="Mercedes-Benz">Mercedes-Benz</option>
                                        <option value="Audi">Audi</option>
                                        <option value="Tesla">Tesla</option>
                                        <option value="Land Rover">Land Rover</option>
                                    </select>
                                    <ChevronDown size={16} className="select-arrow" />
                                </div>
                            </div>

                            <div className="filter-group">
                                <label>Modelo</label>
                                <div className="select-wrapper">
                                    <select
                                        value={filters.model}
                                        onChange={(e) => handleFilterChange('model', e.target.value)}
                                    >
                                        <option value="">Todos</option>
                                        <option value="911">911</option>
                                        <option value="M4">M4</option>
                                        <option value="AMG">AMG</option>
                                    </select>
                                    <ChevronDown size={16} className="select-arrow" />
                                </div>
                            </div>

                            <div className="filter-group">
                                <label>Ano de</label>
                                <div className="select-wrapper">
                                    <select
                                        value={filters.yearFrom}
                                        onChange={(e) => handleFilterChange('yearFrom', e.target.value)}
                                    >
                                        <option value="">Qualquer</option>
                                        <option value="2024">2024</option>
                                        <option value="2023">2023</option>
                                        <option value="2022">2022</option>
                                        <option value="2020">2020</option>
                                        <option value="2015">2015</option>
                                    </select>
                                    <ChevronDown size={16} className="select-arrow" />
                                </div>
                            </div>

                            <div className="filter-group">
                                <label>Quilómetros até</label>
                                <div className="select-wrapper">
                                    <select
                                        value={filters.kmTo}
                                        onChange={(e) => handleFilterChange('kmTo', e.target.value)}
                                    >
                                        <option value="">Qualquer</option>
                                        <option value="10000">10,000 km</option>
                                        <option value="30000">30,000 km</option>
                                        <option value="50000">50,000 km</option>
                                        <option value="100000">100,000 km</option>
                                    </select>
                                    <ChevronDown size={16} className="select-arrow" />
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="filter-group payment-type">
                                <label>Tipo de Pagamento</label>
                                <div className="toggle-group">
                                    <button
                                        className={paymentType === 'buy' ? 'active' : ''}
                                        onClick={() => setPaymentType('buy')}
                                    >
                                        Comprar
                                    </button>
                                    <button
                                        className={paymentType === 'leasing' ? 'active' : ''}
                                        onClick={() => setPaymentType('leasing')}
                                    >
                                        Leasing
                                    </button>
                                </div>
                            </div>

                            <div className="filter-group">
                                <label>Preço até</label>
                                <div className="select-wrapper">
                                    <select
                                        value={filters.priceTo}
                                        onChange={(e) => handleFilterChange('priceTo', e.target.value)}
                                    >
                                        <option value="">Qualquer</option>
                                        <option value="50000">50,000 €</option>
                                        <option value="100000">100,000 €</option>
                                        <option value="150000">150,000 €</option>
                                        <option value="200000">200,000 €</option>
                                    </select>
                                    <ChevronDown size={16} className="select-arrow" />
                                </div>
                            </div>

                            <div className="filter-group">
                                <label>Localização</label>
                                <div className="input-with-icon">
                                    <input
                                        type="text"
                                        placeholder="Cidade ou Código Postal"
                                        value={filters.location}
                                        onChange={(e) => handleFilterChange('location', e.target.value)}
                                    />
                                    <MapPin size={16} />
                                </div>
                            </div>

                            <div className="filter-actions">
                                <button className="show-offers-btn">
                                    <Search size={18} />
                                    <span>{filteredCars.length} Ofertas</span>
                                </button>
                            </div>

                        </div>

                        <div className="filter-footer">
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    checked={filters.onlyElectric}
                                    onChange={(e) => handleFilterChange('onlyElectric', e.target.checked)}
                                />
                                <span className="checkmark"></span>
                                Apenas Carros Elétricos <Zap size={14} style={{ marginLeft: '5px', fill: 'currentColor' }} />
                            </label>

                            <div className="footer-links">
                                <button className="text-btn" onClick={() => setFilters({
                                    make: '', model: '', yearFrom: '', kmTo: '', priceTo: '', location: '', onlyElectric: false
                                })}>
                                    <RotateCcw size={14} /> Reset
                                </button>
                                <button className="text-btn">
                                    <SlidersHorizontal size={14} /> Mais filtros
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* SUGGESTIONS SECTION */}
            <div className="container section-margin">
                <h2 className="section-title">Sugestões para si</h2>
                <div className="suggestions-scroll">

                    {/* Promo Card */}
                    <div className="promo-card">
                        <div className="promo-icon"><Wallet size={32} /></div>
                        <h3>Leasing</h3>
                        <p>Ofertas selecionadas sem entrada inicial, a partir de 299€/mês.</p>
                        <button className="promo-btn">Ver Ofertas</button>
                    </div>

                    {/* Car Suggestions */}
                    {CARS_DATA.slice(0, 4).map((car) => (
                        <div key={`sug-${car.id}`} className="suggestion-card">
                            <div className="suggestion-img-wrapper">
                                <img src={car.image} alt={car.title} />
                                <button className="favorite-btn"><Heart size={18} /></button>
                            </div>
                            <div className="suggestion-content">
                                <h4>{car.title}</h4>
                                <div className="suggestion-price">{car.price.toLocaleString()} € <small>incl. VAT</small></div>
                                <div className="suggestion-leasing">ou 850 € / mês</div>
                                <div className="suggestion-tags">
                                    <span>{car.fuel}</span>
                                    <span>Automático</span>
                                    <span>{car.year}</span>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* CATEGORIES SECTION */}
            <div className="container section-margin">
                <h2 className="section-title">Navegar por Categoria</h2>
                <div className="categories-grid">
                    {CATEGORIES.map(cat => (
                        <div key={cat.id} className="category-card" style={{ '--cat-color': cat.bg } as any}>
                            <div className="category-content">
                                <h3>{cat.title}</h3>
                                <p>{cat.subtitle}</p>
                            </div>
                            <div className="category-icon">
                                {cat.icon}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                <h2 className="section-title" style={{ marginTop: '60px' }}>Resultados da Pesquisa</h2>
                {/* Cars Grid */}
                <div className="cars-grid">
                    {filteredCars.map((car) => (
                        <div key={car.id} className="car-card">
                            <div className="car-image-container">
                                <span className="car-status">{car.status}</span>
                                <img src={car.image} alt={car.title} className="car-image" />
                            </div>
                            <div className="car-details">
                                <h3 className="car-title">{car.title}</h3>
                                <div className="car-specs">
                                    <div className="spec-item">
                                        <span>{car.year}</span>
                                    </div>
                                    <div className="spec-item">
                                        <span>{car.km.toLocaleString()} km</span>
                                    </div>
                                    <div className="spec-item">
                                        <span>{car.fuel}</span>
                                    </div>
                                </div>
                                <div className="car-price">
                                    <span>{car.price.toLocaleString()} €</span>
                                    <span className="view-btn">Ver Detalhes &rarr;</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marketplace;
