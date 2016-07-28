var acc_type = $('input[type="radio"]:checked');


$(document).ready(function () {
	$('input[type="radio"]').click(function (){
		acc_type = $(this);
		if (acc_type.val() == 'student')
			$(".student").slideDown(500).animate({opacity: 1}, 300);
		else
			$(".student").animate({opacity: 0}, 300).slideUp(500);
	});
	if($("select").val() == 0) {
		$(this).css("color","gray");
	}
})