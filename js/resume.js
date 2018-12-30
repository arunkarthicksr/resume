(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  function dateDiffText(strStart, strEnd) {

    var diff = strEnd - strStart,
      days = Math.floor(((diff % 31536000000) % 2628000000) / 86400000),
      months = Math.floor((diff % 31536000000) / 2628000000),
      years = Math.floor(diff / 31536000000);

    var expText = "";

    if (years != 1 && years != 0) {
      expText = "<strong>" + years + "</strong> years";
    }
    else if (years == 1) {
      expText = "<strong>" + years + "</strong> year";
    }

    if( years != 0 && months != 0){
      expText +=" and "
    }

    if (months != 1 && months != 0) {
      expText += "<strong>" + months + "</strong> months";
    }
    else if (months == 1) {
      expText += "<strong>" + months + "</strong> month";
    }

    if( years == 0 && months == 0){
      expText =" <strong>1</strong> month"
    }

    return expText;

  }

  $('#expSpan').html(dateDiffText( new Date("2012-12-20"), new Date()));

  $('#expComp2').html( "Aug 2018 - Present  ( " + dateDiffText( new Date("2018-08-01"), new Date())+ " )"); 
  $('#expComp1').html( "Dec 2012 - Jul 2018  ( " + dateDiffText( new Date("2012-12-01"), new Date("2018-08-01"))+ " )"); 

})(jQuery); // End of use strict
