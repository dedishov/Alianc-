const navbar = document.querySelector('.navbar');
const logoLight = document.querySelector('.logo-light');
const logo = document.querySelector('.logo');
const mMenuToggle = document.querySelector('.mobile-menu-toggle');
const menu = document.querySelector('.mobile-menu');
const isFront = document.body.classList.contains('front-page');

const lightModeOn = (event) => {
  navbar.classList.add('navbar-light');
};
const lightModeOff = (event) => {
  navbar.classList.remove('navbar-light');
};

const changeNavHeight = (height) => {
  navbar.style.height = height;
}

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
  this.scrollY > 1 ? changeNavHeight('4.625rem') : changeNavHeight('5.875rem');
  if (isFront) {
    this.scrollY > 1 ? lightModeOn() : lightModeOff();
  }
});

mMenuToggle.addEventListener('click', (event) => {
  event.preventDefault();
  menu.classList.contains('is-open') ? closeMenu() : openMenu();
});

const swiper = new Swiper('.header-features-swiper', {
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
  slidesPerView: 1.3,
  navigation: {
    nextEl: '.steps-button-next',
    prevEl: '.steps-button-prev',
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

const blogSwiper = new Swiper('.blog-swiper', {
  speed: 400,
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: '.blog-button-next',
    prevEl: '.blog-button-prev',
  },
});

const modal = document.querySelector('.modal');
const modalDialog = document.querySelector('.modal-dialog');

document.addEventListener("click", (event) => {
  if (
    event.target.dataset.toggle == "modal" || 
    event.target.parentNode.dataset.toggle == "modal" || 
    !event.composedPath().includes(modalDialog) && 
      modal.classList.contains('is-open')
    ) {
      event.preventDefault();
      modal.classList.toggle('is-open');
    };
});
document.addEventListener('keyup', (event) => {
  if (event.key == 'Escape' && modal.classList.contains('is-open')) {
    modal.classList.toggle('is-open');
  }
});