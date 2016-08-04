$(function(){
	$("header .login .username").hover(function(){
		$("header .login .username .userMenu").stop().slideDown(200);
		$("header .login .username .triangle_icon").addClass('iconRotate');
	},function(){
		$("header .login .username .userMenu").stop().slideUp(200);
		$("header .login .username .triangle_icon").removeClass('iconRotate');
	});
		
		
	
		

})