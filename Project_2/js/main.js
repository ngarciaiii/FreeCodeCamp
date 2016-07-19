// Tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    // $('#nav').localScroll(800);
	// $('#intro').parallax("50%", 0.1);
	// $('#second').parallax("50%", 0.1);
	// $('#third').parallax("50%", 0.3);
  	
	// Create cross browser requestAnimationFrame method:
	window.requestAnimationFrame = window.requestAnimationFrame
	                               || window.mozRequestAnimationFrame
	                               || window.webkitRequestAnimationFrame
	                               || window.msRequestAnimationFrame
	                               || function(f){setTimeout(f, 1000/60)}

	var second = document.getElementById('second')
	var third = document.getElementById('third')
	var fourth = document.getElementById('fourth')

	var scrollheight = 	document.body.scrollHeight // height of entire document
	var windowheight = window.innerHeight // height of browser window


	function pagescroll(){
		var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
		var scrollamount = (scrolltop / (scrollheight-windowheight)) * 100 // get amount scrolled (in %)
		second.style.top = -scrolltop * .3 + 'px' // move bubble1 at 20% of scroll speed
		third.style.top = -scrolltop * .3 + 'px' // move bubble2 at 50% of scroll speed
		fourth.style.top = -scrolltop * .3 + 'px'

	}

	window.addEventListener('scroll', function(){ // on page scroll
		requestAnimationFrame(pagescroll) // call pagescroll() on next available screen repaint
	}, false)

	window.addEventListener('resize', function(){ // on window resize
		var scrollamount = (scrolltop / (scrollheight-windowheight)) * 100 // get amount scrolled (in %)
	}, false)

});


	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport


//verticial timelime
// jQuery(document).ready(function($){
// 	var timelineBlocks = $('.cd-timeline-block'),
// 		offset = 0.8;

// 	//hide timeline blocks which are outside the viewport
// 	hideBlocks(timelineBlocks, offset);

// 	//on scolling, show/animate timeline blocks when enter the viewport
// 	$(window).on('scroll', function(){
// 		(!window.requestAnimationFrame) 
// 			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
// 			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
// 	});

// 	function hideBlocks(blocks, offset) {
// 		blocks.each(function(){
// 			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
// 		});
// 	}

// 	function showBlocks(blocks, offset) {
// 		blocks.each(function(){
// 			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
// 		});
// 	}
// });