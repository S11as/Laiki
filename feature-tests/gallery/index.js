function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

const c = document.getElementById('imgc');

for (let i = 0; i < 15; i++) {
  const img = document.createElement('img');
  const box = document.createElement('div');
  box.className = 'box';
  let width = 300;
  const number = randomInteger(300, 600);
  if(number >= 400){
    width = 600;
  }
  if(number >= 500){
    width = 900;
  }
  width = 300;
  const height = randomInteger(300, 900);

  img.src = `https://picsum.photos/${width}/${height}`;
  box.appendChild(img)
  c.appendChild(box);
}

imagesLoaded(c, function (instance) {
  console.log('all images are loaded');
  let grid = document.querySelector('.container');
  let msnry = new Masonry(grid, {
    // options...
    itemSelector: '.box',
    columnWidth: 300,
    horizontalOrder: true,
    gutter: 10,
    fitWidth: true,
  });
});


