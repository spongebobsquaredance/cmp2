var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
var $nav_overlay = $('<div id="nav_overlay"><ul id="nav_menu"><li><a href="../about">About</a></li><li id="portfolio"><a href="#">Portfolio</li><div id="port_menu"><ul><li><a href="../../boston">Boston</a></li><li><a href="../../nature">Nature</a></li><li><a href="../../foliage">Foliage</a></li><li><a href="../../abstract">Abstract</a></li></ul></div><li><a href="http://society6.com/carriemphotography">Prints</li><li><a href="../../contact">Contact</li></ul></div>');
var $open_xburger = $('<a id="toggle" href="#" class="open"><div class="hamburger"></div></a>');


//Add image to overlay
$overlay.append($image);

// Add a caption to the overlay
$overlay.append($caption);

// Add overlay
$("html").append($overlay);

// Capture the click event on a link to an image
$("#container a").click(function(event){
    event.preventDefault();
    var imageLocation= $(this).attr("href");
    // Update overlay with the image linked in the link
    $image.attr("src", imageLocation);  
    
    // Show the overlay
    $overlay.fadeIn();
    
	// Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
  
});

// When overlay is clicked
$overlay.click(function(){
  // Hide the overlay
  $overlay.fadeOut();
});


// Navigation Overlay Toggle

	// Add nav_overlay
	$("html").append($nav_overlay);

	// Capture the click event on the hamburger toggle
	$("nav").click(function(event) {
		// Show the overlay
		$nav_overlay.fadeToggle();
	});
	
	// Hamburger to X Toggle
	$( "nav" ).click(function() {
  	 $( this ).toggleClass( "open" );
	});
	
	// Hamburger closes overlay event


	// Portfolio Menu Toggle
	$("#port_menu").hide();
	$("#portfolio a").click(function(){
		$("#port_menu").slideToggle();
	});


