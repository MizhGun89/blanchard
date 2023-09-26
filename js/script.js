// burger
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.menu').classList.add('menu-open')
  })
  document.querySelector('.menu__close').addEventListener('click', function() {
    document.querySelector('.menu').classList.remove('menu-open')
  })
  document.querySelector('.header__nav-item').addEventListener('click', function() {
    document.querySelector('.menu').classList.remove('menu-open')
  })
})

// search-btn
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.header__search').addEventListener('click', function() {
      document.querySelector('.header__search-open').classList.add('search--active')
    })
    document.querySelector('.search__close').addEventListener('click', function() {
      document.querySelector('.header__search-open').classList.remove('search--active')
    })
})

// swiper-hero
const swiper1 = new Swiper ('.swiper-hero', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 10000
  },
  lazy: true,
});

// swiper-gallery
const swiper2 = new Swiper(".swiper-gallery", {
  slidesPerView: 3,
  loop: true,
  pagination: {
    el: ".gallery__swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".gallery__swiper-button-next",
    prevEl: ".gallery__swiper-button-prev",
  },
  breakpoints: {
    1200: {
      // width: 350,
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    },
    970: {
      // width: 280,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    576: {
      // width: 315,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },
    319: {
      // width: 290,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
    }
  },
  lazy: true,
});

// Скролл
document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  autoHide: false,
  scrollbarMaxSize: 25,
});
})

// CustomSelect - Hero
const btns = document.querySelectorAll(".menu__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const btnsArrow= document.querySelector(".menu__bnt-icon")
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function() {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns),
        el.classList.remove(activeClassbtns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})

// CustomSelect - Gallery
const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
    searchEnabled: false,  
    itemSelectText: '',
});    

// accordion
$( function() {
  $( "#accordion" ).accordion({
    icons: false,
    heightStyle: "content",
    collapsible: true,
    // active: true
  });
} );

// tabs
document.querySelectorAll('.accordion-bottom__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;

  document.querySelectorAll('.accordion-bottom__btn').forEach(function(btn){
  btn.classList.remove('tabs-nav__btn--active')});

  e.currentTarget.classList.add('tabs-nav__btn--active');
  document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
  tabsBtn.classList.remove('tabs-item--active')});

  document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

// swiper-events
const swiper3 = new Swiper(".swiper-events", {
  slidesPerView: 3,
  spaceBetween: 10,
  navigation: {
    nextEl: ".events__swiper-button-next",
    prevEl: ".events__swiper-button-prev",    
  },
  pagination: {
    el: '.events__swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }, 
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 10,
    },
    670: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10,
    },
    250: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    }
  },
  lazy: true,
});

// swiper-project
const swiper4 = new Swiper(".swiper-project", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".project__swiper-button-next",
    prevEl: ".project__swiper-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },    
    970: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    576: {
      // width: 668,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    250: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 50,
    }
  },
  lazy: true,
});

//Input mask
let selector = document.querySelector("input[type='tel']");
    
let im = new Inputmask("+7(999)999-99-99");
im.mask(selector);    

new JustValidate('.form', {
    rules: {
        email: {
            required: true,
            email: true
        },
        tel: {
            required: true, 
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue();
                return Number(phone) && phone.length === 10; 
            }
        },
        name: {
            required: true,
        },
    },
    messages: {                
        tel: {
            required: 'Укажите ваш телефон',
        },
        name: {
            required: 'Как вас зовут?',
        }
    },
    colorWrong: '#D11616',
});

//Плавный скролл по ID
$(document).ready(function(){
  $("body").on("click","a", function (event) {
//отменяем стандартную обработку нажатия по ссылке
event.preventDefault();

//забираем идентификатор бока с атрибута href
const id  = $(this).attr('href'),

//узнаем высоту от начала страницы до блока на который ссылается якорь
  top = $(id).offset().top;

//анимируем переход на расстояние - top за 1500 мс
$('body,html').animate({scrollTop: top}, 1500);
    });
});

//Tooltip
tippy('.project__tooltip1', {
  content: 'Пример современных тенденций- современная методология разработки',
});
tippy('.project__tooltip2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
});
tippy('.project__tooltip3', {
  content: 'В стремлении повысить качество',
});