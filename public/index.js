$(document).click(function(event) {
  var clickover = $(event.target);
  var $navbar = $('.navbar-collapse');
  if ($('.navbar-toggler').attr('aria-expanded') == "true") {
    $navbar.collapse('hide');
  }
});

(function($) {
  var $window = $(window);

  function resize() {
    if ($window.width() < 992) {
      $('.exp-container').removeClass('flex-row').addClass('flex-column');
      $('.exp-content').removeClass('flex-column').addClass('flex-row');
    } else {
      $('.exp-content').removeClass('flex-row').addClass('flex-column');
      $('.exp-container').removeClass('flex-column').addClass('flex-row');
    }
  }
  $window.resize(resize).trigger('resize');
})(jQuery);
