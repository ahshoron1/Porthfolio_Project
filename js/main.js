// let list = document.querySelectorAll('.list');
//     let itemBox = document.querySelectorAll('.itemBox');
//     for (let i = 0; i < list.length; i++) {
//       list[i].addEventListener('click', function () {
//         for (let j = 0; j < list.length; j++) {
//           list[j].classList.remove('active');
//         }
//         this.classList.add('active');

//         let dataFilter = this.getAttribute('data-filter');
//         for (let k = 0; k < itemBox.length; k++) {
//           itemBox[k].classList.remove('active');
//           itemBox[k].classList.add('hide');
//           if (itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
//             itemBox[k].classList.remove('hide');
//             itemBox[k].classList.add('active');
//           }
//         }

//       })
//     }
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3,
                nav: false,
                loop: false
            }
        }
    })
    $('.items-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options

        gallery: {
            enabled: true, // set to true to enable gallery

            preload: [0, 2], // read about this option in next Lazy-loading section

            navigateByImgClick: true,

            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        },

        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function (openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
    $(".list").click(function () {

        let value = $(this).attr("data-filter");

        if (value == "all") {
            $(".itemBox").show(1000);
        }
        else {
            $(".itemBox").not("." + value).hide(1000);
            $(".itemBox").filter("." + value).show(1000);
        }

        $(".list").removeClass("active");
        $(this).addClass("active");
    });
    $(".scrollto").click(function () {
        $(".scrollto").removeClass("active");
        $(this).addClass("active");
    })

});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true, 
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var typed = new Typed(".auto-type", {
    strings: ["Designing UI/UX.", "Creating Websites.", "Designing Logo"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

window.addEventListener('scroll', function () {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('.nav-link');

    var currentSection = '';

    sections.forEach(function (section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(function (navLink) {
        navLink.classList.remove('active');
        if (navLink.getAttribute('href').slice(1) === currentSection) {
            navLink.classList.add('active');
        }
    });
});

const mobile_nav = document.querySelector(".mobile-nav-btn");
const nav_header = document.querySelector(".header");
const toggleNavber = () =>{
    nav_header.classList.toggle("active");
}
mobile_nav.addEventListener("click",()=>toggleNavber());
