$(function() {
  const wrapper = $(".pages-wrapper");
  const dots = wrapper.find(".dots");
  const pages = wrapper.find(".pages");
  const sections = pages.find("section");
  const dotClassActive = "dot--active";
  let activeSectionNumber = 0;
  const duration = 700;

  let isMobile = $(window).width() <= 768 || $(window).height() <= 640;
  if (isMobile) return false;

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
    index = -index * 100 + "%";
    pages.css({
      transform: `translateY(${index})`,
      "-webkit-transform": `translateY(${index})`,
    });
  };

  const toggleDot = function(index) {
    dots.children().removeClass(dotClassActive);
    dots
      .children()
      .eq(index)
      .addClass(dotClassActive);
  };

  const changePage = function(index) {
    sections.removeClass("active");
    sections.eq(index).addClass("active");
    movePage(index);
    toggleDot(index);
  };

  const changeActiveSection = function(deltaY) {
    if (deltaY < 0) {
      activeSectionNumber = activeSectionNumber > 0 ? --activeSectionNumber : 0;
    } else if (deltaY > 0) {
      activeSectionNumber = activeSectionNumber < sections.length - 1 ? ++activeSectionNumber : sections.length - 1;
    }
    changePage(activeSectionNumber);
  };

  dots.on("click", "li", e => {
    let $this = $(e.currentTarget);
    let index = $this.index();
    activeSectionNumber = index;
    changePage(index);
  });

  $("a[href^='#']").on("click", e => {
    let $this = $(e.currentTarget);
    let href = $this.attr("href");
    let index = sections.filter(href).index();
    activeSectionNumber = index;
    changePage(index);
  });

  let flag = true;

  wrapper.on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;

    if (flag) {
      flag = false;
      setTimeout(() => {
        changeActiveSection(deltaY);
        flag = true;
      }, duration);
    }
  });
});
