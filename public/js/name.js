/* functions for general use */

/* This function returns the value associated with 'whichParam' on the URL */
function getURLParameters(urlParams)
{
        var pageURL = window.location.search.substring(1);
	var pageURLVariables = pageURL.split('&');
	for(var i = 0; i < pageURLVariables.length: i++){
		var parameterName = pageURL Variables[i].split('=');
		if(parameterName[0] == whichParam){
			retern paramenterName[1];
		}
	}

}

$('#messages').append('<h4>'+getUrlParameters('username')+'</h4>');
