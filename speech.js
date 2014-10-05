/*
This is the speech api used to do the ditation and return the result.
Maintainer:Sophy Chen
*/

var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "en";

recognition.onresult = function (event) {
	//alert("WE got result!");
	var transcript = '';
	var final_transcript = '';
	var interim_transcript = '';
	for (var i = event.resultIndex; i < event.results.length; ++i) {
         if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript+"||";
		//MSS_analyze(final_transcript);
      } else {
        interim_transcript += event.results[i][0].transcript;
		document.getElementById("intem").innerHTML=interim_transcript+"||";
		MSS_analyze(interim_transcript);
      }
    }
	
};
recognition.onerror = function(event) {
	alert("Speech Error:"+event.error);
	MSS_btn_toggle();	
	
}
 
