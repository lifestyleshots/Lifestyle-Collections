var jsonData = d3.csv("Post2020_Museumdata.csv")

Promise.all([jsonData])
    .then(function (data) {
        //console.log(data[0])
        var BlackArtistSplit = splitByColumn(data[0], "yearacquired")
        console.log(BlackArtistSplit)
        var blackArtists = BlackArtistSplit["_False"]

        drawRect(BlackArtistSplit)
    })

function drawRect(splitData) {
    var svg = d3.select("#chart").append("svg")
        .attr("width", 500)
        .attr("height", 200)

    svg.selectAll("rect")
        .data(Object.keys(splitData))
        .enter()
        .append("rect")
        .attr("x", 0)
        .attr("y", function (d, i) {
            return i * 20 + 20
        })
        .attr("height", 10)
        .attr("width", function (d) {
            return splitData[d].length / 100
        })
}

function pieChart(splitData, columnToBeCounted){
    for (let i in dataset) {
        if (columnToBeCounted == "yearacquired") {
            var year = "_" + parseInt(dataset[i][columnToBeCounted])
        }
        else {
            var year = "_" + dataset[i][columnToBeCounted]
        }
        if (dataset[i][columnToBeCounted] != undefined){
    var svg = d3.select("#chart2")
    .append("svg")
    .attr("width", 500)
    .attr("height",500)
    .append("g")
    .attr("transform", "translate(100,100)")
    .attr("stroke","white")
    .style("stroke-width","2px") 

    var pie = d3.pie()
    .value(function(d){return d.x})

    var pieData = pie(splitData)

    svg.selectAll("path")
        .data(pieData)
        .enter()
        .append('path')
        .attr('d',d3.arc())
        .innerRadius(0)
        .outsideRadius(100)
    }
}}
pieChart(Dta)

function splitByColumn(dataset, columnToBeCounted) {

    var yearDictionary = {}

    for (let i in dataset) {
        if (columnToBeCounted == "yearacquired") {
            var year = "_" + parseInt(dataset[i][columnToBeCounted])
        }
        else {
            var year = "_" + dataset[i][columnToBeCounted]
        }
        if (dataset[i][columnToBeCounted] != undefined) {

            var artworkInformation = dataset[i]
            var currentKeys = Object.keys(yearDictionary)
            if (currentKeys.indexOf(year) < 0) {
                yearDictionary[year] = []
                yearDictionary[year].push(artworkInformation)
            }
            else {
                yearDictionary[year].push(artworkInformation)
            }
        }
    }
    return yearDictionary
}