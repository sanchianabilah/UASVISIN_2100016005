google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(getSpreadsheetData);

function getSpreadsheetData() {
    var spreadsheetId = '1YIh2c1yNibJm6YVdI_mMI7EhS8o2trI-SyErkzW-Ii8';
    var range = 'Sheet1!A1:C16';

    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + spreadsheetId + '/gviz/tq?gid=0&range=' + range);
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        console.error('Error: ' + response.getMessage());
        return;
    }

    var data = response.getDataTable();
    drawCharts(data);
}

function drawCharts(data) {
    var options = {
        width: 1000,
        height: 300
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart'));
    chart.draw(data, options);
}