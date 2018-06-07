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

  app.teamAccordion();
});
