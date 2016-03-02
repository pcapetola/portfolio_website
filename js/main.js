//  Navigation Change on Scroll *********************************
// --------------------------------------------------------------
$(window).scroll(function() {
    var windowScroll = $(window).scrollTop();
    if (windowScroll >= 1250) {
        $('a.navbarBrand, section.scrollNav').addClass('stickyNav');
    } else {
        $('a.navbarBrand, section.scrollNav').removeClass('stickyNav');
    }
});

//  Auto-updating Copyright Year ********************************
// --------------------------------------------------------------
if ($(window).width > 767) {
    $(document).ready(function() {
	   $('footer .varContent').text(new Date().getFullYear()); 
    });
};

// Smooth Internal Link Scrolling *******************************
// --------------------------------------------------------------
$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50 // The ".top - 50" sets some padding-top to #tag location.
        }, 1200, 'swing', function () {
            window.location.hash = target;
        });
    });
});

// Resume Header Content Switcher - (Meter Elements) ************
// --------------------------------------------------------------
(function($) {
    $(document).on('ready', function() {
        $('.contentSwitcher').contentSwitcher();
    });
}(jQuery));

// Hover & Focus Class Additions - (Publications) ***************
// --------------------------------------------------------------
$(document).ready(function() {
    $("a.publicationFigure, a.publicationTitle").focusin( function(){
        if ( $(this).hasClass('publicationFigure') ){
             $(this).addClass('onHover');
        } else if ( $(this).hasClass('publicationTitle') ){
                    $(this).parentsUntil("ul").children("a.publicationFigure").addClass('onHover');
        };
    });
    $("a.publicationFigure, a.publicationTitle").focusout( function(){
        $("a.publicationFigure").removeClass('onHover');
    });

    $("a.publicationFigure, a.publicationTitle").hover(
        function(){
            if ( $(this).hasClass('publicationFigure') ){
                 $(this).addClass('onHover');
            } else if ( $(this).hasClass('publicationTitle') ){
                        $(this).parentsUntil("ul").children("a.publicationFigure" ).addClass('onHover');
            };
        },
        function(){
            $("a.publicationFigure").removeClass('onHover');
        }
    );
});




