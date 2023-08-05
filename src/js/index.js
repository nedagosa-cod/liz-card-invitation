gsap.registerPlugin(ScrollTrigger);


function createAnimation(element) {
    return gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 95%",
        end: "top 85%",
        toggleActions: "play none reverse none",
        scrub: 2,
        markers: false
      },
    })
    .fromTo(element, {opacity: 0, y: 50},
    { 
        opacity:1,
        y:0,
        duration: 0.5,
    })
  }

  
const elements = document.querySelectorAll(".anim");
elements.forEach((element) => createAnimation(element));







// Set the date we're counting down to
var countDownDate = new Date("Sep 23, 2023 16:00:00").getTime();

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
  document.getElementById("box-counter__dia").innerHTML = `${days}\n<span>DÍAS</span>`;
  document.getElementById("box-counter__hora").innerHTML = `${hours}\n<span>HORAS</span>`;
  document.getElementById("box-counter__min").innerHTML = `${minutes}\n<span>MINUTOS</span>`;
  document.getElementById("box-counter__seg").innerHTML = `${seconds}\n<span>SEGUNDOS</span>`;

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
        // markers: true,
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
        // markers: true,
        scrub: 1
    }
})


lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: true,
  });

  const audio = document.getElementById('audio');
  audio.volume = 0.4
//   audio.play()









