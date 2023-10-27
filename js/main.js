const navbar = document.querySelector('.navbar');
const logoLight = document.querySelector('.logo-light');
const logo = document.querySelector('.logo');
const mMenuToggle = document.querySelector('.mobile-menu-toggle');
const menu = document.querySelector('.mobile-menu');

const lightModeOn = (event) => {
  navbar.classList.add('navbar-light');
  logo.style.display = 'block';
  logoLight.style.display = 'none';
};
const lightModeOff = (event) => {
  navbar.classList.remove('navbar-light');
  logo.style.display = 'none';
  logoLight.style.display = 'block';
};

const openMenu = (event) => { // Функция открывания меню
  menu.classList.add('is-open'); // Вешает класс is-open
  mMenuToggle.classList.add('close-menu');
  document.body.style.overflow = 'hidden' // Запрещаем прокрутку сайта под меню
  lightModeOn();
};
const closeMenu = (event) => { // Функция закрывания меню
  menu.classList.remove('is-open'); // Убирает класс is-open
  mMenuToggle.classList.remove('close-menu');
  document.body.style.overflow = '' // возвращает прокрутку сайта под меню
  lightModeOff();
};

window.addEventListener('scroll', () => {
  this.scrollY > 1 ? lightModeOn() : lightModeOff();
});

mMenuToggle.addEventListener('click', (event) => {
  event.preventDefault();
  menu.classList.contains('is-open') ? closeMenu() : openMenu();
});

const swiper = new Swiper('.swiper', {
  speed: 400,
  slidesPerView: 1,
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
  breakpoints: {
    // when window width is >= 570px
    570: {
      slidesPerView: 2,
      centeredSlides: true,
    },
    // when window width is >= 770px
    770: {
      slidesPerView: 3,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 5,
      centeredSlides: false,
    },
  },
});

const stepsSwiper = new Swiper('.steps-swiper', {
  speed: 400,
  autoHeight: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.steps-slider-button-next',
    prevEl: '.steps-slider-button-prev',
  },
  breakpoints: {
    // when window width is >= 570px
    570: {
      slidesPerView: 2,
    },
    // when window width is >= 770px
    770: {
      slidesPerView: 3,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
    },
  },
});