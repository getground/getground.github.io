$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href)
  return results[1] || 0
}

$(document).ready(function(){
  const DEFAULT_GAIN = 40000
  let gain;
  try {
    gain = $.urlParam('gain')
    if (isNaN(gain)) { gain = DEFAULT_GAIN }
  } catch(err) {
    console.log('No gain provided in url...')
    gain = DEFAULT_GAIN
  }

  var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['Your savings over 5 years', gain],
        ['Our fees', 3000] // TODO
      ],
      type: 'bar',
      labels: {
         format: function (v, id) { return "£" + v; } //d3.format("$,")
      }
    },
    tooltip: {
        show: false
    },
    bar: {
      space: 0.2,
        // width: {
        //     ratio: 0.6 // this makes bar width 50% of length between ticks
        // }
        // or
        // width: 100 // this makes bar width 100px
    },
    axis: {
      x: {
        show: false,
      },
      y: {
        show: false,
        label: { // ADD
          text: '£',
          position: 'outer-top'
        }
      }
    }
  });

});
