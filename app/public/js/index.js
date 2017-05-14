$(document).ready(function(){
	
	$(document).on('keydown', '#loginUser, #loginPassword', function(e){
	    if(e.which == 13){

	    	if($(this).attr('id') == 'loginUser' || $(this).attr('id') == 'loginPassword'){
	    		$('#btnJoin').trigger("click");
	    	}
	    	else{
	    		$('#btnSignUp').trigger("click");
	    	}

	    }
	});

	$('#btnCreateAccount').click(function(){
		$('#formLoginUser').hide();
		$('#formCreateUser').show();
		$('.error').remove();

	});

	$('#btnSignUp').click(function(){
		$('#formCreateUser').hide();
		$('#formLoginUser').show();
		$('.error').remove();
	});

});