import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { KontaktPage } from './pages/KontaktPage';
import { ONasPage } from './pages/ONasPage';
import { ReferenciaPage } from './pages/ReferenciaPage';

function App() {
  return (
    <div className="bg-nexel-bg min-h-screen text-white selection:bg-nexel-accent selection:text-nexel-bg">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sluzby/:slug" element={<ServiceDetailPage />} />
        <Route path="/kontakt" element={<KontaktPage />} />
        <Route path="/o-nas" element={<ONasPage />} />
        <Route path="/referencie" element={<ReferenciaPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
