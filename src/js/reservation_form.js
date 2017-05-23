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
	function result() {
		var urlSearchParams = new window.URLSearchParams(location.search);
		var roomname = urlSearchParams.get("roomname");
		var pensionname = urlSearchParams.get("pensionname");
		var roomprice = urlSearchParams.get("roomprice");
		var	roomid = urlSearchParams.get("roomid");

		$(".reser_pension_name").text(pensionname);
		$(".reser_room_name").text(roomname);
		$(".room_price_info").text(roomprice);
		$(".total_pay_price").text(roomprice);

		$(".btn_pay_box").click(function() {
			var reservationname = $(".reservation-name").val();
			var reservationnum = $(".reservation-num").val();
			var reservationdate = $(".reser_chk_in_date1").val();

			if (reservationname === "" || reservationname === undefined) {
				alert("예약자 성명을 입력해주세요");
				return;
			}
			else if(reservationnum === "" || reservationnum === undefined) {
				alert("예약자 전화번호를 입력해주세요");
				return;
			}
			console.log(roomid);
			console.log(reservationnum);
			$.ajax({
				url: global.root + "/api/reserve",
				method: "POST",
				data: {
					roomid: roomid,
					reservationname: reservationname,
					reservationnum: reservationnum,
					reservationdate: reservationdate,
				},
				success: function(data) {
					if (data.result === "ok") {
						alert("포스팅 되었습니다.");
					}
					else {
						alert("데이터가 제대로 가지 않았습니다.");
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

			reservationname = encodeURIComponent(reservationname);
			pensionname = encodeURIComponent(pensionname);
			/* location.href = "reservation_result.html?reservationname="
				+ reservationname + "&pensionname=" + pensionname;*/
		});
	}

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
	function checkboxcontrol() {
		$(".check-all").on("click", function() {
			$(".check").attr("checked", true);
		});
	}
	checkboxcontrol();
	result();
});
