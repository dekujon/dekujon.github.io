// Carousel Swiping

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Accordion Mechanism

$(document).ready(function () {

  // Course Swapping

    $("#goal1").on("click", function () {
    $(".second, .third, .fourth, .fifth").hide();
    $(".first").show();
    $(this).addClass("uno");
    $("#goal2, #goal3, #goal4, #goal5").removeClass("dos").removeClass("tres").removeClass("quatro").removeClass("cinco");
    $("#caret-right-1-1, #caret-right-1-2").removeClass("d-lg-none").addClass("d-none");
    $("#caret-right-2-1, #caret-right-2-2, #caret-right-3-1, #caret-right-3-2, #caret-right-4-1, #caret-right-4-2, #caret-right-5-1, #caret-right-5-2, #caret-down-1-1, #caret-down-1-2").removeClass("d-none").addClass("d-lg-none");
    $("#caret-down-2-1, #caret-down-2-2, #caret-down-3-1, #caret-down-3-2, #caret-down-4-1, #caret-down-4-2, #caret-down-5-1, #caret-down-5-2").removeClass("d-lg-none").addClass("d-none");
  })

  $("#goal2").on("click", function () {
    $(".first, .third, .fourth, .fifth").hide();
    $(".second").show();
    $(this).addClass("dos");
    $("#goal1, #goal3, #goal4, #goal5").removeClass("uno").removeClass("tres").removeClass("quatro").removeClass("cinco");
    $("#caret-right-2-1, #caret-right-2-2").removeClass("d-lg-none").addClass("d-none");
    $("#caret-right-1-1, #caret-right-1-2, #caret-right-3-1, #caret-right-3-2, #caret-right-4-1, #caret-right-4-2, #caret-right-5-1, #caret-right-5-2, #caret-down-2-1, #caret-down-2-2").removeClass("d-none").addClass("d-lg-none");
    $("#caret-down-1-1, #caret-down-1-2, #caret-down-3-1, #caret-down-3-2, #caret-down-4-1, #caret-down-4-2, #caret-down-5-1, #caret-down-5-2").removeClass("d-lg-none").addClass("d-none");
  })

  $("#goal3").on("click", function () {
    $(".first, .second, .fourth, .fifth").hide();
    $(".third").show();
    $(this).addClass("tres");
    $("#goal1, #goal2, #goal4, #goal5").removeClass("uno").removeClass("dos").removeClass("quatro").removeClass("cinco");
    $("#caret-right-3-1, #caret-right-3-2").removeClass("d-lg-none").addClass("d-none");
    $("#caret-right-1-1, #caret-right-1-2, #caret-right-2-1, #caret-right-2-2, #caret-right-4-1, #caret-right-4-2, #caret-right-5-1, #caret-right-5-2, #caret-down-3-1, #caret-down-3-2").removeClass("d-none").addClass("d-lg-none");
    $("#caret-down-1-1, #caret-down-1-2, #caret-down-2-1, #caret-down-2-2, #caret-down-4-1, #caret-down-4-2, #caret-down-5-1, #caret-down-5-2").removeClass("d-lg-none").addClass("d-none");
  })

  $("#goal4").on("click", function () {
    $(".first, .second, .third, .fifth").hide();
    $(".fourth").show();
    $(this).addClass("quatro");
    $("#goal1, #goal2, #goal3, #goal5").removeClass("uno").removeClass("dos").removeClass("tres").removeClass("cinco");
    $("#caret-right-4-1, #caret-right-4-2").removeClass("d-lg-none").addClass("d-none");
    $("#caret-right-1-1, #caret-right-1-2, #caret-right-2-1, #caret-right-2-2, #caret-right-3-1, #caret-right-3-2, #caret-right-5-1, #caret-right-5-2, #caret-down-4-1, #caret-down-4-2").removeClass("d-none").addClass("d-lg-none");
    $("#caret-down-1-1, #caret-down-1-2, #caret-down-2-1, #caret-down-2-2, #caret-down-3-1, #caret-down-3-2, #caret-down-5-1, #caret-down-5-2").removeClass("d-lg-none").addClass("d-none");

  })

  $("#goal5").on("click", function () {
    $(".first, .second, .third, .fourth").hide();
    $(".fifth").show();
    $(this).addClass("cinco");
    $("#goal1, #goal2, #goal3, #goal4").removeClass("uno").removeClass("dos").removeClass("tres").removeClass("quatro");
    $("#caret-right-5-1, #caret-right-5-2").removeClass("d-lg-none").addClass("d-none");
    $("#caret-right-1-1, #caret-right-1-2, #caret-right-2-1, #caret-right-2-2, #caret-right-3-1, #caret-right-3-2, #caret-right-4-1, #caret-right-4-2, #caret-down-5-1, #caret-down-5-2").removeClass("d-none").addClass("d-lg-none");
    $("#caret-down-1-1, #caret-down-1-2, #caret-down-2-1, #caret-down-2-2, #caret-down-3-1, #caret-down-3-2, #caret-down-4-1, #caret-down-4-2").removeClass("d-lg-none").addClass("d-none");

  })
  

  // Resize Tablets to Mobile Mechanism

  $(window).resize(function () {
    var width = $(window).width();
    if (width < 575.98) {
      if ($("#goal1").hasClass("uno")) {
        $(".afterx").insertAfter("#goal1");
      }
      else if ($("#goal2").hasClass("dos")) {
        $(".afterx").insertAfter("#goal2");
      }
      else if ($("#goal3").hasClass("tres")) {
        $(".afterx").insertAfter("#goal3");
      }
      else if ($("#goal4").hasClass("quatro")) {
        $(".afterx").insertAfter("#goal4");
      }
      else if ($("#goal5").hasClass("cinco")) {
        $(".afterx").insertAfter("#goal5");
      }

      $("#goal1").on("click", function () {
        $("#goal2, #goal3, #goal4, #goal5").insertAfter(".after");
      })

      $("#goal2").on("click", function () {
        $(this).insertAfter("#goal1");
        $("#goal3, #goal4, #goal5").insertAfter(".after");
      })

      $("#goal3").on("click", function () {
        $("#goal2").insertAfter("#goal1");
        $(this).insertAfter("#goal2");
        $("#goal4, #goal5").insertAfter(".after");
      })

      $("#goal4").on("click", function () {
        $("#goal2").insertAfter("#goal1");
        $("#goal3").insertAfter("#goal2");
        $(this).insertAfter("#goal3");
        $("#goal5").insertAfter(".after");
      })
      $("#goal5").on("click", function () {
        $("#goal2").insertAfter("#goal1");
        $("#goal3").insertAfter("#goal2");
        $("#goal4").insertAfter("#goal3");
        $(this).insertAfter("#goal4");
      })

    }

  }); 

  // Resize from Desktop to Tablet Mechanism

  $(window).resize(function () {
    var width = $(window).width();
    if (width < 991.98) {
      if ($("#goal1").hasClass("uno")) {
        $("#goal2, #goal3, #goal4, #goal5").insertAfter(".after");
        
      }
      else if ($("#goal2").hasClass("dos")) {
        $("#goal3, #goal4, #goal5").insertAfter(".after");
      }
      else if ($("#goal3").hasClass("tres")) {
        $("#goal4, #goal5").insertAfter(".after");
      }
      else if ($("#goal4").hasClass("quatro")) {
        $("#goal5").insertAfter(".after");
      }
      else if ($("#goal5").hasClass("cinco")) {
        $("#goal5").insertAfter("#goal4");
      }

      $("#goal1, #goal2, #goal3, #goal4, #goal5").removeClass("goalsx").addClass("goals");

      $("#goal1").on("click", function () {
        $("#goal2, #goal3, #goal4, #goal5").insertAfter(".after");
        $(this).removeClass("goalsx").addClass("goals");
      })

      $("#goal2").on("click", function () {
        $(this).insertAfter("#goal1");
        $("#goal3, #goal4, #goal5").insertAfter(".after");
        $(this).removeClass("goalsx").addClass("goals");
      })

      $("#goal3").on("click", function () {
        $("#goal2").insertAfter("#goal1");
        $(this).insertAfter("#goal2");
        $("#goal4, #goal5").insertAfter(".after");
        $(this).removeClass("goalsx").addClass("goals");
      })

      $("#goal4").on("click", function () {
        $("#goal2").insertAfter("#goal1");
        $("#goal3").insertAfter("#goal2");
        $(this).insertAfter("#goal3");
        $("#goal5").insertAfter(".after");
        $(this).removeClass("goalsx").addClass("goals");
      })

      $("#goal5").on("click", function () {
        $("#goal2").insertAfter("#goal1");
        $("#goal3").insertAfter("#goal2");
        $("#goal4").insertAfter("#goal3");
        $(this).insertAfter("#goal4");
        $(this).removeClass("goalsx").addClass("goals");
      })
    }

  });

  // Resize from Tablet to Desktop Mechanism

  $(window).resize(function () {
    var width = $(window).width();
    if (width > 991.99) {

      if ($("#goal1").hasClass("uno")) {
        $("#goal1").removeClass("goals").addClass("goalsx");
        $(".title1").hide();
        $("#des1").show();
      }
      else if ($("#goal2").hasClass("dos")) {
        $("#goal2").removeClass("goals").addClass("goalsx");
        $(".title2").hide();
        $("#des2").show();
      }
      else if ($("#goal3").hasClass("tres")) {
        $("#goal3").removeClass("goals").addClass("goalsx");
        $(".title3").hide();
        $("#des3").show();
      }
      else if ($("#goal4").hasClass("quatro")) {
        $("#goal4").removeClass("goals").addClass("goalsx");
        $(".title4").hide();
        $("#des4").show();
      }
      else if ($("#goal5").hasClass("cinco")) {
        $("#goal5").removeClass("goals").addClass("goalsx");
        $(".title5").hide();
        $("#des5").show();
      }

      $("#goal2, #goal3, #goal4, #goal5").insertAfter("#goal1");

      $("#goal1").on("click", function () {
        $("#goal2, #goal3, #goal4, #goal5").insertAfter("#goal1");
        $("#des2, #des3, #des4, #des5, .title1").hide();
        $("#des1, .title2, .title3, .title4, .title5").show();
        $(this).removeClass("goals").addClass("goalsx");
        $("#goal2, #goal3, #goal4, #goal5").removeClass("goalsx").addClass("goals");
      })

      $("#goal2").on("click", function () {
        $(this).insertAfter("#goal1");
        $("#goal3, #goal4, #goal5").insertAfter("#goal2");
        $("#des1, #des3, #des4, #des5, .title2").hide();
        $("#des2, .title1, .title3, .title4, .title5").show();
        $(this).removeClass("goals").addClass("goalsx");
        $("#goal1, #goal3, #goal4, #goal5").removeClass("goalsx").addClass("goals");
      })

      $("#goal3").on("click", function () {
        $("#goal2").insertAfter("#goal1");
        $(this).insertAfter("#goal2");
        $("#goal4, #goal5").insertAfter("#goal3");
        $("#des1, #des2, #des4, #des5, .title3").hide();
        $("#des3, .title1, .title2, .title4, .title5").show();
        $(this).removeClass("goals").addClass("goalsx");
        $("#goal1, #goal2, #goal4, #goal5").removeClass("goalsx").addClass("goals");
      })

      $("#goal4").on("click", function () {
        $("#goal2").insertAfter("#goal1");
        $("#goal3").insertAfter("#goal2");
        $(this).insertAfter("#goal3");
        $("#goal5").insertAfter("#goal4");
        $("#des1, #des2, #des3, #des5, .title4").hide();
        $("#des4, .title1, .title2, .title3, .title5").show();
        $(this).removeClass("goals").addClass("goalsx");
        $("#goal1, #goal2, #goal3, #goal5").removeClass("goalsx").addClass("goals");
      })

      $("#goal5").on("click", function () {
        $("#goal2").insertAfter("#goal1");
        $("#goal3").insertAfter("#goal2");
        $("#goal4").insertAfter("#goal3");
        $(this).insertAfter("#goal4");
        $("#des1, #des2, #des3, #des4, .title5").hide();
        $("#des5, .title1, .title2, .title3, .title4").show();
        $(this).removeClass("goals").addClass("goalsx");
        $("#goal1, #goal2, #goal3, #goal4").removeClass("goalsx").addClass("goals");
      })

    }

  });

  // Refresh on Mobile View Mechanism

  if (window.matchMedia('(max-width: 575.98px)').matches) {

    if ($("#goal1").hasClass("uno")) {
      $("#goal2, #goal3, #goal4, #goal5").insertAfter(".after");
    }
    else if ($("#goal2").hasClass("dos")) {
      $("#goal3, #goal4, #goal5").insertAfter(".after");
    }
    else if ($("#goal3").hasClass("tres")) {
      $("#goal4, #goal5").insertAfter(".after");
    }
    else if ($("#goal4").hasClass("quatro")) {
      $("#goal5").insertAfter(".after");
    }
    else if ($("#goal5").hasClass("cinco")) {
      $("#goal5").insertAfter("#goal4");
    }

    $(".afterx").insertAfter("#goal1");

    $("#goal1").on("click", function () {
      $("#goal2, #goal3, #goal4, #goal5").insertAfter(".after");
    })

    $("#goal2").on("click", function () {
      $(this).insertAfter("#goal1");
      $("#goal3, #goal4, #goal5").insertAfter(".afterx");
    })

    $("#goal3").on("click", function () {
      $("#goal2").insertAfter("#goal1");
      $(this).insertAfter("#goal2");
      $("#goal4, #goal5").insertAfter(".afterx");
    })

    $("#goal4").on("click", function () {
      $("#goal2").insertAfter("#goal1");
      $("#goal3").insertAfter("#goal2");
      $(this).insertAfter("#goal3");
      $("#goal5").insertAfter(".afterx");
    })
    $("#goal5").on("click", function () {
      $("#goal2").insertAfter("#goal1");
      $("#goal3").insertAfter("#goal2");
      $("#goal4").insertAfter("#goal3");
      $(this).insertAfter("#goal4");
    })

  }

  // Refresh on Tablet View Mechanism

  if (window.matchMedia('(max-width: 991.98px)').matches) {
    $("#goal2, #goal3, #goal4, #goal5").insertAfter(".after");

    $("#goal1").on("click", function () {
      $("#goal2, #goal3, #goal4, #goal5").insertAfter(".after");
    })

    $("#goal2").on("click", function () {
      $(this).insertAfter("#goal1");
      $("#goal3, #goal4, #goal5").insertAfter(".after");
    })

    $("#goal3").on("click", function () {
      $("#goal2").insertAfter("#goal1");
      $(this).insertAfter("#goal2");
      $("#goal4, #goal5").insertAfter(".after");
    })

    $("#goal4").on("click", function () {
      $("#goal2").insertAfter("#goal1");
      $("#goal3").insertAfter("#goal2");
      $(this).insertAfter("#goal3");
      $("#goal5").insertAfter(".after");
    })

    $("#goal5").on("click", function () {
      $("#goal2").insertAfter("#goal1");
      $("#goal3").insertAfter("#goal2");
      $("#goal4").insertAfter("#goal3");
      $(this).insertAfter("#goal4");
    })

  }

  // Refresh on Desktop View Mechanism

  if (window.matchMedia('(min-width: 992px)').matches) {

    if ($("#goal1").hasClass("uno")) {
      $("#goal1").removeClass("goals").addClass("goalsx");
      $(".title1").hide();
      $("#des1").show();
    }
    else if ($("#goal2").hasClass("dos")) {
      $("#goal2").removeClass("goals").addClass("goalsx");
    }
    else if ($("#goal3").hasClass("tres")) {
      $("#goal3").removeClass("goals").addClass("goalsx");
    }
    else if ($("#goal4").hasClass("quatro")) {
      $("#goal4").removeClass("goals").addClass("goalsx");
    }
    else if ($("#goal5").hasClass("cinco")) {
      $("#goal5").removeClass("goals").addClass("goalsx");
    }

    $("#goal2, #goal3, #goal4, #goal5").insertAfter("#goal1");

    $("#goal1").on("click", function () {
      $("#goal2, #goal3, #goal4, #goal5").insertAfter("#goal1");
      $("#des2, #des3, #des4, #des5, .title1").hide();
      $("#des1, .title2, .title3, .title4, .title5").show();
      $(this).removeClass("goals").addClass("goalsx");
      $("#goal2, #goal3, #goal4, #goal5").removeClass("goalsx").addClass("goals");
    })

    $("#goal2").on("click", function () {
      $(this).insertAfter("#goal1");
      $("#goal3, #goal4, #goal5").insertAfter("#goal2");
      $("#des1, #des3, #des4, #des5, .title2").hide();
      $("#des2, .title1, .title3, .title4, .title5").show();
      $(this).removeClass("goals").addClass("goalsx");
      $("#goal1, #goal3, #goal4, #goal5").removeClass("goalsx").addClass("goals");
    })

    $("#goal3").on("click", function () {
      $("#goal2").insertAfter("#goal1");
      $(this).insertAfter("#goal2");
      $("#goal4, #goal5").insertAfter("#goal3");
      $("#des1, #des2, #des4, #des5, .title3").hide();
      $("#des3, .title1, .title2, .title4, .title5").show();
      $(this).removeClass("goals").addClass("goalsx");
      $("#goal1, #goal2, #goal4, #goal5").removeClass("goalsx").addClass("goals");
    })

    $("#goal4").on("click", function () {
      $("#goal2").insertAfter("#goal1");
      $("#goal3").insertAfter("#goal2");
      $(this).insertAfter("#goal3");
      $("#goal5").insertAfter("#goal4");
      $("#des1, #des2, #des3, #des5, .title4").hide();
      $("#des4, .title1, .title2, .title3, .title5").show();
      $(this).removeClass("goals").addClass("goalsx");
      $("#goal1, #goal2, #goal3, #goal5").removeClass("goalsx").addClass("goals");
    })

    $("#goal5").on("click", function () {
      $("#goal2").insertAfter("#goal1");
      $("#goal3").insertAfter("#goal2");
      $("#goal4").insertAfter("#goal3");
      $(this).insertAfter("#goal4");
      $("#des1, #des2, #des3, #des4, .title5").hide();
      $("#des5, .title1, .title2, .title3, .title4").show();
      $(this).removeClass("goals").addClass("goalsx");
      $("#goal1, #goal2, #goal3, #goal4").removeClass("goalsx").addClass("goals");
    })
  }

});



