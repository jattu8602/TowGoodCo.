function cursorAnimation() {
  var videocom = document.querySelector("#video-container");
  var playbtn = document.querySelector('#play');

  document.addEventListener("mousemove", (dets) => {
  gsap.to("#cursor", {
    left: dets.x,
    top: dets.y,
  })

})



document.querySelectorAll('.child').forEach((elem) => {
  elem.addEventListener("mouseleave", () => {
     gsap.to('#cursor', {
    transform: `translate(-50%, -50%) scale(0)`,
              })
  })

})

document.querySelectorAll('.child').forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
     gsap.to('#cursor', {
    transform: `translate(-50%, -50%) scale(1)`,
              })
  })

})

videocom.addEventListener("mouseenter", function (){
  gsap.to(playbtn, {
    scale: 1,
    opacity: 1,
    // smooth ease in
    // ease: "elastic(1, 0.3)",

    // ease: "elastic.out(1, 0.3)",

    duration: 0.5,
  })
  videocom.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      scale: 0,
      opacity0: 0,

    })
})
  videocom.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x - 80,
      top: dets.y - 80,
      // delay: .4,
      // for cursor dets of -80
      // x: dets.clientX - window.innerWidth / 2,
      // y: dets.clientY - window.innerHeight / 2,
      // ease: "power2.inOut",
      // duration: 0.5,
      // ease: "elastic.out(1, 0.5)"



      // ease: "elastic.out(1, 0.5)"




    })
})
})
}

function textAnimation() {
gsap.from("#page1 h1", {
  y: 100,
  opacity: 0,
  delay:.3,
  duration: .4,
  stagger:.2
  // ease: "elastic.out(1, 0.5)"


})
  gsap.from("#page1 #video-container", {
    y: 100,
    opacity: 0,
    delay:.9,
    duration: .5,
    // stagger:.2,
    // ease: "elastic.out(1, 0.5)"
  })

}
function Locomotivejs() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
}
function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
gsap.to("#nav-part1 svg", {
  transform: "translatey(-100%)",
  delay:4,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    // markers: true,
    // strat: "bottom 0",
    // end: "bottom -5%",
    // scrub: true,
  }

})

// gsap.to("#nav-part2 #links", {
//   transform: "translatey(-100%)",
//   opacity: 0,

//   scrollTrigger: {
//     trigger: "#page1",
//     scroller: "#main",
//     // markers: true,
//     strat: "top 10",
//     end: "top -5%",
//     scrub: true,
//   }

// })





locomotiveAnimation();
// Locomotivejs();
textAnimation();
cursorAnimation();

