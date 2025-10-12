// Chargement plugin
gsap.registerPlugin(ScrollTrigger);


// Vue
const app = Vue.createApp({
    data() {
        return {
            modalIsShown: false,
            index: 0,
            title: "title",
            image: "image",
            description: "description",
            role: "role",
            software: "software",
            link: "link"
        };
    },
    methods: {
        // Clique sur projet
        changeModal() {
            // prends données de data.json
            fetch("./data.json")
                // transforme les données json
                .then((response) => response.json())
                // mets change les infos du modals selon le projet choisi avec l'index
                .then((donnees) => {
                    this.title = donnees[this.index].title;
                    this.image = donnees[this.index].image;
                    this.description = donnees[this.index].description;
                    this.role = donnees[this.index].role;
                    this.software = donnees[this.index].software;
                    this.link = donnees[this.index].link;
                })
                // message affiché en cas d'erreur
                .catch((error) => {
                    console.log("erreur detecté", error);
                })
        },
    }
});

app.mount("body")



// GSAP

// Accueil

// logo apparait
gsap.to(".logoprincipal img", {
    opacity: 1,
    ease: "power1.inOut",
    duration: 1,
})

// Nom slide in
gsap.to(".monnom", {
    translateX: "1%",
    ease: "expo.out",
    scrollTrigger: {
        trigger: ".logoprincipal",
        start: "90% 50%",
        end: "90% 20%",
        scrub: 1
    }
});

// liens apparaissent en scroll
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


// À Propos

// Titre À propos disparait
gsap.to(
    "#titrepropos",
    {
        alpha: 0,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "#titrepropos",
            start: "50% 30%",
            end: "50% 10%",
            scrub: 1
        }
    }
);

// Bio grandit
gsap.to(
    ".mainapropos",
    {
        scale: 1.3,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".mainapropos",
            start: "top 80%",
            end: "top 50%",
            scrub: 1
        }
    }
);

// Compétences apparaissent
gsap.fromTo(
    "section",
    { alpha: 0, y: 30 },
    {
        alpha: 1,
        y: -30,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: "section",
            start: "top 40%",
            end: "top 25%",
            scrub: 1
        }
    }
);


// Projets

// Titre projet disparait
gsap.to(
    "#titreprojets",
    {
        alpha: 0,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "#titreprojets",
            start: "50% 30%",
            end: "50% 10%",
            scrub: 1
        }
    }
);

// projets agrandissent
gsap.to(
    ".mainprojets",
    {
        scale: 1.1,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".mainprojets",
            start: "20% 80%",
            end: "20% 50%",
            scrub: 1
        }
    }
);



// Javascript base
let r = document.querySelector(':root');
const logoPrincipal = document.querySelector('.logoprincipal img');
const logoDark = document.querySelector('.logoprincipal img');
const logoLinkedIn = document.querySelector('.logolinkedin');
const logoYoutube = document.querySelector('.logoyoutube');
const darkButton = document.querySelector('.darkmode img');
const contactButton = document.getElementById("contactbutton");
const zoneContact = document.querySelector('footer');
let isDarkMode;

// Check si c'est dark mode au lancement de la page;
darkMode()

// Clique du bouton darkmode
darkButton.addEventListener('click', function () {
    // Alterne variable darkmode
    isDarkMode = !isDarkMode;
    // Sauvegarde la valeur de isdarkMode
    localStorage.setItem("saveIsDarkMode", isDarkMode);
    // appel fonction darkmode
    darkMode()
})

// change Noir a blanc vice-versa et les images à leur version light/dark
function darkMode() {
    // charge la sauvegarde isDarkMode
    let saveIsDarkMode = localStorage.getItem("saveIsDarkMode");

    if (saveIsDarkMode == "true") {
        // Dark mode
        r.style.setProperty('--blanc', '#272635');
        r.style.setProperty('--noir', '#e8e9f3');
        logoPrincipal.src = "./media/images/logo_lty_blanc.png";
        logoLinkedIn.src = "./media/images/logos/linkedin_logo_noir.png";
        logoYoutube.src = "./media/images/logos/logo_youtube_noir.png";
        darkButton.src = "./media/images/darkmode.png";
    } else {
        // Light mode
        r.style.setProperty('--blanc', '#e8e9f3');
        r.style.setProperty('--noir', '#272635');
        logoPrincipal.src = "./media/images/logo_lty.png";
        logoLinkedIn.src = "./media/images/logos/linkedin_logo.png";
        logoYoutube.src = "./media/images/logos/logo_youtube_blanc.png";
        darkButton.src = "./media/images/darkmode_blanc.png";
    }
}

// scroll au footer au clique du bouton contact
contactButton.addEventListener("click", () => {
    zoneContact.scrollIntoView({ behavior: "smooth", block: "end" });
});


