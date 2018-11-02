$(window).load(function() {
    $("#preloader").fadeOut("slow");
});

$(document).ready(function(){
    // wow = new WOW({
    //     mobile:       false,       // default
    //   }
    // )
    // wow.init();

    let propertyValueInput = $('#property-value-input')
    let ltvInput = $('#ltv-input')
    let taxBracketSelect = $('#tax-bracket-select')

    propertyValueInput.bind('input', function() {
      let el = $(this)
      let val = el.val()

      if (val <= 10000 || val > 50000000) {
        el.addClass('is-invalid')
      } else {
        el.removeClass('is-invalid')
      }

      setGainValue()
    });

    ltvInput.bind('input', function() {
      let el = $(this)
      let val = el.val()

      if (val < 0 || val > 100) {
        el.addClass('is-invalid')
      } else {
        el.removeClass('is-invalid')
      }

      setGainValue()
    });

    taxBracketSelect.bind('input', function() {
      setGainValue()
      // let el = $(this)
      // let val = el.val()
      //
      // console.log(val)
    });
});


const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function setGainValue() {
  let propertyValue = $('#property-value-input').val()
  let ltv = $('#ltv-input').val()
  let taxBracket = $('#tax-bracket-select').val()

  let result
  let resultString
  if (propertyValue <= 10000 || propertyValue > 50000000) {
    resultString = "N/A"
  }
  else if (ltv < 0 || ltv > 100) {
    resultString = "N/A"
  } else {
    result = calculateGain(propertyValue, ltv, taxBracket)
    resultString = "£" + numberWithCommas(result)

    $('#howItWorksLink').attr("href", "how-it-works.html?gain="+result)
  }

  $('#getGroundGain').text(resultString)
}

function calculateGain(propertyValue, ltv, taxBracket) {
  return 50000
}
