$(document).ready(function(){
var counting = 0;
var divby = 0;
var dollars = 0;
var graphing = [];
var newgraph = [];
//graphing[0] = [];
//graphing.county = ["Apache County"];

var counties = unique(graphdata.feature.data);
for(var i = 0; i < graphdata.feature.data.length; i++) {
    var names = counties[counting];
    var f = graphdata.feature.data[i];
    if(f.county == names) {
        dollars += parseInt(f.MedianIncome);
        divby += 1;
    } else {
        graphing.push(dollars/divby);
        counting += 1;
        divby = 0;
        dollars = 0;
    }
}
var dolla = 0;
var divva = 0;
for(var i = 0; i < graphdata.feature.data.length; i++) {
    var name = counties[14];
    var f = graphdata.feature.data[i];
    if(f.county == name) {
        dolla += parseInt(f.MedianIncome);
        divva += 1;
    }
}
graphing.push(dolla/divva);

function unique(arr) {
    var u = {}, a = [];
    for(var i = 0, l = arr.length; i < l; ++i){
        if(!u.hasOwnProperty(arr[i].county)) {
            a.push(arr[i].county);
            u[arr[i].county] = 1;
        }
    }
    return a;
}
$('#C3Chart').click(function(){
    var c3div = document.getElementById('c3Chart');

    var c3chart = c3.generate({
        bindto: '#c3chart',
        data: {
            columns: [
                 ['a', Math.round(graphing[0])],
                 ['b', Math.round(graphing[1])],
                 ['c', Math.round(graphing[2])],
                 ['d', Math.round(graphing[3])],
                 ['e', Math.round(graphing[4])],
                 ['f', Math.round(graphing[5])],
                 ['g', Math.round(graphing[6])],
                 ['h', Math.round(graphing[7])]

            ],
            type: 'pie',
            onmouseover: function (d, i) {
                 d3.select(i).attr('transform', 'scale('+d.value/45000+')');
                console.log("onmouseover", d, i);},
            onmouseout: function (d, i) {
                 d3.select(i).attr('transform', 'scale(1)');
                console.log("onmouseout", d, i);}
    },


        tooltip: {
            position: function (data, width, height, element) {
                return {top: 0, right: 0}
            }
        },
        onredered: function(){
            var self = this;
            console.log(self);
            var d3Pie = d3.select('.c3-chart-arcs');
          var pieSize = d3Pie.node().getBBox();
          var  pieTransform = d3.transform(d3Pie.attr("transform")); // credit : http://stackoverflow.com/questions/20340263/d3-retrieve-and-add-to-current-selections-attribute-value

          // MODIFY PIE POSITION
          var posX = 0+pieSize.width/1.5;
          var posY = pieTransform.translate[1];
          d3Pie.attr('transform', 'translate('+posX+','+posY+')')
        },
        size: {
            width: 600,
            height: 600
        },

        label: {
            format: function (value, ratio, id) {
                return d3.format('$')(value);
            }
        }

    });


});

$('#gaugeChart').click(function(){
var d1 =  Math.round(graphing[0]);
var d2 = Math.round(graphing[1]);
var d4 = Math.round(graphing[2]);
var d5 = Math.round(graphing[3]);
var d6 = Math.round(graphing[4]);
var d7 = Math.round(graphing[5]);
var d8 = Math.round(graphing[6]);
var d14 = Math.round(graphing[14]);
var d13 = Math.round(graphing[13]);

var d12 = Math.round(graphing[12]);
var d11 = Math.round(graphing[11]);
var d10 = Math.round(graphing[10]);
var d9 = Math.round(graphing[9]);
var d15 = Math.round(graphing[8]);
var d16 = Math.round(graphing[7]);
var colval = [5000,10000,20000,30000,40000,50000,60000];
var colpatt = ['#9873FF', '#f50057', '#69f0ae', '#d500f9', '#c6ff00', '#ff6e40', '#64ffda'];
var c3gauge = c3.generate({
    bindto: '#c3gaugechart',
    padding: {
        top: 50,
        bottom: 50,
        left: 20,
        right: 20
    },
    color: {
            pattern: ['#64ffda', '#ff5722', '#ffff8d', '#ad1457', '#2962ff', '#f06292', '#ccff90', '#9c27b0', '#e57373', '#00bfa5', '#ffc400', '#00e676', '#7986cb', '#f57c00', '#2962ff', '#5e35b1'],

        },
    data: {
        columns: [
            ['data', 25000],

        ],
        type: 'gauge',
        onmouseover: function (d, i) {
                 d3.select(i).attr('transform', 'scale(1.1)');
                console.log("onmouseover", d, i);},
        onmouseout: function (d, i) {
                 d3.select(i).attr('transform', 'scale(1)');
                 console.log("onmouseout", d, i);}

    },
    gauge: {
      fullCircle: true, // This makes it go all the way around
      max: 66000, // This is your max unit -- 12h
      min: 0, // Min. is 0
      startingAngle: 90, // This sets the opening to the other side
      width: 95, // This is how thick the outer arc is
      label: {
        format: function(value, ratio) {
          return value + 'MInc';
        }
      }
    },

    onrendered: function() {
        var self = this;
        console.log(self);
        var radius = this.radius;
        var iradius = this.innerRadius;
       // timeout is needed for initial render.
       //drawGauge(this, opts, gaugeOpts);
       setTimeout(function(){ // timeout is needed for initial render.
        d3.selectAll('circle.c3-arc-background').remove();
        d3.selectAll('circle.mycircle').remove();
        d3.selectAll('text.mytext').remove();


        for(var i in colval) {
            var v = colval[i];
            var col = colpatt[parseInt(i) + 1];
            var angle = Math.PI * v / 90;
            var center = d3.select('.c3-chart-arc').node().getBBox();
            var h = center.height;
            var w = center.width;
            var wm = 54000000;
            var pix = (w * h);
            var mpix = (wm / pix);
            var x0 = (iradius * Math.cos(angle));
            var y0 = (iradius * Math.sin(angle));
            var x1 = (radius * Math.cos(angle));
            var y1 = (radius * Math.sin(angle));


            d3.select('.c3-chart-arcs')
                .insert('circle')
                .classed('c3-arc-background', true)
                .attr({
                    x1: -x0,
                    y1: -y0,
                    x2: -x1,
                    y2: -y1
                })
                //.attr('class', 'c3-arc-background')
                .attr('r', (325 * (radius / mpix)))
                .style('fill', '#0091ea');
        }

      }, 0);
      }

});

setTimeout(function() {
        c3gauge.load({
            columns: [
                ['data15', d16 ]
            ]
        })
    }, 500);
setTimeout(function() {
        c3gauge.load({
            columns: [
                ['data14',  d7]
            ]
        })
    }, 700);
setTimeout(function() {
        c3gauge.load({
            columns: [
                ['data13',  d10 ]
            ]
        })
    }, 900);
setTimeout(function() {
        c3gauge.load({
            columns: [
                ['data12', d4 ]
            ]
        })
    }, 1400);
setTimeout(function() {
        c3gauge.load({
            columns: [
                ['data11', d11 ]
            ]
        })
    }, 1800);
setTimeout(function() {
        c3gauge.load({
            columns: [
               ['data10', d6 ]
            ]
        })
    }, 2000);
setTimeout(function() {
        c3gauge.load({
            columns: [
               ['data9', d13 ]
            ]
        })
    }, 2600);
setTimeout(function() {
        c3gauge.load({
            columns: [
               ['data8',  d2 ]
            ]
        })
    }, 2800);
setTimeout(function() {
        c3gauge.load({
            columns: [
               ['data7', d14 ]
            ]
        })
    }, 3100);
setTimeout(function() {
        c3gauge.load({
            columns: [
               ['data6', d8 ]
            ]
        })
    }, 3500);
setTimeout(function() {

        c3gauge.load({
            columns: [
               ['data5',  d15 ]
            ]
        })
    }, 4000);
setTimeout(function() {

        c3gauge.load({
            columns: [
               ['data4',  d5]
            ]
        })
    }, 4200);
setTimeout(function() {

        c3gauge.load({
            columns: [
               ['data3',  d9 ]
            ]
        })
    }, 4400);
setTimeout(function() {

        c3gauge.load({
            columns: [
               ['data2', d12 ]
            ]
        })
    }, 4600);
setTimeout(function() {

        c3gauge.load({
            columns: [
               ['data1', d1 ]
            ]
        })
    }, 4800);
});


$('#chartjsModal').click(function(){


var ctx = document.getElementById('jsChart').getContext('2d');
var jschart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: counties,
        datasets: [{
            label: "Median Wage per County",
            data: graphing,
            backgroundColor: [
                'rgba(255, 143, 0, 0.8)',
                'rgba(33, 150, 243, 0.8)',
                'rgba(38, 198, 218, 0.8)',
                'rgba(255, 61, 0, 0.8)',
                'rgba(126, 87, 194, 0.8)',
                'rgba(129, 199, 132, 0.8)',
                'rgba(121, 134, 203, 0.8)',
                'rgba(129, 212, 250, 0.8)',
                'rgba(236, 64, 122, 0.8)',
                'rgba(171, 71, 188, 0.8)',
                'rgba(77, 182, 172, 0.8)',
                'rgba(255, 138, 128, 0.8)',
                'rgba(255, 245, 157, 0.8)',
                'rgba(198, 255, 0, 0.8)',
                'rgba(100, 255, 218, 0.8)'
            ],
            borderColor: [
                'rgba(230, 81, 0, 0.8)',
                'rgba(13, 71, 161, 0.8)',
                'rgba(0, 96, 100, 0.8)',
                'rgba(147, 42, 9, 0.8)',
                'rgba(69, 39, 160, 0.8)',
                'rgba(46, 125, 50, 0.8)',
                'rgba(48, 63, 159, 0.8)',
                'rgba(1, 87, 155, 0.8)',
                'rgba(136, 14, 79, 0.8)',
                'rgba(106, 27, 154, 0.8)',
                'rgba(0, 105, 92, 0.8)',
                'rgba(211, 47, 47, 0.8)',
                'rgba(249, 168, 37, 0.8)',
                'rgba(158, 157, 36, 0.8)',
                'rgba(0, 77, 64, 0.8)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scale: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
});
/*
Are you ready lads?
Aye aye captain!
I CANT HEAR YOU!!!
AYE AYE CAPTIAN!!!


oooohhhhhhh... who has a vagina as big as your wrist?
SloppySeconds Rita
who smells like old dead tuna fish?
SloppySeconds Rita
If marital nonsense be something you wish!
SloppySeconds Rita
She'll suck anything off, drop your pants an serve her the dish!
SloppySeconds Rita
READY!?!?
*/
});
