// Toutes les infos personnelles au même endroit : modifie-les ici.

// Adresse de base du site (« /portfolio/ » sur GitHub Pages), toujours avec un « / » final
export const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
export const site = {
  nom: 'Gabriel Roger',
  metier: 'Designer numérique',
  email: 'gabriel.roger.1906@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gabriel-roger-gr88',
  github: 'https://github.com/Gabyscote',
  // Le « ?v= » force les navigateurs à recharger le CV quand il change : augmente-le à chaque nouvelle version
  cv: `${base}CV_Gabriel_Roger.pdf?v=5`,
  // La même version sur fond blanc, pour imprimer sans vider la cartouche
  cvImpression: `${base}CV_Gabriel_Roger_impression.pdf?v=1`,
  couleur: '#6B3BFF',
  description:
    "Portfolio de Gabriel Roger, étudiant en Bachelor Designer Numérique à NFS Rouen. Identité visuelle, affiches, interfaces, et l'intégration web qui va avec. En recherche d'alternance.",
};
