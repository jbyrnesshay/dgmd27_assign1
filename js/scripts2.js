
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
	 // tots[0].style.transition="transform .3s";
var burger = document.getElementById("clickme");
 	  
 	document.onclick = function(e){
 			whereClicked = e.target;
			window.addEventListener('resize', fix);
 	 		function fix() {
 	 			 
 	 			if ((document.documentElement.clientWidth >479)) 
 	 		{ 
 	 			 
 	 			tots[0].classList.remove('show');
 	 		 
 	 		}}
 	 			

 	 		var lists = document.getElementsByTagName('li');
 	  
 	  
 	  	//alert(whereClicked);		is it link										is it button
 	  	/*if some other part of the page*/
 	 	if (!(document.getElementById("dropking").contains(whereClicked))){
 	 		 
 	 		 
 	 	 	if(tots[0].classList.contains('show')) 
 	 		{ 
 	 			tots[0].classList.remove('show');
 	 			 
 	 			//burger.classList.add('rotate');
 	 			 
 	 		}}
 	 	
 	 		 
 	 	
 	 		/*if it is in the scheme but not in the ul, then it is the the button is cliicked */
		else if (
			//whereClicked==(document.getElementById("clickme"))){
			//alert('a');

			!(document.getElementById("fa").contains(whereClicked))){

			//for (i=0; i < lists.length; i++) {

			//}
			 
			burger.classList.toggle('rotate');
			 
			 if (!(tots[0].classList.contains('show'))){
			 	tots[0].classList.add('show');
			 	 
			 	
		
			 }
			 else {
			 	 
			//alert('asdf');
		tots[0].classList.toggle('show');	
		 
		
		 
	}
			 
		 
	}
	else burger.classList.remove('rotate')
	//alert('asdf');
}}
 	 	
 	 
 	 
 	 	 



	
			


