$(function() {
  const header = $(".header");
  const headerBurger = header.find(".header__burger");
  const headerLogo = header.find(".header__logo");
  const headerMenuWrapper = header.find(".header__menu-wrapper");
  const headerMenuClose = headerMenuWrapper.find(".header__menu-close");

  headerBurger.on("click", e => {
    e.preventDefault();
    headerMenuWrapper.addClass("header__menu-wrapper--active");
    headerLogo.addClass("header__logo--fixed");

    $(document).on("wheel", e => e.preventDefault);
  });

  headerMenuClose.on("click", e => {
    e.preventDefault();
    headerMenuWrapper.removeClass("header__menu-wrapper--active");
    headerLogo.removeClass("header__logo--fixed");
  });

  $(document).on("scroll", console.log("asds"));
});
