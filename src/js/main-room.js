/**
 * Created by hb5016 on 2017-04-25.
 */
require([
	"common",
], function() {
	var roomname = "";
	var pensionname ="";
	var roomprice= "";
	function title() {
		var urlSearchParams = new window.URLSearchParams(location.search);
		roomname = urlSearchParams.get("roomname");
		pensionname = urlSearchParams.get("pensionname");
		roomprice = urlSearchParams.get("roomprice");

		$(".bar-title").text(roomname);

		$.ajax({
			url: global.root + "/api/roominfo",
			method: "POST",
			data: {
				roomname: roomname,
			},
			success: function(list) {
				var list = list.list;
				for (var i=0; i<list.length; i++) {
					var roominfo = list[i];

					appendroominfo(roominfo);
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
	var roomid = "";
	function appendroominfo(roominfo) {
		var roomtype = roominfo.room_type;
		roomid = roominfo.room_id;
		$(".size-of-room").append(roomtype);

		roomprice = roominfo.room_price;
		roomprice += "원";

		$(".fee-info").append(roomprice);
	}
	$(".btn-wrap").on("click", function() {
		location.href = global.root + "/reservation_form.html?pensionname=" +
		pensionname + "&roomname=" + roomname + "&roomprice=" + roomprice
		+ "&roomid=" + roomid;
	});

	title();
});
