;(function ( $ ) {
    $.fn.extend({
      animateCss: function (animationName, disappear) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $cached = $(this);
        $cached.addClass('animated ' + animationName).one(animationEnd, function() {
            $cached
              .removeClass('animated')
              .removeClass(animationName);
            if (disappear) {
               console.log('disappearing');
               $cached.hide();
             }
        });
      }
    });

    $.fn.sync = function( options ) {
      var settings = $.extend({
        frame         : 0,
        video         : video,
        runTransition : null,
        dev           : false,
      }, options);
      $video = $( settings.video );
      // loval variables used in the sync plugin.
      var transitions = {};
      var outmations = {};
      var frames = [];
      var frame = 0;
      var mytimer = null;

      this.each(function(index, section) {
        $section = $(section);
        transitions[$section.attr( 'keyframe' )] = {id:$section.attr( 'id' ), animation:$section.attr( 'animation' )};
        if ($section.attr( 'outframe')) {
          outmations[$section.attr( 'outframe' )]  = {id:$section.attr( 'id' ), animation:$section.attr( 'outmation' )};
        }
      });

      $video.get(0).addEventListener("play", function() {
          mytimer = setInterval(function(vid, transitions) {
            if (vid.paused || vid.ended) {
              return;
            }

            $counter = $('#counter');
            if (settings.dev) {
              $counter.show().html(""+frame);
            } else {
              $counter.hide();
            }

            var key = ""+frame;
            if (key in transitions) runAnimationForKey(key, transitions, false);
            if (key in outmations) runAnimationForKey(key, outmations, true);
            frame++;
          }, 1000, $video.get(0), transitions);
      }, false);

      $video.get(0).addEventListener("ended", function() {
          clearInterval(mytimer);
          frame = 0;
      }, false);

      // initial play command sent to the HTML5 Video
      $video.get(0).play();
      return this;
    };

    function runAnimationForKey(key, transitions, disappear) {
      var transition = transitions[key];
      
      $.each(transition.animation.split(' '), function(index, animation) {
        $('#'+transition.id).show();
        $('#'+transition.id).animateCss(animation, disappear);
      });
    };

}( jQuery ));
