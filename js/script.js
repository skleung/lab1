$(document).ready(function($) { 
	$('.welcome-wrapper') .css({'min-height': (($(window).height()) - $('.enter').height() ) + 'px'}); //allows space for the enter section
	$('#about').css({'min-height': $(window).height()+ 'px'}); //allows space for the footer section
	$('#projects').css({'min-height': (($(window).height()) - $('.footer').height() ) + 'px'}); //allows space for the footer section
	// $('#about').css({'padding-top': ($('.nav').height() + $('.header'))+ 'px'}); //allows space for the footer section

	$('.welcome-text').css({
		left: ($(window).outerWidth() - $('.welcome-text').outerWidth()) / 2 + 'px',
		top: ($(window).outerHeight() - $('.welcome-text').outerHeight()) / 2 + 'px'
	});
});
$(window).resize(function() {
	$('.welcome-text').css({
		left: ($(window).outerWidth() - $('.welcome-text').outerWidth()) / 2 + 'px',
		top: ($(window).outerHeight() - $('.welcome-text').outerHeight()) / 2 + 'px'
	});
});

$(document).ready(function(){
	//Toggle between projects and about section
	$(".toggleProjects").click(function(event){
		$(".about-text").hide();
		$(".project-text").fadeIn();
	});
	$(".toggleAbout").click(function(event){
		$(".project-text").hide();
		$(".about-text").fadeIn();
	});
	var curProject;
	$(".project-box").click(function(event){
		var projectId = this.id;
		if (projectId === curProject){
			curProject = ""; //resets curProject so it can slide down again
			$('.project-specs#'+projectId).slideUp();
		}else{
			curProject = projectId;
			$('.project-specs').hide();
			$('.project-specs#'+projectId).slideDown();
		}
	});
	//Scrolling animation
	$(".scroll").click(function(event){
		event.preventDefault();
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#" + trgt).offset();
		var target_top = target_offset.top;

		//goto that anchor by setting the body scroll top to anchor top
		$('html, body').animate({scrollTop: target_top}, 400);
	});
});