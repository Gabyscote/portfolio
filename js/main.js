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
        description: "Poursuite de mon apprentissage vers l'UI/UX et la gestion d'équipe.",
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
        description: "Conception d'une plateforme web de covoiturage étudiant sous Laravel et Tailwind CSS. Mise en place d'une base de données.",
        lien: "campusgo.html"
    },
    {
        date: "Étés 2025 & 2026",
        categorie: "Job d'été",
        classeCat: "cat-pro",
        titre: "Ouvrier chez VCS",
        description: "Emploi saisonnier reconduit sur deux années consécutives chez Vallée Construction Services, spécialisé en couverture, bardage et étanchéité de toiture. Apprentissage du travail manuel et de la rigueur sur chantier.",
        lien: null
    },
    {
        date: "Juin 2025",
        categorie: "Projet Universitaire",
        classeCat: "cat-proj",
        titre: "Application Métro de Tokyo",
        description: "Développement d'un logiciel lourd (C# WinForms) pour gérer un réseau de transports en commun, avec conception de l'UI/UX.",
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
        <div class="project-showcase showcase-margin ${reverseClass}">
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
    initVisualEnhancements(); // ← toutes les améliorations visuelles
});

function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    icon.className = savedTheme === 'light' ? 'fa-solid fa-lightbulb' : 'fa-regular fa-lightbulb';

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        icon.className = newTheme === 'light' ? 'fa-solid fa-lightbulb' : 'fa-regular fa-lightbulb';
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
    const elementsToReveal = document.querySelectorAll('.section-title, .about-text, .skills-card, .split-row, .case-section, .feature-card');
    
    elementsToReveal.forEach((el, index) => {
        if (!el.classList.contains('reveal')) {
            el.classList.add('reveal');
        }
        if (el.classList.contains('split-row') || el.classList.contains('feature-card')) {
            el.style.transitionDelay = `${(index % 3) * 0.15}s`;
        }
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Fait apparaître l'élément
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
// AMÉLIORATIONS VISUELLES
// ==========================================================================

// ------------------------------------------------------------------
// 1. CURSEUR PERSONNALISÉ
// ------------------------------------------------------------------
function initCustomCursor() {
    if (window.matchMedia('(max-width: 900px)').matches) return;
    // Vérification tactile
    if ('ontouchstart' in window) return;

    const dot  = document.createElement('div');
    const ring = document.createElement('div');
    dot.className  = 'cursor-dot';
    ring.className = 'cursor-ring';

    // Départ hors écran pour éviter le flash en (0,0)
    dot.style.left  = ring.style.left  = '-100px';
    dot.style.top   = ring.style.top   = '-100px';

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    // On cache le curseur natif APRÈS injection dans le DOM
    document.body.classList.add('custom-cursor-active');
    document.documentElement.classList.add('custom-cursor-active');

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = mouseX + 'px';
        dot.style.top  = mouseY + 'px';
    });

    function animateRing() {
        ringX += (mouseX - ringX) * 0.13;
        ringY += (mouseY - ringY) * 0.13;
        ring.style.left = ringX + 'px';
        ring.style.top  = ringY + 'px';
        requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover sur éléments interactifs
    const interactives = 'a, button, .btn, .feature-card, .project-showcase, .timeline-content, input, textarea, .tab-btn';
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(interactives)) {
            dot.classList.add('cursor-hover');
            ring.classList.add('cursor-hover');
        }
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(interactives)) {
            dot.classList.remove('cursor-hover');
            ring.classList.remove('cursor-hover');
        }
    });

    // Cacher seulement quand la souris quitte la fenêtre
    document.documentElement.addEventListener('mouseleave', () => {
        dot.style.opacity  = '0';
        ring.style.opacity = '0';
    });
    document.documentElement.addEventListener('mouseenter', () => {
        dot.style.opacity  = '1';
        ring.style.opacity = '0.6';
    });
}

// ------------------------------------------------------------------
// 2. EFFET TYPING SUR LE BADGE HERO
// ------------------------------------------------------------------
function initTypingEffect() {
    const badge = document.querySelector('.badge');
    if (!badge) return;

    const phrases = [
        'Développeur & Futur Chef de Projets',
        'Passionné d\'UI/UX Design',
        'En recherche d\'alternance 2026'
    ];

    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    badge.textContent = '';
    badge.appendChild(cursor);

    let phraseIndex = 0;
    let charIndex   = 0;
    let isDeleting  = false;
    let pause       = false;

    function type() {
        if (pause) return;
        const current = phrases[phraseIndex];

        if (!isDeleting) {
            // Écriture
            badge.textContent = current.substring(0, charIndex + 1);
            badge.appendChild(cursor);
            charIndex++;
            if (charIndex === current.length) {
                // Pause avant effacement
                pause = true;
                setTimeout(() => { isDeleting = true; pause = false; }, 2200);
            }
        } else {
            // Effacement
            badge.textContent = current.substring(0, charIndex - 1);
            badge.appendChild(cursor);
            charIndex--;
            if (charIndex === 0) {
                isDeleting  = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
        }

        const speed = isDeleting ? 45 : 80;
        setTimeout(type, speed);
    }

    // Délai initial pour laisser la page se charger
    setTimeout(type, 600);
}

// ------------------------------------------------------------------
// 3. TILT 3D SUR LES CARTES PROJET
// ------------------------------------------------------------------
function initTiltEffect() {
    // Appliqué aussi aux feature-cards des pages détail
    function applyTilt(selector, maxTilt = 8) {
        document.querySelectorAll(selector).forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect   = card.getBoundingClientRect();
                const x      = e.clientX - rect.left;
                const y      = e.clientY - rect.top;
                const cx     = rect.width  / 2;
                const cy     = rect.height / 2;
                const rotateX = ((y - cy) / cy) * -maxTilt;
                const rotateY = ((x - cx) / cx) *  maxTilt;
                card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
            });
        });
    }

    applyTilt('.project-showcase', 6);
    applyTilt('.feature-card',     8);
}

