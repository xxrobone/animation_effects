let textArr = Array.from(document.querySelectorAll('.text_to_split'));

/* A piece of sugar floating in coffee, is the idea... lol */
var path = anime.path('.motion-path-demo path');

anime({
  targets: '.motion-path-demo .el',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 10000,
  loop: true,
});
