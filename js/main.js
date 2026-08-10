// ==========================================================================
// PORTFOLIO GABRIEL ROGER — v2
// Sommaire :
//   1. Données (projets, parcours)
//   2. Générateurs de templates
//   3. Chargement des partials (header/footer)
//   4. Thème clair/sombre
//   5. Navigation (liens actifs, menu mobile)
//   6. Carrousels
//   7. Révélation au scroll (restreinte)
//   8. Rail numéroté des études de cas (signature)
//   9. Lightbox
//   10. Bouton retour en haut
//   11. Hero (titre en lignes)
//   12. Filtre parcours
//   13. Transitions de page
//   14. Onglets (page Projets)
//   15. Modales
//   16. Barre d'avancement de lecture
//   17. Badge (animation machine à écrire)
//   18. Activation des feuilles de style préchargées
// ==========================================================================

/* --------------------------------------------------------------------------
   18. ACTIVATION DES FEUILLES DE STYLE PRÉCHARGÉES
   -------------------------------------------------------------------------- */
// Google Fonts et Font Awesome sont déclarées en rel="preload" dans le <head>
// pour ne pas bloquer le premier affichage : on les convertit en vraies
// feuilles de style dès que ce script s'exécute, donc juste après que le
// HTML critique a déjà pu être analysé. Placé en tête de fichier, avant tout
// le reste, pour ne pas retarder cette bascule.
['link-google-fonts', 'link-font-awesome'].forEach(id => {
    const lien = document.getElementById(id);
    if (lien) lien.rel = 'stylesheet';
});

/* --------------------------------------------------------------------------
   1. DONNÉES
   -------------------------------------------------------------------------- */
const mesProjets = [
    {
        id: "crazyburgear",
        date: "2026 · Semestre 4",
        type: "Projet universitaire",
        titre: "Crazy Burgear",
        description: "Conception d'une plateforme e-commerce complète en architecture MVC (PHP/MySQL) sur le thème des animes.",
        technos: ["PHP", "MySQL", "MVC", "HTML/CSS"],
        lien: "crazyburgear.html",
        lienVisite: "https://crazyburgear.alwaysdata.net/",
        dossierImages: "img/crazyburgear/",
        images: "crazyburgear_accueil_apercu.webp, crazyburgear_catalogue_apercu.webp, crazyburgear_backoffice_apercu.webp"
    },
    {
        id: "jlm",
        date: "2026 · Semestre 4",
        type: "Stage en entreprise, 8 semaines",
        titre: "Refonte d'un ERP Industriel",
        description: "Transformation d'un prototype de gestion de stocks et de production en une plateforme web fiable, sécurisée et responsive pour le secteur industriel.",
        technos: ["PHP", "SQL", "CSS/UI", "Raspberry Pi"],
        lien: "stage.html",
        dossierImages: "img/stage/",
        // Proportions volontairement proches : dans un carrousel sans cadre,
        // des images de rapports très différents changeraient de taille à
        // chaque rotation.
        images: "stage_accueil.webp, stage_detail_prod.webp, stage_of.webp"
    },
    {
        id: "habicontrols",
        date: "2025 · Semestre 3",
        type: "Projet d'innovation",
        titre: "HabiControls",
        description: "Création complète d'une marque de domotique fictive : positionnement et analyse SWOT, charte graphique, maquette du site sous Figma et déclinaison sur l'ensemble des supports de communication.",
        technos: ["Figma", "Canva", "Charte graphique", "Communication visuelle"],
        lien: "habicontrols.html",
        dossierImages: "img/habicontrols/",
        images: "maquette_accueil.webp, com_flyer_affiche.webp, maquette_detail.webp, com_carte.webp"
    },
    {
        id: "campusgo",
        date: "2025 · Semestre 3",
        type: "Projet universitaire, plateforme web",
        titre: "CampusGo - Covoiturage Étudiant",
        description: "Développement d'une plateforme complète de covoiturage dédiée à la vie étudiante, intégrant la gestion des trajets, des véhicules et des profils utilisateurs.",
        technos: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
        lien: "campusgo.html",
        lienVisite: "https://campusgo.alwaysdata.net/",
        dossierImages: "img/campusgo/",
        images: "campusgo_accueil_apercu.webp, campusgo_bd.webp, campusgo_profil.webp, campusgo_trajet.webp, campusgo_admin.webp"
    },
    {
        id: "metro",
        date: "2025 · Semestre 2",
        type: "Projet universitaire, application logicielle",
        titre: "Gestion du Métro de Tokyo",
        description: "Conception d'une application logicielle (Windows Forms) pour l'administration et la visualisation des lignes, stations et horaires du réseau métropolitain de Tokyo.",
        technos: ["C#", "WinForms", ".NET", "SQL"],
        lien: "metro.html",
        dossierImages: "img/metro/",
        images: "metro_accueil.webp, metro_bd.webp"
    }
];

