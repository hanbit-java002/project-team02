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
	$(".reservation-confirm-btn").on("click", function() {
		location.href = global.root + "/reservation_result.html";
	});
	$(".sido-control>li").on("click", function() {
		$(".sido-control>li").removeClass("active");
		$(".sido-control>li>.gg-control").hide();

		$(this).addClass("active");
		$(this).find(".gg-control").show();
	});

	var sido = "";
	var gugun = "";
	var gugunid= "";

	$(".gg-control>li").on("click", function(event) {
		event.stopPropagation();

		sido = $(this).parents(".sd").attr("value");
		gugun = $(this).text();
		gugunid = $(this).attr("id");

		var sidogugun = sido + " - " + gugun;

		$(".btn_region_search").val(sidogugun);
		closeLayerPopup();
	});

	function search() {
		$(".search_box").on("click", function() {
			var sidogugun = $(".btn_region_search").val().trim();

			if(sidogugun === "지역을 선택해주세요") {
				alert("지역을 선택하시오");
				return;
			}
			gugun = encodeURIComponent(gugun);
			gugunid = encodeURIComponent(gugunid);
			location.href = global.root + "/pension-list.html?gugunid="
				+ gugunid + "&gugun=" + gugun;
		});
	}
	search();
});
