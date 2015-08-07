head.ready(function() {

	//menu dropdown
	$('#btn-menu').click(function(){
		$('.js-nav').toggleClass('is-active');
	});

	//scrollTo
	function scrollTo(page){

		$('html, body').animate({
			scrollTop: $(page).offset().top
		}, 800);

	}

	$('.js-down').click(function (e) {

		e.preventDefault();
		var page = $(this).attr("href");
		scrollTo(page);

	});

	//rotator
	(function() {

		var rotator 	= $('.js-type');
		var authorBl 	= $('.js-author');
		var avatar 		= $('.js-author').find('img');
		var nick		= $('.js-author').find('span');
		var authors 	= [
			{avatar: 'img/icons/avatar3.png', nick: '4vida.ru'},
			{avatar: 'img/icons/avatar2.png', nick: 'elenakrygina.com'},
			{avatar: 'img/icons/avatar.png', nick: '@stolyarovyuriy'}
		]

		$.each(authors, function(index, author) {
            $('<img />').attr('src', author.avatar);
        });

		rotator.typed({
			strings: ['safe', 'accurate', 'secure'],
			typeSpeed: 100,
			backSpeed: 50,
			backDelay: 4000,
			loop: true,
			showCursor: false,
			preStringTyped: function(){
				authorBl.removeClass('is-active');
			},
			onStringTyped: function(index){
				avatar.attr('src', authors[index].avatar);
				nick.text(authors[index].nick);
				authorBl.addClass('is-active');
			},
			contentType: 'text'
		});

	})();

});