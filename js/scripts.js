
	if ('addEventListener' in window) {
	    window.addEventListener('resize', function(){
	        sameHeights();
	    });
	    window.addEventListener('load', function(){
	        sameHeights();
	    });
	}



	function sameHeights(selector) {
	    var selector = selector || '[data-key="sameHeights"]',
	        query = document.querySelectorAll(selector),
	        elements = query.length,
	        max = 0;
	    if (elements) {
	        while (elements--) {
	            var element = query[elements];
	            if (element.clientHeight > max) {
	                max = element.clientHeight;
	            }
	        }
	        elements = query.length;
	        while (elements--) {
	            var element = query[elements];
	            element.style.height = max + 'px';
	        }
	    }
	}
 
function waytoGo(badthings) {
	var text = badthings || 'hello there is my default';
	alert(text);
}

function dropper() {
	 var name = 'dropcontent';
	 
	var tots = document.getElementsByClassName(name);
			   
 
	for (i=0; i< tots.length; i++) {
		tots[i].classList.toggle('show');
		 
	}
 

	 }
	
			


