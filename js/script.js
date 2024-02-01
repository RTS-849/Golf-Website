var crs = document.querySelector("#cursor")
var crsb = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
    crs.style.left = dets.x + "px"
    crs.style.top = dets.y + "px"
    crsb.style.left = dets.x - 250 + "px"
    crsb.style.top = dets.y - 250 + "px"
})

var h4all = document.querySelectorAll('#nav h4')
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crs.style.scale = 2
        crs.style.border = "1px solid #fff"
        crs.style.backgroundColor = 'transparent'
    })
    elem.addEventListener("mouseleave", function(){
        crs.style.scale = 1
        crs.style.border = "0px solid #0f0cd1"
        crs.style.backgroundColor = '#0f0cd1'
    })
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: '110px',
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    },
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: '#main',
        scroller: "body",
        // markers: true,
        start: "top -30%",
        end: "top -70%",
        scrub: 2
    },
});