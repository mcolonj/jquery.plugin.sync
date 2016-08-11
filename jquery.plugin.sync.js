;(function ( $ ) {

  $.fn.extend({
    animateCss: function (animationName, disappear) {
      var animationEnd = 'webkitAnimationEnd mozAniamtionEnd MSAnimationEnd oanimationend animationend';
      $cached = $(this);
      $cached.addClass('animated ' + animationName)
      .one(animationEnd, function() {
         $cached.removeClass('animated').removeClass(animationName);
         if (disappear) $cached.hide();
      });
    }
  }); //end fn.extend


  $.fn.sync = function (options) {

    var settings = $.extend({
      elem : this,
      frame : 0,
      video : undefined,
      runTransition : undefined,
      dev : 0,
    }, options);

    (undefined === (video = settings.video)) ? function() {
      console.log('Video property is required');
    }() : function() {
      $video = $(video);
      var transitions = {};
      var outmations = {};
      var frames = [];
      var frame = 0;
      var mytimer = null;
      settings.elem.each(function(index, section) {
        $section = $(section);
        transitions[$section.attr('keyframe')] = {id:$section.attr('id'), animation:$section.attr('animation')};
        if ($section.attr('outframe')) {
          outmations[$section.attr('outframe')] = {id:$section.attr('id'), animation:$section.attr('outmation')};
        }
      });

      $video.get(0).addEventListener('play', function() {
        mytimer = setInterval(function(){
          if ($video.get(0).paused || $video.get(0).ended) return;
          $counter = $('#counter');
          var key = ""+frame;
          if (settings.dev) {
            $counter.show().html(key);
          } else {
            $counter.hide();
          }
          if (key in transitions) runAnimationForKey(transitions[key], false);
          if (key in outmations) runAnimationForKey(outmations[key], true);
          frame++;
        },1000);
      }, false);

      $video.get(0).addEventListener('ended', function() {
        clearInterval(mytimer);
        frame = 0;
      }, false);

    }();

    $video.get(0).play();
    return this;
  };

  function runAnimationForKey(transition, disappear) {
    $.each(transition.animation.split(' '), function(index, animation) {
      $('#'+transition.id).show();
      $('#'+transition.id).animateCss(animation, disappear);
    });
  }

}(jQuery));
