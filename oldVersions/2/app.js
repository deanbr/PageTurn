/*
	JavaScript for flipbook functionality
    Works using JQuery 1.7, 1.8 - 2.X, Not on 3.X

    Brandon Dean, 8/19/15
*/

 $(window).ready(function() {
    $('#flipbook').turn({
        display: 'double',
        acceleration: true,
        gradients: !$.isTouch,
        elevation:50,
        when: {
            turned: function(e, page) {
                 /*console.log('Current view: ', $(this).turn('view'));*/
            }
        }
     });
});
$(window).bind('keydown', function(e){
    if (e.keyCode==37)
        $('#flipbook').turn('previous');
    else if (e.keyCode==39)
        $('#flipbook').turn('next');
});

/*
$("#flipbook").turn({
    width: 400,
    height: 300,
    autoCenter: true
});
*/
