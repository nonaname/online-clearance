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
	});

	$('.list-group.borderless.subject > .list-group-item').click(function (){
		$('.active').removeClass("active");
		$(this).addClass("active");
		$("#subject").html($(this).html());
	});
})