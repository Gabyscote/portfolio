# Portfolio — Gabriel Roger

Portfolio personnel (UI/UX & développement). Site statique, sans framework ni
étape de build : HTML, CSS et JavaScript natifs.

**En ligne :** https://gabyscote.github.io/portfolio/

## Aperçu local

Le header et le footer sont chargés en `fetch()` depuis `header.html` et
`footer.html`. Ouvrir un fichier directement en `file://` ne fonctionne donc
pas : il faut un serveur HTTP.

```bash
npx --yes serve .
```

Puis ouvrir l'adresse affichée (par défaut http://localhost:3000).

## Structure

```
index.html          Accueil (hero, à propos, dernier projet)
parcours.html       Timeline filtrable
projets.html        Liste des projets, en onglets
contact.html        Formulaire (Formspree)
404.html            Page d'erreur
header.html         Navigation, injectée par JS
footer.html         Pied de page, injecté par JS

campusgo.html       ┐
crazyburgear.html   │ Études de cas
metro.html          │
stage.html          ┘

style.css           Feuille unique, découpée en 18 sections numérotées
js/main.js          Script unique, découpé en 15 sections numérotées
img/                Captures par projet + og-preview.jpg (image de partage)
piece_jointe/       CV en PDF
```

## Ajouter un projet

Tout le contenu dynamique vient de deux tableaux en haut de `js/main.js` :

- `mesProjets` alimente la page Projets, le bloc « dernier projet » de
  l'accueil et les carrousels ;
- `monParcours` alimente la timeline de la page Parcours.

Pour un nouveau projet, ajouter une entrée à `mesProjets` :

```js
{
    id: "mon-projet",
    date: "Mois AAAA",
    type: "Projet Universitaire",
    titre: "Nom du projet",
    description: "Une ou deux phrases.",
    technos: ["PHP", "MySQL"],
    lien: "mon-projet.html",        // page d'étude de cas
    lienVisite: "https://...",      // facultatif : bouton « Visiter le site »
    dossierImages: "img/mon-projet/",
    images: "vue1.webp, vue2.webp"  // la 1re sert de vignette
}
```

L'ordre du tableau fait foi : la première entrée est mise en avant sur
l'accueil.

## Conventions

- **Thème clair/sombre** — piloté par `data-theme` sur `<html>`, mémorisé dans
  `localStorage` sous la clé `portfolio-theme`. Un script inline dans le
  `<head>` de chaque page l'applique avant le premier rendu pour éviter le
  flash de thème.
- **Couleurs** — toujours via les variables CSS de la section 1 de
  `style.css` (`--ink`, `--paper`, `--violet`…), jamais en dur : les deux
  thèmes redéfinissent ces mêmes variables.
- **Images** — format WebP, largeur maximale 1800 px. Toute balise `<img>`
  porte `width`/`height` (pour réserver la place et éviter les sauts de mise
  en page) et `loading="lazy"`, sauf le portrait de l'accueil et le logo.
- **Métadonnées** — chaque page a ses propres `description`, `og:title`,
  `og:description`, `og:url` et `canonical`. En cas de changement de domaine,
  ce sont les valeurs `https://gabyscote.github.io/portfolio/` à remplacer.

## Déploiement

GitHub Pages, branche `main`, racine du dépôt. Un `git push` suffit.
