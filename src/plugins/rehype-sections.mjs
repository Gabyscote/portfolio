// Regroupe le contenu des études de cas en sections, une par titre de niveau 2.
// Dans chaque section, le texte et les visuels (Figure, Comparaison, Palette)
// sont rangés dans deux blocs séparés, pour pouvoir les afficher côte à côte.
//
// <section class="bloc bloc--media">
//   <div class="bloc__texte"> <h2>…</h2> <p>…</p> </div>
//   <div class="bloc__media"> <Figure/> <Comparaison/> </div>
// </section>

const VISUELS = new Set(['Figure', 'Comparaison', 'Palette']);

const texteDe = (noeud) =>
  noeud.type === 'text' ? noeud.value : (noeud.children ?? []).map(texteDe).join('');

export default function rehypeSections() {
  return (arbre) => {
    const sortie = [];
    let section = null;
    let numero = 0;

    const fermer = () => {
      if (!section) return;
      numero += 1;
      const titre = texteDe(section.titre);
      const avecMedia = section.media.length > 0;
      const classes = ['bloc', avecMedia ? 'bloc--media' : 'bloc--texte'];
      if (/retiens|leçon/i.test(titre)) classes.push('bloc--lecon');
      const enfants = [
        { type: 'element', tagName: 'div', properties: { className: ['bloc__texte'] }, children: section.texte },
      ];
      if (avecMedia) {
        enfants.push({
          type: 'element',
          tagName: 'div',
          properties: { className: ['bloc__media'] },
          children: section.media,
        });
      }
      sortie.push({
        type: 'element',
        tagName: 'section',
        properties: { className: classes, dataBloc: String(numero) },
        children: enfants,
      });
      section = null;
    };

    for (const noeud of arbre.children) {
      if (noeud.type === 'element' && noeud.tagName === 'h2') {
        fermer();
        section = { titre: noeud, texte: [noeud], media: [] };
      } else if (!section || noeud.type === 'mdxjsEsm') {
        sortie.push(noeud);
      } else if (noeud.type === 'mdxJsxFlowElement' && VISUELS.has(noeud.name)) {
        section.media.push(noeud);
      } else {
        section.texte.push(noeud);
      }
    }
    fermer();
    arbre.children = sortie;
  };
}
