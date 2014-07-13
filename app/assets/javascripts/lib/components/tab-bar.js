(function( $ ){
  $.fn.tabBar = function(headerHeight) {
    var headerHeight = headerHeight;
    var barObject = this;
    var pushObject = this.next('.tab-bar-push')

    $(window).scroll(function() {
      if ($(window).scrollTop() > headerHeight) {
        $(barObject).addClass('navbar-fixed-top');
        $(pushObject).addClass('show');
      }

      if ($(window).scrollTop() < headerHeight) {
        $(barObject).removeClass('navbar-fixed-top');
        $(pushObject).removeClass('show');
      }
    });
  };
})(jQuery);