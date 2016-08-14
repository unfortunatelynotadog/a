$(document).ready(function() {
	var imageName = ["https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS6PuNP6t_aIGopGqh9ngvFH0QZ4z-GoGfR9DHxVw_CFMov5YTq", "http://www.clipartkid.com/images/4/ball-with-flames-3-clip-art-at-clker-com-vector-clip-art-online-HRhVJg-clipart.png", "http://www.epcoshiftknobs.com/images/product%20images/8ball_red.jpg"];
	
	var indexNum = 0;

	
	$("#picture").click(function() {

		$("#picture").attr("src", imageName[indexNum]);
		
		indexNum++;
		
		if (indexNum > 2) {indexNum = 0;}
		
	});

});