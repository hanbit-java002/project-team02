/**
 * Created by hb5016 on 2017-04-25.
 */
require([
	"common",
], function() {
	var popupCssSelector = "";

	function closeLayerPopup() {
		$(popupCssSelector).hide();

		$(".block_page").remove();
		$("body").css("overflow", "");

		popupCssSelector = "";
	}
	function openLayerPopup(cssSelector) {
		if (popupCssSelector === cssSelector) {
			return;
		}

		popupCssSelector = cssSelector;

		$("body").css("overflow", "hidden");

		var blockLayerHTML = "<div class='block_page'></div>";
		$("body").append(blockLayerHTML);

		$(cssSelector).show();

		$(".block_page").on("click", function() {
			closeLayerPopup();
		});
	}
	$(".btn-wrap").on("click", function() {
		openLayerPopup(".info-reservation");
	});
	function clearname() {
		$(".write-name").val("");
	}
	$(".reservation-ok").on("click", function() {
		var roomid = $(".room-id").val();
		var date = $(".reservation_date").val();
		var num = $(".reservation_num").val();
		var customername = $(".write-name").val();

		if(customername === "" || customername === undefined) {
			alert("이름을 입력해 주세요");
			clearname();
			$(".write-name").focus;
			return;
		}
		$.ajax({
			url: global.root + "/api/reserve",
			method: "POST",
			data: {
				customername: customername,
				roomid: roomid,
				date: date,
				num: num,
			},
			success: function(data) {
				if (data.result === "ok") {
					alert("예약 되었습니다.");
				}
				else {
					alert("예약에 실패하였습니다.");
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
	});
});
