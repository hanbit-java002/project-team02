require([
	"common",
], function() {
	$(".fa-angle-left").click(function() {
		history.back();
	});

	$(".pension-img-box").on("click", function() {
		location.href = global.root + "/pension-menu.html";
	});
});
