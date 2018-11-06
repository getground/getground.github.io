$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href)
  return results[1] || 0
}

// const numberWithCommas = (x) => {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

$(document).ready(function(){
  const DEFAULT_GAIN = 34000
  const COLORS = [   "#D4E5C5","#F6AC5A","#B3DFEC","#E8A5CC","#B9C0EA",   "#F0725C"]
  // "#F282A7"

  let gain;
  try {
    gain = $.urlParam('gain')
    if (isNaN(gain)) { gain = DEFAULT_GAIN }
  } catch(err) {
    console.log('No gain provided in url...')
    gain = DEFAULT_GAIN
  }

  var histogram = c3.generate({
    // title: {
    //   text: 'Over 5 years'
    // },

    bindto: '#savings-histogram',
    // colors: {
    //   'Your savings over 5 years': "#A07A19",
    //   'Our fees': "#AC30C0",
    //   // data3: '#0000ff'
    // },
    color: { pattern: COLORS},
    // color: function(color, d) { return d3.scaleOrdinal.range(["#A07A19", "#AC30C0", "#EB9A72", "#BA86F5", "#EA22A8"]) },
    data: {
      columns: [
        ['Savings', gain],
        ['Our fees*', 4088] // TODO
      ],
      type: 'bar',
      labels: {
         format: function (v, id) { return "£" + v; } //d3.format("$,")
      },
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




  const PIE_TOOLTIPS = {
    'Company costs': "Typical accounting, tax and legal costs of £1,500 p.a."
    , 'Mortgage interest': "getGround will find the cheapest mortgage in the market, and pay 0.5% of your interest"
    , 'Tax efficiencies': "A UK Limited company allows for full mortgage interest deductibility, equity through director loans allow for efficient cash extraction"
    , 'Price advantage': "When selling, a future buyer does not need to pay stamp duty and land tax, as they buy shares in the company. You keep half of this value"
    , 'Exit costs': "Typical exit costs are estate agent fees of 1.5%, and legal conveyancing costs"
  }
  var pie = c3.generate({
    bindto: '#savings-pie',
    // colors: {
    //   data1: '#ff0000',
    //   data2: '#00ff00',
    //   data3: '#0000ff'
    // },
    color: { pattern: COLORS},
    data: {
        // iris data from R
        columns: [
            ['Company costs', 7650],
            ['Mortgage interest', 6000],
            ['Tax efficiencies', 3100],
            ['Price advantage', 8700],
            ['Exit costs', 8550],
        ],
        type : 'donut'
    },
    tooltip: {
      format: {
        value: function (value, ratio, id) {

          // return "£" + numberWithCommas(value)
          return PIE_TOOLTIPS[id]
        }
        , name: function (name, ratio, id, index) { return "" }
        , title: function (x) { return "" }
      },
      contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
        return '<div class="custom-tooltip">' + PIE_TOOLTIPS[d[0].id] + '</div>'
      }
    },
    labels: {
       format: {
         value: function (v, id) { return "£" + numberWithCommas(v); }

       }//d3.format("$,")
    },
    donut: {
      title: "£" + numberWithCommas(34000),
      label: {
        format: function (v, ratio, id) {
          return "£" + numberWithCommas(v);
        }
      }
    },
});

});
