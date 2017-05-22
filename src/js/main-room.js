/**
 * Created by hb5016 on 2017-04-25.
 */
require([
	"common",
], function() {
	$(".btn-wrap").on("click", function() {
		location.href = global.root + "/reservation_form.html";
	});
});