const monParcours = [
    {
        date: "Septembre 2026",
        categorie: "Formation",
        classeCat: "cat-edu",
        titre: "Need for School (Rouen)",
        description: "Intégration de Need For School à Rouen en Designer Numérique (titre RNCP de niveau 6) : conception d'interfaces, identité visuelle, intégration web et accessibilité. En alternance, 1 semaine de formation pour 3 en entreprise.",
        lien: null
    },
    {
        date: "2026 · Semestre 4",
        categorie: "Stage en Entreprise",
        classeCat: "cat-pro",
        titre: "JLM Solution Informatique",
        description: "Développement et optimisation d'une plateforme web (ERP) pour la gestion de production et de stocks industriels en PHP/SQL. Adaptation mobile et UI.",
        lien: "stage.html"
    },
    {
        date: "2025 · Semestre 3",
        categorie: "Projet Universitaire",
        classeCat: "cat-proj",
        titre: "Campus'Go",
        description: "Conception d'une plateforme web de covoiturage étudiant sous Laravel et Tailwind CSS. Cahier des charges, maquettes Figma et mise en place de la base de données.",
        lien: "campusgo.html"
    },
    {
        date: "2025 · Semestre 3",
        categorie: "Projet Universitaire",
        classeCat: "cat-proj",
        titre: "HabiControls",
        description: "Création d'une marque de domotique de toutes pièces : analyse SWOT, charte graphique, maquette du site sous Figma et déclinaison sur l'ensemble des supports de communication.",
        lien: "habicontrols.html"
    },
    {
        date: "Étés 2025 et 2026",
        categorie: "Job d'été",
        classeCat: "cat-pro",
        titre: "Ouvrier chez VCS",
        description: "Emploi saisonnier reconduit sur deux années consécutives chez Vallée Construction Services, spécialisé en couverture, bardage et étanchéité de toiture. Apprentissage du travail manuel et de la rigueur sur chantier.",
        lien: null
    },
    {
        date: "2025 · Semestre 2",
        categorie: "Projet Universitaire",
        classeCat: "cat-proj",
        titre: "Application Métro de Tokyo",
        description: "Développement d'un logiciel lourd (C# WinForms) pour gérer un réseau de transports en commun. Arbre des tâches, maquettes et conception de la base de données.",
        lien: "metro.html"
    },
    {
        date: "2024 - 2026",
        categorie: "Formation",
        classeCat: "cat-edu",
        titre: "BUT Informatique",
        description: "IUT d'Amiens. Parcours : Conception, Développement, Validation d'applications. Algorithmique, BDD, Réseaux, et Gestion de Projet.",
        lien: null
    },
    {
        date: "2024",
        categorie: "Diplôme",
        classeCat: "cat-edu",
        titre: "Baccalauréat Général",
        description: "Lycée Pablo Neruda (Dieppe). Mention Assez Bien. Spécialités : Mathématiques et NSI (Numérique et Sciences Informatiques). Option : Mathématiques expertes.",
        lien: null
    },
    {
        date: "2020 - 2021",
        categorie: "Stage d'observation",
        classeCat: "cat-pro",
        titre: "Intermarché",
        description: "Employé de mise en rayon (1 semaine) pour une première découverte du monde de l'entreprise.",
        lien: null
    }
];

/* --------------------------------------------------------------------------
   2. GÉNÉRATEURS DE TEMPLATES
   -------------------------------------------------------------------------- */
