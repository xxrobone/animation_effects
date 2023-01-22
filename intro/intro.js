console.log('js connected');
let intro = document.querySelector('.intro');

const timeline = anime.timeline({
  targets: '.intro',
  duration: 3000,
  easing: 'easeOutSine',
});
timeline
  .add({
    width: ['0vw', '100vw'],
    opacity: 1,
    duration: 1400,
  })
  .add({
    targets: '.intro_head',
    translateY: ['-100vh', '0'],
    delay: 100,
    duration: 500,
  })
  .add({
    targets: '.intro_subhead',
    translateY: ['-100vh', '0'],
    delay: 100,
    duration: 500,
  })
  .add({
    targets: '.loading',
    opacity: [0, 1],
    width: ['0', '30vw'],
    duration: 2000,
    delay: 100,
    innerHTML: [0, 100 + '%'],
    round: 10,
  })
  .add({
    targets: '.main',
    duration: 1000,
    opacity: [0, 1],
  })
  .add({
    delay: 500,
    translateX: '100vw',
    duration: 1000,
    complete: function () {
      intro.remove();
    },
  });

const navline = anime.timeline({
  targets: '.nav',
  duration: 1500,
  easing: 'easeOutSine',
});
navline
  .add({
    opacity: [0, 1],
    delay: 2000,
  })
  .add({
    targets: '.nav ul li',
    translateY: ['-30vh', '0'],
    delay: anime.stagger(200),
    opacity: [0, 1],
  });
