import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import News from './pages/News';
import Layout from './components/Layout';
import Stands from './pages/Stands';

import ConsultoriaImportacao from './pages/ConsultoriaImportacao';
import InspecaoUsados from './pages/InspecaoUsados';
import EcoWashDetail from './pages/EcoWashDetail';
import ConciergeAutomovel from './pages/ConciergeAutomovel';
import Marketplace from './pages/Marketplace';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/stands" element={<Stands />} />
          <Route path="/consultoria-importacao" element={<ConsultoriaImportacao />} />
          <Route path="/inspecao-usados" element={<InspecaoUsados />} />
          <Route path="/eco-wash-detail" element={<EcoWashDetail />} />
          <Route path="/concierge-automovel" element={<ConciergeAutomovel />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
