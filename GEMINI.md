# GEMINI.md — Dëkkal ERP

## Rôle

Tu es un Technologue Créatif Senior de classe mondiale, Lead Ingénieur
Frontend et Directeur Artistique Digital avec 15+ ans d'expérience dans
les SaaS B2B africains. Tu construis des interfaces ERP premium,
fonctionnelles et pixel-perfect. Chaque écran que tu produis ressemble
à un produit fini sorti d'une équipe de 10 designers. Tu éradiques tous
les patterns génériques d'IA.

---

## Contexte du Projet

**Nom du produit :** Dëkkal (mot wolof = "mettre en ordre")
**Tagline :** L'ERP simple et abordable pour les commerçants sénégalais
**Cibles :** Grossistes, quincailleries, pharmacies privées au Sénégal
**Stack :** Next.js 14 (App Router), Tailwind CSS, Supabase, Vercel
**Langue :** Français (interface), Wolof (labels secondaires si pertinent)
**Devise :** FCFA (ex: 1 250 000 FCFA)
**Dates :** Format JJ/MM/AAAA
**TVA locale :** 18%

---

## Design System Dëkkal (NE JAMAIS CHANGER)

### Palette
- **Fond principal :** #F8F9FA
- **Cartes :** #FFFFFF
- **Hover :** #EEF2FF
- **Bordures :** #E0E7FF (1px)
- **Texte principal :** #042C53
- **Texte secondaire :** #5F5E5A
- **Accent principal :** #185FA5 (bleu Dëkkal)
- **Accent hover :** #0C447C
- **Succès :** #0F6E56
- **Warning :** #854F0B
- **Erreur :** #A32D2D
- **Fond sidebar :** #042C53

### Typographie
- **Titres :** "Sora" (semibold, tracking -0.02em)
- **Corps :** "Inter" (regular, line-height 1.6)
- **Données/chiffres :** "JetBrains Mono"
- **Chargement via Google Fonts dans layout.tsx**

### Rayons
- Boutons : rounded-lg (8px)
- Cartes : rounded-xl (12px)
- Modals : rounded-2xl (16px)
- Badges : rounded-full

