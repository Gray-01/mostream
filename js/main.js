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

document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('[data-accordion]');

    accordions.forEach(item => {
        const header = item.querySelector('.faq__accordion-header');
        const toggle = item.querySelector('.faq__accordion-toggle');
        const content = item.querySelector('.faq__accordion-content');
        const icon = toggle.querySelector('.faq__accordion-header-icon');

        header.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';

            toggle.setAttribute('aria-expanded', !expanded);
            content.setAttribute('aria-expanded', !expanded);
            icon.src = expanded ? 'images/icons/circle-plus.svg' : 'images/icons/circle-minus.svg';

            if (!expanded) {
                content.removeAttribute('hidden');
            } else {
                content.setAttribute('hidden', '');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger-toggle');
  const nav = document.querySelector('#header-nav'); // используем id — точнее

  if (!burger || !nav) return; // защита

  burger.addEventListener('click', () => {
    const isExpanded = burger.getAttribute('aria-expanded') === 'true';
    const newState = !isExpanded;

    // всегда ставим строковое значение "true"/"false"
    burger.setAttribute('aria-expanded', String(newState));
    nav.setAttribute('aria-expanded', String(newState));

    // меняем значок
    burger.textContent = newState ? '✕' : '☰';
  });
});


