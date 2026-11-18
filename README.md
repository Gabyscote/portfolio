# Portfolio de Gabriel Roger

Version 2, construite avec [Astro](https://astro.build). Astro transforme des fichiers `.astro` (du HTML avec un peu de JavaScript en haut) et `.mdx` (du texte Markdown) en un site statique : du HTML, du CSS et des images optimisées, sans framework côté visiteur.

## Lancer le site sur ton Mac

Il faut Node.js (version 22 ou plus). Vérifie avec `node -v` dans le Terminal. S'il manque : `brew install node`.

```bash
cd ~/portfolio
npm install        # une seule fois : installe Astro dans node_modules/
npm run dev        # lance le site sur http://localhost:4321, mis à jour à chaque sauvegarde
```

Pour produire la version finale (dossier `dist/`, prêt à héberger) : `npm run build`, puis `npm run preview` pour la vérifier.

## Où se trouve quoi

```
src/
  pages/                 Une page = un fichier
    index.astro          L'accueil (intro, projets, savoir-faire, à propos)
    projets/[slug].astro Le gabarit commun à toutes les études de cas
    404.astro            La page d'erreur
  content/projets/       Une étude de cas = un fichier .mdx (le texte)
  components/            Les morceaux réutilisables
    Header.astro         L'en-tête
    Footer.astro         Le bloc contact violet
    Nuancier.astro       L'éventail de couleurs de l'accueil
    ProjectTile.astro    Une vignette de projet
    Figure.astro         Une image avec sa légende (dans les études de cas)
    Comparaison.astro    Plusieurs images côte à côte
    Palette.astro        Une rangée de pastilles de couleur
  layouts/Base.astro     Le <head>, l'en-tête et le pied de page communs
  styles/global.css      Les variables (couleurs, tailles, espacements) et les styles de base
  data/site.ts           Ton nom, ton email, tes liens, le chemin du CV
  assets/                Les images (Astro les convertit et les redimensionne)
  content.config.ts      La liste des champs obligatoires d'une étude de cas
public/                  Fichiers copiés tels quels (CV, favicon)
```

## Ajouter un projet

1. Mets les images dans `src/assets/projets/nom-du-projet/`.
2. Duplique un fichier de `src/content/projets/` et renomme-le, par exemple `mon-projet.mdx`. Le nom du fichier devient l'adresse : `/projets/mon-projet/`.
3. Remplis l'en-tête (entre les `---`). `couleur` est la couleur prélevée dans le projet : c'est elle qui apparaît sur le nuancier et derrière la couverture. `encre` vaut `claire` si le texte posé sur cette couleur doit être blanc, `foncee` s'il doit être sombre. `ordre` fixe la position sur l'accueil.
4. Écris le texte en Markdown sous l'en-tête. Pour les images, importe-les en haut du fichier et utilise les composants `<Figure />`, `<Comparaison />` ou `<Palette />` (regarde `rouen.mdx` pour un exemple de chaque).

Si un champ manque ou est mal écrit, `npm run dev` affiche une erreur qui dit lequel.

## Changer les couleurs ou les typographies

Tout est dans les variables en haut de `src/styles/global.css`. Les composants n'utilisent que ces variables : changer `--violet` change le violet partout.

## Transitions entre les pages

`<ClientRouter />` dans `Base.astro` active les transitions de page du navigateur. Les attributs `transition:name` relient deux éléments d'une page à l'autre : la couleur d'une vignette se transforme en couverture de l'étude de cas. Les visiteurs qui ont demandé moins d'animations (réglage d'accessibilité du système) ne les voient pas.

## Mettre en ligne

Le site produit par `npm run build` est un dossier statique (`dist/`). Il peut être hébergé gratuitement sur Vercel, Netlify ou GitHub Pages. Une fois l'adresse choisie, renseigne `site` dans `astro.config.mjs`.
