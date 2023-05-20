const starBg = document.querySelector('.starBg');
const title = document.querySelector('.title');
const topBtn = document.querySelector('.topBtn');


window.addEventListener('scroll', function (event) {
  let scroll = this.scrollY;
  starBg.style.transform = `translateY(${-scroll / 3}px)`;
  title.style.transform = `translateY(${scroll / 1.7}px)`;
})

// text motion
for (let i=0; i<title.querySelectorAll('div').length; i++) {
  let _text = title.querySelectorAll('div')[i];

  gsap.from( _text , 1, {
    autoAlpha:0,
    // scale:4,
    // rotate: Math.random()*360,
    delay : Math.random()*1,
    ease:Power3.easeInOut,
});
}

// scroll animation
gsap.to( window, 2, {
  scrollTo: {
    y: '.bottom',
    // autoKill: true,
  },
  delay: 1.7,
  ease: Power4.easeInOut,
})

// lager section animation
gsap.from('.bottom', 2.5, {
  scale: .7,
  y: 100,
  delay: 2.2,
  ease: Power3.easeInOut,
})

// top button event
topBtn.addEventListener('click', function (event) {
  event.preventDefault();
  gsap.to(window, 1.5, {
    scrollTo: {
      y: 0,
      autoKill: true,
    },
    ease: Power3.easeInOut,
  })
})


  