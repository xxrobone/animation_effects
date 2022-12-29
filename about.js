const btn = document.querySelector('.btn');

let toggle = false;

const letter1 = 'M0.5 666.5V1H435V230.5H174.5L435 666.5';
const letter2 =
  'M0.5 0V665.5L215.199 386.087M215.199 386.087L282.5 298.5H151L215.199 386.087ZM215.199 386.087L420 665.5V0';

btn.addEventListener('click', () => {
  console.log('clicked');

  const timeline = anime.timeline({
    duration: 300,
    easing: 'easeOutSine',
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
    .add(
      {
        targets: '.section',
        background: toggle ? 'white' : 'black',
      },
      '-=200'
    );

  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});
