$(document).ready(function(){
    // wow = new WOW({
    //     mobile:       false,       // default
    //   }
    // )
    // wow.init();

    init()
});


function init() {
  $(window).resize(function() {
    $('section').height($(window).height() - $('#hero-area').offset().top);
  });
  $(window).resize();
}
