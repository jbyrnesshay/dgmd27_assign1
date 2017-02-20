
	/*assorted references, did I use?
	http://sixrevisions.com/javascript/20-excellent-javascript-navigation-techniques-and-examples/
	https://www.w3schools.com/cssref/css3_pr_transform.asp
	http://stackoverflow.com/questions/18893144/javascript-detect-click-event-outside-of-div
	http://stackoverflow.com/questions/33060993/click-outside-div-to-hide-div-in-pure-javascript
	http://stackoverflow.com/questions/17965839/close-a-div-by-clicking-outside
	$('body').click(function(e) {
    if (!$(e.target).closest('.popup').length){
        $(".popup").hide();
    }https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav
    http://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element
    http://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element
    https://www.w3schools.com/css/css3_transitions.asp
    https://robots.thoughtbot.com/transitions-and-transforms
    http://stackoverflow.com/questions/9670075/css-transition-shorthand-with-multiple-properties
    http://stackoverflow.com/questions/19249522/css3-transform-translatex-equivalent-for-right
    http://codepen.io/LFeh/pen/ICkwe
    https://weblog.west-wind.com/posts/2014/Feb/22/Using-CSS-Transitions-to-SlideUp-and-SlideDown
});https://css-tricks.com/three-line-menu-navicon/
http://stackoverflow.com/questions/4861017/javascript-check-if-page-contains-a-particular-div
https://www.w3schools.com/jsref/met_node_contains.asp
http://stackoverflow.com/questions/23618210/toggle-between-classes-using-javascript
http://callmenick.com/post/add-remove-classes-with-javascript-property-classlist
https://www.w3.org/TR/css3-transitions/
http://stackoverflow.com/questions/11703241/does-css-have-a-blur-selector-pseudo-class
http://stackoverflow.com/questions/13630229/can-i-have-an-onclick-effect-in-css/32721572#32721572
https://www.w3schools.com/jsref/prop_style_transition.asp
http://stackoverflow.com/questions/12991351/css-force-image-resize-and-keep-aspect-ratio
http://stackoverflow.com/questions/641857/javascript-window-resize-event
http://ryanve.com/lab/dimensions/
http://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/
https://www.w3schools.com/css/exercise.asp?filename=exercise_css3_transitions1



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
	}
}
		/*THIS DOESNT REALLY WORK AT MOMENT-this is just a cosmetic fix to annoying premature glimpse of hburger menu
		when playing with resize window back and forth */
		/*that I have this problem behavior has to do with my using css transitions  */
		/*i am seeing the transition on resize from higher values down to 479 */
		window.addEventListener('resize', fix);
 		function fix() {
 			if ((document.documentElement.clientWidth >479)) {
 				if ((document.documentElement.clientWidth<480)) {

 				
 			 	tots[0].classList.remove('show');
 			}
 		}}
 	

 	 	
 	 
 	 
 	 	 



	
			


