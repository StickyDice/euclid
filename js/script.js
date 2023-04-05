document.addEventListener("DOMContentLoaded", (e) => {
  // burgerMenu
  let burgerMenu = document.querySelector(".burger");
  let header = document.querySelector(".header");
  let container = document.querySelector(".container");
  let headerNav = document.querySelector(".header__nav");

  let width = screen.width;
  if (width < 1025) {
    headerNav.ariaHidden = true;
  }

  burgerMenu.addEventListener("click", () => {
    header.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
    container.classList.toggle("burger-container");
    if (header.classList.contains("open")) {
      burgerMenu.ariaLabel = "Закрыть меню";
      if (width < 1025) {
        headerNav.ariaHidden = false;
      }
    } else {
      burgerMenu.ariaLabel = "Открыть меню";
      if (width < 1025) {
        headerNav.ariaHidden = true;
      }
    }
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

  tabsBtn.forEach(function (element) {
    element.addEventListener("click", (el) => {
      const path = el.currentTarget.dataset.path;

      tabsBtn.forEach(function (btn) { btn.classList.remove("work-plan__btn_active") });
      el.currentTarget.classList.add("work-plan__btn_active");

      tabsItem.forEach(function (element) { element.classList.remove("slide_active") });
      document.querySelector(`[data-target="${path}"]`).classList.add("slide_active");
    })
  })

  const acc = new Accordion(".accordion-container");

  // search
  let searchBtn = document.querySelector(".header__search-btn");
  let searchForm = document.querySelector(".header__form");
  let formSearchBtn = document.querySelector(".search-form__search-btn");
  let searchInput = document.querySelector(".search-form__input");
  let closeBtn = document.querySelector(".search-form__close-btn");
  searchBtn.addEventListener("click", () => {
    searchForm.classList.add("search-form_active");
    formSearchBtn.tabIndex = 0;
    searchInput.tabIndex = 0;
    closeBtn.tabIndex = 0;
    searchForm.ariaHidden = false;
  });
  closeBtn.addEventListener("click", () => {
    searchForm.classList.remove("search-form_active");
    formSearchBtn.tabIndex = -1;
    searchInput.tabIndex = -1;
    closeBtn.tabIndex = -1;
    searchForm.ariaHidden = false;
  });

  // tab
  let faqItems = document.querySelectorAll(".faq__item");
  faqItems.forEach((item, i) => {
    document.addEventListener("keydown", (e) => {
      if (e.code === "Space" && document.activeElement === item) {
        e.preventDefault();
        acc.toggle(i);
      }
    });
  });
});

