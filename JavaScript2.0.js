// JavaScript template- This template will help the JavaScript code begin as soon as HTML page is done loading.
$(document).ready(function() {   
	
	//hides the p tags
    $("p").hide();

	
    $("h1").click(function () {
        $(this).next().slideToggle(300);
    });

});