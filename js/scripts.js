
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

	var tots = document.getElementsByClassName(name);
	var name = 'dropcontent';
	 var tots = document.getElementsByClassName(name);
	 
 	 	
 	 document.onclick = function(e){

 	  
 	  	whereClicked = e.target;
 	  	//alert(whereClicked);		is it link										is it button
 	 	if (!(document.getElementById("dropking").contains(whereClicked))){
 	 		 

 	 	 	if(tots[0].classList.contains('show')) 
 	 		{ 
 	 			tots[0].classList.remove('show');
 	 		 
 	 		}}
 	 		
		else if (!(document.getElementById("fa").contains(whereClicked))){
			 
		tots[0].classList.toggle('show');	}
			 }
		 
	}
 	 	
 	 
 	 
 	 	 



	
			


