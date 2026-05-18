import './Pricing.css';

const Pricing = ({ onOpenContact }) => {
  return (
    <section id="tarifs" className="pricing-section">
      <h2 className="section-title">Des tarifs simples et transparents</h2>
      <p className="pricing-subtitle">
        Pas de frais cachés, payez uniquement pour ce dont vous avez besoin.
      </p>

      <div className="pricing-cards">
        <div className="pricing-card glass">
          <h3 className="plan-name">Essentiel</h3>
          <div className="plan-price">
            <span className="amount">5.999</span>
            <span className="currency">FCFA</span>
            <span className="period">/mois</span>
          </div>
          <p className="plan-desc">Pour les petits commerces qui se lancent.</p>
          
          <ul className="plan-features">
            <li><span className="check">✓</span> 1 Point de vente</li>
            <li><span className="check">✓</span> Gestion de stock de base</li>
            <li><span className="check">✓</span> Facturation simple</li>
            <li><span className="check">✓</span> Support par email</li>
          </ul>
          
          <button className="btn btn-outline btn-full" onClick={onOpenContact}>
            Choisir ce forfait
          </button>
        </div>

        <div className="pricing-card glass popular">
          <div className="popular-badge">Le plus choisi</div>
          <h3 className="plan-name">Pro</h3>
          <div className="plan-price">
            <span className="amount">24.999</span>
            <span className="currency">FCFA</span>
            <span className="period">/mois</span>
          </div>
          <p className="plan-desc">Pour les commerces en pleine croissance.</p>
          
          <ul className="plan-features">
            <li><span className="check">✓</span> Jusqu'à 3 Points de vente</li>
            <li><span className="check">✓</span> Gestion de stock avancée</li>
            <li><span className="check">✓</span> Facturation & Devis</li>
            <li><span className="check">✓</span> Suivi des paiements mobiles</li>
            <li><span className="check">✓</span> Support prioritaire 7/7</li>
          </ul>
          
          <button className="btn btn-primary btn-full" onClick={onOpenContact}>
            Choisir ce forfait
          </button>
        </div>

        <div className="pricing-card glass">
          <h3 className="plan-name">Entreprise</h3>
          <div className="plan-price">
            <span className="amount">Sur devis</span>
          </div>
          <p className="plan-desc">Pour les réseaux de boutiques et grossistes.</p>
          
          <ul className="plan-features">
            <li><span className="check">✓</span> Points de vente illimités</li>
            <li><span className="check">✓</span> Multi-entrepôts</li>
            <li><span className="check">✓</span> Comptabilité complète</li>
            <li><span className="check">✓</span> API & Intégrations sur mesure</li>
            <li><span className="check">✓</span> Account manager dédié</li>
          </ul>
          
          <button className="btn btn-outline btn-full" onClick={onOpenContact}>
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
