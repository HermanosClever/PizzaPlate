$(document).ready(function() {
	var $formulario;

	// Responsive snitch
	$('body._dev').width_snitch({});

	// External links
	$('.legal a, a.ext').attr('target', '_blank');

	// Forms
	$formulario = $('.formulario');

	$formulario.parsley({
    namespace: 'data-parsley-'
	});

	$formulario.find('.field').on('blur', function(event) {
		event.preventDefault();
		if ( $formulario.parsley('isValid') ){
			$(this).parents('.formulario').find('.submit').removeClass('inactive');
		} else {
			$(this).parents('.formulario').find('.submit').addClass('inactive');
		}
	});

	// Popups
	$('.popup_link').magnificPopup({
		type: 'image'
	});

	$('.parent-container').magnificPopup({
  	delegate: 'a', // child items selector, by clicking on it popup will open
  	type: 'image'
  	// other options
	});

	$('.popup_html').magnificPopup({
  type:'inline',
  midClick: true,
  closeOnBgClick: true,
  closeBtnInside: true
});


});
