$(document).ready(function () {
  /*======= Skillset *=======*/

  $(".level-bar-inner").css("width", "0");

  $(window).on("load", function () {
    $(".level-bar-inner").each(function () {
      var itemWidth = $(this).data("level");

      $(this).animate(
        {
          width: itemWidth,
        },
        800
      );
    });
  });

  /* Bootstrap Tooltip for Skillset */
  $(".level-label").tooltip();

  /* jQuery RSS - https://github.com/sdepold/jquery-rss */

  function logGAEvent() {
    ga("send", {
      hitType: "event",
      eventCategory: "linkPress",
      eventAction: "click",
      eventLabel: this.dataset.value,
    });
  }

  const eventElements = document.querySelectorAll(".actionEl");

  for (let i = 0; i < eventElements.length; i++) {
    eventElements[i].addEventListener("click", logGAEvent);
  }

  window.addEventListener("scroll", function () {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      ga("send", {
        hitType: "event",
        eventCategory: "scrollToBottom",
        eventAction: "scroll",
        eventLabel: "true",
      });
    }
  });
});
