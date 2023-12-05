gsap.set(".dot", {
    opacity: 0,
    background: "yellow",
})

gsap.to(".dot", {
    opacity: 1,
    background: "crimson",
    duration: 3,
    y: 100,
    repeat: -1,
    yoyo: true,
})

