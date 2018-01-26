// navbar JS
var navbar = $("#navbar");
var $win = $(window);
var winH = $win.height(); // Get the window height.
var doubleWinH = (winH * 2) - 1; // Get the height of the second window

$win.on("scroll", function () {
		if ($(this).scrollTop() >= winH && $(this).scrollTop() <= doubleWinH) {
			navbar.css("color", "#DB1111");
			$(".hamburger").css("color", "#DB1111");
			navbar.css("background-color", "black");
		}	else if ($(this).scrollTop() > doubleWinH) {
			navbar.css("color", "black");
			$(".hamburger").css("color", "black");
			navbar.css("background-color", "transparent");
		} 
		else {
			navbar.css("color", "white");
			$(".hamburger").css("color", "white");
			navbar.css("background-color", "transparent");
		}
}).on("resize", function(){ // if the window is resized
		winH = $(this).height(); // The new height value
});

// hamburger menu
$( document ).ready(function() {
	$( ".menu" ).hide();
	$( ".cross" ).hide();
	$( ".hamburger" ).click(function() {
		$( ".menu" ).slideToggle( "fast", function() {
			$( ".hamburger" ).hide();
			$( ".cross" ).show();
		});
	});

	$( ".cross" ).click(function() {
		$( ".menu" ).slideToggle( "fast", function() {
			$( ".cross" ).hide();
			$( ".hamburger" ).show();
		});
	});
});

// Zelda Projects JS
var index = 0;
var okToNext = true;
var nextProject = $('.project-next');
var projectTitle = $('.project-title p');
var projectContent = $('.project-content p');
var projectContentArray = [
	{
		title: 'React YouTube Player',
		content: 'Using React, I created a more centralized way to view YouTube videos, as it displays the video you are currently watching, and five other suggestions.'
	},
	{
		title: 'Vue Monster Game',
		content: 'Using Vue, I created a turned based game where you must give it your all to defeat the monster'
	},
	{
		title: 'Weather App',
		content: 'I incorporated a weather API to be able to display the weather in either Pacoima (my hometown) or Northridge.'
	}
]
var last = projectContentArray.length;

nextProject.on('click', function() {
	index += 1;
	if (index === last) {
		index = 0;
	}
	console.log(index);
	projectTitle.animate({'opacity': 0}, 1000, function () {
		projectTitle.html(projectContentArray[index].title);
	}).animate({'opacity': 1}, 750);
	
	projectContent.animate({'opacity': 0}, 1000, function () {
		projectContent.html(projectContentArray[index].content);
	}).animate({'opacity': 1}, 750);
});

// Smooth scrolling
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation will happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Change focus
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Check if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });