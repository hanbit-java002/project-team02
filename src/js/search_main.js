require([
	"common",
], function() {
	$(".search_box").click(function() {
		location.href = "pension_list.html";
	});

	$(".btn_reservation_list").click(function() {
		location.href = "reservation_result.html";
	});
});
