	 // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Dominicana', 5],
          ['Brazzil', 0],
          ['Guatemala', 3],
          ['E.E.U.U', 1],
          ['Colombia', 2],
		  ['Colombia', 2],
        ]);

        // Set chart options
        var options = {
			'title':'Porsentaje de violencia',
            'width':400,
            'height':300,
			"backgroundColor":"none"
		};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('content'));
        chart.draw(data, options);
      
	  }