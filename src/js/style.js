import Swiper from 'swiper';
import 'swiper/css/bundle';

const styleLeftArrow = document.getElementById('styleLeftArrow');
const styleRightArrow = document.getElementById('styleRightArrow');

let styleSwiper;

styleSwiper = new Swiper('.style-swiper-container', {
  direction: 'horizontal',
  loop: false,
  centeredSlides: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 0,
  spaceBetween: 20,
  speed: 500,
  allowTouchMove: true,
  grabCursor: true,
  breakpoints: {
    1440: {
      slidesPerView: 'auto',
      centeredSlides: false,
      initialSlide: 0,
    },
  },

  on: {
    init(swiper) {
      document.querySelector('.style-swiper-container').classList.add('show');
      updateStyleArrows(swiper);
    },
    slideChange(swiper) {
      updateStyleArrows(swiper);
    },
    reachEnd(swiper) {
      styleRightArrow.disabled = true;
    },
    fromEdge(swiper) {
      styleRightArrow.disabled = false;
    },
  },
});

updateStyleArrows(styleSwiper);

function updateStyleArrows(swiper) {
  styleLeftArrow.disabled = swiper.isBeginning;
  styleRightArrow.disabled = swiper.isEnd;
}

styleLeftArrow.addEventListener('click', () => {
  styleSwiper.slidePrev();
});

styleRightArrow.addEventListener('click', () => {
  styleSwiper.slideNext();
});
