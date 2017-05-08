define([
	"bootstrap",
], function() {
	function switchmenu() {
		$(".room-menu").show();
		$(".pension-menu").hide();
		$(".location-menu").hide();
		$(".reviews-menu").hide();

		$(".room-info").on("click", function() {
			$(".room-menu").show();
			$(".pension-menu").hide();
			$(".location-menu").hide();
			$(".reviews-menu").hide();
			$(".room-info").addClass("active");
			$(".pension-info").removeClass("active");
			$(".location-info").removeClass("active");
			$(".reviews").removeClass("active");
		});
		$(".pension-info").on("click", function() {
			$(".room-menu").hide();
			$(".pension-menu").show();
			$(".location-menu").hide();
			$(".reviews-menu").hide();
			$(".room-info").removeClass("active");
			$(".pension-info").addClass("active");
			$(".location-info").removeClass("active");
			$(".reviews").removeClass("active");
		});
		$(".location-info").on("click", function() {
			$(".room-menu").hide();
			$(".pension-menu").hide();
			$(".location-menu").show();
			$(".reviews-menu").hide();
			$(".room-info").removeClass("active");
			$(".pension-info").removeClass("active");
			$(".location-info").addClass("active");
			$(".reviews").removeClass("active");
		});
		$(".reviews").on("click", function() {
			$(".room-menu").hide();
			$(".pension-menu").hide();
			$(".location-menu").hide();
			$(".reviews-menu").show();
			$(".room-info").removeClass("active");
			$(".pension-info").removeClass("active");
			$(".location-info").removeClass("active");
			$(".reviews").addClass("active");
		});
	}
	$(".room-detail-info").on("click", function() {
		location.href = global.root + "/main-room.html";
	});
	$(".back-history").on("click", function() {
		window.history.back();
	});
	$(".glyphicon-search").on("click", function() {
		location.href = global.root + "/search_main.html";
	});
	$("#reservation-check").on("click", function() {
		location.href = global.root + "/search_main.html";
	});
	switchmenu();
});
