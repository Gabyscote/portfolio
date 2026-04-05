// ==========================================================================
// 1. BASE DE DONNÉES DES PROJETS
// ==========================================================================
const mesProjets = [
    {
        id: "jlm",
        date: "Mars 2026",
        type: "Stage en Entreprise (8 semaines)",
        titre: "Refonte d'un ERP Industriel",
        description: "Transformation d'un prototype de gestion de stocks et de production en une plateforme web fiable, sécurisée et responsive pour le secteur industriel.",
        technos: ["PHP", "SQL", "CSS/UI", "Raspberry Pi"],
        lien: "stage.html",
        dossierImages: "img/stage/",
        images: "stage_accueil.webp, stage_detail_compo.webp, stage_detail_prod.webp, stage_of.webp, stage_simu.webp"
    },
    {
        id: "campusgo",
        date: "Décembre 2025",
        type: "Application Web",
        titre: "CampusGo - Covoiturage Étudiant",
        description: "Développement d'une plateforme complète de covoiturage dédiée à la vie étudiante, intégrant la gestion des trajets, des véhicules et des profils utilisateurs.",
        technos: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
        lien: "campusgo.html",
        dossierImages: "img/campusgo/",
        images: "campusgo_accueil.webp, campusgo_bd.webp, campusgo_profil.webp, campusgo_trajet.webp, campusgo_admin.webp"
    },
    {
        id: "metro",
        date: "Juin 2025",
        type: "Application Logicielle",
        titre: "Gestion du Métro de Tokyo",
        description: "Conception d'une application logicielle (Windows Forms) pour l'administration et la visualisation des lignes, stations et horaires du réseau métropolitain de Tokyo.",
        technos: ["C#", "WinForms", ".NET", "SQL"],
        lien: "metro.html",
        dossierImages: "img/metro/",
        images: "metro_accueil.webp, metro_bd.webp"
    }
];

// ==========================================================================
// 2. BASE DE DONNÉES DU PARCOURS (TIMELINE)
// ==========================================================================
const monParcours = [
    {
        date: "Septembre 2026",
        categorie: "Formation",
        classeCat: "cat-edu",
        titre: "Normandie Web School (NWS)",
        description: "Début prévu du cursus Chef de Projets Digitaux (en alternance). Poursuite de mon apprentissage vers l'UI/UX et la gestion d'équipe.",
        lien: null
    },
    {
        date: "Janvier - Mars 2026",
        categorie: "Stage en Entreprise",
        classeCat: "cat-pro",
        titre: "JLM Solution Informatique",
        description: "Développement et optimisation d'une plateforme web (ERP) pour la gestion de production et de stocks industriels en PHP/SQL. Adaptation mobile et UI.",
        lien: "stage.html"
    },
    {
        date: "Décembre 2025",
        categorie: "Projet Universitaire",
        classeCat: "cat-proj",
        titre: "Campus'Go",
        description: "Conception d'une plateforme web de covoiturage étudiant sous Laravel 11 et Tailwind CSS. Mise en place d'une base de données complexe.",
        lien: "campusgo.html"
    },
    {
        date: "Été 2025",
        categorie: "Job d'été",
        classeCat: "cat-pro",
        titre: "Ouvrier chez VCS",
        description: "Emploi d'un mois et demi chez Vallée Construction Services, spécialisé en couverture, bardage et étanchéité de toiture. Apprentissage du travail manuel et de la rigueur sur chantier.",
        lien: null
    },
    {
        date: "Juin 2025",
        categorie: "Projet Universitaire",
        classeCat: "cat-proj",
        titre: "Application Métro de Tokyo",
        description: "Développement d'un logiciel lourd (C# WinForms) en architecture N-Tiers pour gérer un réseau de transports en commun, avec conception de l'UI/UX.",
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

// ==========================================================================
// 3. GÉNÉRATEURS DE TEMPLATES
// ==========================================================================
function genererTemplateProjet(projet, isReverse) {
    const tagsHtml = projet.technos.map(tech => `<span>${tech}</span>`).join('');
    const reverseClass = isReverse ? 'reverse' : ''; 
    return `
        <div class="project-showcase showcase-margin ${reverseClass} reveal">
            <div class="project-media">
                <div class="carousel auto-carousel" data-folder="${projet.dossierImages}" data-photos="${projet.images}"></div>
            </div>
            <div class="project-info">
                <span class="project-badge"><i class="fa-regular fa-calendar"></i> ${projet.date} • ${projet.type}</span>
                <h3>${projet.titre}</h3>
                <p>${projet.description}</p>
                <div class="tech-tags">${tagsHtml}</div>
                <a href="${projet.lien}" class="btn btn-primary btn-margin-top">Découvrir le projet <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    `;
}

function genererTemplateParcours(item) {
    let lienHtml = '';
    if (item.lien) {
        lienHtml = `<a href="${item.lien}" style="color: var(--purple-main); font-size: 0.9rem; margin-top: 10px; display: inline-block; font-weight: 500;">Voir les détails <i class="fa-solid fa-arrow-right"></i></a>`;
    }

    return `
        <div class="timeline-item reveal">
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
        let htmlInfo = "";
        mesProjets.forEach((projet, index) => {
            htmlInfo += genererTemplateProjet(projet, index % 2 === 0);
        });
        containerProjetsInfo.innerHTML = htmlInfo;
    }
    if (containerDernierProjet && mesProjets.length > 0) {
        containerDernierProjet.innerHTML = genererTemplateProjet(mesProjets[0], false);
    }
    if (containerParcours) {
        let htmlParcours = "";
        monParcours.forEach(item => {
            htmlParcours += genererTemplateParcours(item);
        });
        containerParcours.innerHTML = htmlParcours;
    }
    
    initCarousels();
}

// ==========================================================================
// 4. FONCTIONS GLOBALES & UI
// ==========================================================================
async function loadComponent(elementId, filePath) {
    try {
        const element = document.getElementById(elementId);
        if (!element) return;
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Erreur: ${filePath}`);
        const data = await response.text();
        element.innerHTML = data;
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    await Promise.all([
        loadComponent("header-container", "header.html"),
        loadComponent("footer-container", "footer.html")
    ]);

    initTheme();
    initActiveLinks();
    initMobileMenu();
    afficherContenuDynamique(); 
    initScrollAnimations();
    initLightbox();
});

