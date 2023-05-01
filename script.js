// Seleccionar las cartas
const cards = document.querySelectorAll('.card');
const selectedCards = [];

// Función para voltear una carta
function flipCard(card) {
  card.classList.add('flip');
  card.removeEventListener('click', selectCard);
}

// Función para seleccionar una carta
function selectCard(event) {
  const card = event.currentTarget;
  if (!selectedCards.includes(card) && selectedCards.length < 3) {
    selectedCards.push(card);
    flipCard(card);
  }
  if (selectedCards.length === 3) {
    showResultButton.disabled = false;
  }
}

// Agregar el evento click a las cartas
cards.forEach(card => {
  card.addEventListener('click', selectCard);
});

// Botón para mostrar el resultado
const showResultButton = document.querySelector('#show-result-button');
showResultButton.disabled = true;

// Alerta para mostrar el resultado
const alert = document.createElement('div');
alert.classList.add('alert');

const alertMessage = document.createElement('p');
alertMessage.classList.add('alert-message');

// Llamar a la API REST para calcular la suma
showResultButton.addEventListener('click', () => {
  if (selectedCards.length === 3) {
    fetch('/calculate-sum')
      .then(response => response.json())
      .then(data => {
        alertMessage.textContent = `El resultado es: ${data.sum}`;
        alert.appendChild(alertMessage);
        document.body.appendChild(alert);
      })
      .catch(error => console.error(error));
  } else {
    alertMessage.textContent = 'Por favor seleccione tres cartas.';
    alert.appendChild(alertMessage);
    document.body.appendChild(alert);
  }
});
