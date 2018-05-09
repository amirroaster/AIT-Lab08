var i = 0;
$(document).ready(function(){
	$('ul.submenu')
		.hide();
	
	$('#menu-button').click(function() {
		if(i == 0)
		{
			$('#menu-button').text("Hide");
			i++;
		}
		else 
		{
			$('#menu-button').text("Menu");
			i--;
		}
		$('#menu').toggle();
		
	});
	
	$('#menu li').click(function(event) {
		$(this).siblings().children('ul.submenu:visible').slideUp('xfast');
        $(this).children("ul.submenu").slideToggle('xfast');
		event.stopPropagation();
		console.log("a");
	});
	
	$("body").click(function() {
		$('.submenu').hide();
	});
});

