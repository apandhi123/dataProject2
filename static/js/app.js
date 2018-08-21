
function buildBarPlot() {
  var allTimePlayback = "/metadata/";
  d3.json(allTimePlayback).then(function(response) {
  console.log(response)
  var data = [
    {
      x: response.Genre,
      y: response.allTimePlayCount,
      hovertext: response.allTimePlayCount,
      type: 'bar'
    }
  ]; 
  Plotly.newPlot('myDiv', data);
 })
 }

buildBarPlot();
