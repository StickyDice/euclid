document.addEventListener("DOMContentLoaded", (e) =>{
  // burgerMenu
  let burgerMenu = document.querySelector(".burger");
  let header = document.querySelector(".header");
  let container = document.querySelector(".container");

  burgerMenu.addEventListener("click", () => {
    header.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
    container.classList.toggle("burger-container");
  })

  // swiper
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  })

  // tabs
  let tabsBtn = document.querySelectorAll(".work-plan__btn");
  let tabsItem = document.querySelectorAll(".slide");

  tabsBtn.forEach(function(element){
    element.addEventListener("click", (el) => {
      const path = el.currentTarget.dataset.path;

      tabsBtn.forEach(function(btn) {btn.classList.remove("work-plan__btn_active")});
      el.currentTarget.classList.add("work-plan__btn_active");

      tabsItem.forEach(function(element) {element.classList.remove("slide_active")});
      document.querySelector(`[data-target="${path}"]`).classList.add("slide_active");
    })
  })

  new Accordion(".accordion-container");

  let searchBtn = document.querySelector(".header__search-btn");
  let searchForm = document.querySelector(".header__form");
  let closeBtn = document.querySelector(".search-form__close-btn");
  searchBtn.addEventListener("click", () => {
    searchForm.classList.add("search-form_active");
  });
  closeBtn.addEventListener("click", () => {
    searchForm.classList.remove("search-form_active");
  });
});

