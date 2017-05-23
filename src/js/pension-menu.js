require([
	"common",
], function() {
	$(".reviews-write-text").on("click", function() {
		location.href = global.root + "/write-reviews.html";
	});
	$(".location-info-text").on("click", function() {
		location.href = global.root + "/frequent-question.html";
	});
	$(".pension-info-text").on("click", function() {
		location.href = global.root + "/viewmore.html";
	});
	function searchroom() {
		var urlSearchParams = new window.URLSearchParams(location.search);
		var pensionname = urlSearchParams.get("pensionname");
		var pensionid = urlSearchParams.get("pensionid");

		$(".bar-title").text(pensionname);

		$.ajax({
			url: global.root + "/api/searchroom",
			method: "POST",
			data: {
				pensionid: pensionid,
			},
			success: function(list) {
				var list = list.list;
				for (var i=0; i<list.length; i++) {
					var room = list[i];

					appendSearchroom(room);
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
	function appendSearchroom(room) {
		var roomHTML = "";

		roomHTML += "<li>";
		roomHTML += "<div class='room-img'>";
		roomHTML += "<img src='../img/room-img.jpg'>";
		roomHTML += "</div>";
		roomHTML += "<div class='room-wrap'>";
		roomHTML += "<div class='room-name'>";
		roomHTML += room.room_name;
		roomHTML += "</div>";
		roomHTML += "<div class='room-size'>";
		roomHTML += room.room_type;
		roomHTML += "</div>";
		roomHTML += "<div class='room-price'>";
		roomHTML += "가격 :";
		roomHTML += room.room_price;
		roomHTML += "</div>";
		roomHTML += "<div class='booking-btn'>";
		roomHTML += "예약하기";
		roomHTML += "</div>";
		roomHTML += "</div>";
		roomHTML += "</li>";

		$(".room-list").append(roomHTML);

		$(".room-list>li").on("click", function() {
			var urlSearchParams = new window.URLSearchParams(location.search);
			var roomname = room.room_name;
			var pensionname = urlSearchParams.get("pensionname");

			location.href = global.root + "/main-room.html?pensionname=" + pensionname
				+ "&roomname=" + roomname;
		});
	}
	searchroom();
});
