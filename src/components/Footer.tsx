import { Github, Twitter, Instagram, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <img src="/logo-light.png" alt="Carmetrix Logo" className="footer-logo" />
                    <p>Elevando a sua experiência automóvel com serviços premium e soluções de vanguarda.</p>
                </div>
                <div className="footer-section">
                    <h4>Links Rápidos</h4>
                    <ul>
                        <li><a href="/">Início</a></li>
                        <li><a href="/#services">Serviços</a></li>
                        <li><a href="/news">Novidades</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contacto</h4>
                    <p><Mail size={16} /> info@carmetrix.com</p>
                    <div className="social-icons">
                        <a href="#"><Twitter /></a>
                        <a href="#"><Instagram /></a>
                        <a href="#"><Github /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} CARMETRIX. Todos os direitos reservados. | Feito por <a href="https://enimble.pt" target="_blank" rel="noopener noreferrer" style={{ color: '#00d2ff', fontWeight: 'bold' }}>E-Nimble</a></p>
            </div>
        </footer>
    );
};

export default Footer;
