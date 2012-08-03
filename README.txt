Image Resizer jQuery Plugin

Introduction
------------------------------------------
This is the plugin for containing overflowing images inside elements like '<div>'.This plugin comes handy when the dimensions of the images are not known.See the attached 'before.png' and 'after.png' to get the idea of it's working.This plugin is a part of my new online polling website http://www.boowars.com/ .

How to use
------------------------------------------
Usage is very simple

Step 1: Include '<script src="jquery.image-resizer.js"></script>' in the 'head' section of your html file(Ensure that the plugin and the html file both are in same directory).

Step 2: Put the following code anywhere in the 'body' section of your html file.
"<script>
	$(document).ready(function(){
		window.onload=function(){
			$(<The element which contains overflowing images>).image_resizer();
		}
	});
</script>"

Note: 'window.onload' step is critical.Don't remove it.

Step 3: Voila!You've resized all the overflowing images appropriately.

License
-------------------------------------------
The plugin is licensed under GPLv3 license.

Support
-------------------------------------------
The plugin is self explanatory and works well under most of the conditions but if you feel like contacting the author,you can do that by dropping a mail at 'rajat.saxena.work@gmail.com'. 