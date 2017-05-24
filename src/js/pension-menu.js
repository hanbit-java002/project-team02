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
	var pensionname = "";
	var pensionid = "";
	function searchroom() {
		var urlSearchParams = new window.URLSearchParams(location.search);
		pensionid = urlSearchParams.get("pensionid");
		pensionname = urlSearchParams.get("pensionname");

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

		roomHTML += "<li rname='" + room.room_name + "'typeid='"
			+ room.room_type + "'>";
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

		var roomname = room.room_name;
		var roomtype = room.room_type;

		console.log(pensionname);
		$(".room-list").append(roomHTML);

		$(".room-list>li").on("click", function() {
			roomname = $(this).attr("rname");
			roomtype = $(this).attr("typeid");

			location.href = global.root + "/main-room.html?pensionname=" + pensionname
				+ "&roomname=" + roomname + "&roomtype=" + roomtype;
		});
	}
	searchroom();
});
