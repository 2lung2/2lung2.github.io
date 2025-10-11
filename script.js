// Chargement plugin
gsap.registerPlugin(ScrollTrigger);


// Vue
const app = Vue.createApp({
    data() {
        return {
            modalIsShown: false,

            title: "title",
            image: "image",
            description: "description",
            role: "role",
            software: "software",
            link: "link",

            speculumRole: "Modélisation, animation, design sonore, montage",
            speculumImage: "./media/images/projets/speculum_screen1.png",
            speculumDescription: "Court-métrage animé d'un univers étrange. Le monde réalisé est abstrait et étrange. J'ai modélisé et monté le tout pour créer une ambiance énigmatique.",
            speculumSoftware: "Maya, Davinci Resolve, Reaper",
            speculumLink: "https://www.youtube.com/watch?v=BpQ4KrSqSSo",

            lapiluleRole: "Montage vidéo, direction artistique, création de quelques animations 2D, scénariste assistant, caméraman. Réalisé en collaboration avec Nicolas Cruz, Thearylou Lach, Xavier Martineau",
            lapiluleImage: "./media/images/projets/lapilule_screen1.jpg",
            lapiluleDescription: "Court-métrage sur le délire. Avec la pilule on voulait montrer le délire d'un écrivain dans une histoire courte avec des visuels percutant.",
            lapiluleSoftware: "Davinci Resolve, After effects, Dragonframe 4",
            lapiluleLink: "https://www.youtube.com/watch?v=x_g__19hLGA",

            gluttonyRole: "Programmation du jeu, level design",
            gluttonyImage: "./media/images/projets/gluttony_screen1.png",
            gluttonyDescription: "Jeu de plateforme 2D développé avec Phaser3. Le joueur contrôle Pierre, un aventurier, pour vivre sa quête de vengeance contre son ami Jean qui l'a trahi pour être tout puissant. Pour faire cela il doit se retrouver et parcourir le château où Jean, maintenant son ennemi se refuge. ",
            gluttonySoftware: "Visual Studio (Javascript, Phaser3), Itch.io",
            gluttonyLink: "https://lung2.itch.io/gluttony",

            plumeRole: "Modélisation, rigging, faire des rendus",
            plumeImage: "./media/images/projets/plume_screen1.jpg",
            plumeDescription: "Rendus d'un personnage que j'ai créé. J'ai modélisé un personnage moitié homme et moitié corbeau pour rentrer dans un monde noir et blanc. Ce personnage est un produit de son environnement sombre.",
            plumeSoftware: "Maya",
            plumeLink: " ",
        };
    },
    methods: {
        changeModal(newtitle, newimage, newdescription, newrole, newsoftware, newlink) {
            this.title = newtitle;
            this.image = this[newimage]
            this.description = this[newdescription];
            this.role = this[newrole];
            this.software = this[newsoftware];
            this.link = this[newlink]
        },
    }
});

app.mount("body")



// GSAP
gsap.to(".logoprincipal img", {
    opacity: 1,
    ease: "power1.inOut",
    duration: 1,
})

gsap.to(
    ".logoprincipal",
    {
        alpha: 0,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".logoprincipal",
            start: "30% 30%",
            end: "30% 10%",
            scrub: 1
        }
    }
);

gsap.to(".monnom", {
    translateX: "1%",
    ease: "none",
    scrollTrigger: {
        trigger: ".logoprincipal",
        start: "20% 30%",
        end: "70% top",
        scrub: 1
    }
});

gsap.fromTo(
    ".liste",
    { alpha: 0, y: 30 },
    {
        alpha: 1,
        y: -30,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: ".liste",
            start: "-30% 60%",
            end: "-30% 25%",
            scrub: 1
        }
    }
);



// Javascript
let r = document.querySelector(':root');
const logoPrincipal = document.querySelector('.logoprincipal img');
const logoNight = document.querySelector('.logoprincipal img');
const logoLinkedIn = document.querySelector('.logolinkedin');
const logoYoutube = document.querySelector('.logoyoutube');
const nightButton = document.querySelector('.nightmode img');
let isNightMode = false;
localStorage.setItem("saveIsNightMode", isNightMode);
/* let saveIsNightMode = localStorage.getItem("saveIsNightMode"); */
const contactButton = document.getElementById("contactbutton");
const zoneContact = document.querySelector('footer');

nightMode()

// Clique du bouton nightmode
nightButton.addEventListener('click', function () {
    isNightMode = !isNightMode;
    nightMode()
})

// Clique bouton contact
contactButton.addEventListener("click", () => {
  zoneContact.scrollIntoView({ behavior: "smooth", block: "end" });
});

// change Noir a blanc vice-versa et les images à leur version light/dark
function nightMode() {
    if (isNightMode == true) {
        r.style.setProperty('--blanc', '#272635');
        r.style.setProperty('--noir', '#e8e9f3');
        logoPrincipal.src = "./media/images/logo_lty_blanc.png";
        logoLinkedIn.src = "./media/images/logos/linkedin_logo_noir.png";
        logoYoutube.src = "./media/images/logos/logo_youtube_noir.png";
        nightButton.src = "./media/images/nightmode.png";
        console.log(isNightMode)
    } else {
        r.style.setProperty('--blanc', '#e8e9f3');
        r.style.setProperty('--noir', '#272635');
        logoPrincipal.src = "./media/images/logo_lty.png";
        logoLinkedIn.src = "./media/images/logos/linkedin_logo.png";
        logoYoutube.src = "./media/images/logos/logo_youtube_blanc.png";
        nightButton.src = "./media/images/nightmode_blanc.png";
        console.log(isNightMode)
    }
}