function genererTemplateProjet(projet, isReverse) {
    const tagsHtml = projet.technos.map(t => `<span>${t}</span>`).join('');
    const reverseClass = isReverse ? 'reverse' : '';

    const boutonsHtml = projet.lienVisite
        ? `<div class="project-actions">
                <a href="${projet.lien}" class="btn btn-secondary">Découvrir le projet <i class="fa-solid fa-arrow-right"></i></a>
                <a href="${projet.lienVisite}" target="_blank" rel="noopener noreferrer" class="btn btn-primary"><i class="fa-solid fa-globe"></i> Visiter le site</a>
           </div>`
        : `<a href="${projet.lien}" class="btn btn-primary">Découvrir le projet <i class="fa-solid fa-arrow-right"></i></a>`;

    return `
        <div class="project-showcase showcase-margin ${reverseClass} reveal">
            <div class="project-media">
                <div class="carousel auto-carousel" data-folder="${projet.dossierImages}" data-photos="${projet.images}" data-titre="${projet.titre}"></div>
            </div>
            <div class="project-info">
                <span class="project-badge"><i class="fa-regular fa-calendar"></i> ${projet.date} · ${projet.type}</span>
                <h3>${projet.titre}</h3>
                <p>${projet.description}</p>
                <div class="tech-tags">${tagsHtml}</div>
                ${boutonsHtml}
            </div>
        </div>
    `;
}

function genererTemplateParcours(item) {
    const lienHtml = item.lien
        ? `<a href="${item.lien}" class="link-draw">Voir les détails <i class="fa-solid fa-arrow-right"></i></a>`
        : '';

    return `
        <div class="timeline-item reveal" data-category="${item.classeCat}">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="timeline-date">${item.date}</span>
                <span class="timeline-category ${item.classeCat}">${item.categorie}</span>
                <h3>${item.titre}</h3>
                <p>${item.description}</p>
                ${lienHtml}
            </div>
        </div>
    `;
}

function afficherContenuDynamique() {
    const containerProjetsInfo = document.getElementById('container-projets-info');
    const containerDernierProjet = document.getElementById('container-dernier-projet');
    const containerParcours = document.getElementById('container-parcours');

    if (containerProjetsInfo) {
        containerProjetsInfo.innerHTML = mesProjets.map((p, i) => genererTemplateProjet(p, i % 2 === 0)).join('');
    }
    if (containerDernierProjet && mesProjets.length > 0) {
        containerDernierProjet.innerHTML = genererTemplateProjet(mesProjets[0], false);
    }
    if (containerParcours) {
        containerParcours.innerHTML = monParcours.map(genererTemplateParcours).join('');
    }

    initCarousels();
    initScrollReveal();
    initParcoursFilter();
}

/* --------------------------------------------------------------------------
   3. CHARGEMENT DES PARTIALS
   -------------------------------------------------------------------------- */
