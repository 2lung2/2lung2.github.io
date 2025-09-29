gsap.registerPlugin(ScrollTrigger);

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
            end: "30% 20%",
            scrub: 1
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
