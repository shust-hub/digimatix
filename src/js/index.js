import '../scss/index.scss'
import 'bootstrap'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

window.addEventListener("scroll" ,function() {
    let header = document.querySelector("header");
    header.classList.toggle("header-scrolled", window.scrollY > 0);
  });

  /*
    Carousel
*/
$('#carouselHotOffer').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
$('#carouselAllOffer').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
$('.carouselMain-next-button').click(function() {
    $('.owl-carousel').trigger('next.owl.carousel');
});

$('.carouselMain-prev-button').click(function() {
    $('.owl-carousel').trigger('prev.owl.carousel');
});