var chart1 = new Highcharts.chart({
	chart : {
		renderTo:"container",
		type:"bar"
	},
	title:{
		text:"redes sociales"
	},
	xAxis:{
		categories: ["facebook", "twitter", "myspace"]
	},
	yAxis:{
		title: {text:"numero usuarios"}
	},
	series:[
	{
		name: "america",
		data: [12311,12321,4334]
	},
	{
	name:"europa",
	data:[23242,23427,3433]
	}
	]

});

var options = {
             chart: { 
             renderTo: 'container', // div contenedor
              type: 'bar' // tipo de grafico
              },	
              xAxis: [],
        	series: [],
              yAxis: {
              title: { text: 'Nro. usuarios' }
},
…
};

var chart = new Highcharts.Chart(options);