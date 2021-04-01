

$(window).scroll(function(){
	var ourwindow= $(this).scrollTop();
	
	if(ourwindow<1000){
		$('.top').fadeOut();
	}else{
		$('.top').fadeIn();
	}
	
	//Menu fixed
	if(ourwindow>100){
		$('body').addClass('fixed');
	}else{
		$('body').removeClass('fixed');
	}
});

/*navbar Active*/

$('.navbar-nav li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
});


/* a href scroll off */

$('.navbar-nav a[href^="#"]').click(function(e){
	e.preventDefault();
	
	var target = this.hash;
	
	$('html, body').animate({
		scrollTop: $(target).offset().top -70,
	},500);
});














