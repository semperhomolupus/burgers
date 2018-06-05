$(function() {
  const app = {};

  app.teamAccordion = function() {
    const teamGuyName = $(".team__guy-name");

    teamGuyName.on("click", e => {
      var $this = $(e.currentTarget);
      var $other = $this.parent().siblings();

      $other.find(".team__guy-info").slideUp();
      $other.find(".team__guy-name").removeClass("team__guy-name--active");

      $this.toggleClass("team__guy-name--active");
      $this.next().slideToggle();
    });
  };

  app.menuAccordion = function() {
    const menuTab = $(".menu__tab");

    menuTab.on("click", e => {
      var $this = $(e.currentTarget);
      menuTab.next().removeClass("menu__pane--active");
      menuTab.next().addClass("visuallyhidden");
      $this.next().addClass("menu__pane--active");
      $this.next().removeClass("visuallyhidden");
    });
  };

  app.teamAccordion();
  app.menuAccordion();
});
