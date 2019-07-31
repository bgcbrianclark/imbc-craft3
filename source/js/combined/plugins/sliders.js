$("#homeSlider").slick({
  responsive: [
    {
      breakpoint: 9999,
      settings: "unslick"
    },
    {
      breakpoint: 992,
      settings: {
        adaptiveHeight: false,
        arrows: true,
        draggable: true,
        centerMode: false,
        infinite: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        adaptiveHeight: true
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false
      }
    }
  ]
});

// desktop slider
var desktopSlider = $(".slider .hero");

function advanceSlide() {
  var totalSlides = $(".hero .image").length;
  var current = $(".hero .image.active").data("slide");

  console.log(current);

  function updateSlides(index) {
    console.log("updating slides");

    $('.image[data-slide="' + index + '"]').removeClass("active");
    $('.image[data-slide="' + (index + 1) + '"]').addClass("active");
    $('.content[data-slide="' + index + '"]').removeClass("active");
    $('.content[data-slide="' + (index + 1) + '"]').addClass("active");

    if (current < totalSlides) {
      console.log("next Slide");
      current += 1;
    } else {
      console.log("First Slide");
      $('.image[data-slide="1"]').addClass("active");
      $('.content[data-slide="1"]').addClass("active");
    }
  }

  updateSlides(current);
}

$("#advanceSlide").on("click", function() {
  advanceSlide();
});
