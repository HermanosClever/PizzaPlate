$(document).ready(function() {

	// Responsive snitch
	if ( $('body').hasClass('_dev') ) {
		$('body').width_snitch({
			style:{}
		})
	}

	// External links
	$('.legal a, a.ext').attr('target', '_blank');

});
