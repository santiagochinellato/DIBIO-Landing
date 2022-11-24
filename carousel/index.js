$(".carouselBackground").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // fade: true,
  asNavFor: ".carouselInfo",
  speed: 1500,
  focusOnSelect: false,
  pauseOnFocus: false,
  pauseOnHover: true,
  autoplay: true,
  autoplaySpeed: 5000,
  Infinite: false,
});
// $(".carouselImagenes").slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   // fade: true,
//   asNavFor: ".carouselInfo",
//   speed: 1900,
//   pauseOnFocus: false,
//   pauseOnHover: false,
//   // autoplay: true,
//   // autoplaySpeed: 5000,
//   Infinite: true,
// });
$(".carouselInfo").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".carouselBackground",
  arrows: true,
  dots: false,
  // fade: true,
  // centerMode: true,
  focusOnSelect: false,
  speed: 2500,
  pauseOnFocus: false,
  pauseOnHover: true,
  autoplay: true,
  autoplaySpeed: 5000,
  Infinite: false,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
});
