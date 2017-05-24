require([
	"common",
], function() {
	$(".fa-angle-left").click(function() {
		location.href = global.root + "/index.html";
	});
	function appendSearch(search) {
		var searchHTML = "";

		searchHTML += "<li pid='" + search.pension_id + "' penid='"
			+ search.pension_name + "'>";
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

				$(".pension-list>ul>li").on("click", function() {
					var pensionname = $(this).attr("penid");
					var pensionid = $(this).attr("pid");

					location.href = global.root + "/pension-menu.html?" +
						"pensionid=" + pensionid + "&pensionname=" + pensionname;
				});
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
