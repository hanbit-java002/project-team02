require([
	"common",
], function() {
	var modal = {
		open: function() {
			$("#modal-wrapper").show();
		},
		close: function() {
			$("#modal-wrapper").hide();
		},
	};
	$(document).on("click", "#modal-overlay", function() {
		window.history.back();
	}).on("click", ".cancel_stipulation_view", function() {
		window.history.pushState({}, "modal", "/modal");
		modal.open();
	});

	window.onpopstate = history.onpushstate = function(e) {
		if(window.location.href.split("/").pop().indexOf("modal")===-1) {
			$(".fa-times").on("click", function() {
				modal.close(); // 현재의 모달을 닫는다.
			});
		}
	};

	$(".btn_pay_box").click(function() {
			location.href = "reservation_result.html";
	});
});
