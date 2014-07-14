/**
 * Tab Bar Componenet
 * URL:
 * Author: Tyler Martinez ( http://www.slightlytyler.com )
 * Copyright: Copyright 2014 http://www.slightlytyler.com
 *
 * Component for bootstrap projects.
 */

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