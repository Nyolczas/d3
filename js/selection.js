//DOM manipuláció
/*
d3.select('h1').style('color', 'crimson')
                .text('D3-ból írtam ki ezt a címet!')
                .attr('class', 'selected');

d3.select('body').append('p').text('azt a paragrafust a D3 hozta létre');    
*/ 

var dataset = [25, 24, 29, 36, 32, 31, 25, 28, 35, 43, 42, 58];

d3.select('body')
    .selectAll('p')
    .data(dataset)
    .enter()
    .append('p')
    //.text('data')
    .text(function(d) {return d;});

