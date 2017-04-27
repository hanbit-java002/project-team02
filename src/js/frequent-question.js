/**
 * Created by hb5016 on 2017-04-27.
 */
require([
	"common",
], function() {
	function showanswer() {
		$(".answer-row").hide();

		$(".question-row").on("click", function() {
			var answer = $(this).find(".answer-row");
			answer.toggle();

			var rowIcon = $(this).find(".row-icon");

			if (answer.css("display") === "none") {
				rowIcon.removeClass("fa-angle-up");
				rowIcon.addClass("fa-angle-down");
			}
			else {
				rowIcon.removeClass("fa-angle-down");
				rowIcon.addClass("fa-angle-up");
			}
		});
	}
	showanswer();
});
