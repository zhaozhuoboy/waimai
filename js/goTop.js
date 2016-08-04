
var isTop = true;
var timer = null;
window.onload = function(){

	window.onscroll = function(){

			var top = document.documentElement.scrollTop || document.body.scrollTop;
			// console.log(top);
			if(top>500){
				$("#goTop").fadeIn(300);
			}else{
				$("#goTop").fadeOut(300);
			}
			if(!isTop){
				clearInterval(timer);
			}
			isTop = false;
		}
	var goTop = document.getElementById("goTop");
	goTop.onclick = function(){
		timer = setInterval(function(){
			var top = document.documentElement.scrollTop || document.body.scrollTop;
			var speed = Math.floor(-top / 10);
			document.documentElement.scrollTop = document.body.scrollTop = top + speed;
			isTop = true;
			if(top == 0){
				clearInterval(timer);
			}
		},20)
	}
	


}