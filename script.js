const blurCrsr = document.querySelector("#blur-cursor");
const cursor = document.querySelector("#cursor");
document.addEventListener("mousemove", function(dets) {
    blurCrsr.style.left = dets.x - 200 + "px";
    blurCrsr.style.top = dets.y - 200 + "px";
    cursor.style.left = dets.x - 10 + "px";
    cursor.style.top = dets.y - 10 + "px";
})
var navItems = document.querySelectorAll("nav h4");
navItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
        cursor.style.scale = 3;
        cursor.style.border = "0.5px solid white";
        cursor.style.backgroundColor = "transparent"
    })
    item.addEventListener("mouseleave", function () {
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #95C11E";
        cursor.style.backgroundColor = "#95C11E"
    })
})

gsap.to("nav", {
    backgroundColor: "black",
    height: "105px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub: 1
    }
})

gsap.from(".card", {
    scale: 0.8,
    y: 90,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }
})

gsap.from("#quotes-open", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#quotes-open",
        scroller: "body",
        start: "top 50%",
        end: "top 47%",
        scrub: 4
    }
})

gsap.from("#quotes-close", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#quotes-open",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#page-4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page-4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3
    }
})