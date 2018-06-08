$(function() {
  $(".menu__item").on("click", e => {
    e.preventDefault();
    let $this = $(e.currentTarget);

    $this.siblings().removeClass("menu__item--active");
    $this.toggleClass("menu__item--active");
  });
});
