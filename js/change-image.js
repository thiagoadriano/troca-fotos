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
				nameImg   = [];
			
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
                
                function cImg(posicao, index){ 
                    return img.eq(posicao).attr('src', nameImg[index]);
                }
//                             0       1      2      3
//                no array [amarelo, verde, azul, vermelho]

//                   0          1
//                amarelo  |  verde
//                  2            3
//                azul    |  vermelho
                if( d === 0 ){
                    cImg(0, 2);
                    cImg(1, 0);
                    cImg(2, 3);
                    cImg(3, 1);
                }

//                   0           1
//                 azul     | amarelo
//                   2          3
//                vermelho | verde
                else if( d === 1){
                    cImg(0, 3);
                    cImg(1, 2);
                    cImg(2, 1);
                    cImg(3, 0);
                }
                
//                   0          1
//                vermelho |  azul
//                  2          3
//                verde   | amarelo
                else if( d === 2 ){
                    cImg(0, 1);
                    cImg(1, 3);
                    cImg(2, 0);
                    cImg(3, 2);
                }
//                  0          1 
//                verde   | vermelho
//                   2       3
//                amarelo | azul
                else if( d === 3 ){
                    cImg(0, 0);
                    cImg(1, 1);
                    cImg(2, 2);
                    cImg(3, 3);  
                }
				
				d++;
			}
			
			pushName();
			dataId();

			setInterval(change, settings.changeTime);
			
		});
	}
}($));