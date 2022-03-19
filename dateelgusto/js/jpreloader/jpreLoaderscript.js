
$(document).ready(function() {
	var timer;
	
	//calling jPreLoader function with properties
	$('body').jpreLoader({
		splashID: "#jSplash",
		splashFunction: function() {  //passing Splash Screen script to jPreLoader
			$('#jSplash').children('section').not('.selected').hide();
			$('#jSplash').hide().fadeIn(800);
			
			timer = setInterval(function() {
				splashRotator();
			}, 3000);
		}
	}, function() {
	});
});

function splashRotator(){
	var cur = $('#jSplash').children('.selected');
	var next = $(cur).next();
	
	if($(next).length != 0) {
		$(next).addClass('selected');
	} else {
		$('#jSplash').children('section:first-child').addClass('selected');
		next = $('#jSplash').children('section:first-child');
	}
		
	$(cur).removeClass('selected').fadeOut(800, function() {
		$(next).fadeIn(800);
	});
}