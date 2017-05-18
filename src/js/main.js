require([
	"common",
], function() {
	$(".search_box").click(function() {
		location.href = "pension-list.html";
	});

	$(".btn_reservation_list").click(function() {
		location.href = "reservation_result.html";
	});
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
	$(".btn_region_search").on("click", function() {
		openLayerPopup(".region_select");
	});
});
