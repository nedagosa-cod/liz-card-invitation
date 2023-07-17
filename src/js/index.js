gsap.registerPlugin(ScrollTrigger);

// function createAnimation(element) {
//     return gsap.timeline({
//       scrollTrigger: {
//         trigger: element,
//         scroller: 'body',
//         start: "top 100%",
//         end: "top 65%",
//         scrub: 1,
//         markers: true
//       },
//     })
//     .fromTo(element, {opacity: .5, top: '100%', position: 'relative'},
//     { 
//         opacity:1,
//         y:'-95%',
//         duration: 0.3,
//     })
//     .fromTo('.title', {opacity: 0, top: 0},
//     { 
//         opacity:1,
//         y:'-95%',
//         duration: 0.3,
//     })
// }

// gsap.to('.main__adorno',{
//     opacity:1,
//     top:'-95%',
//     duration: 0.3,
//     markers: true,
//     scrollTrigger : 'body'
// })


// gsap.timeline({
//     scrollTrigger: {
//     trigger: '.main__adorno',
//     scroller: 'body',
//     start: "top 100%",
//     end: "top 65%",
//     scrub: 1,
//     // markers: true
//     }
// })
// .fromTo('.main__adorno', {top: '100%', position: 'relative'},
// { 
//     y:'-95%',
//     duration: 0.3,
// })

// gsap.timeline({
//     scrollTrigger: {
//     trigger: '.titulo',
//     scroller: 'body',
//     start: "top 120%",
//     end: "top 80%",
//     scrub: 1,
//     }
// })
// .fromTo('.main', {opacity: 0, y: 150},
// { 
//     opacity:1,
//     y:'-5%',
//     duration: 0.3,
// })

// gsap.timeline({
//     scrollTrigger: {
//     trigger: '.logo',
//     scroller: 'body',
//     start: "100% 75%",
//     end: "100% 40%",
//     scrub: 1,
//     markers: true
//     }
// })
// .fromTo('.logo', {scale: 1, yPercent: 0},
// { 
//     scale:.8,
//     yPercent: -40,
//     duration: 0.3,
// })


// const elements = document.querySelectorAll(".anim");
// const elFade = document.querySelectorAll(".fade");

// elements.forEach((element) => createAnimation(element));
// elFade.forEach((element) => normalFade(element));


// Set the date we're counting down to
var countDownDate = new Date("Sep 27, 2023 16:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("box-counter__dia").innerHTML = `${days}\n<span>Días</span>`;
  document.getElementById("box-counter__hora").innerHTML = `${hours}\n<span>Horas</span>`;
  document.getElementById("box-counter__min").innerHTML = `${minutes}\n<span>Minutos</span>`;
  document.getElementById("box-counter__seg").innerHTML = `${seconds}\n<span>Segundos</span>`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


AOS.init();

const tl = gsap.timeline()

tl.to('.header__adorno', {
    y: '-98%',
    duration: 1,
    scrollTrigger: {
        trigger: '.main',
        start: 'top 95%',
        end: 'top 80%',
        markers: true,
        scrub: 1
    }
})

gsap.to('.logo',{y: -40},{
    y: 0,
    duration: 8,
    delay: 4,
    scrollTrigger: {
        trigger: '.header',
        scrub: 4
    }
})
tl.to('.logo', {
    y: '-20%',
    scale: .5,
    duration: 1,
    scrollTrigger: {
        trigger: '.main',
        start: 'top 95%',
        end: 'top 80%',
        markers: true,
        scrub: 1
    }
})