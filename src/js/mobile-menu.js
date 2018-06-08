$(function() {
  const header = $(".header");
  const headerBurger = header.find(".header__burger");
  const headerLogo = header.find(".header__logo");
  const headerMenuWrapper = header.find(".header__menu-wrapper");
  const headerLink = header.find(".header__menu-link");
  const headerMenuClose = headerMenuWrapper.find(".header__menu-close");

  const headerMenuWrapperActiveClass = "header__menu-wrapper--active";
  const headerLogoActiveClass = "header__logo--fixed";

  headerBurger.on("click", e => {
    e.preventDefault();
    headerMenuWrapper.addClass(headerMenuWrapperActiveClass);
    headerLogo.addClass(headerLogoActiveClass);
  });

  headerMenuClose.on("click", e => {
    e.preventDefault();
    headerMenuWrapper.removeClass(headerMenuWrapperActiveClass);
    headerLogo.removeClass(headerLogoActiveClass);
  });

  headerLink.on("click", e => {
    if (headerMenuWrapper.hasClass(headerMenuWrapperActiveClass)) {
      headerMenuWrapper.removeClass(headerMenuWrapperActiveClass);
      headerLogo.removeClass(headerLogoActiveClass);
    }
  });
});
