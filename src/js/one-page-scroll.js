$(function() {
  const wrapper = $(".wrapper");
  const dots = wrapper.find(".dots");
  const pages = wrapper.find(".pages");
  const sections = pages.find("section");
  const dotClassActive = "dot--active";
  let activeSectionNumber = 0;

  const generateDots = function() {
    sections.each(function() {
      let dot = $("<li>", {
        attr: {
          class: "dot",
        },
      });
      dots.append(dot);
    });

    dots
      .children()
      .first()
      .addClass(dotClassActive);
  };

  generateDots();

  const movePage = function(index) {
    // pages.animate(
    //   {
    //     top: -index * 100 + "%",
    //   },
    //   1000
    // );

    index = -index * 100 + "%";

    pages.css({
      transform: `translateY(${index})`,
      "-webkit-transform": `translateY(${index})`,
    });
  };

  dots.on("click", "li", e => {
    let $this = $(e.currentTarget);
    $this.siblings().removeClass(dotClassActive);
    $this.addClass(dotClassActive);

    let index = $this.index();
    sections.removeClass("active");
    sections.eq(index).addClass("active");
    movePage(index);
  });

  wrapper.on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;

    if (deltaY < 0) {
      activeSectionNumber = activeSectionNumber > 0 ? --activeSectionNumber : 0;
      movePage(activeSectionNumber);
      console.log(activeSectionNumber);
    } else if (deltaY > 0) {
      activeSectionNumber = activeSectionNumber < sections.length - 1 ? ++activeSectionNumber : sections.length - 1;
      movePage(activeSectionNumber);
    }
  });
});
