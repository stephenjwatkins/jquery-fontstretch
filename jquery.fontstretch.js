// FontStretch v0.1 - jQuery Plugin
// (c) 2012 Stephen J. Watkins (stephenjwatkins.com)
// License: http://www.opensource.org/licenses/mit-license.php

(function($) {

    var methods = {
        init : function( options ) {
			var settings = $.extend({
				'sizeOffset': 1,
				'sizeLimit' : 999,
				'sizeIncrement': 1,
				'width': null
			}, options);
			
			return this.each(function() {
				var $this = $(this);
				var size = settings.sizeOffset;
				var width = (settings.width === null) ? $this.width() : settings.width ;
				var _resizer = $('<span />')
								.css({
									'visibility': 'hidden',
									'white-space': 'nowrap',
									'font-family': $this.css('font-family'),
									'font-size': $this.css('font-size'),
									'font-style': $this.css('font-style'),
									'font-weight': $this.css('font-weight'),
									'font-variant': $this.css('font-variant'),
									'letter-spacing': $this.css('letter-spacing'),
									'text-transform': $this.css('text-transform')
								})
								.html($this.html())
								.appendTo(document.body);
				var resizerWidth = _resizer.width();
				
				while (resizerWidth < width) {
					if (size >= settings.sizeLimit) {
						size = settings.sizeLimit;
						break;
					}
					size = size + settings.sizeIncrement;
					_resizer.css("font-size", size + 'px');
					resizerWidth = _resizer.width();
				}

				if(settings.sizeIncrement > 1) {
					while(resizerWidth > width) {
						size--;
						_resizer.css("font-size", size + 'px');
						resizerWidth = _resizer.width();
					}
					$this.css("font-size", (size + 1) + 'px');
				} else {
					$this.css("font-size", (size - 1) + 'px');
				}
				
				_resizer.remove();
			});
		}
	};

	$.fn.fontStretch = function( method ) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
		}
	};

})(jQuery);