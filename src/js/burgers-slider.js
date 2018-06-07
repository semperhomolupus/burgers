$(function() {
  const slider = $(".burgers");
  const arrowButton = slider.find(".burgers__arrow");
  const slidesList = slider.find(".burgers__slider");
  const slides = slider.find(".burgers__slide");

  let nextSliderIndex;
  let sliderDuration = 400;

  var moveSlide = function(nextItemIndex, activeSlideItem) {
    let $nextItem = slides.eq(nextItemIndex);

    slidesList.animate(
      {
        left: -nextItemIndex * 100 + "%",
      },
      sliderDuration,
      function() {
        activeSlideItem.removeClass("active");
        $nextItem.addClass("active");
      }
    );
  };

  arrowButton.on("click", e => {
    e.preventDefault();
    let $this = $(e.currentTarget);
    let activeSlide = slides.filter(".active");
    let activeSliderIndex = activeSlide.index();

    if ($this.hasClass("burgers__arrow--before")) {
      // Стрелка назад
      nextSliderIndex = activeSlide.prev().index();
      activeSliderIndex = nextSliderIndex >= 0 ? nextSliderIndex : slides.last().index();
    } else if ($this.hasClass("burgers__arrow--after")) {
      // Стрелка вперед
      nextSliderIndex = activeSlide.next().index();
      activeSliderIndex = nextSliderIndex >= 0 ? nextSliderIndex : slides.first().index();
    }

    moveSlide(activeSliderIndex, activeSlide);
  });
});
