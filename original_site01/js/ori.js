$(function(){

// scroll_content
$(".to_scroll").click(function() {
	$(".scroll_content").animate( { height: 'show' }, 'slow' );
});
$(".fa-times-circle").click(function() {
	$(".scroll_content").animate( { height: 'hide' }, 'slow' );
});
//figure  gif
$(".btn").click(function() {
	$(".figure").show();
});

//third_contents
$(".third01").hover(function(){
		$(this).css({"background-image":"url(../original_site01/img/bo_after.jpg)"});
	}, function(){
		$(this).css({"background-image":"url(../original_site01/img/bo_before.jpg)"});
	});
$(".third02").hover(function(){
		$(this).css({"background-image":"url(../original_site01/img/tissueaf.jpg)"});
	}, function(){
		$(this).css({"background-image":"url(../original_site01/img/tissuebe.jpg)"});
	});
$(".third03").hover(function(){
		$(this).css({"background-image":"url(../original_site01/img/gomiafter.jpg)"});
	}, function(){
		$(this).css({"background-image":"url(../original_site01/img/gomibefore.jpg)"});
	});








});