function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    icon.className = savedTheme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        icon.className = newTheme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    });
}

function initActiveLinks() {
    let currentPath = window.location.pathname.split('/').pop();
    if (currentPath === '') currentPath = 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPath) link.classList.add('active');
    });
}

function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-active');
            const icon = hamburger.querySelector('i');
            icon.className = navLinks.classList.contains('mobile-active') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        });
    }
}

function initCarousels() {
    const carousels = document.querySelectorAll('.auto-carousel');
    carousels.forEach(carousel => {
        const folder = carousel.getAttribute('data-folder');
        const photos = carousel.getAttribute('data-photos').split(',').map(photo => photo.trim());
        
        photos.forEach((photo, index) => {
            const img = document.createElement('img');
            img.src = folder + photo;
            img.className = 'carousel-item';
            if (index === 0) img.classList.add('active');
            img.alt = "Capture projet";
            carousel.appendChild(img);
        });

        const items = carousel.querySelectorAll('.carousel-item');
        if(items.length <= 1) return;

        let currentIndex = 0;
        setInterval(() => {
            items[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % items.length;
            items[currentIndex].classList.add('active');
        }, 3500);
    });
}

function initScrollAnimations() {
    const elementsToReveal = document.querySelectorAll('.section-title, .about-text, .skills-card, .passion-card, .case-section, .feature-card, .project-showcase');
    
    elementsToReveal.forEach((el, index) => {
        if (!el.classList.contains('reveal')) {
            el.classList.add('reveal');
        }
        if (el.classList.contains('passion-card') || el.classList.contains('feature-card')) {
            el.style.transitionDelay = `${(index % 3) * 0.15}s`;
        }
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initLightbox() {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
        <span class="close-lightbox">&times;</span>
        <img class="lightbox-content" id="lightbox-img">
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = document.getElementById('lightbox-img');
    
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG' && (e.target.closest('.case-image') || e.target.closest('.feature-img') || e.target.classList.contains('feature-img'))) {
            lightbox.style.display = 'flex';
            lightboxImg.src = e.target.src;
            setTimeout(() => lightbox.classList.add('active'), 10);
        }
    });

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        setTimeout(() => lightbox.style.display = 'none', 300);
    };

    lightbox.querySelector('.close-lightbox').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
}

// ==========================================================================
// ANIMATION SCROLL : F1
// ==========================================================================
window.addEventListener('scroll', () => {
    // 1. On calcule la distance scrollée depuis le haut
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    
    // 2. On calcule la hauteur totale scrollable de la page
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // 3. On en déduit le pourcentage d'avancement
    let scrolled = (winScroll / height) * 100;
    
    // Évite les petits bugs si la page est trop courte
    if (isNaN(scrolled)) scrolled = 0;

    // Récupération des éléments HTML
    const progressBar = document.getElementById("f1-progress-bar");
    const f1Car = document.getElementById("f1-car");
    const finishFlag = document.getElementById("finish-flag");

    if (progressBar && f1Car && finishFlag) {
        // On fait avancer la largeur de la ligne
        progressBar.style.width = scrolled + "%";
        
        // On vérifie si on a franchi la ligne d'arrivée (tout en bas)
        if (scrolled >= 99) {
            f1Car.classList.add("hide");      // Cache la F1
            finishFlag.classList.add("show"); // Montre le drapeau
        } else {
            f1Car.classList.remove("hide");      // Remet la F1
            finishFlag.classList.remove("show"); // Cache le drapeau
        }
    }
});
// ==========================================================================
// F1 ALÉATOIRE AU CHARGEMENT DE LA PAGE
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Ton super dossier f1
    const imgFolder = 'img/f1/';
    
    // Tes deux premières voitures (tu pourras en ajouter d'autres)
    const f1Cars = [
        'Ferrari.png',
        'Redbull.png',
        'Mercedes.png',
        'McLaren.png',
        'Williams.png',
        'Aston.png',
        'Alpine.png'
    ];

    // On crée un petit "radar" qui cherche le header
    const waitForF1 = setInterval(() => {
        const f1ImgElement = document.getElementById('f1-car');
        
        if (f1ImgElement) {
            // Dès qu'il trouve la voiture, on coupe le radar !
            clearInterval(waitForF1);
            
            // On s'assure que tu as bien mis la balise <IMG>
            if (f1ImgElement.tagName === 'IMG') {
                const randomIndex = Math.floor(Math.random() * f1Cars.length);
                f1ImgElement.src = imgFolder + f1Cars[randomIndex];
                f1ImgElement.style.display = 'block';
            }
        }
    }, 100); // Il vérifie toutes les 100 millisecondes
});