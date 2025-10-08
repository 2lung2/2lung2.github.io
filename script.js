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
            start: "60% 30%",
            end: "60% 20%",
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
        start: "top 30%",
        end: "bottom top",
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
            start: "-20% 40%",
            end: "-20% 30%",
            scrub: 1
        }
    }
);



