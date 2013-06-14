$(document).ready(function(){
			var m;
			var l;
			var t;
			var b = false;

				var ml3 = {
					"display": "inline-block",
					"marginLeft": "-3px",
					"padding": "10px",
					"color": "white",
					"padding-top": "25px",
					"cursor":"pointer",
					"paddingBottom": "10px",
					"border": "solid 1px rgb(105, 105, 105)",
					"background": "rgb(60, 60, 60)",
					"text-transform": "capitalize",
						
					};
				var mlu3 = {
					"position":"absolute",
						"marginTop": "10px",
						"margin-left":"-51px"
						
				};
				var mlul3 = {
					"display":"block",
						"color":"white",
						"marginLeft":"0px",
						"text-align":"left",
						"text-transform": "capitalize",
						"padding-left": "8px",
						"background": "rgb(60, 60, 60)"
				};
				
				var ml1 = {
					"display":"inline-block",
					"margin-left":"5px",
					"padding":"5px",
					"color":"rgb(61, 61, 61)",
					"border":"solid 1px rgb(129, 129, 129)",
					"border-radius":"4px",
					"backgroundColor":"rgb(177, 177, 177)",
					"cursor":"pointer",
					"text-transform": "capitalize",
					"box-shadow": "1px 1px 4px 0px rgb(199, 199, 199)",
				};
				var mlu1 = {
					"position":"absolute",
					"margin-top": "5px",
			
				};
				var mlul1 = {
					"display":"block",
					"margin-top":"10px",
					"margin-left":"-46px",
					"padding":"5px",
					"text-align":"left",
					"border-radius":"4px",
					"border":"solid 1px rgb(129, 129, 129)",
					"background": "rgb(177, 177, 177)",
					"text-transform": "capitalize",
					"box-shadow": "1px 1px 4px 0px rgb(199, 199, 199)",
					"padding-left": "17px"
				};
			
			var m2 = {
				"background": "rgb(186, 255, 238) 0.5",
				"border-radius":"4px",
				"border": "solid 1px rgb(100, 213, 172)",
				"box-shadow": "0px 0px 0px 4px rgb(111, 204, 141)",
				"border-bottom": "rgb(49, 151, 90) solid 1px"
			};
			var ml2 = {
				"display":"inline-block",
				"margin-left":"5px",
				"cursor":"pointer",
				"padding":"5px",
				"color": "rgb(45, 122, 107)",
				"text-transform": "capitalize"
			};
			var mlu2 = {
				"position":"absolute",
				"margin-top": "5px",
				"margin-left":" -6px",
				"padding-left":" 46px",
				"background": "rgb(190, 255, 232)",
				"border-right":" rgb(54, 163, 128) solid 1px",
				"border-left": "rgb(54, 163, 128) solid 1px",
			};
			var mlul2 = {
				"display":"block",
				"margin-left":"-45px",
				"padding":"5px",
				"color": "rgb(45, 122, 107)",
				"text-align":"left",
				"text-transform": "capitalize",
				"padding-left":" 17px",
				"border-bottom": "rgb(111, 204, 141) solid 1px"
			};
			
			var ml4 = {
					"display":"inline-block",
					"padding-top":"35px",
					"height":"31px",
					"padding-left":"15px",
					"padding-right":"15px",
					"color":"#609ee3",
					"cursor":"pointer",
					"text-transform": "capitalize"
				};
				var mlu4 = {
					"position":"absolute",
					"margin-top":"-10px"
			
				};
				var mlul4 = {
					"display":"block",
					"margin-top":"10px",
					"margin-left":"-46px",
					"padding":"5px",
					"text-align":"left",
					"border-radius":"4px",
					"border":"solid 1px rgb(129, 129, 129)",
					"background": "rgb(177, 177, 177)",
					"text-transform": "capitalize",
					"box-shadow": "1px 1px 4px 0px rgb(199, 199, 199)",
					"padding-left": "17px"
				};

			function menu(m, l,t){
				 m = m;
				 t = t;
				 l = l;
					
					var window = $(document);
					
					var menudes = $("."+m+" "+ "."+ l +" ul li");
					
				
				$("."+m+" "+l).addClass("lides");
				
				$("."+m+" "+"ul");
				
				function addClass(){
					var hv = false;
				
					if(t == "menu3")
					{
						$("."+m+" li").css(ml3);
						$("."+m+" li ul").css(mlu3);
						$("."+m+" li ul li").css(mlul3);
						
						$("."+m+ " li").hover(function(){
							hv =  !hv;

							if(hv)
								$(this).css({"backgroundColor":"rgb(41, 41, 41)"});
							else
								$(this).css({"backgroundColor":"rgb(60, 60, 60)"});
							
						});
					};
					
					if(t == "menu1")
					{
						$("."+m+" li").css(ml1);
						$("."+m+" li ul").css(mlu1);
						$("."+m+" li ul li").css(mlul1);
						
						$("."+m+ " li").hover(function(){
							$(this).css({"backgroundColor":"rgb(223, 223, 223)e"});
							
						});
						
						$("."+m+ " li").hover(function(){
							hv = !hv;
							if(hv)
								$(this).css({"backgroundColor":"white"});
							else
								$(this).css({"backgroundColor":"rgb(177, 177, 177)"});
								});
					};
					
					if(t == "menu2")
					{
						$("."+m).css(m2);
						$("."+m+" li").css(ml2);
						$("."+m+" li ul").css(mlu2);
						$("."+m+" li ul li").css(mlul2);
						
						
						$("."+m+ " li").hover(function(){
							hv = !hv;
							if(hv)
								$(this).css({"backgroundColor":"rgb(223, 255, 245)"});
							else
								$(this).css({"backgroundColor":"rgb(186, 255, 238)"});
							
						});
					};
				
				};
				
				if(t == "menu4")
					{
						$("."+m+" li").css(ml4);
						$("."+m+" li ul").css(mlu4);
						$("."+m+" li ul li").css(mlul4);
						
						$("."+m+ " li").hover(function(){
							$(this).css({"backgroundColor":"rgb(223, 223, 223)e"});
							
						});
						
						$("."+m+ " li").hover(function(){
							hv = !hv;
							if(hv)
								$(this).css({"backgroundColor":"white"});
							else
								$(this).css({"backgroundColor":"#eeeeee"});
								});
					};
				
				addClass();
				
				var ltodes = $("."+l);
			
				ltodes.children().children().slideUp();
				

				ltodes.hover(function(){
							b = !b;
							if(b)
								
								$(this).children().children().slideDown(150);
								
							else
								$(this).children().children().slideUp(150);
				});

			}
			
			menu(par1,par2,par3);
			
});

	