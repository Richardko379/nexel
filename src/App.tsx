import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { KontaktPage } from './pages/KontaktPage';
import { ONasPage } from './pages/ONasPage';
import { ReferenciaPage } from './pages/ReferenciaPage';
import { ROUTES } from './i18n';

function App() {
  return (
    <div className="bg-nexel-bg min-h-screen text-white selection:bg-nexel-accent selection:text-nexel-bg">
      <Navbar />
      <Routes>
        <Route path={ROUTES.sk.home} element={<HomePage />} />
        <Route path={`${ROUTES.sk.services}/:slug`} element={<ServiceDetailPage />} />
        <Route path={ROUTES.sk.contact} element={<KontaktPage />} />
        <Route path={ROUTES.sk.about} element={<ONasPage />} />
        <Route path={ROUTES.sk.references} element={<ReferenciaPage />} />
        <Route path={ROUTES.de.home} element={<HomePage />} />
        <Route path={`${ROUTES.de.services}/:slug`} element={<ServiceDetailPage />} />
        <Route path={ROUTES.de.contact} element={<KontaktPage />} />
        <Route path={ROUTES.de.about} element={<ONasPage />} />
        <Route path={ROUTES.de.references} element={<ReferenciaPage />} />
        <Route path="/de/*" element={<Navigate to={ROUTES.de.home} replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
