var COOKIES = {

	clave : null,
	codigo : null,
	contenedor : null,
	lopd : false,

	inicio : function() {
		COOKIES.clave = 'UA-1159349-11';
		COOKIES.codigo = "<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', '" + COOKIES.clave + "' , 'hermanosclever.net');ga('send', 'pageview');</script>";
		COOKIES.contenedor = $('#aviso-cookies');
		console.log('COOKIES (Y,N): ' + $.cookie('lopd'));
		if ($.cookie('lopd')) {
			COOKIES.aceptar();
		} else {
			COOKIES.contenedor.addClass('mostrado').find('button').on('click', function() {
				if (!COOKIES.lopd) {
					COOKIES.aceptar();
				}
			});
		}
	},

	aceptar : function() {
		$.cookie('lopd', 'true');
		COOKIES.lopd = true;
		COOKIES.contenedor.removeClass('mostrado').html(COOKIES.codigo);
	}

}


$(document).ready(function() {

	// Responsive snitch
	if ( $('body').hasClass('_dev') ) {
		$('body').width_snitch({
			style:{}
		})
	}

	// External links
	$('.legal a, a.ext').attr('target', '_blank');

	COOKIES.inicio();

});
