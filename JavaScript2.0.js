// JavaScript template
$(document).ready(function() {   //This template will help the JavaScript code begin as soon as HTML page is done loading.

    $("p").hide();

    $("h1").click(function () {
        $(this).next().slideToggle(300);
    });

});