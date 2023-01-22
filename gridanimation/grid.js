const body = document.body;
const wrapper = document.querySelector('.wrapper');
let columns = Math.floor(body.clientWidth / 50),
  rows = Math.floor(body.clientHeight / 50);

wrapper.style.setProperty('--columns', columns);
wrapper.style.setProperty('--rows', rows);

let toggled = false;

const colors = [
  'rgba(50,4,89,1)',
  'rgb(136, 62, 201)',
  'rgb(35, 117, 134)',
  'rgb(71, 169, 189)',
  ' rgb(221, 123, 221)',
  'rgb(162, 75, 162)',
  'rgb(81, 201, 157)',
  'rgb(41, 140, 104)',
];

let count = -1;
const handleClick = (i) => {
  toggled = !toggled;
  count = count + 1;
  anime({
    targets: '.box',
    opacity: toggled ? 0 : 1,
    backgroundColor: colors[count % (colors.length - 1)],
    delay: anime.stagger(50, {
      grid: [columns, rows],
      from: i,
    }),
  });
};

// like in react
const createBox = (i) => {
  const box = document.createElement('div');
  box.classList.add('box');

  box.onclick = (e) => handleClick(i);

  return box;
};

const createBoxes = (qt) => {
  Array.from(Array(qt)).map((box, i) => {
    wrapper.appendChild(createBox(i));
  });
};

const createGrid = () => {
  wrapper.innerHTML = '';
  (columns = Math.floor(body.clientWidth / 50)),
    (rows = Math.floor(body.clientHeight / 50));
  createBoxes();
};

createBoxes(columns * rows);

window.onresize = () => createGrid;
