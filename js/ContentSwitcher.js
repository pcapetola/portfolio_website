// Stops ContentSwitcher on Page-load <= 767px ******************
// --------------------------------------------------------------
$(document).ready(function() {
    if ( $(window).width() <= 767 ){
        $(".varText").addClass('screenReader');
    }
});

// Checks Window Width on Resize & Stops ContentSwitcher <= 767px
// --------------------------------------------------------------
var resizeTimer;

$(window).on('resize', function(e) {

  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {

        if ( $(window).width() <= 767 ){ 
             $(".varText").addClass('screenReader');
        } else {
                $(".varText").removeClass('screenReader');
        }
            
  }, 150);

});

// ContentSwitcher **********************************************
// --------------------------------------------------------------
(function ( $, window, document, undefined ) {
	'use strict';

	$.contentSwitcher = function ( options, elem ) {
		this.$el = $( elem );
		this.init( options, this );
	}
	$.contentSwitcher.prototype = {
		init : function( options, elem ) {
			self.elem = elem;
			this.options = $.extend( {}, $.fn.contentSwitcher.options, options );
			this.$icons = this.$el.find( '.meter' );
			this.$content = this.$el.find( '.varText' ).hide();
			this.currentItem = this.options.currentItem;
			this.oldItem = 0;
			this.$content.eq( this.currentItem ).show();
			this.updateContent();
			this.initEvents();
		},
		initEvents : function() {
			var self = this;
			this.$icons.on( self.options.eventName, function( event ){
				var idx = $(this).index();
				if(idx !== self.currentItem){
					var $oldItem = self.$content.eq( self.currentItem ),
						$newItem = self.$content.eq( idx );

					$oldItem[ self.options.transition ]( self.options.speedOut );
					$newItem[ self.options.delay ]( self.options.duration )[ self.options.transition ]( self.options.speedOut );


					self.oldItem = self.currentItem;
					self.currentItem = idx;

					self.updateContent();
				}
			});
		},
		updateContent : function() {
			this.$icons.eq( this.oldItem ).removeClass( 'active' ).end().eq( this.currentItem ).addClass( 'active' );
		}
	};

	$.fn.contentSwitcher = function ( options ) {
		return this.each(function() {	
			var instance = $.data( this, 'contentSwitcher' );
			if ( instance ) {
				instance.init( options, this );
			} else {
				instance = $.data( this, 'contentSwitcher', new $.contentSwitcher( options, this ) );
			}
		});
	};

	$.fn.contentSwitcher.options = {
		eventName: 'mouseenter',
		transition: 'fadeToggle',
		delay: 'delay',
		duration: 80,
		speedOut: 75,
		speedIn: 1500,
		currentItem: 0
	};

})( jQuery, window, document );