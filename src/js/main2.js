/**
 * Created by hb5016 on 2017-04-28.
 */
require([
	"common",
], function() {
	$("#todays-pension").on("click", function() {
		location.href = global.root + "/pension-menu.html";
	});
});
