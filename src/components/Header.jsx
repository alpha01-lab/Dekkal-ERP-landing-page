import { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header-scrolled glass' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">Dëkkal</span>
          <span className="logo-dot">.</span>
        </div>
        
        <nav className="nav-menu">
          <ul>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#fonctionnalites">Fonctionnalités</a></li>
            <li><a href="#tarifs">Tarifs</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="btn btn-primary" onClick={onOpenContact}>
            Contactez-nous
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
