
if ($(window).width() < 750) {
  $('.port').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows: false,
  });
} else if ($(window).width() < 970) {
  $('.port').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
  });
}
else {
  $('.port').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
  });
};









