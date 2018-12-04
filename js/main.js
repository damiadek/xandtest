$(document).ready(function() {
  // $(".navbar-sticky").slideUp();

  $(".header-logo .dropdown, .nav-links > a").click(function() {
    $(".navbar-sticky").slideToggle();
  });

  $(".nav-links > a").click(function(e) {
    // e.preventDefault();
    var href = $(this).attr("href");
  });
});
