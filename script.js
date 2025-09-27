gsap.registerPlugin(ScrollTrigger);

gsap.to(".logoprincipal img", {
    opacity: 1,
    ease: "power1.inOut",
    duration: 2,
})

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
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".liste",
            start: "top 40%",
            end: "top 30%",
            scrub: 1,
            markers: true
        }
    }
);
