$(document).ready(function(){

	$('#slides').superslides({
		animation: 'fade',
		play: 5000
	})

	var typed = new Typed (".typed", {
		strings: ["Cross Stitcher", "Mother / Mentor", "Japanese living in Toronto"],
		typeSpeed: 70,
		loop: true,
		startDelay: 2000,
		showCursor: false,
	});

	$('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:5
		        }
		    }
		})

    $('.chart').easyPieChart({
    	easing:"easeInOut",
    	barColor: "#fff",
    	trackColor: false,
    	scaleColor: false,
    	linewidth: 4,
    	size: 150

    });

});