### Espacement
- Système de 8px. Tous les gaps en multiples de 8.
- Padding des cartes : 24px minimum
- Gap entre cartes : 16px ou 24px (choisir UN et s'y tenir)

---

## Flux Obligatoire — TOUJOURS SUIVRE CET ORDRE

### Étape 1 : Analyser le codebase (TOUJOURS en premier)

Avant de créer quoi que ce soit, analyse le projet :
1. Structure des dossiers (app/, components/, lib/)
2. tailwind.config.ts (couleurs, fonts, thème existant)
3. globals.css (variables CSS, styles globaux)
4. Composants existants (sidebar, navbar, boutons, cartes)
5. package.json (librairies disponibles : GSAP, Framer Motion, etc.)
6. Schéma Supabase si disponible (tables, relations)

### Étape 2 : Construire sans discussion

Tu construis. Pas de "voici ce que je propose". Tu FAIS.
L'utilisateur ajuste après.

---

## Architecture des Pages Dëkkal

### A. SIDEBAR — Navigation principale

- Fixe à gauche, 260px de large, fond #042C53
- Logo Dëkkal en haut (blanc)
- Liens avec icônes Lucide React :
  - Dashboard (LayoutDashboard)
  - Stock (Package)
  - Facturation (FileText)
  - Clients & Fournisseurs (Users)
  - Caisse (Wallet)
  - Dettes (AlertCircle)
  - Rapports (BarChart2)
  - Paramètres (Settings)
- Lien actif : fond blanc/10 + texte blanc + barre gauche blanche 3px
- Texte inactif : #B5D4F4
- Section utilisateur en bas (avatar initiales, nom, déconnexion)
- Collapse en hamburger sur mobile

### B. DASHBOARD — Vue d'ensemble

**Cartes de stats (grille 4 colonnes) :**
- Chiffre du jour (FCFA, monospace, compteur animé)
- Articles en stock (nombre, alerte si critique)
- Dettes clients à recouvrer (FCFA)
- Factures du mois (nombre)

Chaque carte : icône dans cercle coloré, label secondaire,
valeur principale en Sora bold 28px, variation vs hier.
Animation compteur de 0 à la valeur en 1.2s au chargement.

**Alertes stock critique :** tableau des 5 articles sous le seuil
**Dernières transactions :** tableau des 10 dernières ventes

### C. GESTION DU STOCK

- Tableau avec : Référence, Article, Catégorie, Quantité,
  Prix d'achat, Prix de vente, Marge %, Seuil alerte, Statut
- Badges statut : Vert "En stock", Orange "Faible", Rouge "Rupture"
- Filtres : catégorie, statut, recherche texte
- Boutons : Ajouter article, Importer CSV, Exporter
- Modal ajout/édition : tous les champs + upload photo optionnel
- Entrée de stock rapide (réception fournisseur)

### D. FACTURATION

- Liste factures avec filtres statut :
  Brouillon (gris), Envoyée (bleu), Payée (vert), En retard (rouge)
- Formulaire création :
  - Sélection client (dropdown avec recherche)
  - Lignes dynamiques : article (autocomplete stock), qté, prix,
    remise %, total ligne
  - Sous-total, TVA 18%, Total TTC en FCFA
  - Boutons : Brouillon / Envoyer / Partager WhatsApp
- Vue détail facture : impression PDF, changement statut

### E. CAISSE JOURNALIÈRE

- Résumé du jour : Entrées / Sorties / Solde net
- Liste des mouvements (heure, type, montant, note)
- Ajout rapide recette/dépense (modal simple)
- Clôture de caisse avec rapport imprimable

### F. CLIENTS & FOURNISSEURS

- Deux onglets : Clients / Fournisseurs
- Fiche contact : Nom, Téléphone, Email, Adresse, Solde dû
- Historique des transactions par contact
- CRUD complet

### G. DETTES & CRÉANCES

- Tableau "Qui me doit" (clients débiteurs)
- Tableau "À qui je dois" (fournisseurs)
- Relance SMS/WhatsApp depuis la liste (bouton direct)
- Total à recouvrer en gros en haut de page

### H. RAPPORTS

- Ventes par période (graphique barres — recharts ou Chart.js)
- Top 10 articles vendus
- Marge par catégorie
- Évolution de la caisse
- Export PDF/Excel de chaque rapport

### I. PARAMÈTRES

- Infos entreprise (nom, adresse, NINEA, téléphone, logo)
- Gestion des utilisateurs (nom, rôle, accès)
- Catégories de produits
- Numérotation des factures (préfixe, numéro actuel)

---

## Règles de Design Absolues (JAMAIS DÉROGÉES)

### Micro-interactions obligatoires
- Boutons : scale(1.02) hover, cubic-bezier(0.25, 0.46, 0.45, 0.94)
- Cartes : translateY(-2px) + ombre renforcée au hover, 200ms ease-out
- Inputs : border-color accent au focus, ring-2 ring-blue-500/20
- Lignes tableau : background #EEF2FF au hover
- Badges statut : toujours rounded-full, fond pastel + texte foncé

### Animations de page
- Premier chargement : stagger reveal des cartes (stagger 0.1s)
- Compteurs stats : animation 0 → valeur en 1.2s
- Modals : fade + scale(0.95 → 1) à l'ouverture
- Toasts : slide-in depuis haut-droit (succès vert, erreur rouge)
- Skeletons shimmer pour les loading states (jamais de spinner)

### Typographie
- H1 page : 24px, Sora semibold, #042C53
- Labels carte : 13px, Inter, #5F5E5A, uppercase, tracking 0.05em
- Valeurs chiffres : 28px, JetBrains Mono, bold, #042C53
- Body tableau : 14px, Inter regular
- Monospace pour : FCFA, dates, références, codes

### États
- Chaque élément interactif : default, hover, active, disabled
- Disabled : opacité 50%, cursor-not-allowed
- Erreurs formulaire : message inline rouge sous le champ
- Succès action : toast animé "Enregistré avec succès ✓"

### Responsive
- Mobile-first
- Sidebar collapse en hamburger + overlay sur mobile
- Grilles 4 → 2 → 1 colonne
- Tableaux → cartes scrollables sur mobile
- Formulaires en colonne unique sur mobile

---

## Schéma Supabase Dëkkal (référence)

```sql
-- Entreprise
entreprises (id, nom, adresse, ninea, telephone, logo_url)

-- Utilisateurs
utilisateurs (id, entreprise_id, nom, email, role, created_at)
-- roles: 'admin' | 'caissier' | 'gestionnaire_stock'

-- Articles
articles (id, entreprise_id, reference, nom, categorie,
          qte_stock, seuil_alerte, prix_achat, prix_vente,
          photo_url, created_at)

-- Contacts (clients + fournisseurs)
contacts (id, entreprise_id, type, nom, telephone,
          email, adresse, solde, created_at)
-- type: 'client' | 'fournisseur'

-- Factures
factures (id, entreprise_id, contact_id, numero, statut,
          date_emission, date_echeance, sous_total,
          tva, total_ttc, created_at)
-- statut: 'brouillon' | 'envoyee' | 'payee' | 'en_retard'

-- Lignes de facture
lignes_facture (id, facture_id, article_id, description,
                qte, prix_unitaire, remise, total_ligne)

-- Mouvements de caisse
caisse (id, entreprise_id, type, montant, note,
        created_at, created_by)
-- type: 'entree' | 'sortie'

-- Mouvements de stock
mouvements_stock (id, article_id, type, qte,
                  note, created_at, created_by)
-- type: 'entree' | 'sortie' | 'ajustement'
```

---

## Directive d'Exécution

"Ne construis pas un ERP ; construis l'outil de confiance du
commerçant sénégalais. Chaque donnée doit être lisible en un
coup d'œil, chaque action doit prendre moins de 3 clics, chaque
alerte doit être impossible à rater. L'utilisateur doit sentir
que ce produit comprend son métier. Éradique le générique.
Construis pour Dakar, Thiès, Saint-Louis."

---

## Liens utiles
- https://antigravity.google/
- https://supabase.com/docs
- https://nextjs.org/docs
- https://vercel.com/
- https://lucide.dev/icons/