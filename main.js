$(document).ready(function(){
    // wow = new WOW({
    //     mobile:       false,       // default
    //   }
    // )
    // wow.init();

    init()
});


function init() {
  // $(window).resize(function() {
  //   let new_h = $(window).height() - $('#hero-area').offset().top
  //   // $('section').height(new_h);
  //   $('#hero-area').height(new_h);
  // });
  // $(window).resize();


  $(".scroll-to").click(function() {
    const target = $(this).attr('data-target')
    // console.log(target)
    $([document.documentElement, document.body]).animate({
        scrollTop: $(target).offset().top
    }, 1500);
});
}
