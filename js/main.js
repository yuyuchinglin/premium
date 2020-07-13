function main () {


	// lazyload
	// $(function () {
	// 	$(".lazyload").lazyload({
	// 		effect: "fadeIn"
	// 	});
	// });

	// moments
	// jQuery(document).ready(function () {

	// 	jQuery("#gallery").unitegallery({
	// 		tile_enable_icons: false,
	// 		tiles_type: "justified"
	// 	});
	// });


	// page scroll

	// $(function() {
	// 	$('a.page-scroll').bind('click', function(event) {
	//         var $anchor = $(this);
	//         $('html, body').stop().animate({
	//             scrollTop: $($anchor.attr('href')).offset().top
	//         }, 800, 'linear');
	//         event.preventDefault();
	// 	});
	// });




	$(function () {

		//scrollup 
		var bodyClass = document.body.classList,
			lastScrollY = 0;
		window.addEventListener('scroll', function () {
			var st = this.scrollY;
			// 判斷是向上捲動，而且捲軸超過 200px
			if (st < lastScrollY) {
				bodyClass.remove('hideUp');
			} else {
				bodyClass.add('hideUp');
			}
			lastScrollY = st;
		});





		//easychart + waypoints
		// $('.chart').waypoint(function () {
		// 	$(this).easyPieChart({
		// 		scaleColor: false,
		// 		lineWidth: 10,
		// 		// lineCap: 'round',
		// 		lineCap: 'butt',
		// 		barColor: '#c4a046',
		// 		trackColor: '#ddd',
		// 		size: 150,
		// 		animate: 2000
		// 	});
		// }, {
		// 	triggerOnce: true,
		// 	offset: 'bottom-in-view'
		// });

	});



	var navBar = $('.navbar');
	lastScrollY = 0;
	window.addEventListener('scroll', function () {
		var st = this.scrollY;
		// 判斷是向上捲動，而且捲軸超過 200px
		if (st < lastScrollY && st > 800) {
			navBar.addClass("scrollDown");
		} else {

			navBar.removeClass("scrollDown");
		}
		lastScrollY = st;
	});


}



main();















