$(function() {
  const ourForm = $(".delivery__form");

  const formSubmit = function(e) {
    e.preventDefault();
    let form = $(e.target);
    let formUrl = form.attr("action");
    let formData = form.serialize();

    const request = $.ajax({
      type: "POST",
      url: formUrl,
      data: formData,
      dataType: "JSON",
    });

    request.done(function(msg) {
      let message = msg.message;
      const modal = $(".delivery__modal");
      const modalText = modal.find(".delivery__modal-text");
      const modalClose = modal.find(".delivery__modal-close");

      modalText.text(message);
      modal.addClass("delivery__modal--active");

      modalClose.on("click", e => {
        modal.removeClass("delivery__modal--active");
      });
    });

    console.log(formData);
  };

  ourForm.on("submit", formSubmit);
});
