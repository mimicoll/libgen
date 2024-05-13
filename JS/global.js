// Change Sticky Header BG Color when scrolling
window.addEventListener('scroll', function() {
  var targetDiv = document.getElementById('navi');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) { // Change 100 to your desired scroll position
    targetDiv.classList.add('scroll-class');
  } else {
    targetDiv.classList.remove('scroll-class');
  }
});

// Add Preloader
window.addEventListener('load', function() {
	// Add 'loaded' class to body when content is loaded
	document.body.classList.add('loaded');
});

// Add Back to Top button  
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var scrollToTopBtn = document.getElementById("scroll-to-top");
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		scrollToTopBtn.style.display = "block";
	} else {
		scrollToTopBtn.style.display = "none";
	}
}

document.getElementById("scroll-to-top").addEventListener("click", function() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});


// JavaScript to trigger the animation
document.addEventListener("DOMContentLoaded", function(event) {
var heading = document.getElementById("heading");
heading.classList.add("fadeIn");
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
