(function ($) {
	"use strict";

	$(document).ready(function () {
		$("select").niceSelect();
	});

	$(".people_carousel").owlCarousel({
		items: 1,
		loop: false,
		dots: true,
		nav: false,
		autoplay: false,
	});

	$(".site-header .mobile_menu_bar a").on("click", function () {
		$(".side_menu").addClass("open");
	});
	$(".side_menu a.close").on("click", function () {
		$(".side_menu").removeClass("open");
	});
})(jQuery);
