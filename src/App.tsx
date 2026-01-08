import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import News from './pages/News';
import Layout from './components/Layout';
import Companies from './pages/Companies';

import ConsultoriaImportacao from './pages/ConsultoriaImportacao';
import InspecaoUsados from './pages/InspecaoUsados';
import EcoWashDetail from './pages/EcoWashDetail';
import ConciergeAutomovel from './pages/ConciergeAutomovel';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/empresas" element={<Companies />} />
          <Route path="/consultoria-importacao" element={<ConsultoriaImportacao />} />
          <Route path="/inspecao-usados" element={<InspecaoUsados />} />
          <Route path="/eco-wash-detail" element={<EcoWashDetail />} />
          <Route path="/concierge-automovel" element={<ConciergeAutomovel />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
