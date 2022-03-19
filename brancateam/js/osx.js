/*
 * SimpleModal OSX Style Modal Dialog
 * http://www.ericmmartin.com/projects/simplemodal/
 * http://code.google.com/p/simplemodal/
 *
 * Copyright (c) 2010 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Revision: $Id: osx.js 238 2010-03-11 05:56:57Z emartin24 $
 */

jQuery(function ($) {
	var OSX = {
		container: null,
		init: function () {
			$("input.osx, a.osx").click(function (e) {
				e.preventDefault();	

				$("#osx-modal-content").modal({
					overlayId: 'osx-overlay',
					containerId: 'osx-container',
					closeHTML: null,
					minHeight: 80,
					opacity: 65, 
					position: ['0',],
					overlayClose: true,
					onOpen: OSX.open,
					onClose: OSX.close
				});
			});
		},
		open: function (d) {
			var self = this;
			self.container = d.container[0];
			d.overlay.fadeIn('slow', function () {
				$("#osx-modal-content", self.container).show();
				var title = $("#osx-modal-title", self.container);
				title.show();
				d.container.slideDown('slow', function () {
					setTimeout(function () {
						var h = $("#osx-modal-data", self.container).height()
							+ title.height()
							+ 20; // padding
						d.container.animate(
							{height: h}, 
							200,
							function () {
								$("div.close", self.container).show();
								$("#osx-modal-data", self.container).show();
							}
						);
					}, 300);
				});
			})
		},
		close: function (d) {
			var self = this; // this = SimpleModal object
			d.container.animate(
				{top:"-" + (d.container.height() + 20)},
				500,
				function () {
					self.close(); // or $.modal.close();
				}
			);
		}
	};

	OSX.init();

});

jQuery(function ($) {
	var OSX = {
		container: null,
		init: function () {
			$("input.osx1, a.osx1").click(function (e) {
				e.preventDefault();	

				$("#osx-modal-content1").modal({
					overlayId: 'osx-overlay1',
					containerId: 'osx-container1',
					closeHTML: null,
					minHeight: 80,
					opacity: 65, 
					position: ['0',],
					overlayClose: true,
					onOpen: OSX.open,
					onClose: OSX.close
				});
			});
		},
		open: function (d) {
			var self = this;
			self.container = d.container[0];
			d.overlay.fadeIn('slow', function () {
				$("#osx-modal-content1", self.container).show();
				var title = $("#osx-modal-title1", self.container);
				title.show();
				d.container.slideDown('slow', function () {
					setTimeout(function () {
						var h = $("#osx-modal-data1", self.container).height()
							+ title.height()
							+ 20; // padding
						d.container.animate(
							{height: h}, 
							200,
							function () {
								$("div.close1", self.container).show();
								$("#osx-modal-data1", self.container).show();
							}
						);
					}, 300);
				});
			})
		},
		close: function (d) {
			var self = this; // this = SimpleModal object
			d.container.animate(
				{top:"-" + (d.container.height() + 20)},
				500,
				function () {
					self.close(); // or $.modal.close();
				}
			);
		}
	};

	OSX.init();

});

jQuery(function ($) {
	var OSX = {
		container: null,
		init: function () {
			$("input.osx2, a.osx2").click(function (e) {
				e.preventDefault();	

				$("#osx-modal-content2").modal({
					overlayId: 'osx-overlay2',
					containerId: 'osx-container2',
					closeHTML: null,
					minHeight: 80,
					opacity: 65, 
					position: ['0',],
					overlayClose: true,
					onOpen: OSX.open,
					onClose: OSX.close
				});
			});
		},
		open: function (d) {
			var self = this;
			self.container = d.container[0];
			d.overlay.fadeIn('slow', function () {
				$("#osx-modal-content2", self.container).show();
				var title = $("#osx-modal-title2", self.container);
				title.show();
				d.container.slideDown('slow', function () {
					setTimeout(function () {
						var h = $("#osx-modal-data2", self.container).height()
							+ title.height()
							+ 20; // padding
						d.container.animate(
							{height: h}, 
							200,
							function () {
								$("div.close2", self.container).show();
								$("#osx-modal-data2", self.container).show();
							}
						);
					}, 300);
				});
			})
		},
		close: function (d) {
			var self = this; // this = SimpleModal object
			d.container.animate(
				{top:"-" + (d.container.height() + 20)},
				500,
				function () {
					self.close(); // or $.modal.close();
				}
			);
		}
	};

	OSX.init();

});

jQuery(function ($) {
	var OSX = {
		container: null,
		init: function () {
			$("input.osx3, a.osx3").click(function (e) {
				e.preventDefault();	

				$("#osx-modal-content3").modal({
					overlayId: 'osx-overlay3',
					containerId: 'osx-container3',
					closeHTML: null,
					minHeight: 80,
					opacity: 65, 
					position: ['0',],
					overlayClose: true,
					onOpen: OSX.open,
					onClose: OSX.close
				});
			});
		},
		open: function (d) {
			var self = this;
			self.container = d.container[0];
			d.overlay.fadeIn('slow', function () {
				$("#osx-modal-content3", self.container).show();
				var title = $("#osx-modal-title3", self.container);
				title.show();
				d.container.slideDown('slow', function () {
					setTimeout(function () {
						var h = $("#osx-modal-data3", self.container).height()
							+ title.height()
							+ 20; // padding
						d.container.animate(
							{height: h}, 
							200,
							function () {
								$("div.close3", self.container).show();
								$("#osx-modal-data3", self.container).show();
							}
						);
					}, 300);
				});
			})
		},
		close: function (d) {
			var self = this; // this = SimpleModal object
			d.container.animate(
				{top:"-" + (d.container.height() + 20)},
				500,
				function () {
					self.close(); // or $.modal.close();
				}
			);
		}
	};

	OSX.init();

});

jQuery(function ($) {
	var OSX = {
		container: null,
		init: function () {
			$("input.osx4, a.osx4").click(function (e) {
				e.preventDefault();	

				$("#osx-modal-content4").modal({
					overlayId: 'osx-overlay4',
					containerId: 'osx-container4',
					closeHTML: null,
					minHeight: 80,
					opacity: 65, 
					position: ['0',],
					overlayClose: true,
					onOpen: OSX.open,
					onClose: OSX.close
				});
			});
		},
		open: function (d) {
			var self = this;
			self.container = d.container[0];
			d.overlay.fadeIn('slow', function () {
				$("#osx-modal-content4", self.container).show();
				var title = $("#osx-modal-title4", self.container);
				title.show();
				d.container.slideDown('slow', function () {
					setTimeout(function () {
						var h = $("#osx-modal-data4", self.container).height()
							+ title.height()
							+ 20; // padding
						d.container.animate(
							{height: h}, 
							200,
							function () {
								$("div.close4", self.container).show();
								$("#osx-modal-data4", self.container).show();
							}
						);
					}, 300);
				});
			})
		},
		close: function (d) {
			var self = this; // this = SimpleModal object
			d.container.animate(
				{top:"-" + (d.container.height() + 20)},
				500,
				function () {
					self.close(); // or $.modal.close();
				}
			);
		}
	};

	OSX.init();

});