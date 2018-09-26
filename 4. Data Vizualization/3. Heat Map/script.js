
/**
 * Variables
  */
var json = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json";
var colors = ["#8A2BE2", "#5E4FA6", "#3586BE", "#00CED1", "#65C2A5", "#AEDCA8", "#E6F49C", "#FFFDC4", "#FDE185", "#FFAE5A", "#F07046", "#D83C50", "#800000", "#660000"];
var tooltip = d3.select("body").append("div").attr("id", "tooltip");

var width = 850;
var height = 500;
var margin = { top: 110, right: 25, bottom: 130, left: 100 };



/**
 * Functions
  */
var formatMonths = (d) => {
    let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[d - 1];
}

var fillColor = (d) => {
    var color = Math.floor((d.baseTemperature + d.variance));
    return colors[color];
}




/**
 * SVG
  */
var svg = d3.select('#d3')
                  .append('svg')
                  .attr('width', width + margin.left + margin.right)
                  .attr('height', height + margin.top + margin.bottom)




/**
 * Get JSON
  */
d3.json(json, function (error, dataset) {
    if (error) console.log(error);

    var year = [];
    var month = [];

    dataset.monthlyVariance.forEach((d, i) => {
        year.push(d.year);
        month.push(d.month);
    })



    // Create Scales
    var xScale = d3.scaleLinear()
                          .domain([d3.min(year), d3.max(year)])
                          .range([0, width]);

    var xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));
                    svg.append("g")
                         .attr('id', 'x-axis')
                         .attr("transform", "translate("+ margin.left +","+ (height + margin.top) +")")
                         .call(xAxis);
    
    var yScale = d3.scaleBand()
                          .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) 
                          .range([0, height])
                          .round(0, 0)

    var yAxis = d3.axisLeft()
                         .scale(yScale)
                         .tickValues(yScale.domain())
                         .tickFormat( (month) =>  d3.timeFormat("%B")(new Date(0).setUTCMonth(month)) )
                         .tickSize(5, 0);
    
                     svg.append("g")
                          .attr("id", "y-axis")
                          .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                          .call(yAxis)


    // Create Heatmap
    var baseTemperature = dataset.baseTemperature;
    var rectwidth = width / (d3.max(year) - d3.min(year));
    var rectheight = height / 12;
    svg.selectAll('rect')
         .data(dataset.monthlyVariance)
         .enter()
            .append('rect')


            .attr('height', rectheight)
            .attr('width', rectwidth)
            .attr('x', d => xScale(d.year))
            .attr('y', d => (d.month - 1) * rectheight)
            .attr('transform', 'translate(' + margin.left  +','+ margin.top +')')

        


            .attr('class', 'cell')
            .attr('data-month', d => [d.month - 1])
            .attr('data-year', d => d.year)
            .attr('data-temp', d => dataset.baseTemperature - d.variance)
            .attr('fill', d => fillColor({baseTemperature: dataset.baseTemperature, variance: d.variance}))



            .on("mousemove", function (d, i) {
                tooltip
                    .attr('data-year', d.year)
                    .style("display", "inline-block")
                    .style("left", d3.event.pageX + 15 + "px")
                    .style("top", d3.event.pageY + -110 + "px")
                    .html(`
                            Year: ${parseInt(d.year, 10)}<br />
                            Temperature: ${dataset.baseTemperature - d.variance}C<br />
                            Variance: ${d.variance}C
                            `)
            })
            .on("mouseout", function (d) { tooltip.style("display", "none"); });

});




/**
 * Create Text
  */
svg.append("text")
     .text("Monthly Global Land-Surface Temperature | 1753 - 2015")
     .attr("x", margin.left + 20)
     .attr("y", 50)
     .attr("id", "title")

svg.append("text")
     .text("Temperatures are in Celsius and are reported as abnormalties based on an average of 8.66C between 1949 and 1980.")
     .attr("x", margin.left + 20)
     .attr("y", 75)
     .attr("class", "text")
     .attr('id', 'description')

svg.append("text")
     .text("Clear indications of a rise in the average temperatures can be seen from 1980 onwards")
     .attr("x", margin.left + 20)
     .attr("y", 95)
     .attr("class", "text")




/**
 * Create Legend
  */
var padding = 0;
var legend = svg.append('g')
                        .attr('id', 'legend')
                        .attr("transform", "translate(" + (margin.left + 20) + "," + (margin.top + 50) + ")")

colors.forEach(function (color, i) {

    legend.append("rect")
             .attr("width", 30)
             .attr("height", 30)
             .attr("x", padding)
             .attr("y", height)
             .style("fill", color)


    legend.append("text")
             .text(`${i}C`)
             .attr("x", padding + 8)
             .attr("y", height + 42)
             .attr("class", "legend-text")

    padding += 30;
});
