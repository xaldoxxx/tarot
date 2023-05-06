const cards = document.querySelectorAll('.card');
const btnTirar = document.getElementById('btn-tirar');

const images = ['mago.png', 'sacerdotisa.png', 'emperatriz.png', 'emperador.png', 'sumosacerdote.png', 'enamorados.png', 'carro.png', 'justicia.png', 'ermitano.png', 'rueda.png', 'fuerza.png',
'colgado.png','muerte.png', 'templaza.png', 'diablo.png','torre.png', 'estrella.png', 'luna.png', 'sol.png', 'juicio.png', 'mundo.png','loco.png' 
];

const ingredients = {
  'mago.png': 'Impatiens',
  'sacerdotisa.png': 'Clematis',
  'emperatriz.png': 'Honeysuckle',
  'emperador.png': 'Oak',
  'sumosacerdote.png': 'Wild Rose',
    'enamorados.png': 'Chicory',
'carro.png': 'Centuary',
'justicia.png': 'Vervain',
'ermitano.png': 'Water Violet',
'rueda.png': 'Wild Oat',
'fuerza.png': 'Elm',
'colgado.png': 'Chestnut Bud',
'muerte.png': 'Aspen',
'templaza.png': 'Rescue Remedy',
'diablo.png': 'Red Chestnut',
'torre.png': 'Star of Bethlehem',
'estrella.png': 'Sweet Chestnut',
'luna.png': 'White Chestnut',
'sol.png': 'Mustard',
'juicio.png': 'Wild Rose',
'mundo.png': 'Wild Rose',
'loco.png': 'Wild Oat'  
};

function tirar() {
  const randomNumbers = [];
  while (randomNumbers.length < 3) {
    const randomNumber = getRandomNumber(0, 18);
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  randomNumbers.forEach((number, index) => {
    cards[index].querySelector('img').src = images[number];
    cards[index].querySelector('.ingredient').textContent = ingredients[images[number]];
  });
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

btnTirar.addEventListener('click', tirar);
