require([
	"common",
], function() {
	$(".fa-home").click(function() {
		location.href = "index.html";
	});
	var roomid = "";
	var pensionid = "";
	var roomname = "";
	function confrim() {
		var urlSearchParams = new window.URLSearchParams(location.search);
		var reservationname = urlSearchParams.get("reservationname");
		$(".reser_pension_namebox").text(reservationname);
		$.ajax({
			url: global.root + "/api/reservefind",
			method: "POST",
			data: {
				reservationname: reservationname,
			},
			success: function(data) {
				var data = data.list;
				for (var i=0; i<data.length; i++) {
					var confirm = data[i];

					findconfirm(confirm);
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
	function findconfirm(confirm) {
		roomid = confirm.room_id;
		$.ajax({
			url: global.root + "/api/findroomid",
			method: "POST",
			data: {
				roomid: roomid,
			},
			success: function(findroom) {
				var findroom = findroom.list;
				for (var i=0; i<findroom.length; i++) {
					var findroomid = findroom[i];

					findidconfirm(findroomid);
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
	function findidconfirm(findroomid) {
		pensionid = findroomid.pension_id;
		roomname = findroomid.room_name;
		$(".reser_room_name").text(roomname);
		$.ajax({
			url: global.root + "/api/findpension",
			method: "POST",
			data: {
				pensionid: pensionid,
			},
			success: function(findpension) {
				var findpension = findpension.list;
				for (var i=0; i<findpension.length; i++) {
					var namelist = findpension[i];

					findnameconfirm(namelist);
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
	function findnameconfirm(namelist) {
		$(".reser_pension_name").text(namelist.pension_name);
		$(".reser-addr_detail").text(namelist.pension_addr);

		$(".reser-tel-num").text(namelist.pension_tel);
	}
	confrim();
});
