import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo mb-4">
              <span className="logo-text">Dëkkal</span>
              <span className="logo-dot">.</span>
            </div>
            <p className="footer-desc">
              Le premier ERP conçu spécifiquement pour simplifier le quotidien des commerçants sénégalais.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Produit</h4>
            <ul>
              <li><a href="#fonctionnalites">Fonctionnalités</a></li>
              <li><a href="#tarifs">Tarifs</a></li>
              <li><a href="#">Mises à jour</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Entreprise</h4>
            <ul>
              <li><a href="#">À propos</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Partenaires</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Légal</h4>
            <ul>
              <li><a href="#">CGV</a></li>
              <li><a href="#">Confidentialité</a></li>
              <li><a href="#">Mentions légales</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dëkkal ERP. Tous droits réservés.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="LinkedIn">IN</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
