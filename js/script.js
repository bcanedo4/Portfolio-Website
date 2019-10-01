// navbar JS
var navbar = $("#navbar");
var $win = $(window);
var winH = $win.height(); // Get the window height.
var doubleWinH = ((winH * 2) - 1) * .85; // Get the height of the second window



// $win.on("scroll", function () {
// 		if ($(this).scrollTop() >= winH && $(this).scrollTop() <= doubleWinH) {
// 			navbar.css("color", "#DB1111");
// 			$(".hamburger").css("color", "#DB1111");
// 			$("#contact-btn span").css("color", "#DB1111");
// 			$("#contact-btn-small span").css("color", "#DB1111");
// 			navbar.css("background-color", "black");
// 		}	else if ($(this).scrollTop() > doubleWinH) {
// 			navbar.css("color", "black");
// 			$(".hamburger").css("color", "black");
// 			$("#contact-btn span").css("color", "black");
// 			$("#contact-btn-small span").css("color", "black");						
// 			navbar.css("background-color", "transparent");
// 		} 
// 		else {
// 			navbar.css("color", "black");
// 			$(".hamburger").css("color", "black");
// 			$("#contact-btn span").css("color", "black");
// 			$("#contact-btn-small span").css("color", "black");						
// 			navbar.css("background-color", "transparent");
// 		}
// }).on("resize", function(){ // if the window is resized
// 		winH = $(this).height(); // The new height value
// });

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
	
// contact modal
// $( document ).ready(
// 	function() {
// 	// Get the modal
// 	var modal = document.getElementById('myModal');
// 	$()
// 	$(".message-box").focus();
// 	$(".message-box").get(0).setSelectionRange(0,0);

// 		// Get the button that opens the modal
// 	var btn = document.getElementById("contact-btn");
// 	var btnSmall = document.getElementById("contact-btn-small");

// 	// Get the <span> element that closes the modal
// 	var span = document.getElementsByClassName("close")[0];

// 	// When the user clicks the button, open the modal 
// 	btn.onclick = function() {
// 		modal.style.display = "block";
// 	}

// 	btnSmall.onclick = function() {
// 		modal.style.display = "block";
// 	}

// 	// When the user clicks on <span> (x), close the modal
// 	span.onclick = function() {
// 		modal.style.display = "none";
// 	}

// 	// When the user clicks anywhere outside of the modal, close it
// 	window.onclick = function(event) {
// 		if (event.target == modal) {
// 				modal.style.display = "none";
// 		}
// 	}
// });

// play animations on view
$(document).ready(
	(function() {
		var elements;
		var windowHeight;
	
		function init() {
			elements = document.querySelectorAll('.hidden');
			windowHeight = window.innerHeight;
		}
	
		function checkPosition() {
			for (var i = 0; i < elements.length; i++) {
				var element = elements[i];
				var positionFromTop = elements[i].getBoundingClientRect().top;
	
				// -125 instead of 0 to appear in middle
				if (positionFromTop - windowHeight <= -100) {
					if (element.classList.contains('about-text')) {
						element.classList.add('move-in-left');
					}

					else if (element.classList.contains('about-photo')) {
						element.classList.add('fade-in-element');
					}

					else if (element.classList.contains('feature-box')) {
						element.classList.add('move-in-bottom');
					}

					else if (element.classList.contains('timeline__card--mc')) {
						element.classList.add('move-in-right');
					}

					else if (element.classList.contains('timeline__card--ml')) {
						element.classList.add('move-in-left');
					}
					// element.classList.add('fade-in-element');
					element.classList.remove('hidden');
				}
			}
		}
	
		window.addEventListener('scroll', checkPosition);
		window.addEventListener('resize', init);
	
		init();
		checkPosition();
	})()
)