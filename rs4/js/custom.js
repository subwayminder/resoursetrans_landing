var block_show = false;

function scrollTracking(){
  if (block_show) {
    return false;
  }

  var wt = $(window).scrollTop();
  var wh = $(window).height();
  var et = $('.structure').offset().top;
  var eh = $('.structure').outerHeight();
  var dh = $(document).height();

  if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
    block_show = true;
    
    $('.structure-link-logo:not(.mod-hover)').css({'opacity': 1, 'width': '100%'});
  }
}

$(window).scroll(function(){
  scrollTracking();
});

$(document).ready(function(){
  scrollTracking();
});
