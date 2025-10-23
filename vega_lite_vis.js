var vg_1 = "map.vg.json";
var vg_2 = "bar_chart.vg.json";
var vg_3 = "detail_bar_chart.vg.json";
var vg_4 = "line_chart.vg.json";

vegaEmbed("#map", vg_1, {actions: false}).then(function(result) {}).catch(console.error);
vegaEmbed("#bar_chart", vg_2, {actions: false}).then(function(result) {}).catch(console.error);
vegaEmbed("#detail_bar_chart", vg_3, {actions: false}).then(function(result) {}).catch(console.error);
vegaEmbed("#line_chart", vg_4, {actions: false}).then(function(result) {}).catch(console.error);
