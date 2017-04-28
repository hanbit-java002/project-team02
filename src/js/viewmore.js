require([
	"common",
], function() {
	var popupCssSelector = "";

	function closeLayerPopup() {
		$(popupCssSelector).hide();

		$(".hbps-block-layer").remove();
		$("body").css("overflow", "");
		popupCssSelector = "";
	}

	function openLayerPopup(cssSelector) {
		if (popupCssSelector === cssSelector) {
			return;
		}
		popupCssSelector=cssSelector;

		$("body").css("overflow", "hidden");

		var blockLayerHTML = "<div class='hbps-block-layer'></div>";
		$("body").append(blockLayerHTML);

		$(cssSelector).show();
		$(".close-btn").on("click", function() {
			closeLayerPopup();
		});
	}

	$(".hbps-sign-in-btn").on("click", function() {
		openLayerPopup(".hbps-member-popup");
	});


	$(".hbps-sign-up").on("click", function() {
		$(".member-signin").hide();
		$(".member-signup").show();
		$(".popup-title").text("회원가입");
	});

	$(".hbps-forgot").on("click", function() {
		$(".member-signin").hide();
		$(".forgot-idpw").show();
		$(".popup-title").text("아이디/비밀번호찾기");
	});

	$("#forgot-id").on("click", function() {
		$(".forgot-idpw").hide();
		$(".find-id").show();
		$(".popup-title").text("아이디 찾기");
	});

	$("#forgot-pw").on("click", function() {
		$(".forgot-idpw").hide();
		$(".find-pw").show();
		$(".popup-title").text("비밀번호 찾기");
	});
});
