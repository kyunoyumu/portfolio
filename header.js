;$(function(){
	$('#gnav_btn').on('click', function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$('header nav').removeClass('open').stop().slideUp(500);
			$('#outside').fadeOut(100).addClass("disnone");
			$('body').removeClass('add_overray');
		}else{
			$(this).addClass('open');
			$('header nav').addClass('open').stop().slideDown(500);
			$('#outside').fadeIn(100).addClass("disnone");
			$('body').addClass('add_overray');
		}
	});
	$('#outside').on('click', function(){
		$('#gnav_btn').removeClass('open');
		$('header nav').removeClass('open').stop().slideUp(500);
		$(this).fadeOut(100).addClass("disnone");
		$('body').removeClass('add_overray');
	});
	$('#nav_inner a').on('click', function() {
				$('#gnav_btn').removeClass('open');
		$('header nav').removeClass('open').stop().slideUp(500);
		$('#outside').fadeIn(100).addClass("disnone");
		$('body').removeClass('add_overray');
		});
});

function showElementAnimation() {

	var element = document.getElementsByClassName('fadeIn');
	if(!element) return; // 要素がなかったら処理をキャンセル
						
	var showTiming = window.innerHeight > 768 ? 200 : 80; // 要素が出てくるタイミングはここで調整
	var scrollY = window.pageYOffset; //スクロール量を取得
	var windowH = window.innerHeight; //ブラウザウィンドウのビューポート(viewport)の高さを取得
					  
	for(var i=0;i<element.length;i++) { 
	  var elemClientRect = element[i].getBoundingClientRect(); 
	  var elemY = scrollY + elemClientRect.top; 
	  if(scrollY + windowH - showTiming > elemY) {
		element[i].classList.add('scrollin');
	  } else if(scrollY + windowH < elemY) {
	  // 上にスクロールして再度非表示にする場合はこちらを記述
		element[i].classList.remove('scrollin');
	  }
	}
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);