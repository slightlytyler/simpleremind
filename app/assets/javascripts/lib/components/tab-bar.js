var tabBar = function tabBar(headerHeight, barObject) { 
  var headerHeight = headerHeight;
  var barObject = barObject;

  $(window).scroll(function() {
    if ($(window).scrollTop() > headerHeight) {
      $(barObject).addClass('navbar-fixed-top');
      $(barObject + '-push').addClass('show');
    }

    if ($(window).scrollTop() < headerHeight) {
      $(barObject).removeClass('navbar-fixed-top');
      $(barObject + '-push').removeClass('show');
    }
  });
};