var pageslug = 'home';
var jobspage = 'careers';

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7&appId=300671323448023";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(".login").click(function()
     {
	 $("body").css({'overflow':'hidden'});
	 $(".overlay").show();
	 $(".holder").show();
	 $("#opening-screen-container").css({'-webkit-filter': 'blur(5px)','-moz-filter': 'blur(5px)','-o-filter': 'blur(5px)', '-ms-filter': 'blur(5px)','filter': 'blur(5px)'});
     });
 
 $(".overlay,.holder").click(function()
     {
	 $("body").css({'overflow':'auto'});
	 $(".overlay").hide();
	 $(".holder").hide();
	 $("footer").show();
	 $("#opening-screen-container").css({'-webkit-filter': 'blur(0px)','-moz-filter': 'blur(0px)','-o-filter': 'blur(0px)', '-ms-filter': 'blur(0px)','filter': 'blur(0px)'});
     });

var items = document.querySelectorAll('.circle a');

for(var i = 0, l = items.length; i < l; i++) {
  items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
  
  items[i].style.top = (10 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
  items[i].style.zIndex = 999999;
}

document.querySelector('.menu-button').onclick = function(e) {
   e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
}

