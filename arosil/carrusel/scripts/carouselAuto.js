/**
 * Image src URLs
 */
var imageList = [
				 "images/thumb_1.jpg",
				 "images/thumb_2.jpg",
				 "images/thumb_3.jpg",
				 "images/thumb_4.jpg",
				 "images/thumb_5.jpg",
				 "images/thumb_6.jpg",
				 "images/thumb_7.jpg",
				 "images/thumb_8.jpg",
				 "images/thumb_9.jpg",
				 "images/thumb_10.jpg",
				 "images/thumb_11.jpg",
				 "images/thumb_12.jpg",
				 "images/thumb_13.jpg",
				 "images/thumb_14.jpg",
				 "images/thumb_15.jpg",
				 "images/thumb_16.jpg",
				 "images/thumb_17.jpg",
				 "images/thumb_18.jpg"
				 ];

var lastRan = -1;

var fmtItem = function(imgUrl, url, title, index) {

  	var innerHTML = 
  		'<a id="dhtml-carousel-a-'+index+'" href="' + 
  		url + 
  		'"><img id="dhtml-carousel-img-' + index + '" src="' + 
  		imgUrl +
		'" width="' +
		75 +
		'" height="' +
		75+
		'"/>' + 
  		title + 
  		'<\/a>';
  
	return innerHTML;
};


/**
 * Custom inital load handler. Called when the carousel loads the initial
 * set of data items. Specified to the carousel as the configuration
 * parameter: loadInitHandler
 **/
var loadInitialItems = function(type, args) {

	var start = args[0];
	var last = args[1]; 

	load(this, start, last);	
};

/**
 * Custom load next handler. Called when the carousel loads the next
 * set of data items. Specified to the carousel as the configuration
 * parameter: loadNextHandler
 **/
 var loadNextItems = function(type, args) {	

	var start = args[0];
	var last = args[1]; 
	var alreadyCached = args[2];
	
	if(!alreadyCached) {
		load(this, start, last);
	}
};

/**
 * Custom load previous handler. Called when the carousel loads the previous
 * set of data items. Specified to the carousel as the configuration
 * parameter: loadPrevHandler
 **/
var loadPrevItems = function(type, args) {
	var start = args[0];
	var last = args[1]; 
	var alreadyCached = args[2];
	
	if(!alreadyCached) {
		load(this, start, last);
	}
};

var load = function(carousel, start, last) {
	for(var i=start;i<=last;i++) {
		var liItem = carousel.addItem(i, fmtItem(imageList[i], "#", "Number " + i, i));
/*
		// If you want to add handlers for mouse over, mouse out or other events,
		// here is the pattern
		YAHOO.util.Event.addListener(liItem, "mouseover", function(e) {
		//console.log("mouseover>>"+this.id);
		});
		YAHOO.util.Event.addListener(liItem, "mouseout", function(e) {
			//console.log("mouseout<<"+this.id);
		});
*/
	}
}

/**
 * Custom button state handler for enabling/disabling button state. 
 * Called when the carousel has determined that the previous button
 * state should be changed.
 * Specified to the carousel as the configuration
 * parameter: prevButtonStateHandler
 **/
var handlePrevButtonState = function(type, args) {

	var enabling = args[0];
	var leftImage = args[1];
	if(enabling) {
		leftImage.src = "images/left-enabled.png";	
	} else {
		leftImage.src = "images/left-disabled.png";
	}
	
};

var carousel; // for ease of debugging; globals generally not a good idea

/**
 * You must create the carousel after the page is loaded since it is
 * dependent on an HTML element (in this case 'dhtml-carousel'.) See the
 * HTML code below.
 */
var pageLoad = function() 
{
	carousel = new YAHOO.extension.Carousel("dhtml-carousel", 
		{
			numVisible:        5,
			animationSpeed:   0.7,
			scrollInc:         3,
			navMargin:         40,
			prevElement:     "prev-arrow",
			nextElement:     "next-arrow",
			loadInitHandler:   loadInitialItems,
			loadNextHandler:   loadNextItems,
			loadPrevHandler:   loadPrevItems,
			prevButtonStateHandler:   handlePrevButtonState,
			autoPlay: 3000,
			size:17,
			wrap:true
		}
	);
	

};
// YAHOO.extension.Carousel.prototype.startAutoPlay = function(interval) {
// 		if(this._isValidObj(interval)) {
// 			this.autoPlay = interval;
// 		}
// 		if(this.autoPlayTimer !== null) {
// 			return this.autoPlayTimer;
// 		}
// 		var oThis = this;  
// 		var autoScroll = function() { oThis.scrollPrev(); };
// 		this.autoPlayTimer = setTimeout( autoScroll, this.autoPlay );
// 		return this.autoPlayTimer;
// };
// 
// YAHOO.extension.Carousel.prototype.scrollPrev= function() {
// 	this._scrollPrev(null, this);
// 	this.autoPlayTimer = null;
// 	if(this.autoPlay !== 0) {
// 		this.autoPlayTimer = this.startAutoPlay();
// 	}
// };
// 
// YAHOO.extension.Carousel.prototype._scrollPrev = function(e, carousel) {
// 	if(carousel.scrollPrevAnim.isAnimated()) {
// 		return false;
// 	}
// 	var currStart = carousel.firstVisible;
// 	if(carousel.wrap && currStart == 1) {
// 		carousel.scrollTo(carousel.size - carousel.numVisible + 1);
// 	} else if(e !== null) { // event fired this so disable autoplay
// 		carousel.stopAutoPlay();
// 		carousel._scrollPrevInc(carousel, carousel.scrollInc, (carousel.getProperty("animationSpeed") !== 0));
// 	} else {
// 		carousel._scrollPrevInc(carousel, carousel.scrollInc, (carousel.getProperty("animationSpeed") !== 0));
// 	}
// };


/**
 * Illustrates stop autoplay
 */
var stopAutoPlay = function(e) {
	YAHOO.util.Dom.get("status").innerHTML = "Auto Play Stopped!";
	carousel.stopAutoPlay();
};

/**
 * Illustrates start autoplay
 */
var startAutoPlay = function(e) {
	YAHOO.util.Dom.get("status").innerHTML = "Auto Play Started!";
	carousel.startAutoPlay(2000);
};

YAHOO.util.Event.addListener(window, 'load', pageLoad);
YAHOO.util.Event.addListener("stop-button", 'click', stopAutoPlay);
YAHOO.util.Event.addListener("start-button", 'click', startAutoPlay);