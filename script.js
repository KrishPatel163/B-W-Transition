gsap.registerPlugin(ScrollTrigger);

const transitionElement = document.getElementById("transition");
const firstChild = document.querySelector(".child-1");
const secondChild = document.querySelector(".child-2");

const imgDiv = document.querySelector("#img-div1");
const heading1 = document.querySelector("#heading")
const subtext1 = document.querySelector("#subtext")

const imgDiv2 = document.querySelector("#img-div2");

// Background color change animation
gsap.to(transitionElement, {
    backgroundColor: "#000",
    color: "#fff",
    scrollTrigger: {
        trigger: transitionElement,
        start: () => `top+=${firstChild.offsetHeight * 0.75} top`,
        end: () => `bottom-=${secondChild.offsetHeight * 0.5} bottom`,
        scrub: 2,
        // markers: true
    },
});

var tl1 = gsap.timeline();
tl1.from(imgDiv, {
    x: -100,
    opacity: 0,
    duration: 1.2,
}).from("#heading, #subtext", {
    y: -100,
    opacity: 0,
    stagger: 0.5,
    duration: 1,
});
gsap.timeline({
    scrollTrigger: {
        trigger: firstChild,
        start: "center center",
        end: "bottom top",
        scrub: 1,
        // markers: true,
    }
})
.to([imgDiv, heading1, subtext1], {
    y: -100,
    opacity: 0,
    duration: 1.2,
})

var tl2 = gsap.timeline();

tl2.from(imgDiv2, {
    scrollTrigger: {
        trigger: ".child-2",
        start: () => `top-=${secondChild.offsetHeight * 0.25} top`,
        end: () => `bottom-=${secondChild.offsetHeight * 0.25} bottom`,
        scrub: 2,
        // markers: true
    },
    y: -100,
    opacity: 0,
    duration: 1.4,
}).from("#heading2, #subtext2", {
    scrollTrigger: {
        trigger: ".child-2",
        start: () => `top-=${secondChild.offsetHeight * 0.25} top`,
        end: () => `bottom-=${secondChild.offsetHeight * 0.25} bottom`,
        scrub: 2,
        // markers: true
    },
    y: -100,
    opacity: 0,
    stagger: 0.5,
    duration: 1.5,
});
