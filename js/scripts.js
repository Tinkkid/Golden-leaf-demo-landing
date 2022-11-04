
      var swiper = new Swiper('.swiper-spec', {
          loop: true,
          speed: 800,
          slideToClickedSlide: true,
          pagination: {
              el: '.swiper-pagination',
              clickable: true,
          },
      });

var swiperMenu = new Swiper('.menu__slider', {
    slidesPerView: 2,
    slidesPerColumn: 4,
  spaceBetween: 10,
  slidesPerGroup: 2,
  speed: 500,
    slideToClickedSlide: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      loop: false,
  },
});

var tabs = document.querySelector('.tabs');
var menuSlider = document.querySelectorAll('.menu__slider-block');

tabs.addEventListener('click', function (e) {
    if (e.target.classList.contains('tabs__item')) {
        this.querySelectorAll('.tabs__item').forEach((item) =>
            item.classList.remove('active'),
        );
        e.target.classList.add('active');
    }

    menuSlider.forEach((slider) => slider.classList.remove('show'));
    let tabIndex = e.target.dataset.tab;
    let thisSwiper = document.querySelector(tabIndex);
    thisSwiper.classList.add('show');
});

window.addEventListener('load', overflowTabs);
window.addEventListener('resize', overflowTabs);

function overflowTabs() {
    let outerTabs = document.querySelector('.tabs__container');
    let innerTabs = document.querySelector('.tabs');
    if (innerTabs.offsetWidth > outerTabs.offsetWidth) {
        innerTabs.classList.add('overflow');
    } else {
        innerTabs.classList.remove('overflow');
    }
}

// Scroll to id
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top,
        },
        700,
        'linear',
    );
});