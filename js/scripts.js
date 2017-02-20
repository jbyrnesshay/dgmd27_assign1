


	/* sameHeights script, courtesy of ... */



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
 

	/* hamburger drop-down menu and dd menu behaviorcontrol*/
	/* logic by myself */
	/* basis derived from .. */

function dropper() {
	 
	var name = 'dropcontent';
	var tots = document.getElementsByClassName(name);
	var burger = document.getElementById("clickme");
 	/*onclick code controls the following behavior- opening the menu on button click only,
 	closing the menu on either button click or anywhere document click, while disabling
 	the closing behavior on clicks on the links in the dropdown menu itself, as well
 	as coordinating the rotation of the burger display when menu either open or closed */

 	document.onclick = function(e){
 		 
		whereClicked = e.target;
		/*anywhere on document outside dropdown scheme(not button, not menu)*/
 	 	if (!(document.getElementById("dropking").contains(whereClicked))) {
 	 		
 	 		//alert('a');
 	 		if(tots[0].classList.contains('show')) { 
 	 		/*if outside dropdown scheme and menu is open 
 	 		*/
 	 			 
 	 			tots[0].classList.remove('show');
 	 			burger.classList.remove('rotate');
 	 		}
 	 	}
 	 	/*button click logic only, ie, not outside dropdown, and not dropdown UL*/
		else if (!(document.getElementById("fa").contains(whereClicked))) {
			//alert('ah');
			burger.classList.toggle('rotate');
			if (!(tots[0].classList.contains('show'))) {
				/*if button clicked and menu not open */
				tots[0].classList.add('show');
			}
			else {
			//alert ('ah');
			/*if button clicked and menu open*/
				tots[0].classList.toggle('show');
				
			}
		}
	};
}  
 	 	
 	 
 	 
 	 	 



	
			


