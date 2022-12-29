const darkMode = document.getElementById('darkmode');

const MoonPath =
  'M15 28C15 43.464 28 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C28 0 15 12.536 15 28Z';

const SunPath =
  'M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z';

let toggle = false;

darkMode.addEventListener('click', () => {
  console.log('clicked');

  const timeline = anime.timeline({
    duration: 300,
    easing: 'easeOutSine',
  });
  // add animation morph
  timeline
    .add({
      targets: '.sun',
      d: [{ value: toggle ? SunPath : MoonPath }],
      opacity: toggle ? 1 : 1,
    })

    .add(
      {
        targets: '#darkmode',
        opacity: toggle ? 1 : 0.8,
        rotate: toggle ? 0 : 180,
      },
      '-=200'
    )
    .add(
      {
        targets: '.header',
        backgroundImage: toggle
          ? 'linear-gradient(0deg, rgba(231, 231, 231, 0.521), rgba(69, 69, 187, 0.671))'
          : 'linear-gradient(0deg, rgba(0, 0, 0, 0.256), rgba(5, 5, 5, 0.856)',
        rotate: 0,
      },
      '-=200'
    );

  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});

const actionBtn = document.querySelector('.action_btn');

const bgPath =
  'M1141 512.5C1141 399.1 1107.2 288.273 1043.93 194.169C980.654 100.064 890.769 26.9516 785.751 -15.8344C680.733 -58.6203 565.346 -69.1383 454.323 -46.0455C343.299 -22.9527 241.677 32.7031 162.43 113.816C83.1823 194.929 29.906 297.819 9.4026 409.35C-11.1008 520.881 2.09909 635.991 47.3169 739.986C92.5348 843.98 167.719 932.139 263.27 993.208C358.822 1054.28 470.405 1085.48 583.774 1082.85L575.11 710.561C535.741 711.477 496.992 700.64 463.81 679.433C430.628 658.226 404.519 627.611 388.817 591.498C373.114 555.384 368.53 515.41 375.651 476.68C382.771 437.949 401.272 402.219 428.791 374.051C456.311 345.883 491.601 326.556 530.156 318.537C568.71 310.517 608.78 314.17 645.249 329.028C681.718 343.886 712.932 369.275 734.906 401.955C756.879 434.634 768.615 473.12 768.615 512.5H1141Z';

const bgPath2 =
  'M1141 512.5C1141 399.1 1107.2 288.273 1043.93 194.169C980.654 100.064 890.769 26.9516 785.751 -15.8344C680.733 -58.6203 565.346 -69.1383 454.323 -46.0455C343.299 -22.9527 241.677 32.7031 162.43 113.816C83.1823 194.929 29.906 297.819 9.4026 409.35C-11.1008 520.881 2.09909 635.991 47.3169 739.986C92.5348 843.98 167.719 932.139 263.27 993.208C358.822 1054.28 470.405 1085.48 583.774 1082.85L582.205 1015.42C482.237 1017.75 383.844 990.233 299.588 936.383C215.332 882.534 149.035 804.796 109.163 713.094C69.29 621.393 57.6505 519.89 75.7301 421.543C93.8098 323.197 140.788 232.469 210.668 160.945C280.547 89.4201 370.157 40.3434 468.056 19.9803C565.955 -0.382658 667.702 8.89201 760.306 46.6202C852.91 84.3484 932.17 148.818 987.965 231.799C1043.76 314.779 1073.56 412.505 1073.56 512.5H1141Z';

let hero_toggle = false;

actionBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('clicked action button');
  const hero_timeline = anime.timeline({
    duration: 300,
    easing: 'easeOutSine',
  });

  hero_timeline
    .add({
      targets: '.hero',
      d: [{ value: hero_toggle ? bgPath : bgPath2 }],
      opacity: hero_toggle ? 1 : 1,
    })
    .add(
      {
        targets: 'svg',
        fill: hero_toggle ? '#282828' : '#888',
        rotate: 0,
      },
      '-=200'
    );

  if (!hero_toggle) {
    hero_toggle = true;
  } else {
    hero_toggle = false;
  }
});
