require([
	"common",
], function() {
	$(".reviews-write-text").on("click", function() {
		location.href = global.root + "/write-reviews.html";
	});
	$(".location-info-text").on("click", function() {
		location.href = global.root + "/frequent-question.html";
	});
	$(".pension-info-text").on("click", function() {
		location.href = global.root + "/viewmore.html";
	});
	$(".room-info").on("click", function() {
		location.href = global.root + "/main-room.html";
	});
});
