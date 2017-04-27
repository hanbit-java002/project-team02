/**
 * Created by hb5016 on 2017-04-26.
 */
require([
	"common",
], function() {
	$(".non-okay").on("click", function() {
		window.history.back();
	});
});
