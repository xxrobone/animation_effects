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

textArr.forEach((a) => {
  let textLineArr = a.textContent.split(' ');

  console.log(textLineArr);

  let html = '';

  let animation = a.classList;
  console.log('animation class list: ' + animation);

  for (i = 0; i < textLineArr.length; ++i) {
    html +=
      " <span style='animation-delay:" +
      i * 200 +
      "ms; display:inline-block' class='" +
      animation +
      " animate'>" +
      textLineArr[i] +
      '</span>';

    console.log(html);
    a.innerHTML = html;

    a.classList.remove('text_to_split');
    console.log('after removal : ' + a.classList);
  }

  console.log('after loop ' + a.textContent);
});

anime({
  targets: '.loading .hightlight',
  easing: 'easeInOutSine',
  duration: 1000,
  delay: 4500,
  translateY: [0, 10, 0, 5],
});
