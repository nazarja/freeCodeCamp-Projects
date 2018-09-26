/**
 * Variables
 */
var countyData = 'https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/counties.json';
var educationData = 'https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/for_user_education.json';
var tooltip = d3.select("body").append("div").attr("id", "tooltip");
var colors = [['#deebf7', 0], ['#c6dbef', 5], ['#9ecae1', 10], ['#6baed6', 15], ['#4292c6', 20], ['#2171b5', 30], ['#08519c', 40], ['#08306b', 50], ['#002d4d', 60], ['#001829' ,70]];

var width = 950;
var height = 800;
var margin = {top: 150, right: 50, bottom: 50, left: 50}

var color = (d) => {
    d = d.toFixed(2);
    for (let i in colors) {
        if (d < colors[i][1]) {
            return colors[i][0];
        }
    }
}

/**
 * SVG
  */
 var svg = d3.select('#d3')
                   .append('svg')
                   .attr('height', height)
                   .attr('width', width) 


/**
 * Map
  */
// var degrees = d3.map();
var path = d3.geoPath();

d3.queue()
    .defer(d3.json, countyData)
    .defer(d3.json, educationData)
    .await(Ready)

// Ready Function
function Ready(error, map, education)  {
    if (error) throw error;

    // Map
    svg.append('g')
         .attr('class', 'counties')
         .selectAll('path')
         .data(topojson.feature(map, map.objects.counties).features)
         .enter()
            .append('path')
            .attr('class', 'county')
           
            // Data Attributes
            .attr('data-fips', d => d.id)
            .attr('data-education', d => {
                  county = education.filter(f => {
                    return f.fips === d.id;
                })
                return county[0].bachelorsOrHigher;
            })
            .attr('fill', d => {
                let county = education.filter(f => {
                    return f.fips === d.id;
                })
                return color(county[0].bachelorsOrHigher);
            })
            .attr('d', path)

        // Tooltip
        .on("mousemove", (d, i) => {
            tooltip
                .attr('data-education', () => {
                    let county = education.filter(f => {
                        return f.fips === d.id;
                    })
                    return county[0].bachelorsOrHigher;
                })
                .style("left", d3.event.pageX + 20 + "px")
                .style("top", d3.event.pageY + 20 + "px")
                .style("display", "inline-block")
                .html( () => {
                    let county = education.filter(f => {
                        return f.fips === d.id;
                    })
                    let C = county[0];
                    return `State: ${C.state}<br/>
                               Area:  ${C.area_name}<br/>
                               Degree's Percentage: ${C.bachelorsOrHigher}`;
                })
        })
        .on("mouseout",  d => tooltip.style("display", "none"));

            
    // States
    svg.append("path")
            .datum(topojson.mesh(map, map.objects.states,  (a, b) => a !== b ))
            .attr("class", "states")
            .attr("d", path);
}




/**
 * Create Text
 */
svg.append('text')
     .attr('id', 'title')
     .attr('x', 50)
     .attr('y', 50)
     .text('United States Educational Attainment')

svg.append('text')
     .attr('id', 'description')
     .attr('x', 50)
     .attr('y', 70)
     .text('Percentage of adults aged 25 and older with a bachelor\'s degree or higher (2010 - 2014)')


/**
 * Create Legend
  */
var padding = 0;
var legend = svg.append('g')
    .attr('id', 'legend')
    .attr("transform", "translate("+ (width - 500) +","+ margin.top +")")

colors.forEach(function (color, i) {

    legend.append("rect")
        .attr("width", 40)
        .attr("height", 20)
        .attr("x", padding)
        .attr("y", 0)
        .style("fill", color[0])


    legend.append("text")
        .text(`${color[1]}%`)
        .attr("x", padding + 10)
        .attr("y", -5)
        .attr("class", "legend-text")

    padding += 40;
});