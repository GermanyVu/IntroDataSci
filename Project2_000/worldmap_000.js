// JavaScript source code

//Using jQuery, read our data and call visualize(...) only once the page is ready:



var width = 960,
    height = 960;
// Albers
var projectionAlbers = d3.geo.albers()
    .scale( 5000 )
    .rotate( [71.057,0] )
    .center( [0, 42.313] )
    .translate( [width/2,height/2] );
// Mercator
var projectionMerc = d3.geo.mercator()
    .scale( 5000 )
    .rotate( [71.057,0] )
    .center( [0, 42.313] )
    .translate( [width/2,height/2] );
// Conic Equidistant
var projectionConicEq = d3.geo.conicEquidistant()
    .scale( 5000 )
    .rotate( [71.057,0] )
    .center( [0, 42.313] )
    .translate( [width/2,height/2] );
// Orthographic
var projectionOrtho = d3.geo.orthographic()
    .scale( 5000 )
    .rotate( [71.057,0] )
    .center( [0, 42.313] )
    .translate( [width/2,height/2] );
var path = d3.geo.path()
    .projection(projectionOrtho);
var graticule = d3.geo.graticule();
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);
svg.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path);
d3.json("countries.json", function(error, world) {
  if (error) throw error;
  svg.insert("path", ".graticule")
      .datum(topojson.feature(world, world.objects.land))
      .attr("class", "land")
      .attr("d", path);
  svg.insert("path", ".graticule")
      .datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
      .attr("class", "boundary")
      .attr("d", path);
});
d3.select(self.frameElement).style("height", height + "px");








//boston
    // var width = 700;
    // var height = 580;
    // var svg = d3.select( "body" )
    //     .append( "svg" )
    //     .attr( "width", width )
    //     .attr( "height", height );
    // var g = svg.append( "g" );
    // var albersProjection = d3.geo.albers()
    //     .scale( 190000 )
    //     .rotate( [71.057,0] )
    //     .center( [0, 42.313] )
    //     .translate( [width/2,height/2] );
    // var geoPath = d3.geo.path()
    //     .projection( albersProjection );
    //
    //
    // g.selectAll( "path" )
    //     .data( countries_json.features )
    //     .enter()
    //     .append( "path" )
    //     .attr( "fill", "#ccc" )
    //     .attr( "stroke", "#333")
    //     .attr( "d", geoPath );
    //
    //
    // var rodents = svg.append( "g" );
    //
    //
    // rodents.selectAll( "path" )
    //     .data( rodents_json.features )
    //     .enter()
    //     .append( "path" )
    //     .attr( "fill", "#900" )
    //     .attr( "stroke", "#999" )
    //     .attr( "d", geoPath )
    //     .attr("class","incident")
    //     .on("mouseover", function(d){
    //         d3.select("h2").text(d.properties.LOCATION_STREET_NAME);
    //         d3.select(this).attr("class","incident hover");
    //     })
    //     .on("mouseout", function(d){
    //         d3.select("h2").text("");
    //         d3.select(this).attr("class","incident");
    //     });
