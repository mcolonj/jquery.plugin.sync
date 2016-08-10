#jQuery Plugin sync

Plugin that animates html in sync to a movie file.

Requires: jquery.js, animate.css and HTML5.

## In action - HTML5
![alt tag](https://raw.githubusercontent.com/mcolonj/ui/master/jquery-plugin.gif)

Simply add 'sync' to the class attribute. This tells the plugin that the tag will be animated. Then add two attributes to your tag.
```
animation='' keyframe=''
```
animation=[from animate.css]
keyframe=[integer between 1-total_frames]

Your tag will look similar to this:
```
<p id='a1' class='sync' animation='bounceIn' keyframe='1'></p>
```
The above tag will run an animation as soon as the movie starts.

## Script tag, plugin initialization.

Then lower down in your html add a script tag that looks similar to:
```
<script>
$(document).ready(function() {
  $('.sync').sync({dev:false, video:'#video'});
});
</script>
```

That is it! Make sure your html tags set for animation have an id attribute. The plugin uses it during animation.

## An outmation & outframe

You also have the option of using an out animation or an outmation and an outframe.

Your tag will look similar to this:
```
<p id='a1' class='sync' animation='bounceIn' keyframe='3' outmation='fadeOut' outframe='25'></p>
```

If you use the html hidden attribute the animation will become visible before the animation begins and remain visible.
