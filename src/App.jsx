import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import './App.css';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="app-container">
      <Header onOpenContact={openContactModal} />
      
      <main>
        <Hero onOpenContact={openContactModal} />
        <Features />
        <Pricing onOpenContact={openContactModal} />
      </main>

      <Footer />

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
      />
    </div>
  );
}

export default App;
