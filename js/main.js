var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: false,
      breakpoints: {
            // when window width is >= 320px
            320: {
                  slidesPerView: 1.1,
                  spaceBetween: 20
            },
           576: {
                  slidesPerView: 2.6,
                  spaceBetween: 10
            },
            // when window width is >= 480px
            768: {
                  slidesPerView: 3,
                  spaceBetween: 10
            },
             1200: {
                  slidesPerView: 4,
                  spaceBetween: 16,
                  loop: false,
                  draggable: false,
                  touchRatio: false,
            },
            // when window width is >= 640px
            1300: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                  loop: false,
                  draggable: false,
                  touchRatio: false,
            }
      },
});
var swiper = new Swiper(".mySwiper2", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: false,
      breakpoints: {
            // when window width is >= 320px
            320: {
                  slidesPerView: 1.1,
                  spaceBetween: 20
            },
            575: {
                  slidesPerView: 2.1,
                  spaceBetween: 10
            },
          767: {
                  slidesPerView: 2.6,
                  spaceBetween: 10,
            },
            1200: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                  loop: false,
                  draggable: false,
                  touchRatio: false,
            },
            // when window width is >= 640px
            1600: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                  loop: false,
                  draggable: false,
                  touchRatio: false,
            }
      },
});

var swiper = new Swiper(".mySwipermenu", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: false,
      breakpoints: {
            // when window width is >= 320px
            320: {
                  slidesPerView: 1.1,
                  spaceBetween: 20
            },
            575: {
                  slidesPerView: 2.1,
                  spaceBetween: 10
            },
          767: {
                  slidesPerView: 2.6,
                  spaceBetween: 10,
            },
            1200: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                  loop: false,
                  draggable: false,
                  touchRatio: false,
            },
            // when window width is >= 640px
            1600: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                  loop: false,
                  draggable: false,
                  touchRatio: false,
            }
      },
});
var swiper = new Swiper(".mySwiper3", {
      loop: true,
      effect: 'fade',
      fadeEffect: {
            crossFade: true
      },
      pagination: {
            el: ".swiper-pagination2",
            type: "fraction",
      },
      navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
      },
});

var swiper = new Swiper(".mySwiper4", {
      effect: 'fade',
      fadeEffect: {
            crossFade: true
      },
      pagination: {
            el: ".pagination",
            type: "fraction",
      },
      navigation: {
            nextEl: ".next",
            prevEl: ".prev",
      },
});

function changeImage() {
      var image = document.getElementById('image-change');
      if (image.src.match("pluse-icon")) {
            image.src = "images/minus.svg";
      } else {
            image.src = "images/pluse-icon.svg";
      }
}

function changeImage2() {
      var image = document.getElementById('image-change2');
      if (image.src.match("pluse-icon")) {
            image.src = "images/minus.svg";
      } else {
            image.src = "images/pluse-icon.svg";
      }
}
var swiper = new Swiper(".mySwiper6", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: false,
      breakpoints: {
            // when window width is >= 320px
            320: {
                  slidesPerView: 1.1,
                  spaceBetween: 20
            },
            575: {
                  slidesPerView:1.5,
                  spaceBetween: 10
            },
          767: {
                  slidesPerView: 2.6,
                  spaceBetween: 10,
            },
            1200: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                  loop: false,
                  draggable: false,
                  touchRatio: false,
            },
            // when window width is >= 640px
            1600: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                  loop: false,
                  draggable: false,
                  touchRatio: false,
            }
      },
});


function openNav() {
      document.getElementById("mySidenav").style.width = "100%";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }