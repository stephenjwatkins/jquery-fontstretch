// TextFit v0.1 - jQuery Plugin
// (c) 2012 Stephen J. Watkins (stephenjwatkins.com)
// License: http://www.opensource.org/licenses/mit-license.php

(function($) {

    var methods = {
		init : function( options ) {
			var settings = $.extend({
				'sizeLimit' : 999,
                'width': null
			}, options);
			
			return this.each(function() {
				var $this = $(this);
				$this.load(function() {
					var size = 1;
					var width = (settings['width'] === null) ? $this.width() : settings['width'] ;
					var _resizer = $('<span />')
									.css({
                                        'visibility': 'hidden',
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
					while (_resizer.width() < width) {
						if (size === settings['sizeLimit']) {
							break;
						}
						++size;
						_resizer.css("font-size", size + 'px');
					}
					$this.css("font-size", (size - 1) + 'px');
					_resizer.remove();
				});
			});
		}
	};

	$.fn.textfit = function( method ) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
		}
	};

})(jQuery);