const indicators = document.querySelectorAll('.indicator__item');
let currentIndex = Array.from(indicators).findIndex(item =>
  item.classList.contains('indicator__item--active')
);

// если вдруг не найден активный — fallback на 0
if (currentIndex === -1) currentIndex = 0;

function switchIndicator() {
  indicators[currentIndex].classList.remove('indicator__item--active');
  currentIndex = (currentIndex + 1) % indicators.length;
  indicators[currentIndex].classList.add('indicator__item--active');
}

setInterval(switchIndicator, 5000);