async function loadComponent(elementId, filePath) {
    const element = document.getElementById(elementId);
    if (!element) return;
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Impossible de charger ${filePath}`);
        element.innerHTML = await response.text();
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await Promise.all([
        loadComponent('header-container', 'header.html'),
        loadComponent('footer-container', 'footer.html')
    ]);

    initTheme();
    initActiveLinks();
    initMobileMenu();
    afficherContenuDynamique();
    initTabs();
    initModals();
    initLightbox();
    initBackToTop();
    initCaseRail();
    initHeroLines();
    initBadge();
    initProgressBar();
    initPageTransitions();
});

/* --------------------------------------------------------------------------
   4. THÈME CLAIR / SOMBRE
   -------------------------------------------------------------------------- */
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

    document.documentElement.setAttribute('data-theme', savedTheme);
    icon.className = savedTheme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';

    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';

        themeToggle.classList.add('is-switching');
        setTimeout(() => {
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('portfolio-theme', next);
            icon.className = next === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
            themeToggle.classList.remove('is-switching');
        }, 200);
    });
}

/* --------------------------------------------------------------------------
   5. NAVIGATION
   -------------------------------------------------------------------------- */
function initActiveLinks() {
    let currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === currentPath);
    });
}

function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('mobile-active');
        hamburger.querySelector('i').className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('mobile-active');
            hamburger.querySelector('i').className = 'fa-solid fa-bars';
        });
    });
}

/* --------------------------------------------------------------------------
   6. CARROUSELS
   -------------------------------------------------------------------------- */
function initCarousels() {
    document.querySelectorAll('.auto-carousel').forEach(carousel => {
        const folder = carousel.getAttribute('data-folder');
        const photos = carousel.getAttribute('data-photos').split(',').map(p => p.trim());
        const titre = carousel.getAttribute('data-titre') || 'le projet';

        photos.forEach((photo, index) => {
            const img = document.createElement('img');
            img.src = folder + photo;
            img.className = 'carousel-item' + (index === 0 ? ' active' : '');
            img.alt = `Capture d'écran ${index + 1} sur ${photos.length}, ${titre}`;
            // Seule la première vue est visible d'emblée : les suivantes attendent leur tour.
            img.loading = index === 0 ? 'eager' : 'lazy';
            img.decoding = 'async';
            carousel.appendChild(img);
        });

        const items = carousel.querySelectorAll('.carousel-item');
        if (items.length <= 1) return;

        let current = 0;
        let timer = null;

        const avancer = () => {
            items[current].classList.remove('active');
            current = (current + 1) % items.length;
            items[current].classList.add('active');
        };

        const demarrer = () => {
            if (timer === null) timer = setInterval(avancer, 4000);
        };
        const arreter = () => {
            clearInterval(timer);
            timer = null;
        };

        // Hors écran ou onglet en arrière-plan, le carrousel est mis en pause
        // plutôt que de tourner pour rien. On démarre malgré tout d'emblée :
        // si l'observateur ne répond jamais, le carrousel tourne quand même.
        let dansLeViewport = true;
        const majEtat = () => {
            if (dansLeViewport && !document.hidden) demarrer();
            else arreter();
        };
        majEtat();

        new IntersectionObserver(([entry]) => {
            dansLeViewport = entry.isIntersecting;
            majEtat();
        }, { threshold: 0.1 }).observe(carousel);

        document.addEventListener('visibilitychange', majEtat);
    });
}

/* --------------------------------------------------------------------------
   7. RÉVÉLATION AU SCROLL — restreinte à quelques éléments porteurs de sens
   -------------------------------------------------------------------------- */
function initScrollReveal() {
    const targets = document.querySelectorAll(
        '.case-section, .feature-card, .split-row, .timeline-item, .project-showcase'
    );
    targets.forEach((el, i) => {
        el.classList.add('reveal');
        if (el.classList.contains('feature-card')) {
            el.style.transitionDelay = `${(i % 4) * 0.08}s`;
        }
    });

    const toutAfficher = () =>
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));

    // Sans IntersectionObserver (ou en animations réduites), on affiche tout
    // directement : mieux vaut pas d'animation qu'un contenu invisible.
    if (!('IntersectionObserver' in window) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        toutAfficher();
        return;
    }

    // Filet de sécurité : si rien n'a été révélé au bout de 3 s (observateur
    // muet, onglet resté en arrière-plan au chargement), on affiche tout.
    setTimeout(() => {
        if (document.querySelectorAll('.reveal.is-visible').length === 0) toutAfficher();
    }, 3000);

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   8. RAIL NUMÉROTÉ DES ÉTUDES DE CAS (signature)
   -------------------------------------------------------------------------- */
function initCaseRail() {
    const rail = document.querySelector('.case-rail');
    const blocks = document.querySelectorAll('.case-blocks > [data-step]');
    if (!rail || blocks.length === 0) return;

    rail.innerHTML = '';
    blocks.forEach((block, i) => {
        const btn = document.createElement('button');
        btn.textContent = block.getAttribute('data-step');
        btn.addEventListener('click', () => {
            block.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        rail.appendChild(btn);
        block.id = block.id || `bloc-${i}`;
    });

    const railButtons = rail.querySelectorAll('button');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const index = Array.from(blocks).indexOf(entry.target);
            if (entry.isIntersecting) {
                railButtons.forEach(b => b.classList.remove('is-active'));
                railButtons[index].classList.add('is-active');
            }
        });
    }, { threshold: 0.4, rootMargin: '-100px 0px -40% 0px' });

    blocks.forEach(block => observer.observe(block));
}

/* --------------------------------------------------------------------------
   9. LIGHTBOX
   -------------------------------------------------------------------------- */
const SELECTEUR_ZOOM = '.case-image img, .feature-img, .paire img, .affiche img';

