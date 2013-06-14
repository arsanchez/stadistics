/*var td = new google.visualization.DataTable(
	{
		cols:[{id:"task", label:"taks", type:"string"},{id:"hours", label:"hours per day", type:"number"}],
		
		rows:[{c:[{v:"work"}, {v:11}]},
		{c:[{v:"eat"},{v:2}]},
		{c:[{v:"commute"},{v:2}]},
		{c:[{v:"watch tv"},{v:2}]},
		{c:[{v:"sleep"},{v:7, f:"7.000"}]}
		]
	}
);*/

/*google.load('visualization', '1', {packages: ['geomap']});
function drawVisualization() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Popularity'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700],
	['Republica dominicana', 200],
	['Haiti', 100],
	['China', 1000],
	['Japon', 500]
  ]);
  

  var geomap = new google.visualization.GeoMap(
      document.getElementById('visualization'));
  geomap.draw(data, null);
}

google.setOnLoadCallback(drawVisualization);*/

/*google.load('visualization', '1', {packages: ['table']});
function drawVisualization() {
      // Create and populate the data table.
      var JSONObject = {
          cols: [{id: 'task', label: 'Task', type: 'string'},
              {id: 'hours', label: 'Hours per Day', type: 'number'}],
          rows: [{c:[{v: 'Work', p: {'style': 'border: 7px solid orange;'}}, {v: 11}]},
              {c:[{v: 'Eat'}, {v: 2}]},
              {c:[{v: 'Commute'}, {v: 2, f: '2.000'}]}]};
    
      var data = new google.visualization.DataTable(JSONObject, 0.5);
    
      // Create and draw the visualization.
      visualization = new google.visualization.Table(document.getElementById('table'));
      visualization.draw(data, {'allowHtml': true});
    }
    

    google.setOnLoadCallback(drawVisualization);*/
	
	/*google.load('visualization', '1.1', {packages: ['controls']});
  function drawVisualization() {
        // Prepare the data.
        var data = google.visualization.arrayToDataTable([
          ['pais', 'Age'],
          ['Michael' , 12],
          ['Elisa', 20],
          ['Robert', 7],
          ['John', 54],
          ['Jessica', 22],
          ['Aaron', 3],
          ['Margareth', 42],
          ['Miranda', 33]
        ]);
      
        // Define a StringFilter control for the 'Name' column
        var stringFilter = new google.visualization.ControlWrapper({
          'controlType': 'StringFilter',
          'containerId': 'control1',
          'options': {
            'filterColumnLabel': 'pais'
          }
        });
      
        // Define a table visualization
        var table = new google.visualization.ChartWrapper({
          'chartType': 'Table',
          'containerId': 'chart1',
          'options': {'height': '13em', 'width': '20em'}
        });
      
        // Create the dashboard.
        var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard')).
          // Configure the string filter to affect the table contents
          bind(stringFilter, table).
          // Draw the dashboard
          draw(data);
      }
      

      google.setOnLoadCallback(drawVisualization);*/
	  
	  
	  /*google.load('visualization', '1');
	  function drawVisualization() {
        var wrapper = new google.visualization.ChartWrapper({
          chartType: 'ColumnChart',
          dataTable: [['', 'Germany', 'USA', 'Brazil', 'Canada', 'France', 'RU','China','Japon','Uruguai','Metropolis','Springfiled','Madagascar','Arizona'],
                      ['', 700, 300, 400, 500, 600, 800, 1000, 500, 1050,600,400,500,100]],
          options: {'title': 'Economia'},
          containerId: 'visualization'
        });
        wrapper.draw();
      }
	  
	  function drawVisualizationPobacion() {
        var wrapper = new google.visualization.ChartWrapper({
          chartType: 'ColumnChart',
          dataTable: [['', 'Germany', 'USA', 'Brazil', 'Canada', 'France', 'RU','China','Japon','Uruguai','Metropolis','Springfiled','Madagascar','Arizona'],
                      ['', 500, 400, 100, 700, 250, 360, 40, 700, 850,135,4203,150,555]],
          options: {'title': 'Poblacion'},
          containerId: 'visualization'
        });
        wrapper.draw();
      }
      
      

      google.setOnLoadCallback(drawVisualization);*/
	  
	  google.load('visualization', '1', {packages: ['motionchart']});

    function drawVisualization() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Fruit');
      data.addColumn('date', 'Date');
      data.addColumn('number', 'Sales');
      data.addColumn('number', 'Expenses');
      data.addColumn('string', 'Location');
      data.addRows([
        ['China', new Date(1988,0,1), 1000, 300, 'East'],
        ['Dominicana', new Date(1988,0,1), 950, 200, 'West'],
        ['Haiti', new Date(1988,0,1), 300, 250, 'West']
      ]);
    
      var motionchart = new google.visualization.MotionChart(
          document.getElementById('visualization'));
      motionchart.draw(data, {'width': 800, 'height': 400});
    }
    

    google.setOnLoadCallback(drawVisualization);