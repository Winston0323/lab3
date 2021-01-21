'use strict';
var toggle = 0;
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("In the Galaxy FAR FAR AWAY");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});
	$("a.thumbnail").click(projectClick);
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function projectClick(e) { 
    // prevent the page from reloading      
    e.preventDefault();
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    	if(toggle == 0){
    		description.html("<p>I'm out</p>");
    		description.fadeToggle();
    		toggle = 1;	
   	 	}else{
    		description.html("<p>I'm in</p>");
    		description.fadeToggle();
    		toggle = 0;
    	}
    	
    }
    
}