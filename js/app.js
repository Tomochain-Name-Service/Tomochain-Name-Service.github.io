$(window).on('load', function() {
    $('.status').fadeOut();
    $('.preloader').delay(200).fadeOut('slow');
    $('body').delay(200).css({
        'overflow': 'visible'
    });
});

$.fn.backButton = function() {
    if (document.referrer !== "") {
      $(this).show();
      $(this).on('click', function(e) {
        e.preventDefault();
        window.location.href = document.referrer;
      });
    }
  }
  
  $('.back-button').backButton();