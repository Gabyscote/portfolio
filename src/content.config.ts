import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Chaque étude de cas est un fichier .mdx dans src/content/projets/.
// Le « frontmatter » (en-tête du fichier) doit respecter ce schéma.
const projets = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projets' }),
  schema: ({ image }) =>
    z.object({
      titre: z.string(),
      court: z.string(),             // nom court, affiché sur le nuancier
      resume: z.string(),            // une phrase, affichée sur l'accueil
      annee: z.number(),
      cadre: z.string(),             // école, entreprise…
      role: z.string(),
      duree: z.string(),
      equipe: z.string().optional(),
      outils: z.array(z.string()),
      livrables: z.array(z.string()),
      disciplines: z.string(),       // ex. « Photo, retouche, affiche »
      couleur: z.string(),           // couleur prélevée dans le projet
      nomCouleur: z.string(),        // ex. « Bronze de la statue »
      encre: z.enum(['claire', 'foncee']), // texte clair ou foncé sur la couleur
      couverture: image(),
      cadreCouverture: z.enum(['affiche', 'navigateur', 'libre']).optional(), // présentation de la couverture
      altCouverture: z.string(),
      ordre: z.number(),
      lienSite: z.string().url().optional(),
      // Pour le Finder de la version Bureau : ranger les projets par catégorie et par cadre
      categories: z.array(z.enum(['identite', 'interface', 'web', 'print', 'photo', 'reseaux'])).default([]),
      contexte: z.enum(['nfs', 'but', 'entreprise']).optional(),
      // Un projet secondaire n'a pas d'icône sur le bureau : il est rangé dans « Autres projets »
      secondaire: z.boolean().default(false),
    }),
});

export const collections = { projets };
