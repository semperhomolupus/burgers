$(function() {
  const burgerComposition = $(".burgers__composition");
  const burgerPopup = burgerComposition.find(".burgers__composition-popup");
  const burgersPopupBtn = burgerComposition.find(".burgers__composition-btn");
  const burgersPopupClose = burgerComposition.find(".burgers__composition-close");

  burgersPopupBtn.on("click", e => {
    const $this = $(e.currentTarget);
    $this.siblings(burgerPopup).slideToggle();
  });

  burgersPopupClose.on("click", e => {
    const $this = $(e.currentTarget);
    $this
      .closest(burgerComposition)
      .find(burgerPopup)
      .slideToggle();
  });
});
