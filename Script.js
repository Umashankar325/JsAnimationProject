const initializeLocoScroll = () => {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".container"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(".container", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".container").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
};

const heroscroller = () => {
  gsap.to(".section2-imagecontainer", {
    transform: "translateX(-150%)",
    duration: 1,
    scrollTrigger: {
      trigger: ".section2-imagecontainer",
      scroller: ".container",
      start: "top 70%",
      end: "top -60%",
      scrub: 1,
    },
  });
};
let section5para = () => {
  gsap.from(".section5-paracontainer p", {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".section5-paracontainer",
      scroller: ".container",
      start: "top 80%",
      end: "top 70%",
      scrub: 2,
    },
  });
};

let section2para = () => {
  gsap.from(".section2-paracontainer p", {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".section2-paracontainer",
      scroller: ".container",
      start: "top 80%",
      end: "top 70%",
      scrub: 2,
    },
  });
};
let navanimation = () => {
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
};
initializeLocoScroll();
navanimation();
heroscroller();
section5para();
section2para();
