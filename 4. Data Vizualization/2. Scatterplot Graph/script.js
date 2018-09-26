// Global Variables
var json = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json';
var tooltip = d3.select("body").append("div").attr("id", "tooltip");
var width = 800;
var height = 400;
var margin = { top: 130, right: 50, bottom: 100, left: 100 };

// Create SVG
var svg = d3.select('#d3')
                  .append('svg')
                  .attr('width', width + margin.left + margin.right)
                  .attr('height', height + margin.top + margin.bottom)


// Get JSON
d3.json(json, function (error, dataset) {
    if (error) console.log(error);

    // Variables
    var length = dataset.length;
    var formatTime = function (d) {
        var mins = Math.floor(d / 60);
        var secs = d - mins * 60;
        if (secs < 10) secs = '0' + secs;
        return `${mins}:${secs}`;
    }

    var year = [];
    var seconds = [];

    dataset.forEach(item => {
        year.push(item.Year);
        seconds.push(item.Seconds);
    })

    // Create Scales
    var xScale = d3.scaleLinear()
                          .domain([d3.min(year), d3.max(year)])
                          .range([0, width])

    var yScale = d3.scaleLinear()
                          .domain([d3.min(seconds), d3.max(seconds)])
                          .range([height, 0]);

    var xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"))
                     svg.append('g')
                         .attr('id', 'x-axis')
                         .attr('transform', 'translate('+ margin.left +','+ (height + margin.top + 30) +')')
                         .call(xAxis)

    var yAxis = d3.axisLeft(yScale).tickFormat(formatTime)
                    svg.append('g')
                         .attr('id', 'y-axis')
                        .attr('transform', 'translate(' + (margin.left - 30) +','+ margin.top +')')
                         .call(yAxis)



        // Variables
        var spacing = width / dataset.length

        svg.selectAll('circle')
             .data(dataset)
             .enter()
                .append('circle')
                .style('fill', d => d.Doping === "" ? "green" : "red")
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
               
                .attr('r', '5px')
                .attr('cx', d => xScale(d.Year))
                .attr('cy', d => yScale(d.Seconds))
                
                .attr('class', 'dot')
                .attr('data-xvalue', d => d.Year)
                .attr('data-yvalue', d =>{
                    var time = d.Time.split(':');
                    return new Date(Date.UTC(1970, 0, 1, 0, time[0], time[1]));
                })

                .on("mousemove", (d, i) => {
                    tooltip
                        .style("left", d3.event.pageX + 20 + "px")
                        .style("top", d3.event.pageY + 20 + "px")
                        .style("display", "inline-block")
                        .attr('data-year', d.Year)
                        .html(`${d.Nationality} - ${d.Year} - ${d.Name}</br>
                          Time: ${d.Time} - Seconds behind: ${d.Seconds}s</br>
                          ${d.Doping}`
                        )
                })
                .on("mouseout", function (d) { tooltip.style("display", "none"); });

});


// Create Text
svg.append("text")
     .attr('id', 'heading')
     .attr("transform", 'translate(' + 110 + ',' + 40 + ')' + 'rotate(0)')
     .text("Doping in Professional Bicycle Racing")

svg.append("text")
     .attr('id', 'title')
     .attr("transform", 'translate('+ 110 +','+ 70 +')')
     .text("35 Fastest times up Alpe d'Huez")

svg.append("text")
     .text("Normalized to a distance of 13.7km")
     .style("font-size", "0.9em")
     .attr("transform", 'translate('+ 110 +','+ 90 +')')


// Create Legend
svg.append("rect")
    .attr("x", width + margin.right + 30)
    .attr("y", height + 65)
    .attr("height", 20)
    .attr("width", 20)
    .style("fill", "green")
svg.append("text")
    .text("Riders without doping allegations")
    .attr("x", width - 173)
    .attr("y", height + 80)
    .attr("id", "legend-b")

svg.append("rect")
    .attr("x", width + margin.right +30)
    .attr("y", height + 90)
    .attr("height", 20)
    .attr("width", 20)
    .style("fill", "red")
svg.append("text")
    .text("Riders accused of doping")
    .attr("x", width - 110)
    .attr("y", height + 105)
    .attr("id", "legend")




