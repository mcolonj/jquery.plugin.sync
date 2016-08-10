#jQuery Plugin sync

Plugin that animates html in sync to a movie file.

Requires: jquery.js and animate.css.

## In action
![alt tag](https://raw.githubusercontent.com/mcolonj/ui/master/jquery-plugin.gif)

Simply add 'sync' to the class attribute. This tells the plugin that the tag will be animated.

Then add an two attributes to your tag.
```
animation='' keyframe=''
```
animation=one of animate.css animations.
keyframe=[integer between 1-total_frames].

A tag will look similar to this:

```
<p id='a1' class='sync' animation='bounceIn' keyframe='1'></p>
```
The above tag will run an animation as soon as the movie starts.

Then lower down in your html include a script tag that looks similar to:

```
<script>
$(document).ready(function() {
  $('.sync').sync({dev:false, video:'#video'});
});
</script>
```

That is it. Make sure your html tags with the sync class also have an id. The plugin uses the tags id attribute during animation.


There is also the option of using an out animation or an outmation that is given an outframe for it's disappearence. It looks like this:

```
<p id='a1' class='sync' animation='bounceIn' keyframe='3' outmation='fadeOut' outframe='25'></p>
```

If you use the html hidden attribute the animation will become visible before the animation begins and remain visible.
