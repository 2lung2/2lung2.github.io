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
        changeModal() {
            fetch("./data.json")
                // transforme les données json
                .then((response) => response.json())
                // mets les données dans la valeur datasArr du return
                .then((donnees) => {
                    this.datasArr = donnees;
                    this.title = donnees[this.index].title;
                    this.image = donnees[this.index].image;
                    this.description = donnees[this.index].description;
                    this.role = donnees[this.index].role;
                    this.software = donnees[this.index].software;
                    this.link = donnees[this.index].link;
                    console.log(donnees[this.index].role)
                })
                // message en cas d'erreur
                .catch((error) => {
                    console.log("erreur detecté", error);
                })
        },
    }
});

app.mount("body")



// GSAP

// Accueil
gsap.to(".logoprincipal img", {
    opacity: 1,
    ease: "power1.inOut",
    duration: 1,
})

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

// A Propos
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
gsap.to(
    "#titreprojets",
    {
        alpha: 0,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "#titreprojets",
            start: "50% 30%",
            end: "50% 10%",
            scrub: 1,
            markers: true
        }
    }
);

gsap.to(
    ".mainprojets",
    {
        scale: 1.1,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".mainprojets",
            start: "top 80%",
            end: "top 50%",
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
    // Alterne variable nightmode
    isNightMode = !isNightMode;
    // appel fonction nightmode
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



