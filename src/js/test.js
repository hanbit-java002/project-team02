/**
 * Created by hb5016 on 2017-05-10.
 */
require([
	"common",
], function() {
	$("#submit").on("click", function() {
		var title = $("#test").val();
		var contents = $("#post").val();

		if(title === undefined || title === "") {
			alert("제목을 입력해주세요");
			$("#test").focus();
		}
		else if(post === undefined || post === "") {
			alert("내용을 입력해주세요");
			$("#contents").focus();
		}
		$.ajax({
			url: global.root + "/api/post",
			Method: "POST",
			data:{
				title: title,
				post: contents
			},
			success: function(data) {
				if (data.result === "ok") {
					alert("포스팅 되었습니다.");
				}
				else {
					alert("데이터가 제대로 가지 않았습니다.");
				}
			},
			error: function(jqXHR) {
				if (jqXHR.status === 1500) {
					alert(JSON.parse(jqXHR.responseText).errorMsg);
				}
				else {
					alert(jqXHR.responseJSON.message);
				}
			}
		});
	});
});
