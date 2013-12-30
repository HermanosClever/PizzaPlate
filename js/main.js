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

});
