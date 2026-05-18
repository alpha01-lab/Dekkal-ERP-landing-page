import './Hero.css';

const Hero = ({ onOpenContact }) => {
  return (
    <section id="accueil" className="hero-section">
      <div className="hero-content">
        <div className="hero-badge animate-fade-in">
          <span className="badge-dot"></span>
          Nouvelle version disponible
        </div>
        
        <h1 className="hero-title animate-fade-in delay-1">
          L'ERP taillé pour les <br/>
          <span className="text-gradient">commerçants sénégalais</span>
        </h1>
        
        <p className="hero-subtitle animate-fade-in delay-2">
          Gérez vos stocks, facturez vos clients et suivez votre comptabilité 
          en toute simplicité. Dëkkal est la solution tout-en-un pour faire 
          décoller votre activité.
        </p>
        
        <div className="hero-cta animate-fade-in delay-3">
          <button className="btn btn-primary btn-large" onClick={onOpenContact}>
            Commencer maintenant
          </button>
          <button className="btn btn-outline btn-large" onClick={() => document.getElementById('fonctionnalites').scrollIntoView({ behavior: 'smooth'})}>
            Découvrir les fonctionnalités
          </button>
        </div>
        
        <div className="hero-stats animate-fade-in delay-3">
          <div className="stat-item">
            <h4>+500</h4>
            <p>Commerçants équipés</p>
          </div>
          <div className="stat-item">
            <h4>24/7</h4>
            <p>Support local dédié</p>
          </div>
          <div className="stat-item">
            <h4>100%</h4>
            <p>Adapté au marché</p>
          </div>
        </div>
      </div>
      
      <div className="hero-image-wrapper animate-fade-in delay-2">
        <div className="hero-glow"></div>
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
          alt="Dashboard Dëkkal ERP" 
          className="hero-image"
        />
        
        {/* Floating cards for dynamic feeling */}
        <div className="floating-card card-1 glass">
          <div className="card-icon success">↗</div>
          <div>
            <p className="card-title">Ventes du jour</p>
            <p className="card-value">450.000 FCFA</p>
          </div>
        </div>
        
        <div className="floating-card card-2 glass">
          <div className="card-icon warning">!</div>
          <div>
            <p className="card-title">Alerte Stock</p>
            <p className="card-value">Riz parfumé bas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
