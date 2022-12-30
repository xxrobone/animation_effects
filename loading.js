let textArr = Array.from(document.querySelectorAll('.text_to_split'));
let logoLetters = Array.from(document.querySelectorAll('.logo_svg > path'));

logoLetters.forEach((l, idx) => {
  console.log(`this letter nr ${idx} = ${l.getTotalLength()}`);
});
/* A piece of sugar floating in coffee, is the idea... lol */
var path = anime.path('.motion-path-demo path');

anime({
  targets: '.motion-path-demo .el',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 7000,
  loop: false,
});

anime({
  targets: logoLetters,
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1000,
  delay: anime.stagger(300),
  direction: 'alternate',
  loop: false,
});

anime({
  targets: '.drop',
  easing: 'easeInOutSine',
  duration: 1000,
  delay: 4500,
  direction: 'forwards',
  opacity: [0, 1],
  translateX: [-200, 0],
  translateY: [200, 0],
  rotate: [-45, 0],
});
