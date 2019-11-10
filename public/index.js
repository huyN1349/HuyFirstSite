$(document).click(function(event) {
  var clickover = $(event.target);
  var $navbar = $('.navbar-collapse');
  if ($('.navbar-toggler').attr('aria-expanded') == "true") {
    $navbar.collapse('hide');
  }
});

$(document).ready(function($) {
  var $window = $(window);

  function resize() {
    if ($window.width() < 988) {
      $('.exp-container').removeClass('flex-row').addClass('flex-column');
      $('.exp-content').removeClass('flex-column').addClass('flex-row');
    } else {
      $('.exp-content').removeClass('flex-row').addClass('flex-column');
      $('.exp-container').removeClass('flex-column').addClass('flex-row');
    }
  }
  $window.resize(resize).trigger('resize');
  resize();
});

// Adding animation for schools when in viewport
$(document).scroll(function() {
  $(".school").each(function() {
      if (!isInView($(this))) {
        $(this).addClass("no-before");
        $(this).addClass("no-after");
      } else {
        $(this).removeClass("no-before");
        $(this).removeClass("no-after");
      }
    }
  )
})

function isInView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
