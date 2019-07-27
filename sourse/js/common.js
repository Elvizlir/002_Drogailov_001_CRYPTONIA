var $ = jQuery;
var btnToggle = $(".toggle-menu-mobile--js"),
		menu = $(".menu-mobile--js")

jQuery(document).ready(function ($) {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({}); 
	JSCCommon.magnificPopupCall();

	// JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask(); 



	
	// var url = document.location.href;
	// $.each($(".top-nav__nav a "), function () {

	// 	if (this.href == url) {
	// 		if ($(this).hasClass("top-nav__link") == true) {

	// 			$(this).addClass('top-nav__link-active');
	// 		}
	// 		if ($(this).hasClass("footer__link") == true) {

	// 			$(this).addClass('footer__link-active');
	// 		} 
	// 	}; 
	// }); 
 
	// /закрыть/открыть мобильное меню

	function heightses() {

		var w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		var topH = $("header ").innerHeight();

		$(window).scroll(function () {
			if ($(this).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
		// конец добавил
		if (window.matchMedia("(min-width: 992px)").matches) {

			btnToggle.removeClass("on");
			// $("body").removeClass("fixed");
			menu.removeClass("active");
			$("body").removeClass("fixed");
		}
	} 

	$(window).resize(function () {
		heightses();

	});
 
	heightses();
 
	// листалка по стр
	$(" .top-nav li a, .scroll-link").click(function () {
	       var elementClick = $(this).attr("href");
	       var destination = $(elementClick).offset().top;

	           $('html, body').animate({ scrollTop: destination }, 1100);

	       return false;
	   }); 
	

			var $win = $(window),
			$fixed = $(".page-up"),
			limit = 2000;

			function tgl (state) {
			$fixed.toggleClass("disabled", state);
			}

			$win.on("scroll", function () {
			var top = $win.scrollTop();

			if (top < limit) {
				tgl(true);
			} else {
				tgl(false);
			}
			});

			$("#page-up").on("click", function (event) {	
				event.preventDefault();
				var id  = $(this).attr('href'),
						top = $(id).offset().top;
				$('body,html').animate({scrollTop: top}, 1000);
			});
			$("#main-menu").on("click","a", function (event) {	
				event.preventDefault();
				var id  = $(this).attr('href'),
						top = $(id).offset().top;
				$('body,html').animate({scrollTop: top}, 1000);
			});
				
	
	var swiper4 = new Swiper('.swiper-container', {
		slidesPerView: 5,
		spaceBetween: 30,
		loop: true,
		breakpoints: {
			1900: {
				slidesPerView: 4,
				spaceBetween: 30
			},
			
			1450: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			
			1000: {
				slidesPerView: 2,
				spaceBetween: 20
			},

			600: {
				slidesPerView: 1,
				spaceBetween: 10
			}
		},
		navigation: {
			nextEl: '#swiper-next',
			prevEl: '#swiper-prev',
		},

	});
	var swiper4 = new Swiper('.reviews-container', {
		slidesPerView: 1,

		spaceBetween: 30,
		speed: 900,

		loop: true,

		navigation: {
			nextEl: '#reviews-next',
			prevEl: '#reviews-prev',
		},
	});
	// modal window
	$('.main-wrapper').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 100);
    var amountMovedY = (e.pageY * -1 / 100);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
	});

 
 



	   var wow = new WOW({ mobile: false });
	        wow.init();
		

});
JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	// функции для запуска lazy
	 

	// /LazyFunction

	magnificPopupCall: function () {
		$('.popup-with-move-anim').magnificPopup({
			type: 'inline',

			fixedContentPos: true,
			fixedBgPos: true,

			overflowY: 'auto',

			closeBtnInside: true,
			preloader: false,

			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-zoom-in',
			tClose: 'Закрыть (Esc)',
		});

		// / modal window

		// modal галерея
		$(".gal").each(function () {

			$(this).find("a").magnificPopup({
				type: 'image',
				closeOnContentClick: false,
				closeBtnInside: false,
				mainClass: 'mfp-with-zoom mfp-img-mobile',
				tClose: 'Закрыть (Esc)',
				image: {
					verticalFit: true,
					// titleSrc: function(item) {
					//   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
					// }

				},
				gallery: {
					enabled: true,
					tPrev: 'Назад (Кнопка влева)', // title for left button
					tNext: 'Вперед (Кнопка вправа)', // title for right button
					tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
				}
			});
		})
		// /modal галерея
	},
	// /magnificPopupCall
	mobileMenu: function () {
		// закрыть/открыть мобильное меню

		btnToggle.click(function () {

			btnToggle.toggleClass("on");
			// $("body").toggleClass("fixed");
			menu.toggleClass("active");
			$("body, html").toggleClass("fixed");
			return false;
		});
		// $('.menu-mobile--js ul li a').on('click', function () {
		// 	$(".menu-mobile--js .toggle-mnu").click();
		// });

		$(document).mouseup(function (e) {
			var container = $(".menu-mobile--js.active");
			if (container.has(e.target).length === 0) {
				btnToggle.removeClass("on");
				// $("body").toggleClass("fixed");
				menu.removeClass("active");
				$("body, html").removeClass("fixed");
			}
		});
		// закрыть меню при горизонтальном свайпе
		$('.menu-mobile--js.active').swipe({
			swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
				if (direction == 'left') {
					btnToggle.removeClass("on");
					$(".menu-mobile--js.active").removeClass("active");
					$("body, html").removeClass("fixed");
				}
				if (direction == 'right') {
					btnToggle.removeClass("on");
					$(".menu-mobile--js.active").removeClass("active");
					$("body, html").removeClass("fixed");
				}
			},
			triggerOnTouchEnd: false,
		});
	},
	// /mobileMenu

	
 
	// /CustomYoutubeBlock
	inputMask: function () {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+]375[(][0-9]{2}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+375(99)999-99-99");
	}
	// /inputMask

};

// JSCCommon.LazyFunction();
/***/

