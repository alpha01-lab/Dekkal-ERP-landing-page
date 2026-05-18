import { useEffect } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        
        <h2 className="modal-title">Contactez-nous</h2>
        <p className="modal-subtitle">
          Laissez-nous vos coordonnées, un conseiller Dëkkal vous rappellera dans les plus brefs délais.
        </p>
        
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); onClose(); alert("Message envoyé ! (Ceci est une démo)"); }}>
          <div className="form-group">
            <label htmlFor="name">Nom complet</label>
            <input type="text" id="name" placeholder="Moussa Ndiaye" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Numéro de téléphone</label>
            <input type="tel" id="phone" placeholder="+221 77 000 00 00" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="business">Nom de la boutique</label>
            <input type="text" id="business" placeholder="Ma Boutique SARL" />
          </div>
          
          <button type="submit" className="btn btn-primary btn-full">
            Être rappelé gratuitement
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
