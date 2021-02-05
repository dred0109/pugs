var bgvideo = document.getElementById("bgVideo");
bgvideo.muted = true;
bgvideo.play();

const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelectorAll(["h1", "h2"]);

//End Section
const section = document.querySelector("section");
const end = section.querySelector("h1");

//ScrollMagic
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
    duration: 5000,
    triggerElement: intro,
    triggerHook: 0,
})
    .addIndicators({ colorTrigger: "transparent", colorEnd: "transparent" }) //color of the trigger
    .setPin(intro)
    .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: intro,
    triggerHook: 0,
})
    .setTween(textAnim)
    .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);

    video.currentTime = delay;
}, 66.6);



//Scroll Animation

AOS.init({
    offset: 400,
    duration: 1000,
});
if (document.readyState == "complete") {
    AOS.refresh();
}
