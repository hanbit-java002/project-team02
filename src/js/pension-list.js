require([
	"common",
], function() {
	$(".fa-angle-left").click(function() {
		location.href = global.root + "/index.html";
	});

	$(".pension-img-box").on("click", function() {
		location.href = global.root + "/pension-menu.html";
	});
	function appendSearch() {
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
	}

	function searchresult() {
		var urlSearchParams = new window.URLSearchParams(location.search);
		var sido = urlSearchParams.get("sido");
		var gugun = urlSearchParams.get("gugun");

		$(".bar-title").text(sido + "-" + gugun);

		$.ajax({
			url: global.root + "/api/search",
			method: "POST",
			data: {
				gugun: gugun,
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
