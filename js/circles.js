var data = [{
    name: "Tomi",
    age: 10,
    color: "red"
}, {
    name: "Judit",
    age: 15,
    color: "pink"
}, {
    name: "Karcsi",
    age: 18,
    color: "lightblue"
}, {
    name: "Anya",
    age: 40,
    color: "brown"
}, {
    name: "Apa",
    age: 45,
    color: "gold"
}];

var width = window.innerWidth * 0.9;
var height = window.innerHeight * 0.9;

var svg = d3.select("#chart-area").append("svg")
    .attr("width", width)
    .attr("height", height);

var circles = svg.selectAll("circle").data(data);

circles.enter()
    .append("circle")
    .attr("cx", function (d, i) {
        console.log(d);
        return (i * 100) + data[0].age;
    })
    .attr("cy", function (d) {
        return height - d.age;
    })
    .attr("r", function (d) {
        return d.age;
    })
    .attr("fill", function(d) {
        return d.color;
    });