/**
 * Custom JS
 * Use this file to add your custom scripts
 */
	$(document).ready(function() {
		 // code to parse fullname
		 $( "#mc-embedded-subscribe" ).removeAttr( "type" )
		 $('#mc-embedded-subscribe').click(function(e) {
		 	var fullName = $("#mce-FNAME").val();
		 	var firstName = fullName.split(' ').slice(0, -1).join(' ');
		    var lastName = fullName.split(' ').slice(-1).join(' ');
		    $("#mce-FNAME").val(firstName);
		    $("#mce-LNAME").val(lastName);
		    console.log(firstName +" " + lastName);
			$("#mc-embedded-subscribe-form").submit();
            $("#mce-FNAME").val('');
            $("#mce-EMAIL").val('');
            // $(this).addClass('btn-success').removeClass('btn-primary ');
            // $("p").append("<b>Appended text</b>");
            // $(".signup-list").append("<b><p>Signup successful, have a great day!</p></b>");
			return false;
		});				
 	//code to scoll to contact section from modal
 	$('#Request-more').on('click', function () {
 		var requestBtn = true; 
    	$('#modal_portfolio').on('hidden.bs.modal', function () {
    	// clicks the contact link in header
    	if (requestBtn === true) {
    		$('#contact')[0].click();
    	} 
    	  requestBtn = false;             
		})	            
	})	
 	
 });
    