$(document).ready(function(){

	function validateEmail($email) {
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		return emailReg.test( $email );
	}

	$('form').on('submit', function(e) {
		e.preventDefault();
		var validEntrie = $('#mce-EMAIL').val();

		if(($('#mce-EMAIL').val()) === ''){
			console.log('vide');
			// $(this).addClass('error');
		}

		if(!validateEmail(validEntrie)) {
			console.log('faux');
			// $(this).addClass('error');
		} else {
			console.log('ok');
			// $(this).removeClass('error');
			// $(this).addClass('valid');
			return true
		}

	});
});
