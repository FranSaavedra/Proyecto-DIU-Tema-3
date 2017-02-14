google.charts.load("upcoming", {packages:["map"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Lat', 'Long', 'Name'],
        [37.1922884, -3.6168369, 'Fran´s & Company']
    ]);
    var map = new google.visualization.Map(document.getElementById('mapa'));
    map.draw(data, {
        mapType: 'styledMap',
        showTooltip: true,
        showInfoWindow: true,
        zoomLevel: 19
    });
}


window.onload =drawChart();


window.onload = drawMap();