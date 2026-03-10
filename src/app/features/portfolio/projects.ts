export interface Project {
    id: string;
    title: string;
    image?: string;

    // Page détail
    intro?: string;
    description?: string;
    learned?: string[];
    tech?: string[];

    // Liens
    githubUrl?: string;

    codeShots?: { caption: string; image: string }[];
}

export const PROJECTS: Project[] = [
    {
        id: 'eportfolio',
        title: 'E-portfolio',
        image: '/images/projects/imgPortfolio.png',
        intro: "Portfolio personnel développé avec Angular.",
        description:
            "Ce projet est un site e-portfolio responsive présentant mon parcours (formation/expériences), mes compétences et une vitrine de projets. L’objectif était d’avoir une interface simple, cohérente et agréable, avec des composants réutilisables et une navigation fluide.",
        learned: [
            "Structurer une application Angular (features/core, routing, composants réutilisables)",
            "Soigner l’UI (grille, cards, responsive) et harmoniser le style global",
            "Gérer proprement les assets (screenshots, logos) et l’intégration",
        ],
        tech: ["Angular", "TypeScript", "Node", "Git", "SCSS", "Routing"],
        githubUrl: 'https://github.com/Ozandkr/eportfolio/tree/main',
        codeShots: [
            { caption: "Routing et structure", image: "/images/projects/code-routing.png" },
        ],
    },
];