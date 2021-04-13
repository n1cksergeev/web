$(function () {

	$('.carousel__inner').slick({
		arrows: false,
		dots: true,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 841,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

});

$(document).ready(function () {

	//E-mail Ajax Send
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});