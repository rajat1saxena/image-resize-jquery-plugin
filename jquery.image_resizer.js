(function($){
	$.fn.image_resizer = function(options){
		$.fn.image_resizer.defaults = { MAX_HEIGHT : 280,MAX_WIDTH : 330,BORDER_WIDTH : 10 }
		var opts = $.extend({},$.fn.image_resizer.defaults,options);
		return this.each(function(){
			//plugin code starts here

			// getting array of all the images inside 'di$(this)' on which this plugin is applied
			var arr =  $(this).find('img');

			//iterating o$(this)er the array 'arr'
			$.each(arr,function(k){
				console.log(k,$(this))
				// now resizing the image
				
				img_hit=$(this).height();
				img_wit=$(this).width();
				//console.log(img_hit,img_wit);
				//calculating image height to width ratio
				var ratio = img_hit/img_wit;
				if(img_wit>img_hit){
					//console.log("wit module");
					if(img_wit>opts.MAX_WIDTH){
						//console.log("Image needs resizing");
						new_wit=opts.MAX_WIDTH-(opts.BORDER_WIDTH*2);
						$(this).width(new_wit);
						console.log(new_wit);
						var new_hit = ratio*new_wit;
						$(this).height(new_hit)
						var space = opts.MAX_HEIGHT-(new_hit+(opts.BORDER_WIDTH*2));
						console.log(space);
						$(this).css('margin-top',space/2);
						$(this).css('margin-bottom',space/2);
					}else{
						console.log("Image doesn't need resizing")
						var space = opts.MAX_HEIGHT-(img_hit+(opts.BORDER_WIDTH*2));
						console.log(space);
						$(this).css('margin-top',space/2);
						$(this).css('margin-bottom',space/2);
					}
				}else{
					//console.log("hit module");
					if(img_hit>opts.MAX_HEIGHT){
						//console.log("Image needs resizing");
						new_hit = opts.MAX_HEIGHT-(opts.BORDER_WIDTH*2);
						$(this).height(new_hit);
						var new_wit = new_hit/ratio;
						$(this).width(new_wit);
					}else{
						console.log("Image doesn't need resizing");
						var space = opts.MAX_HEIGHT-(img_hit+(opts.BORDER_WIDTH*2));
						console.log(space);
						$(this).css('margin-top',space/2);
						$(this).css('margin-bottom',space/2);
					}
				}

			});

			//plugin code ends here
		});
	}
})(jQuery);