function initLightbox() {
    // Signaler que les captures s'agrandissent : sans indice visuel, personne
    // ne pense à cliquer dessus.
    document.querySelectorAll(SELECTEUR_ZOOM).forEach(img => {
        const conteneur = img.closest('.case-image, .feature-card, .paire figure, .affiche');
        if (conteneur) conteneur.classList.add('zoomable');
    });

    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `<span class="close-lightbox">&times;</span><img class="lightbox-content" id="lightbox-img" alt="Aperçu agrandi">`;
    document.body.appendChild(lightbox);

    const lightboxImg = document.getElementById('lightbox-img');

    document.addEventListener('click', (e) => {
        const img = e.target.closest(SELECTEUR_ZOOM);
        if (img) {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
            requestAnimationFrame(() => lightbox.classList.add('active'));
        }
    });

    const close = () => {
        lightbox.classList.remove('active');
        setTimeout(() => { lightbox.style.display = 'none'; }, 250);
    };

    lightbox.querySelector('.close-lightbox').addEventListener('click', close);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

/* --------------------------------------------------------------------------
   10. BOUTON RETOUR EN HAUT
   -------------------------------------------------------------------------- */
function initBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    btn.setAttribute('aria-label', 'Retour en haut de page');
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 500);
    });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* --------------------------------------------------------------------------
   11. HERO — découpage du titre en lignes animées
   -------------------------------------------------------------------------- */
function initHeroLines() {
    const h1 = document.querySelector('.hero h1[data-lines]');
    if (!h1) return;
    const lines = h1.getAttribute('data-lines').split('|');
    h1.innerHTML = lines.map(l => `<span class="line">${l}</span>`).join('');
}

/* --------------------------------------------------------------------------
   16. BARRE D'AVANCEMENT DE LECTURE
   -------------------------------------------------------------------------- */
function initProgressBar() {
    const hauteurRestante = () =>
        document.documentElement.scrollHeight - window.innerHeight;

    // Inutile sur une page qui tient dans l'écran : la barre serait toujours
    // pleine ou toujours vide.
    if (hauteurRestante() < 200) return;

    const barre = document.createElement('div');
    barre.className = 'progress-bar';
    barre.setAttribute('role', 'progressbar');
    barre.setAttribute('aria-label', 'Progression dans la page');
    barre.setAttribute('aria-hidden', 'true');
    document.body.appendChild(barre);

    let enAttente = false;
    const majBarre = () => {
        const total = hauteurRestante();
        const ratio = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
        barre.style.transform = `scaleX(${ratio})`;
        enAttente = false;
    };

    // On ne recalcule qu'une fois par frame : le scroll se déclenche bien plus
    // souvent que le navigateur ne redessine.
    const planifier = () => {
        if (enAttente) return;
        enAttente = true;
        requestAnimationFrame(majBarre);
    };

    window.addEventListener('scroll', planifier, { passive: true });
    window.addEventListener('resize', planifier);
    majBarre();
}

/* --------------------------------------------------------------------------
   17. BADGE : largeur de l'animation calée sur le texte
   -------------------------------------------------------------------------- */
function initBadge() {
    const badge = document.querySelector('.badge');
    if (!badge) return;

    const lancer = () => {
        // On mesure la largeur naturelle du texte avant de figer la cible de
        // l'animation : un texte plus long ne sera donc jamais tronqué.
        badge.style.width = 'auto';
        const largeur = Math.ceil(badge.getBoundingClientRect().width);
        badge.style.width = '';

        badge.style.setProperty('--badge-width', `${largeur}px`);
        badge.style.setProperty('--badge-steps', badge.textContent.trim().length);
        // La keyframe part explicitement de zéro : inutile d'attendre une
        // frame, ce qui rendrait l'affichage dépendant de la visibilité.
        badge.classList.add('is-typing');
    };

    // La mesure dépend de la police : on attend son chargement, sinon la
    // largeur est calculée sur la police de repli.
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(lancer);
    else lancer();
}

/* --------------------------------------------------------------------------
   12. FILTRE PARCOURS
   -------------------------------------------------------------------------- */
