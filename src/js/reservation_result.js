require([
	"common",
], function() {
	$(".fa-home").click(function() {
		location.href = "index.html";
	});
	var pensionname = "";
	function resultform() {
		var urlSearchParams = new window.URLSearchParams(location.search);
		var reservationname = urlSearchParams.get("reservationname");
		pensionname = urlSearchParams.get("pensionname");

		$.ajax({
			url: global.root + "/api/reservefind",
			method: "POST",
			data: {
				reservationname: reservationname,
			},
			success: function(list) {
				var list = list.list;
				for (var i=0; i<list.length; i++) {
					var reservefind = list[i];

					reservationresult(reservefind);
				}
			},
			error: function(jqXHR) {
				if (jqXHR.status === 1500) {
					alert(JSON.parse(jqXHR.responseText).errorMsg);
				}
				else {
					alert(jqXHR.responseJSON.message);
				}
			},
		});
	}
	function reservationresult(reservefind) {
		$(".reser_pension_namebox").text(reservefind.reservation_name);

		$(".reser_pension_name").text(pensionname);
	}
	resultform();
});
