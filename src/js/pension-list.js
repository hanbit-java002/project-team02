require([
	"common",
], function() {
	$(".fa-angle-left").click(function() {
		location.href = global.root + "/index.html";
	});
	function appendSearch(search) {
		var searchHTML = "";

		searchHTML += "<li>";
		searchHTML += "<div class='pension-img-box'>";
		searchHTML += "<img src='http://image.wooripension.com/pension_images/w0707029/201611993356.jpg'>";
		searchHTML += "</div>";
		searchHTML += "<div class='pension-name-box'>";
		searchHTML += "<div class='pension-name'>";
		searchHTML += search.pension_name;
		searchHTML += "</div>";
		searchHTML += "</div>";
		searchHTML += "</li>";

		$(".pension-list>ul").append(searchHTML);
		$(".pension-list>ul>li").on("click", function() {
			location.href = global.root + "/pension-menu.html";
		});
	}

	function searchresult() {
		var urlSearchParams = new window.URLSearchParams(location.search);
		var gugun = urlSearchParams.get("gugun");
		var gugunid = urlSearchParams.get("gugunid");

		$(".bar-title").text(gugun);

		$.ajax({
			url: global.root + "/api/search",
			method: "POST",
			data: {
				gugunid: gugunid,
			},
			success: function(list) {
				var list = list.list;
				for (var i=0; i<list.length; i++) {
					var search = list[i];

					appendSearch(search);
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
	searchresult();
});