// ------------------------------------------------------------------
// 4. COMPÉTENCES — restauration de l'affichage original en liste
// ------------------------------------------------------------------
function initSkillBars() {
    const skillsCard = document.querySelector('.skills-card');
    if (!skillsCard) return;

    // On restaure simplement la liste originale avec les vrais contenus
    const title = skillsCard.querySelector('h3');
    skillsCard.innerHTML = '';
    if (title) skillsCard.appendChild(title);

    const skills = [
        { cat: 'Développement',      items: 'PHP, Laravel, C#, Python, JS' },
        { cat: 'Bases de données',   items: 'SQL, MariaDB, MySQL' },
        { cat: 'Réseaux & Systèmes', items: 'Linux, Packet Tracer' },
        { cat: 'Design UI/UX',       items: 'Figma, Canva' },
    ];

    const ul = document.createElement('ul');
    skills.forEach(s => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="dot-list"></span><strong>${s.cat} :</strong> ${s.items}`;
        ul.appendChild(li);
    });
    skillsCard.appendChild(ul);
}

// ------------------------------------------------------------------
// 7. BOUTON RETOUR EN HAUT
// ------------------------------------------------------------------
function initBackToTop() {
    const btn = document.createElement('button');
    btn.className   = 'back-to-top';
    btn.innerHTML   = '<i class="fa-solid fa-chevron-up"></i>';
    btn.setAttribute('aria-label', 'Retour en haut de page');
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


// ------------------------------------------------------------------
// 10. PARTICULES INTERACTIVES — toutes les pages, fond fixe
// ------------------------------------------------------------------
function initParticles() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let W = canvas.width  = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    function getColor() {
        return getComputedStyle(document.documentElement)
            .getPropertyValue('--purple-main').trim() || '#8b5cf6';
    }

    const PARTICLE_COUNT = Math.min(60, Math.floor((W * H) / 18000));
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x:       Math.random() * W,
        y:       Math.random() * H,
        vx:      (Math.random() - 0.5) * 0.4,
        vy:      (Math.random() - 0.5) * 0.4,
        radius:  Math.random() * 1.8 + 0.8,
        opacity: Math.random() * 0.35 + 0.2,
    }));

    let mouse = { x: null, y: null };
    const MOUSE_RADIUS = 110;

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    function drawLine(p1, p2, dist, maxDist, color) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = color;
        ctx.globalAlpha = (1 - dist / maxDist) * 0.35;
        ctx.lineWidth   = 0.7;
        ctx.stroke();
        ctx.globalAlpha = 1;
    }

    function animate() {
        ctx.clearRect(0, 0, W, H);
        const color = getColor();

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > W) p.vx *= -1;
            if (p.y < 0 || p.y > H) p.vy *= -1;

            if (mouse.x !== null) {
                const dx   = mouse.x - p.x;
                const dy   = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MOUSE_RADIUS) {
                    p.x += (dx / dist) * 0.5;
                    p.y += (dy / dist) * 0.5;
                }
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.globalAlpha = p.opacity;
            ctx.fill();
            ctx.globalAlpha = 1;
        });

        const MAX_DIST = 130;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx   = particles[i].x - particles[j].x;
                const dy   = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MAX_DIST) drawLine(particles[i], particles[j], dist, MAX_DIST, color);
            }
        }

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
    });
}

function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    const progressBar = document.getElementById("scroll-progress-bar"); // ID mis à jour
    const progressContainer = document.querySelector(".scroll-progress-container");

    if (progressBar && progressContainer) {
        if (height <= 0) {
            progressContainer.style.display = "none";
            return; 
        } else {
            progressContainer.style.display = "block"; 
        }

        let scrolled = (winScroll / height) * 100;
        if (isNaN(scrolled)) scrolled = 0;

        progressBar.style.width = scrolled + "%";
    }
}

// ------------------------------------------------------------------
// INIT GLOBAL
// ------------------------------------------------------------------
function initVisualEnhancements() {
    initCustomCursor();
    initTypingEffect();
    initTiltEffect();
    initSkillBars();
    initBackToTop();
    initParticles();
    window.addEventListener("scroll", updateScrollProgress);
}
