import { Mail, Phone } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="section-header">
                    <h2>Contacte-nos</h2>
                    <div className="line"></div>
                </div>

                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Fale Connosco</h3>
                        <p>Pronto para transformar o seu veículo? Entre em contacto connosco para um orçamento ou para agendar uma marcação.</p>

                        <div className="contact-details">
                            <div className="contact-detail-item">
                                <Phone className="icon" />
                                <div>
                                    <h4>Telefone</h4>
                                    <p>+351 912 345 678</p>
                                </div>
                            </div>
                            <div className="contact-detail-item">
                                <Mail className="icon" />
                                <div>
                                    <h4>Email</h4>
                                    <p>info@carmetrix.pt</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" placeholder="O seu nome" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="O seu email" />
                        </div>
                        <div className="form-group">
                            <label>Interesse no Serviço</label>
                            <select>
                                <option>Informação Geral</option>
                                <option>Consultoria e Importação</option>
                                <option>Inspeção de Usados</option>
                                <option>Eco Wash & Detail</option>
                                <option>Concierge Automóvel</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Mensagem</label>
                            <textarea rows={3} placeholder="Como podemos ajudar?"></textarea>
                        </div>
                        <button className="btn btn-primary" style={{ width: '100%' }}>Enviar Mensagem</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
