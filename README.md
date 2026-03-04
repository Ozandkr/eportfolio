# Portfolio — Axel Varlot

Portfolio personnel développé avec Angular. Il présente mon parcours (formation, expériences), mes compétences et une section projets.

## Fonctionnalités
- Navigation multi-pages (Formation, Expériences, Portfolio, Compétences, Contact)
- Mise en page responsive
- Animations d’apparition / transitions (selon les sections)
- Gestion d’assets (logos, images)

## Stack technique
- Angular
- TypeScript
- HTML / SCSS

## Prérequis
- Node.js (version LTS recommandée)
- npm

## Installation
```bash
npm install
```

## Lancer en local
```bash
npm start
```

Puis ouvrir :
- http://localhost:4200

## Build (production)
```bash
npm run build
```
## Structure du projet (indicative)
- `src/` : code source Angular
  - `src/app/` : composants, pages, routing
    - `src/app/core/` : éléments “core” (layout, navbar, services, etc.)
    - `src/app/features/` : pages/sections (formation, experiences, etc.)
  - `src/styles.scss` : styles globaux
  - `src/index.html` : page racine
- `public/` : ressources statiques servies telles quelles
  - `public/images/` : logos & images

## Auteur
Axel Varlot  
- LinkedIn : https://www.linkedin.com/in/axel-varlot-b23550253/
- Email : ozanvarlot@outlook.fr

## Licence
Projet personnel — reproduction ou réutilisation non autorisée sans accord.
