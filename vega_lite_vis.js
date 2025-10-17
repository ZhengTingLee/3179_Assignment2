var vg_1 = "map.vg.json";
var vg_2 = "pie_chart.vg.json";

Promise.all([vegaEmbed("#map", vg_1), vegaEmbed("#pie_chart", vg_2)]).then(function(results) {
  const mapView = results[0].view;
  const pieView = results[1].view;

  // Listen for state selection change in the map
  mapView.addSignalListener("State_selection", function(name, value) {
    // Update the same signal in the pie chart
    pieView.signal("State_selection", value).run();
  });

  // Optionally, listen for year selection as well
  mapView.addSignalListener("Year_selection", function(name, value) {
    pieView.signal("Year_selection", value).run();
  });

  // Optionally for age selection if applicable
  mapView.addSignalListener("Age_selection", function(name, value) {
    pieView.signal("Age_selection", value).run();
  });

}).catch(console.error);
