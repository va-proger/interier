import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
  // import Swiper bundle with all modules installed
  import Swiper from 'swiper/bundle';

  // import styles bundle
//   import 'swiper/css/bundle';

  // init Swiper:
  const swiper = new Swiper(
    '.hero-swiper',
    {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    }
  );

  // init Swiper:

