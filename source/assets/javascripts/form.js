$(document).ready(function(){

	function validateEmail(email) { 
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	function validate(){
		// $("#result").text("");
		var email = $("#mce-EMAIL").val();
		if (validateEmail(email)) {
			$('form').removeClass('form--error');
			$('form').addClass('form--valid');
			return true;
		} else {
			$('form').addClass('form--error');
			return false;
		}
	}

	$("form").bind("submit", validate);

});
