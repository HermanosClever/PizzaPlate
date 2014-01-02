$(document).ready(function() {
	var $formulario;

	// Responsive snitch
	$('body._dev').width_snitch({});

	// External links
	$('.legal a, a.ext').attr('target', '_blank');

	// Submit button
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

});
