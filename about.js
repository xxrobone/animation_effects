document.addEventListener('DOMContentLoaded', () => {
  const openCurtain = document.querySelector('.open_curtain');
  const curtainTimeline = anime.timeline({
    targets: '.open_curtain',
    duration: 1000,
    easing: 'easeOutSine',
  });
  curtainTimeline
    .add({
      targets: '.loading',
      opacity: [0, 1],
      width: ['0', '30vw'],
      duration: 1400,
      delay: 0,
      innerHTML: [0, 100 + '%'],
      round: 10,
    })
    .add({
      targets: '.loading',
      opacity: [1, 0],
      height: ['50px', '0'],
      duration: 300,
      delay: 200,
      innerHTML: [100, 0 + '%'],
      round: 10,
    })
    .add({
      targets: ['.left', '.right'],
      opacity: 1,
      width: ['50vw', '0vw'],
      duration: 1400,
      delay: 600,
    })
    .add({
      delay: 400,
      translateY: '-100vh',
      duration: 1000,
      complete: function () {
        openCurtain.remove();
      },
    });
});

const btn = document.querySelector('.btn');

// to get lenght of the svg path
/* var ze = document.querySelector('.ze');
var length = ze.getTotalLength();
console.log(length); */

let toggle = false;

const letter1 = 'M0.5 666.5V1H435V230.5H174.5L435 666.5';
const letter2 =
  'M0.5 0V665.5L215.199 386.087M215.199 386.087L282.5 298.5H151L215.199 386.087ZM215.199 386.087L420 665.5V0';

btn.addEventListener('click', () => {
  console.log('clicked');

  const timeline = anime.timeline({
    targets: '.section',
    easing: 'easeOutSine',
    duration: 500,
  });
  // add animation morph
  timeline
    .add({
      targets: '.letter',
      d: [{ value: toggle ? letter1 : letter2 }],
      filter: toggle
        ? 'drop-shadow(5px 5px 2px rgba(0,0,0,.445)'
        : 'drop-shadow(5px 5px 10px black',
      duration: 500,
    })
    .add({
      targets: '.body',
      background: toggle
        ? 'radial-gradient(circle, rgba(87,87,87,1) 0%, rgba(27, 26, 26, 0.774) 30%, #000 0%)'
        : 'radial-gradient(circle, rgb(0, 0, 0) 10%, rgba(107, 107, 107, 0.589) 90%, rgba(212, 212, 212, 0.349) 100%)',
      duration: 400,
    });

  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});
