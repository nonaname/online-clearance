$(document).ready(function () {
	$('h3').click(function (){
		if ($(this).find("i").hasClass('ion-arrow-up-b')) {
			$(this).next().slideUp(300);
			$(this).find("i").removeClass('ion-arrow-up-b');
			$(this).find("i").addClass('ion-arrow-down-b');
		}
		else {
			$(this).next().slideDown(300);
			$(this).find("i").removeClass('ion-arrow-down-b');
			$(this).find("i").addClass('ion-arrow-up-b');
		}
		$('.active').removeClass("active");
		$(".content").fadeOut(500);
		$("#subject").html("");
	});

	if ($("#subject").html() == "") {
		$(".content").hide();
	}

	$('.list-group.borderless.signatories > .list-group-item').click(function (){
		$('.active').removeClass("active");
		$(this).addClass("active");
		$("#subject").html($(this).html());
		$(".content").fadeIn(500);
	});
})