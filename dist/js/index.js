$('a[href^="#"]').click(function(){
	var the_id = $(this).attr("href");
	var navbarHeight = $(".navbar").outerHeight();

	$('html, body').animate({
		scrollTop:$(the_id).offset().top - navbarHeight
	}, 'slow');
	return false;
});