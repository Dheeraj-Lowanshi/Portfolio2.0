// heading animation start
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".headingAnimation",
    scroller: "body",
    start: "top 95%",
    end: "top 85%",
    scrub: 2,
    //markers: true,
  },
});
tl2.from("#title", {
  x: 100,
  opacity: 0,
  duration: 0.8,
});
tl2.from("#heading", {
  x: -100,
  opacity: 0,
  duration: 0.8,
});

var about = gsap.timeline({
  scrollTrigger: {
    trigger: ".headingAnimation",
    scroller: "body",
    start: "top 50%",
    end: "top 40%",
    scrub: 2,
    //markers: true,
  },
});
about.from(
  "#about_image",
  {
    y: 100,
    opacity: 0,
    duration: 0.8,
  },
  "admin"
);
about.from(
  "#about_description",
  {
    y: 100,
    opacity: 0,
    duration: 0.8,
  },
  "admin"
);
about.from(
  "#education",
  {
    x: 100,
    opacity: 0,
    duration: 0.8,
  },
  "admin"
);
about.from(
  "#tech_stack",
  {
    x: 100,
    opacity: 0,
    duration: 0.8,
  },
  "admin"
);
// heading animation end
