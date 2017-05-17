require([
	"common",
], function() {
	$(".search_box").click(function() {
		location.href = "pension-list.html";
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

		/* $(".region_select").css("overflow", "auto");*/

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
	$(".btn_reservation_list").on("click", function() {
		openLayerPopup(".reservation_confirm");
	});
	$(".sido-control>li").on("click", function() {
		$(".sido-control>li").removeClass("active");
		$(".sido-control>li>.gg-control").hide();

		$(this).addClass("active");
		$(this).find(".gg-control").show();
	});

	$(".gg-control>li").on("click", function(event) {
		event.stopPropagation();

		var sido = $(this).parents(".sd").attr("value");
		var gugun = $(this).text();

		var sidogugun = sido + " - " + gugun;

		$(".btn_region_search>span").text(sidogugun);

		closeLayerPopup();
	});
});
