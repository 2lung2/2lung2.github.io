// Chargement plugin
gsap.registerPlugin(ScrollTrigger);


// Vue
const app = Vue.createApp({
    data() {
        return {
            title: "title",
            image: "image",
            description: "description",
            role: "role",
            software: "software",

            speculumRole: "role",
            speculumImage: "./media/images/linkedin_logo.png",
            speculumDescription: "alsdaslkd",
            speculumSoftware: "software",

            lapiluleRole: "role",
            lapiluleImage: "./media/images/linkedin_logo.png",
            lapiluleDescription: "alsdaslkd",
            lapiluleSoftware: "software",

            gluttonyRole: "role",
            gluttonyImage: "./media/images/linkedin_logo.png",
            gluttonyDescription: "alsdaslkd",
            gluttonySoftware: "software",

            plumeRole: "role",
            plumeImage: "./media/images/linkedin_logo.png",
            plumeDescription: "alsdaslkd",
            plumeSoftware: "software",

            root: document.querySelector('root')
        };
    },
    methods: {
        changeModal(newtitle, newimage, newdescription, newrole, newsoftware) {
            this.title = newtitle;
            this.image = this[newimage]
            this.description = this[newdescription];
            this.role = this[newrole];
            this.software = this[newsoftware];
        },
        changeMode() {
            console.log("alskdjs");
            this.root.style.setProperty('--blanc', '#ff5733');
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
            scrub: 1,
            markers: true
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
const nightButton = document.querySelector('.nightmode img');

let isNightMode = false;
localStorage.setItem("saveIsNightMode", isNightMode);
/* let saveIsNightMode = localStorage.getItem("saveIsNightMode"); */

nightMode()

// Clique du bouton
nightButton.addEventListener('click', function () {
    isNightMode = !isNightMode;
    nightMode()
})

// change Noir a blanc vice-versa et les images à leur version light/dark
function nightMode() {
    if (isNightMode == true) {
        r.style.setProperty('--blanc', '#272635');
        r.style.setProperty('--noir', '#e8e9f3');
        logoPrincipal.src = "./media/images/logo_lty_blanc.png";
        logoLinkedIn.src = "./media/images/linkedin_logo_noir.png";
        nightButton.src = "./media/images/nightmode.png"
    } else {
        r.style.setProperty('--blanc', '#e8e9f3');
        r.style.setProperty('--noir', '#272635');
        logoPrincipal.src = "./media/images/logo_lty.png";
        logoLinkedIn.src = "./media/images/linkedin_logo.png";
        nightButton.src = "./media/images/nightmode_blanc.png"
    }
}



