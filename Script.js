gsap.to(".section2-imagecontainer", {
  transform: "translateX(-150%)",
  duration: 2,
  scrollTrigger: {
    trigger: ".section2-imagecontainer",
    scroller: "body",
    start: "top 70%",
    end: "top -60%",
    scrub: true,
  },
});

let container = document.querySelector(".container");
container.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    gsap.to("nav", {
      opacity: 0,
      y: -50,
    });
  } else {
    gsap.to("nav", {
      opacity: 1,
      y: 0,
    });
  }
});
