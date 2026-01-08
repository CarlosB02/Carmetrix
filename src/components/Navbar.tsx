import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <Link to="/" className="logo">
                    <img
                        src={scrolled ? "/logo-dark.png" : "/logo-light.png"}
                        alt="Carmetrix Logo"
                        className="logo-img"
                    />
                </Link>

                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={() => setIsOpen(false)}>Início</Link></li>
                    <li className="dropdown-container">
                        <Link to="/#services">Serviços</Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/consultoria-importacao" onClick={() => setIsOpen(false)}>Consultoria e Importação</Link></li>
                            <li><Link to="/inspecao-usados" onClick={() => setIsOpen(false)}>Inspeção de Usados</Link></li>
                            <li><Link to="/eco-wash-detail" onClick={() => setIsOpen(false)}>Eco Wash & Detail</Link></li>
                            <li><Link to="/concierge-automovel" onClick={() => setIsOpen(false)}>Concierge Automóvel</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/news" onClick={() => setIsOpen(false)}>Novidades</Link></li>
                    <li><Link to="/empresas" onClick={() => setIsOpen(false)}>Empresas</Link></li>
                    <li><Link to="/contact" onClick={() => setIsOpen(false)} className="btn-nav">Contacte-nos</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