function initParcoursFilter() {
    const filterBtns = document.querySelectorAll('.timeline-legend .tab-btn');
    const items = document.querySelectorAll('.timeline-item');
    if (filterBtns.length === 0 || items.length === 0) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            items.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

/* --------------------------------------------------------------------------
   13. TRANSITIONS DE PAGE
   -------------------------------------------------------------------------- */
function initPageTransitions() {
    document.body.classList.add('page-entering');
    requestAnimationFrame(() => {
        document.body.classList.remove('page-entering');
    });

    const animationsReduites = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (animationsReduites) return;

    const DUREE_SORTIE = 220;

    // Délégation : un seul écouteur, qui couvre aussi les liens injectés
    // par les templates (projets, parcours, header/footer).
    document.addEventListener('click', (e) => {
        // Laisse passer tout ce qui n'est pas un clic gauche simple :
        // Ctrl/Cmd+clic, clic molette et Maj+clic doivent garder leur
        // comportement natif (nouvel onglet / nouvelle fenêtre).
        if (e.defaultPrevented || e.button !== 0) return;
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;

        const lien = e.target.closest('a');
        if (!lien) return;

        const href = lien.getAttribute('href');
        if (!href || lien.target === '_blank' || lien.hasAttribute('download')) return;

        // Ancres, mailto:, tel: et compagnie : pas de navigation de page.
        if (href.startsWith('#')) return;

        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return;
        if (url.pathname === window.location.pathname && url.hash) return;
        if (url.pathname.endsWith('.pdf')) return;

        e.preventDefault();
        document.body.classList.add('page-exiting');
        setTimeout(() => { window.location.href = lien.href; }, DUREE_SORTIE);
    });

    // Retour arrière depuis le cache navigateur : la page était figée en
    // sortie, il faut la réafficher.
    window.addEventListener('pageshow', (e) => {
        if (e.persisted) document.body.classList.remove('page-exiting');
    });
}

/* --------------------------------------------------------------------------
   14. ONGLETS (page Projets)
   -------------------------------------------------------------------------- */
function initTabs() {
    const menu = document.querySelector('.tabs-menu');
    if (!menu) return;

    const boutons = menu.querySelectorAll('.tab-btn');
    const panneaux = document.querySelectorAll('.tab-content');

    menu.setAttribute('role', 'tablist');
    boutons.forEach(btn => {
        const cible = document.getElementById(btn.getAttribute('data-tab'));
        if (!cible) return;

        const actif = btn.classList.contains('active');
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-controls', cible.id);
        btn.setAttribute('aria-selected', String(actif));
        btn.tabIndex = actif ? 0 : -1;
        cible.setAttribute('role', 'tabpanel');

        btn.addEventListener('click', () => activerOnglet(btn));
    });

    function activerOnglet(btn) {
        panneaux.forEach(p => p.classList.remove('active'));
        boutons.forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
            b.tabIndex = -1;
        });

        document.getElementById(btn.getAttribute('data-tab')).classList.add('active');
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        btn.tabIndex = 0;
    }

    // Flèches gauche/droite entre onglets, comme attendu sur un tablist.
    menu.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
        const liste = Array.from(boutons);
        const index = liste.indexOf(document.activeElement);
        if (index === -1) return;

        const suivant = liste[(index + (e.key === 'ArrowRight' ? 1 : -1) + liste.length) % liste.length];
        activerOnglet(suivant);
        suivant.focus();
    });
}

/* --------------------------------------------------------------------------
   15. MODALES
   -------------------------------------------------------------------------- */
function initModals() {
    const modales = document.querySelectorAll('.modal');
    if (modales.length === 0) return;

    let dernierFocus = null;

    const ouvrir = (modal) => {
        dernierFocus = document.activeElement;
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        modal.querySelector('.close-modal')?.focus();
    };

    const fermer = (modal) => {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        dernierFocus?.focus();
    };

    modales.forEach(modal => {
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-hidden', 'true');
    });

    document.addEventListener('click', (e) => {
        const declencheur = e.target.closest('[data-modal-open]');
        if (declencheur) {
            const modal = document.getElementById(declencheur.getAttribute('data-modal-open'));
            if (modal) ouvrir(modal);
            return;
        }

        // Croix de fermeture, ou clic sur le fond en dehors du contenu.
        const fermeture = e.target.closest('.close-modal');
        if (fermeture) fermer(fermeture.closest('.modal'));
        else if (e.target.classList.contains('modal')) fermer(e.target);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        modales.forEach(modal => {
            if (modal.style.display === 'block') fermer(modal);
        });
    });
}
