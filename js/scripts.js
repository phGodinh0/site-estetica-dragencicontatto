const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');

const gap = 30;

function getItemWidth() {
  return items[0].offsetWidth + gap;
}

let index = 0;

function scrollCarousel() {
  index += 3;

  if (index >= items.length) {
    index = 0;
  }

  track.scrollTo({
    left: index * getItemWidth(),
    behavior: 'smooth'
  });
}

setInterval(scrollCarousel, 3500);

const elementos = document.querySelectorAll('[data-animar]');

  const animarScroll = () => {
    const topoPagina = window.pageYOffset + window.innerHeight * 0.85;

    elementos.forEach(el => {
      if (topoPagina > el.offsetTop) {
        el.classList.add('ativo');
      }
    });
  };

  window.addEventListener('scroll', animarScroll);
  animarScroll();

