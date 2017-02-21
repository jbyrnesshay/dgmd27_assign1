


	/* I tweaked sameheights script on line 1, same heightsscript courtesy of 
	Ben Howdle, link to http://benhowdle.im/easy-peasy-equal-heights.html*/

	/* only  tweak here is with the window.innerWidth property to only use sameheights on screensizes > my mobile media query width limit of 479
	because sameheights didn't look great in my one column layout for mobile */

	if (('addEventListener' in window) && (window.innerWidth > 479)) {
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
	/* logic by me Joachim Byrnes-Shay.  instruction on how to determine click inside/outside element from here http://stackoverflow.com/questions/14188654/detect-click-outside-element-vanilla-javascript*/
	

function burgermenu() {
	var name = 'dropcontent';
	var droplist = document.getElementsByClassName(name);
	var burger = document.getElementById("burger-btn");
	var ul = document.getElementsByTagName("ul");
	 

 	/*onclick code controls the following behavior- opening the menu on button click only,
 	closing the menu on either button click or anywhere-in-document (on desktop not mobile) click, while disabling
 	the closing behavior on clicks on the links in the dropdown menu itself, as well
 	as coordinating the rotation of the burger display when menu either open or closed */

 	document.onclick = function(e){
 		 var whereClicked = e.target;
		/*if a click occurs anywhere on document outside dropdown scheme(not button, not menu)*/
 	 	if (!(document.getElementById("drop-area").contains(whereClicked))) {
 	 		if(droplist[0].classList.contains('show')) { 
 	 		/*then if it occurs outside dropdown scheme AND menu is open, close menu, 
 	 		*/
 	 			droplist[0].classList.remove('show');
 	 			burger.classList.remove('rotate');
 	 		}
 	 	}
 	 	/*if only button ic clicked, ie, not outside dropdown, and not dropdown UL*/
		else if (!(ul[0].contains(whereClicked))) {
			burger.classList.toggle('rotate');
			if (!(droplist[0].classList.contains('show'))) {
				/*if button clicked and menu not open */
				droplist[0].classList.add('show');
			}
			else {
			/*if none of the above cases and the menu is open and it is the button that is clicked*/
				droplist[0].classList.toggle('show');
			}
		}
	};
}  
 	 	
 	 
 	 
 	 	 



	
			


