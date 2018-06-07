$(function() {
  $("body").on("click", "a[href^='#']", function(e) {
    e.preventDefault();
    let id = $(this).attr("href");
    let top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1200);
  });
});
