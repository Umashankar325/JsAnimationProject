gsap.to(".section2-imagecontainer", {
  transform: "translateX(-150%)",
  duration: 2,
  scrollTrigger: {
    trigger: ".section2-imagecontainer",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top -60%",
    scrub: true,
  },
});

let container = document.querySelector(".container");
container.addEventListener("wheel", (e) => {
  // console.log(e.deltaY);
  if (e.deltaY > 0) {
    console.log("grater");
    gsap.to("nav", {
      opacity: 0,
      y: -50,
    });
  } else {
    console.log("small");
    gsap.to("nav", {
      opacity: 1,
      y: 0,
    });
  }
});
