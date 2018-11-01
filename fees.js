$(document).ready(function(){
  var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['Your savings over 5 years', 40000],
        ['Our fees', 3000]
      ],
      type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.6 // this makes bar width 50% of length between ticks
        }
        // or
        // width: 100 // this makes bar width 100px
    },
    axis: {
      y: {
        label: { // ADD
          text: '£',
          position: 'outer-top'
        }
      }
    }
  });

});
