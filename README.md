# TANA – Tous Avec Nos Ados

Site vitrine de l'association fictive TANA, créée dans le cadre d'un projet pédagogique à l'ESEIS de Strasbourg.

## Stack
- **Nuxt 3** (Vue 3 + SSR/SSG)
- **CSS variables** (design tokens dans `assets/css/main.css`)
- **TypeScript** pour les données
- Pas de framework CSS externe (Tailwind optionnel)

## Installation

```bash
npm install
npm run dev        # développement sur http://localhost:3000
npm run generate   # build statique (dossier .output/public)
```

## Intégrer le logo

Remplacer le placeholder dans `components/layout/TheNavbar.vue` :
```vue
<!-- Remplacer cette div : -->
<div class="logo-placeholder">T</div>
<!-- Par : -->
<NuxtImg src="/logo.png" width="40" height="40" alt="TANA" />
```
Placer le fichier `logo.png` dans le dossier `/public/`.

## Pages
| Route | Fichier | Description |
|---|---|---|
| `/` | `pages/index.vue` | Accueil |
| `/actualites` | `pages/actualites.vue` | Agenda & événements |
| `/aide-urgence` | `pages/aide-urgence.vue` | Ressources d'urgence |
| `/contact` | `pages/contact.vue` | Formulaire de contact |
| `/benevoles` | `pages/benevoles.vue` | Candidature bénévole |

## Intégrer un système de don
Dans `components/sections/DonSection.vue`, remplacer la fonction `handleDon()` par votre intégration :
- **HelloAsso** : https://www.helloasso.com (recommandé pour les associations françaises)
- **Stripe** : pour un paiement custom
