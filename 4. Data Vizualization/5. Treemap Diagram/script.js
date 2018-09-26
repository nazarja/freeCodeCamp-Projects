/**
 * Variables
 */
var json = 'https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/movie-data.json';
var tooltip = d3.select("body").append("div").attr("id", "tooltip");
var format = d3.format("$,.2s")
var colors = [
    ['#78c5d6', 'Action'],
    ['#459ba8', 'Drama'],
    ['#79c267', 'Adventure'],
    ['#c5d647', 'Family'],
    ['#f5d63d', 'Animation'],
    ['#f28c33', 'Comedy'],
    ['#e868a2', 'Biography']
];

var width = 1100;
var height = 650;
var margin = {top: 200, right: 0, bottom: 0, left: 0}

var fill = (d) => {
    for (let i in colors) {
        if (d === colors[i][1]) {
            return colors[i][0];
        }
    }
}

/**
 * SVG
  */
 var svg = d3.select('#d3')
                   .attr('height', height)
                   .attr('width', width)


/**
 * Treemap
  */
 var treemap = d3.treemap()
                          .size([width, height])
                          .paddingInner(.2)
                          .paddingOuter(.8)



/**
 * JSON Data
  */
 d3.json(json, (error, dataset) => {
     if (error) throw error;

    // Create Hierarchy
    var node = d3.hierarchy(dataset);
    node.sum(d => d.value)
    .sort((a,b) => a.value > b.value) 
    treemap(node)


    // Create Groups / Catergories
    var group = svg.selectAll("g")
                            .data(node.leaves())
                            .enter()
                                .append("g")
                                .attr("class", "group")
                                .attr("transform", d => 'translate('+ d.x0 +','+ d.y0 +')')
                                // .attr('style', d => console.log(d));


    // Create Tiles / Movie containers
    var tile = group.append("rect")
                            .attr("class", "tile")
                            .attr("width", d => d.x1 - d.x0)
                            .attr("height", d => d.y1 - d.y0)
                            .attr('data-name', d => d.data.name)
                            .attr('data-category', d => d.data.category)
                            .attr('data-value', d => d.data.value)
                            .attr('fill', d => fill(d.data.category))
                            .on('mousemove', (d,i) => {
                                tooltip
                                    .attr('data-value', d.data.value)
                                    .style("left", d3.event.pageX + 20 + "px")
                                    .style("top", d3.event.pageY + 20 + "px")
                                    .style("display", "inline-block")
                                    .html( () => {
                                        return `
                                        Category:  ${d.data.category}<br/>
                                        Name: ${d.data.name}<br/>
                                        Value: ${format(d.data.value)}`
                                    ;})
                            })
                            .on("mouseout", d => tooltip.style("display", "none"));

    var text = group.append('text')
                           .attr('class', 'tile-text')
                           .attr('dx', 5)
                           .attr('dy', '1.5em')
                           .attr('width', d => d.x1 - d.x0)
                           .text(d => d.data.name)

    var text = group.append('text')
                           .attr('class', 'tile-value')
                           .attr('dx', 5)
                           .attr('dy', '2.8em')
                           .attr('width', d => d.x1 - d.x0)
                           .text(d => format(d.data.value))

 })



/**
 * Create Legend
  */
var legend = d3.select('#legend')
                       .attr('height', margin.top)
                       .attr('width', width)
                       .attr('id', 'legend')
                        
colors.forEach((color, i) => {

    legend.append('rect')
              .attr('x',  i * (width / colors.length))
              .attr('y', 25)
              .attr('height', 20)
              .attr('width', 20)
              .attr('fill', color[0])  
              .attr('class', 'legend-item')

    legend.append('text')
              .attr('x',  i * (width / colors.length) + 30)
              .attr('y', 40)
              .text(color[1])  
})

