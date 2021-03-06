$(function(){

	$('.main__button-1, .assortment__button-2, .header__call-action, .change__button, .calculation__button, .footer__tel-button').click(function(){
		$('.modal').show();
	});
	$('.modal__close').click(function(){
		$('.modal').hide();
	});
	$('.thanks__close').click(function(){
		$('.thanks').hide();
	});

	$('.backlight__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		arrow: true,
		prevArrow: '<div class="backlight-arrow backlight-arrow_up"></div>',
		nextArrow: '<div class="backlight-arrow backlight-arrow_down"></div>',
		responsive: [	
			{		   
			    breakpoint: 768,
			    settings:  {
			    	vertical: false,
			    	verticalSwiping: false,
			    	arrow: false,
			    	prevArrow: false,
			    	nextArrow: false,
			    	asNavFor: '.backlight__slider-numbers'
			    }
		    }
		]	   
	})
	$('.backlight__slider-numbers').slick({
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					focusOnSelect: true,
					prevArrow: '<div class="backlight-numbers_left"></div>',
					nextArrow: '<div class="backlight-numbers_right"></div>',
					asNavFor: '.backlight__slider',
					fade: true
				}
			}
		]
	})

	$('.completed__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		arrow: true,
		prevArrow: '<div class="backlight-arrow backlight-arrow_up completed-arrow_up"></div>',
		nextArrow: '<div class="backlight-arrow backlight-arrow_down completed-arrow_down"></div>',
	    responsive: [
	        {
	          breakpoint: 992,
	          settings: {
	            vertical: false,
	            verticalSwiping: false
	          }
	        },
	        {
	          breakpoint: 768,
	          settings: {
	            arrow: false,
	            prevArrow: false,
	            nextArrow: false,
	            vertical: false,
	            verticalSwiping: false,
	            asNavFor: '.completed__slider-numbers'
	          }
	        }
		]	   
	})
	$('.completed__slider-numbers').slick({
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					focusOnSelect: true,
					prevArrow: '<div class="backlight-numbers_left"></div>',
					nextArrow: '<div class="backlight-numbers_right"></div>',
					asNavFor: '.completed__slider',
					fade: true
				}
			}
		]
	})

	$('.cooperation__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		arrow: true,
		prevArrow: '<div class="backlight-arrow backlight-arrow_up cooperation-arrow_up"></div>',
		nextArrow: '<div class="backlight-arrow backlight-arrow_down cooperation-arrow_down"></div>'	   
	})

	jQuery(function($){
	   $(".catalog__form-input, .communication__form-tel, .discount__form-tel, .cooperation__form-tel, .modal__form-tel").mask("+7 (999) 999-99-99");
	});


	$('.cooperation__form, .communication__form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/consultation.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$("form").trigger("reset");
			$('.thanks').show();
		});
		return false;
	});
	$('.modal__form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$("form").trigger("reset");
			$('.modal').hide();
			$('.thanks').show();
		});
		return false;
	});
	$('.discount__form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/discount.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$("form").trigger("reset");
			$('.thanks').show();
		});
		return false;
	});
	$('.catalog__form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/catalog.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$("form").trigger("reset");
			$('.thanks').show();
		});
		return false;
	});
})