var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function () {
  $(".search-btn").on("click", function () {
    $(".menu-1, .menu-2").addClass("hide-lg").removeClass("show-lg");
    $(".logo").addClass("hide-md").removeClass("show-md")
    $(".searchbar").addClass("show-lg").removeClass("hide-lg");
    $(".search").focus();
  });

  $(".cancel-btn").on("click", function () {
    $(".searchbar").addClass("hide-lg").removeClass("show-lg");
    $(".menu-1, .menu-2").addClass("show-lg").removeClass("hide-lg");
    $(".logo").addClass("show-md").removeClass("hide-md")
    $(".search").val("");
  });

});
