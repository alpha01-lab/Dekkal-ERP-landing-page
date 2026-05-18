import './Features.css';

const featuresList = [
  {
    title: 'Gestion des Stocks',
    description: 'Suivez vos niveaux de stock en temps réel, recevez des alertes avant rupture et gérez vos inventaires multi-boutiques sans effort.',
    icon: '📦',
  },
  {
    title: 'Facturation Automatisée',
    description: 'Créez des factures professionnelles en quelques clics. Envoyez-les par WhatsApp ou email directement à vos clients.',
    icon: '🧾',
  },
  {
    title: 'Suivi des Ventes',
    description: 'Analysez vos performances avec des tableaux de bord clairs. Identifiez vos produits les plus vendus et vos meilleurs clients.',
    icon: '📈',
  },
  {
    title: 'Gestion des Dépenses',
    description: 'Gardez un œil sur votre trésorerie. Enregistrez vos dépenses pour calculer votre bénéfice net automatiquement.',
    icon: '💸',
  },
  {
    title: 'Paiements Mobiles',
    description: 'Intégrez facilement les paiements par Wave, Orange Money et Free Money pour faciliter les transactions de vos clients.',
    icon: '📱',
  },
  {
    title: 'Mode Hors-ligne',
    description: 'Continuez à travailler même sans connexion internet. Les données se synchronisent automatiquement dès le retour du réseau.',
    icon: '🔄',
  },
];

const Features = () => {
  return (
    <section id="fonctionnalites" className="features-section">
      <h2 className="section-title">Tout ce dont vous avez besoin</h2>
      <p className="features-subtitle">
        Des outils puissants conçus spécifiquement pour répondre aux réalités du commerce local.
      </p>
      
      <div className="features-grid">
        {featuresList.map((feature, index) => (
          <div key={index} className="feature-card glass" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
