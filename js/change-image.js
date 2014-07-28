/*!
 * Plugin: jQuery Change Photos 
 * Copyright (c) 2013 Thiago Adriano
 * Version: 1.0.1 (28-JUL-2014)
 * Requires: jQuery v1.10.1 or later
 */

;(function($){
	
	$.fn.changePhotos = function(config){
		var settings = $.extend({
			changeTime: 2000
			
			}, config);
		
		return this.each(function(){
			
			var img       = $(this).find('img'),
				lengthImg = img.length,
				i         = 0, 
				nameImg   = new Array();
			
			function pushName(){
				for(i; i < lengthImg; i++){
					nameImg.push(img.eq(i).attr('src'));
				}
			}
			
			function dataId(){
				for(var x = 0; x < lengthImg; x++){
					img.eq(x).attr('data-id', x);
				}
			}
			
			var d = 0;
			
			var change = function(){
					if(d === lengthImg){d = 0}
					
					var atuaSrc = img.eq(d).attr('src'),
						atualImgArray = nameImg.indexOf(atuaSrc);
										
				if(atualImgArray === (lengthImg - 1) ){
					img.eq(d).attr('src', nameImg[0]);

				}else{
					img.eq(d).attr('src', nameImg[atualImgArray + 1]);

				}
				
				d++;
			}
			
			pushName();
			dataId();

			setInterval(change, settings.changeTime);
			
		});
	}
}($));