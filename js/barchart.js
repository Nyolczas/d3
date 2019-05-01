var dataset = [25, 24, 29, 36, 32, 31, 25, 28, 35, 43, 42, 58];

var maxVal = Math.max(...dataset);
var topPad = maxVal * 0.1;

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);

var maxBarHeight = svgHeight - topPad;
var multiplying = maxBarHeight / maxVal;

d3.select('body').append('p').text(multiplying); 

// svg konténer kijelölése és méret beállítása
var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
        return svgHeight - d * multiplying;
    })
    .attr("height", function(d) {
        return d * multiplying;
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0];
        return "translate(" + translate + ")";
    });
