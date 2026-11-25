// Contenus partagés par toutes les versions du site.
// Modifier un texte ici le change partout.
import { getCollection } from 'astro:content';

async function tous() {
  return (await getCollection('projets')).sort((a, b) => a.data.ordre - b.data.ordre);
}

// Les projets principaux : sur le bureau, dans les widgets et la page Portfolio
export async function getProjets() {
  return (await tous()).filter((p) => !p.data.secondaire);
}

// Les projets plus modestes, rangés dans « Autres projets »
export async function getAutresProjets() {
  return (await tous()).filter((p) => p.data.secondaire);
}

// Tout, pour le Finder et la recherche
export const getTousProjets = tous;

export const accroche = 'Je conçois des identités, des affiches et des interfaces. Et je sais les coder.';

export const recherche =
  "Je cherche une alternance en design numérique ou en communication digitale, au rythme de trois semaines en entreprise pour une semaine à l'école. J'étudie à Rouen, j'habite à Yvetot, et je suis véhiculé.";

export const apropos = [
  "Après deux ans de développement, j'ai compris ce qui me manquait : voir ce que je fabrique, et voir qui s'en sert. Rester en arrière-plan ne me suffisait pas. Je me suis tourné vers le design numérique, sans lâcher la technique.",
  "Pendant mon stage, j'ai travaillé sur les deux faces d'un même site. Côté vitrine, j'intégrais la maquette d'une designer et je pouvais lui dire ce qui coinçait. Côté extranet, on a décidé avec mon tuteur, écran par écran, ce qui devait se lire d'un coup d'œil. C'est là que la double compétence sert, et c'est ce que je viens chercher en alternance.",
];

// Le parcours complet : formations et expériences, de la plus récente à la plus ancienne.
// type : « formation » ou « pro ». lien : l'étude de cas liée, s'il y en a une.
export const parcours: {
  quand: string;
  quoi: string;
  ou: string;
  type: 'formation' | 'pro';
  etiquette: string;
  detail?: string;
  lien?: string;
}[] = [
  {
    quand: 'Depuis septembre 2026',
    quoi: 'Bachelor Designer Numérique',
    ou: 'Need for School, Rouen',
    type: 'formation',
    etiquette: 'Formation',
    detail:
      "Titre RNCP de niveau 6, en alternance (3 semaines en entreprise, 1 à l'école). Conception d'interfaces, identité visuelle, intégration web et accessibilité.",
  },
  {
    quand: 'Septembre à novembre 2026',
    quoi: 'Alternance en communication digitale',
    ou: 'Esprit Voyages, agence de voyages',
    type: 'pro',
    etiquette: 'Alternance',
    lien: 'esprit-voyages',
    detail:
      "Réseaux sociaux de l'agence et de sa marque normande, Beautiful Normandie (Facebook, Instagram) : idées de posts, visuels, carrousels, stories et textes, au fil des saisons et des événements.",
  },
  {
    quand: '2026, 8 semaines',
    quoi: 'Stage de fin de BUT',
    ou: 'JLM Solution Informatique, Saint-Crespin',
    type: 'pro',
    etiquette: 'Stage',
    detail:
      "Un outil web de gestion de production pour l'industrie : tableaux de bord, suivi des ordres de fabrication, adaptation mobile et interface.",
    lien: 'jlm',
  },
  {
    quand: 'Étés 2025 et 2026',
    quoi: 'Ouvrier saisonnier',
    ou: 'Vallée Construction Services',
    type: 'pro',
    etiquette: "Job d'été",
    detail:
      "Couverture, bardage et étanchéité de toiture, deux étés de suite. La rigueur et le travail d'équipe sur un chantier.",
  },
  {
    quand: '2024 à 2026',
    quoi: 'BUT Informatique',
    ou: "IUT d'Amiens",
    type: 'formation',
    etiquette: 'Formation',
    detail:
      "Parcours Conception, développement et validation d'applications. Algorithmique, bases de données, réseaux, gestion de projet. Bac+2 validé.",
  },
  {
    quand: '2024',
    quoi: 'Baccalauréat général, mention assez bien',
    ou: 'Lycée Pablo Neruda, Dieppe',
    type: 'formation',
    etiquette: 'Diplôme',
    detail: 'Spécialités mathématiques et NSI (numérique et sciences informatiques), option mathématiques expertes.',
  },
];

export const savoirFaire = [
  {
    titre: 'Identité visuelle et print',
    texte:
      'Un nom, un logo, une palette, des typographies, puis tout ce qui en découle : affiche, flyer, carte de visite, formats pour les réseaux sociaux.',
    outils: ['Photoshop', 'Illustrator', 'Canva'],
  },
  {
    titre: 'Interfaces',
    texte:
      "D'abord la liste de ce que l'utilisateur doit pouvoir faire, ensuite les maquettes, avec les états qu'on oublie souvent de dessiner : vide, erreur, chargement.",
    outils: ['Figma'],
  },
  {
    titre: 'Photo et retouche',
    texte: 'Prise de vue en mode manuel, retouche dans Lightroom, montage et mise en page dans Photoshop.',
    outils: ['Lightroom', 'Photoshop'],
  },
  {
    titre: 'Intégration web',
    texte:
      "Je sais ce qu'une maquette coûte à intégrer, et j'en tiens compte quand je la dessine.",
    outils: ['HTML', 'CSS', 'JavaScript', 'Laravel', 'Astro'],
  },
];

// En dehors du design : ce qui me fait avancer le reste du temps
export const interets = [
  { titre: 'Course à pied', texte: 'Mon sport principal : je cours régulièrement.' },
  { titre: 'Formule 1 et simracing', texte: 'Mon sport préféré à suivre. Je pilote aussi en simracing, au volant.' },
  { titre: 'Nouvelles technologies', texte: "Je teste les nouveaux outils dès qu'ils sortent, pour voir ce qu'ils changent à ma façon de travailler." },
  { titre: 'Design', texte: 'Interfaces, typographies, affiches : je regarde comment c’est fait et pourquoi ça marche.' },
];
