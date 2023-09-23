
var time = gsap.timeline()

time.from("#navbar h4, #navbar h5 ,#navbar img", {
    delay: 0.9,
    opacity: 0,
    dutration: 1.4,
    y: -50,
    stagger: 0.3
})
time.from("#page1 h3,#page1 h1", {
    y: -150,
    dutration: 0.8,
    stagger: 0.2,
    opacity: 0
})
time.to("#page2 img", {
    top: "95%",
    height: "40%",
    left: "40%",
    opacity: "1",

    duration: 0.2,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 80%",

        end: "top 15%",
        scrub: 1,

    }
}
)

time.to("#page3 img ,#mars , #pluto ", {
    top: "140%",


    opacity: "1",

    duration: 0.01,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 50%",

        end: "top 15%",
        scrub: 0.3,

    }
}
)



time.from("#page4 h2, #page4 h1, #page4 p, #page4 h3 ,#page4 button", {

    y: -150,
    dutration: 0.1,
    stagger: 0.1,
    opacity: 0,

    scrollTrigger:{
        trigger:"#page4",
        scrub:1,
        scroller:"body",
        // markers:true,
        start:"top 65%",
        end:"top 5%",


    }
    


})
time.from("#page4 img",{
    y:-150,
    scale:0.2,
    Stragger:0.6,
    duration:0.1,
    opacity:0,
    // yoyo:true,
    // repeat:-1,
//   rotate:70,
    scrollTrigger:{
        scrub:1,

    trigger:"#page4",
    scroller:"body",
        start:"top 65%",
        end:"top 5%",
        // markers:true,
    }
    
})
time.from("#navbar2 ,#page5 h1, #page5 p,#trip ,#page5 button , #page5 img",{
    x: -150,
    dutration: 0.2,
    stagger: 0.1,
    opacity: 0,

    scrollTrigger:{
        trigger:"#page5",
        scrub:1,
        scroller:"body",
        // markers:true,
        start:"top 65%",
        end:"top 5%",


    }   
})
time.from("#page6 h1 ,#page6 h2, #page6 p,#page6 h6 ,#page6 h3 ,#arrow,#arroww",{
    x: 150,
    dutration: 0.1,
    stagger: 0.1,
    opacity: 0,

    scrollTrigger:{
        trigger:"#page6",
        scrub:1,
        scroller:"body",
        // markers:true,
        start:"top 65%",
        end:"top 5%",


    }   
})
time.from("#logo",{
    x: 145,
    scale:1,
    dutration: 0.2,
    stagger: 0.1,
    opacity: 1,

    scrollTrigger:{
        trigger:"#page7",
        scrub:1,
        scroller:"body",
        // markers:true,
        start:"top 65%",
        end:"top 5%",


    }   
})
time.from("#moon,#mooon",{
    y: -145,
   
    dutration: 0.1,
    // stagger: 0.1,
    opacity: 0,

    scrollTrigger:{
        trigger:"#page7",
        scrub:1,
        scroller:"body",
        // markers:true,
        start:"top 65%",
        end:"top 5%",


    }   
})
time.from("#tags",{

   scale:0.3,
    dutration: 0.2,
    // stagger: 0.1,
    opacity: 0,

    scrollTrigger:{
        trigger:"#page7",
        scrub:1,
        scroller:"body",
        // markers:true,
        start:"top 5%",
        end:"top -5%",


    }   
})



var swap = document.querySelector("#swap")
var btn = document.querySelector("#page4 button")
var icon = document.querySelector("#swap i")
var swapp = document.querySelector("#swaptwo")
var btnn = document.querySelector("#page5 button")
var iconn = document.querySelector("#swaptwo i")
btn.addEventListener("click", function () {
swap.style.opacity = "1"
})
icon.addEventListener("click", function () {
swap.style.opacity = "0"
})


btnn.addEventListener("click", function () {
swapp.style.opacity = "1"
})
iconn.addEventListener("click", function () {
swapp.style.opacity = "0"
})



var page = document.querySelector("#page1")
page.addEventListener("mouseenter", function (bat) {
    document.querySelector("#box").style.opacity = "1";
})

page.addEventListener("mouseleave", function (bat) {
    document.querySelector("#box").style.opacity = "0";
})
// time.to("#page2 img", {
//     top: "0%",
//     scrollTrigger

// })
// var arrow = document.querySelector("#arrow i")
// var arrrow = document.querySelector("#arroww i")
// var cmt = document.querySelector("#comment")
// var para = document.querySelector("#page6 h1,#page6 h2,#page6 p,#page6 h3 #page6 h6")

// arrow.addEventListener("click",function(){
//     para.style.opacity="1";
//     cmt.style.left = "45%";
//     cmt.style.opacity="0";
// })
// arrrow.addEventListener("click",function(){
//     para.style.opacity="0";
//     cmt.style.left = "25%";
//     cmt.style.opacity="1";
// })