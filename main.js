$(window).load(function() {
    $("#preloader").fadeOut("slow");
});

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
    $('#hero-area').height($(window).height() - $('#hero-area').offset().top);
  });
  $(window).resize();
}


// #property-value-input
// #ltv-input
// #tax-bracket-select
