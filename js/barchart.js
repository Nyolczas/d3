var dataset = [25, 24, 29, 36, 32, 31, 25, 28, 35, 43, 42, 58];

// méretek meghatározása
var maxVal = Math.max(...dataset);
var topPadding = maxVal * 0.2;

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);

var maxBarHeight = svgHeight - topPadding;
var dataMultiplying = maxBarHeight / maxVal;

d3.select('body').append('p').text(dataMultiplying); 

// svg konténer kijelölése és beállítása
var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
        return svgHeight - d * dataMultiplying;
    })
    .attr("height", function(d) {
        return d * dataMultiplying;
    })
    .attr("width", barWidth - barPadding)
    .attr("class", "bar")
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0];
        return "translate(" + translate + ")";
    })
    ;

// datalabels hozzáadása

var text= svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
        return d;
    })
    .attr("y", function(d, i) {
        return svgHeight - d * dataMultiplying -2;
    })
    .attr("x", function(d,i) {
        return barWidth * i + (barWidth - barPadding) * 0.5;
    })
    .attr("text-anchor", "middle")
    .attr("class", "dataLabels");

