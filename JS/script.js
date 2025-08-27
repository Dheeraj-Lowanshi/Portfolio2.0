// about section start
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".aboutEffect",
    scroller: "body",
    start: "top 95%",
    end: "top 85%",
    scrub: 2,
    //markers: true,
  },
});
tl2.from("#aboutTitle", {
  x: 100,
  opacity: 0,
  duration: 0.8,
});
tl2.from("#aboutHeading", {
  x: -100,
  opacity: 0,
  duration: 0.8,
});
// about section end


// project section start
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".projectEffect",
    scroller: "body",
    start: "top 95%",
    end: "top 85%",
    scrub: 2,
    //markers: true,
  },
});
tl2.from("#projectTitle", {
  x: 100,
  opacity: 0,
  duration: 0.8,
});
tl2.from("#projectHeading", {
  x: -100,
  opacity: 0,
  duration: 0.8,
});
// project section end

// contact section start
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contactEffect",
    scroller: "body",
    start: "top 95%",
    end: "top 85%",
    scrub: 2,
    //markers: true,
  },
});
tl2.from("#contactTitle", {
  x: 100,
  opacity: 0,
  duration: 0.8,
});
tl2.from("#contactHeading", {
  x: -100,
  opacity: 0,
  duration: 0.8,
});
// contact section end



// var about = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".headingAnimation",
//     scroller: "body",
//     start: "top 50%",
//     end: "top 40%",
//     scrub: 2,
//     //markers: true,
//   },
// });
// about.from(
//   "#about_image",
//   {
//     y: 100,
//     opacity: 0,
//     duration: 0.8,
//   },
//   "admin"
// );
// about.from(
//   "#about_description",
//   {
//     y: 100,
//     opacity: 0,
//     duration: 0.8,
//   },
//   "admin"
// );
// about.from(
//   "#education",
//   {
//     x: 100,
//     opacity: 0,
//     duration: 0.8,
//   },
//   "admin"
// );
// about.from(
//   "#tech_stack",
//   {
//     x: 100,
//     opacity: 0,
//     duration: 0.8,
//   },
//   "admin"
// );
// heading animation end
