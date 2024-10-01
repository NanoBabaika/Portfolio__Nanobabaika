const slider = $('.bxslider').bxSlider({
    infiniteLoop: true,
    slideWidth: 865,
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 20,
    pager: false,
    controls:false
  });



// кастомные стредочки
  $(".arrow__left").click(e => {
    e.preventDefault();

    slider.goToPrevSlide();
})


$(".arrow__right").click(e => {
    e.preventDefault();
    slider.goToNextSlide();
})
 

// Ссылки слайдера???