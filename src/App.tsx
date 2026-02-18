import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { References } from './components/References';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-nexel-bg min-h-screen text-white selection:bg-nexel-accent selection:text-nexel-bg">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <References />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;