var tl = gsap.timeline()

tl.from("#nav div",{
        y: -100,
        duration: 1,
    })
tl.from(".advertise", {
    // y : 100,
    duration: 0.5,
    opacity : 0,
    stagger: 0.1
})
tl.from("#section1>h1,#section1>h2,#section1>a ", {
    duration: 1,
    opacity : 0,
    stagger: 0.2
})
gsap.from("#section1 img",{
    y: 500,
    delay: 1.8,
    duration: 0.5,
    opacity : 0,
    stagger: 0.1
})
tl.from("#section2 h1, #section2 h2, #section2 a",{
    opacity:0,
    y: 100,
    duration:2,
    delay: 2,
    stagger:1,
    scrollTrigger:{
        trigger: "#section2 h1, #section2 h2, #section2 a",
        scroller: "#allpage",
        // markers :true,
        start : "top 90%",
        end: "top 10%",
        scrub: 2,
    }
})
gsap.from("#section2", {
    y: 200,
    duration: 0.5,
    opacity : 0,
    stagger: 0.8,
    // rotate: 360, 
    scrollTrigger:{
        trigger: "#section2",
        // scroller: "#allpage",
        // markers :true,
        start : "top 92%",
        end: "top 30%",
        scrub: 2,
    }

})
tl.from("#section3", {
    opacity : 0,
    stagger: 0.8,
    y:100,
    // rotate: 360, 
    scrollTrigger:{
        trigger: "#section3",
        // scroller: "#allpage",
        // markers :true,
        start : "top 92%",
        end: "top 30%",
        scrub: 2,
    }

})
tl.from("#section3 h3 ",{
    x: -100,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger: "#section3 h3",
        // scroller: "#allpage",
        // markers :true,
        start : "top 92%",
        end: "top 30%",
        scrub: 2,
    }
})
tl.from("#section3 h1",{
    x: 200,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger: "#section3 h1",
        // scroller: "#allpage",
        // markers :true,
        start : "top 92%",
        end: "top 30%",
        scrub: 2,
    }
})
tl.from("#section4",{
    opacity:0,
    y: 100,
    duration:2,
    delay: 1,
    scrollTrigger:{
        trigger: "#section4",
        // scroller: "#allpage",
        // markers :true,
        start : "top 90%",
        end: "top 60%",
        scrub: 2,
    }
})
tl.from("#section4 h1, #section4 h3, #section4 h2, #section4 a, #section4 img",{
    opacity:0,
    y: 100,
    duration:2,
    delay: 2,
    stagger:1,
    scrollTrigger:{
        trigger: "#section4 h1, #section4 h3, #section4 h2, #section4 a, #section4 img",
        // scroller: "#allpage",
        // markers :true,
        start : "top 90%",
        end: "top 10%",
        scrub: 2,
    }
})
tl.from("#section5",{
    y: 200,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger: "#section5",
        // scroller: "#allpage",
        // markers :true,
        start : "top 90%",
        end: "top 30%",
        scrub: 2,
    }
})
tl.from("#section6",{
    y: 200,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger: "#section5",
        // scroller: "#allpage",
        // markers :true,
        start : "top 90%",
        end: "top 30%",
        scrub: 2,
    }
})