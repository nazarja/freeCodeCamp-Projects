// Global Variables
var json = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json';
var tooltip = d3.select("body").append("div").attr("id", "tooltip");
var width = 800;
var height = 400;
var margin = 100;
var margin = { top: 50, right: 50, bottom: 50, left: 80 };
var formatDollars = "$,.2f"

// Create SVG
var svg = d3.select('#d3')
                  .append('svg')
                  .attr('width', width + margin.left + margin.right)
                  .attr('height', height + margin.top + margin.bottom)


// Get JSON
d3.json(json, function (error, dataset) {
    if (error) console.log(error);

    // Variables
   var barwidth = width / dataset.data.length;
   var date = [];
   var value = [];

    // Iterate over Data and create arrays of data
    dataset.data.map(data => {
        date.push(data[0].substring(0, 4));
        value.push(data[1]);
    });

    // // Create Scales
    var xScale = d3.scaleLinear()
        .domain([d3.min(date), d3.max(date)])
        .range([0, width])

    var yScale = d3.scaleLinear()
        .domain([d3.min(value), d3.max(value)])
        .range([height, 0]);

    var xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"))
                     svg.append('g')
                          .attr('id', 'x-axis')
                          .attr('transform', 'translate('+ margin.left +','+ (height+ margin.top) +')')
                          .call(xAxis)

    var yAxis = d3.axisLeft(yScale).tickFormat(d3.format("$,.2f"))
                     svg.append('g')
                          .attr('id', 'y-axis')
                          .attr('transform', 'translate('+ margin.left +','+ margin.top +')')
                          .call(yAxis)

    // Create a scale that fits the SVG dimensions
    var scale = [];
    var valuemin = d3.min(value);
    var valuemax = d3.max(value);
    var linearScale = d3.scaleLinear()
        .domain([valuemin, valuemax])
        .range([(valuemin / valuemax) * height, height]);
    scale = value.map(item => {
        return linearScale(item);
    });

    // Create Bar Chart
    svg.selectAll('rect')
        .data(scale)
         .enter()
            .append('rect')
            .attr('x', (d, i) => i * barwidth)
            .attr('y', (d, i) => height - d)
            .attr('height', d => d)
            .attr('width', barwidth)
            .attr('class', 'bar')
            .attr('data-date', (d, i) => dataset.data[i][0])
            .attr('data-gdp', (d, i) => dataset.data[i][1])
            .attr('transform', 'translate('+ margin.left +','+ margin.right +')')
            .on("mousemove",  (d, i) => {
                tooltip
                    .style("left", d3.event.pageX - 50 + "px")
                    .style("top", d3.event.pageY - 70 + "px")
                    .style("display", "inline-block")
                    .attr('data-date', dataset.data[i][0])
                    .html(`Date:  ${dataset.data[i][0]} </br>Value:  ${dataset.data[i][1]}`);
            })
            .on("mouseout", function (d) { tooltip.style("display", "none"); });
    
    svg.append("text")
         .attr("x", 60)
         .attr("y", height + 85)
         .attr('class', 'info')
         .text(dataset.description);

});                 

// Create Text
svg.append("text")
    .attr("x", 110)
    .attr("y", 50)
    .attr('id', 'title')
    .text("Federal Reserve Economic Data");

svg.append("text")
    .attr("x", 110)
    .attr("y", 80)
    .attr('id', 'heading')
    .text("Quarterly US GDP in $USD Billions");

svg.append("text")
    .attr("x", 110)
    .attr("y", 105)
    .attr('id', 'sub-heading')
    .text("(Gross Domestic Product)");
