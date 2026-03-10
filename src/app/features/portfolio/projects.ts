export interface Project {
    id: string;
    title: string;
    image?: string;

    intro?: string;
    description?: string[];
    learned?: string[];
    tech?: string[];

    githubUrl?: string;
    dashboardUrl?: string;

    codeShots?: { caption: string; image: string }[];
}

export const PROJECTS: Project[] = [
    {
        id: 'gestion-pedagogique',
        title: 'Gestion pédagogique',
        image: '/images/projects/logoGestionPedagogique.png',
        intro: "Application web développée dans le cadre du Master 2 MIAGE pour digitaliser une partie de la gestion pédagogique du Master MIAGE : maquettes académiques, fiches d’heures, emplois du temps et gestion des utilisateurs.",

        description: [
            "Ce projet a été mené dans le cadre du Master 2 MIAGE autour d’un besoin réel exprimé par les responsables de formation de l’UFR des Sciences. L’objectif était de concevoir une application web permettant de centraliser et de fiabiliser plusieurs processus encore largement manuels, en particulier la gestion des maquettes pédagogiques, le suivi des heures d’enseignement, le dépôt des emplois du temps et certaines opérations de gestion des utilisateurs.",
            "L’application a été pensée pour répondre aux besoins des responsables d’année, de la scolarité et des enseignants. Plusieurs modules majeurs ont été développés : la création, la personnalisation et la consultation de maquettes académiques, la création et la validation de fiches d’heures, le dépôt et la consultation des emplois du temps, ainsi qu’une brique de gestion des comptes utilisateurs côté administration.",
            "Sur le plan fonctionnel, le projet s’appuyait sur une logique métier riche. Les maquettes devaient intégrer des promotions, des parcours, des unités d’enseignement, des groupes, des enseignants, des informations d’alternance et des règles de validation. Les fiches d’heures devaient quant à elles permettre un suivi plus fiable des interventions, avec une logique de signature et de validation adaptée aux différents rôles.",
            "Sur le plan technique, ce projet m’a amené à travailler sur une application web en ASP.NET Core avec Razor Pages, C#, Entity Framework et SQL, en manipulant un modèle de données relationnel conséquent. J’ai été confronté à des problématiques concrètes de navigation entre entités, de cohérence entre le code et la base de données, de gestion des états applicatifs, ainsi que d’évolution du schéma de données au fil du développement.",
            "Ce projet a également eu une dimension conduite de projet importante pour moi. En plus de ma participation au développement, j’ai contribué à la planification du projet en travaillant sur le tableau des antécédents, le diagramme de PERT et le diagramme de Gantt. Cette partie m’a permis de réfléchir à l’enchaînement des tâches, à l’affectation des ressources et à l’anticipation des risques, avec une vraie logique de chef de projet.",
            "Enfin, la phase de développement et les bilans d’avancement nous ont appris à ajuster notre organisation. L’équipe a utilisé GitHub Projects en mode Kanban pour suivre les tâches, Discord pour communiquer au quotidien, et a dû s’adapter à des contraintes réelles de synchronisation, de migrations SQL et de coordination entre modules. Le projet a donc été pour moi à la fois une expérience technique et une expérience concrète de gestion de projet."
        ],

        learned: [
            "Renforcer ma compréhension d’une application métier avec de vraies contraintes fonctionnelles, notamment autour de la gestion des maquettes, des enseignements et des fiches d’heures.",
            "Approfondir ma maîtrise d’ASP.NET Core, Razor Pages, C# et Entity Framework sur un projet plus riche qu’une simple application CRUD.",
            "Mieux manipuler un modèle relationnel important, avec de nombreuses entités liées entre elles et des impacts directs sur la logique applicative.",
            "Faire face à des problèmes concrets de synchronisation entre le code et la base de données, ainsi qu’à des ajustements de schéma au cours du développement.",
            "Développer une meilleure lecture des besoins métier en distinguant ce qui fonctionne techniquement de ce qui est réellement cohérent pour l’utilisateur final.",
            "Renforcer mes compétences en planification et en conduite de projet grâce à la préparation du tableau des antécédents, du PERT et du Gantt, ainsi qu’à la réflexion sur l’affectation des tâches dans l’équipe.",
            "Mieux comprendre l’importance d’une organisation outillée et lisible, avec GitHub Projects pour le suivi visuel, une communication continue sur Discord et une répartition plus modulaire des blocs pour limiter les frictions.",
            "Prendre du recul sur la gestion d’un projet collectif, en constatant que l’anticipation des conflits techniques et une meilleure structuration initiale des responsabilités peuvent faire gagner un temps précieux."
        ],

        tech: [
            'ASP.NET Core',
            'C#',
            'Razor Pages',
            'Entity Framework',
            'SQL Server',
            'Base de données relationnelle',
            'Modèle de données',
            'Relations entre entités',
            'Navigation entre entités',
            'CRUD',
            'HTML',
            'CSS',
            'Bootstrap',
            'Architecture web',
            'Débogage',
            'Synchronisation code / base de données',
            'Migrations et évolution du schéma',
            'Analyse fonctionnelle',
            'Conception applicative',
            'Visual Studio',
            'SQL Server Management Studio (SSMS)',
            'Git',
            'GitHub',
            'GitHub Projects',
            'Kanban',
            'Gestion de projet',
            'Planification',
            'Diagramme de Gantt',
            'PERT',
            'Tableau des antécédents',
            'Répartition des tâches',
            'Travail en équipe',
            'Discord',
            'ProjectLibre',
            'Figma'
        ],

        githubUrl: '',

        codeShots: [
            {
                caption: "Vue de l'application Gestion Pedagogique",
                image: '/images/projects/imgGestionPedagogique.png'
            },
            {
                caption: "Logique métier de signature des fiches d’heures et déclaration des créneaux",
                image: '/images/projects/imgCodeLogique.png'
            },
            {
                caption: "Diagramme de GANTT réel du projet",
                image: '/images/projects/imgGanttGestionPedagogique.png'
            }
        ]
    },
    {
        id: 'competition-esport',
        title: 'Compétition esport',
        image: '/images/projects/logoDMOG.png',
        intro: "Projet réalisé dans le cadre de la MIAGE autour d’une plateforme de gestion de compétition e-sport, avec une réflexion à la fois sur l’organisation de l’événement, les acteurs impliqués et la structuration fonctionnelle de l’application.",
        description: [
            "Ce projet avait pour objectif de concevoir une plateforme liée à l’organisation d’une compétition e-sport, en prenant en compte les besoins des différents acteurs impliqués dans l’événement. L’idée était de proposer une solution permettant de structurer et de centraliser certaines informations utiles au bon déroulement de la compétition.",
            "Au-delà de l’aspect applicatif, ce projet m’a amené à réfléchir à la modélisation du système, aux rôles des utilisateurs, aux interactions entre les différentes fonctionnalités et à la manière de traduire un besoin métier en éléments exploitables dans une application.",
            "Ce travail m’a permis de manipuler des notions de conception fonctionnelle, de structuration de projet et de formalisation des besoins, tout en restant dans un univers plus original et stimulant que des cas d’usage plus classiques.",
            "Le projet a également été intéressant sur le plan de la présentation, car il fallait concevoir une solution crédible, cohérente et compréhensible, en tenant compte à la fois de l’expérience utilisateur, des contraintes d’organisation et de la logique globale de la compétition."
        ],
        learned: [
            "Mieux formaliser les besoins d’un projet autour d’un contexte événementiel et multi-acteurs.",
            "Réfléchir à la structuration fonctionnelle d’une plateforme en tenant compte des rôles et des interactions entre utilisateurs.",
            "Renforcer ma capacité à concevoir un projet de manière cohérente, de l’idée initiale jusqu’à sa formalisation.",
            "Travailler sur un sujet plus original, ce qui m’a demandé de concilier créativité, logique fonctionnelle et clarté de présentation."
        ],
        tech: [
            'React',
            'JavaScript',
            'Node.js',
            'JSX',
            'MySQL',
            'React Router',
            'HTML',
            'CSS',
            'Appels API',
            'fetch',
            'Intégration client / API',
            'Sélection dynamique de données',
            'Expérience utilisateur',
            'UI Design',
            'Analyse fonctionnelle',
            'UML',
            'Modélisation',
            'Visual Studio',
            'Git',
            'GitHub',
            'Jira',
            'Gestion de projet',
            'Planification',
            'Diagramme de Gantt',
            'PERT',
            'Tableau des antécédents',
            'Répartition des tâches',
            'Travail en équipe',
            'ProjectLibre',
            'Figma'
        ],
        githubUrl: '',
        codeShots: [
            {
                caption: 'Logique de création d’un tournoi avec validation des champs, sélection des maps et envoi à l’API',
                image: '/images/projects/codeDMOG1.png'
            },
            {
                caption: 'Interface React de sélection des maps avec affichage dynamique des cartes choisies',
                image: '/images/projects/codeDMOG2.png'
            },
            {
                caption: 'Identité visuelle du projet DMO-G',
                image: '/images/projects/imgDMOG.png'
            }
        ]
    },
    {
        id: 'dashboard-tableau',
        title: 'Dashboard Tableau',
        image: '/images/projects/imgDashboardTableau.png',
        intro: "Dashboard interactif réalisé avec Tableau pour analyser et visualiser des indicateurs économiques à travers plusieurs représentations complémentaires : courbes d’évolution, cartes, heatmaps et boxplots.",
        description: [
            "Ce projet avait pour objectif de concevoir un dashboard analytique clair et interactif avec Tableau, en mettant en valeur différentes dimensions d’un jeu de données économique. L’idée n’était pas seulement de produire des graphiques, mais de construire une interface cohérente permettant de mieux explorer, comparer et interpréter les données.",
            "J’ai travaillé sur plusieurs types de visualisations complémentaires, notamment une analyse de l’évolution du PIB, des heatmaps pour faire ressortir certaines intensités ou répartitions, des boxplots pour observer les écarts et la dispersion, ainsi que des cartes pour apporter une lecture géographique des données.",
            "Le projet m’a aussi amené à réfléchir à l’organisation du dashboard, au choix des visuels les plus pertinents selon le message à transmettre, et à l’utilisation de filtres pour rendre l’exploration plus dynamique. J’ai également manipulé des champs calculés, notamment avec la variable Région_europe, afin de structurer certaines analyses et d’améliorer la segmentation des données.",
            "Ce travail m’a permis de renforcer ma capacité à transformer des données en éléments visuels exploitables, tout en gardant une logique de lisibilité, de cohérence et d’aide à la décision."
        ],
        learned: [
            "Mieux choisir le type de visualisation en fonction de la nature des données et du message analytique à faire passer.",
            "Structurer un dashboard Tableau de manière plus lisible, avec une réflexion sur l’enchaînement des visuels et l’expérience utilisateur.",
            "Approfondir l’utilisation des filtres, des interactions et des champs calculés dans Tableau.",
            "Renforcer ma compréhension de la représentation visuelle des écarts, des tendances et des répartitions à travers plusieurs graphiques complémentaires.",
            "Développer une approche plus orientée analyse et restitution, en pensant le dashboard comme un outil d’aide à la compréhension et non comme une simple juxtaposition de graphiques."
        ],
        tech: [
            'Tableau',
            'Data Visualization',
            'Dashboard Design',
            'Analyse de données',
            'Nettoyage de données',
            'Storytelling visuel',
            'Champs calculés',
            'Visualisation géographique',
            'Cartes',
            'Courbes d’évolution',
            'Boxplots',
            'Heatmaps',
            'Comparaison de données',
            'Segmentation',
            'Structuration de dashboard',
            'Lisibilité des données',
            'Interprétation de tendances'
        ], 
        dashboardUrl: 'https://public.tableau.com/app/profile/axel.varlot6744/viz/VARLOT_PIB_Europe/PIBrelparhabitantenEurope20002024',
        codeShots: [
            {
                caption: 'Vue d’ensemble du dashboard Tableau',
                image: '/images/projects/imgDashboardTableau.png'
            },
            {
                caption: 'Analyse visuelle avec boxplot',
                image: '/images/projects/boxplotTableau.png'
            }
        ]
    },
    {
        id: 'eportfolio',
        title: 'E-portfolio',
        image: '/images/projects/imgPortfolio.png',
        intro: "Application front-end développée avec Angular pour présenter mon parcours, mes compétences et mes projets au sein d’une interface moderne, responsive et évolutive.",
        description: [
            "J’ai conçu ce e-portfolio comme une véritable vitrine professionnelle, avec l’objectif de présenter mon profil de manière plus claire, plus structurée et plus impactante qu’à travers un CV classique seul.",
            "L’idée était de regrouper dans une même application mes expériences, mes réalisations, mes compétences et les informations essentielles sur mon parcours, tout en proposant une navigation simple et agréable.",
            "Ce projet m’a permis de travailler sur la structuration d’une application Angular orientée composants et pages, avec un système de routing pour naviguer entre les différentes rubriques ainsi qu’une page de détail pour approfondir la présentation de chaque projet.",
            "J’ai également porté une attention particulière à l’expérience utilisateur, en travaillant une interface sobre, cohérente et responsive, afin de garantir une bonne lisibilité du contenu et une navigation fluide sur différents formats d’écran.",
            "Enfin, ce projet m’a permis de renforcer ma logique de conception front-end en pensant le site comme un support évolutif, maintenable et valorisant sur le plan professionnel."
        ],
        learned: [
            "Consolider ma compréhension de l’architecture d’une application Angular, notamment dans la séparation entre pages, composants, styles et logique de navigation.",
            "Renforcer ma maîtrise du routing Angular pour gérer une navigation claire entre les sections du site et les pages de détail projet.",
            "Améliorer l’organisation du front-end afin de garder une structure lisible, maintenable et simple à faire évoluer.",
            "Travailler le responsive design pour adapter correctement le contenu et les blocs visuels à différentes tailles d’écran.",
            "Mieux valoriser un projet technique, en réfléchissant non seulement au développement mais aussi à la présentation, à la lisibilité et à l’impact visuel."
        ],
        tech: [
            'Angular',
            'TypeScript',
            'Node.js',
            'HTML5',
            'SCSS',
            'CSS3',
            'Angular Router',
            'Visual Studio Code',
            'Architecture par composants',
            'Structuration par pages et features',
            'UI / UX',
            'Organisation de contenu',
            'Hiérarchie visuelle',
            'Git',
            'GitHub'
        ],
        githubUrl: 'https://github.com/Ozandkr/eportfolio/tree/main',
        codeShots: [
            {
                caption: 'Routing et structure du projet',
                image: '/images/projects/code-routing.png'
            }
        ]
    }
];