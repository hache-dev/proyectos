$(document).ready(function(){
 
	$(".rss-popup a").hover(function() {
	$(this).next("em").stop(true, true).animate({opacity: "show", bottom: "-60"}, "slow");
	}, function() {
	$(this).next("em").animate({opacity: "hide", bottom: "-70"}, "fast");
	}); 
	
	$(".cs-popup a").hover(function() {
	$(this).next("em").stop(true, true).animate({opacity: "show", bottom: "-60"}, "slow");
	}, function() {
	$(this).next("em").animate({opacity: "hide", bottom: "-70"}, "fast");
	}); 
	
	$(".css-popup a").hover(function() {
	$(this).next("em").stop(true, true).animate({opacity: "show", bottom: "-60"}, "slow");
	}, function() {
	$(this).next("em").animate({opacity: "hide", bottom: "-70"}, "fast");
	});
	
	$(".ts-popup a").hover(function() {
	$(this).next("em").stop(true, true).animate({opacity: "show", bottom: "-60"}, "slow");
	}, function() {
	$(this).next("em").animate({opacity: "hide", bottom: "-70"}, "fast");
	});
	
	$(".linux-popup a").hover(function() {
	$(this).next("em").stop(true, true).animate({opacity: "show", bottom: "-60"}, "slow");
	}, function() {
	$(this).next("em").animate({opacity: "hide", bottom: "-70"}, "fast");
	});
	
});


