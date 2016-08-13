$(document).ready(function() {

	$("h1").click(function() {
		
		$("h2").animate({
			
		"font-size": "hide",
		"width": "50%",
		"left": "+=100px" //element must have position property value of relative, fixed or absolute
		
		}, 1000);
		
	});

});