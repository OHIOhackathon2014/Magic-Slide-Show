/*
This is the speech api used to do the ditation and return the result.
Maintainer:Sophy Chen
*/

var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
//recognition.lang = "en";

recognition.onresult = function (event) {
	//alert("WE got result!");
	var transcript = '';
	for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        transcript += event.results[i][0].transcript;
		var dtemp = new Object();
		dtemp.title = "new transcript!";
		dtemp.punc  = "punc";
		dtemp.expen = transcript;
		dtemp.link_url = "google.com";
		MSS_add(dtemp);
      } else {
        transcript += event.results[i][0].transcript;
      }
    }
	
};
recognition.onerror = function(event) {
	alert("Speech Error:"+event.error);
	MSS_btn_toggle();	
	
}
 recognition.onsoundstart = function() {
    
    showInfo('sound_detected');

  };
  
  recognition.onstart = function() {
    
  };


/*
var create_email=false;
var share_media = false;
var print = false;
var final_transcript = '';
var recognizing = false;
var detecting = false;
var ignore_onend;
var start_timestamp;
if (!('webkitSpeechRecognition' in window)) {
  MSS_alert("Error: you web browser did not support webkid Speech Recognition! Please switch to newlest Google Chrome");
} else {
  start_button.style.display = 'inline-block';
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;


  recognition.onsoundstart = function() {
    detecting = true;
    showInfo('sound_detected');

  };
  
  recognition.onstart = function() {
    if(detecting){
    recognizing = true;
    showInfo('info_speak_now');

    }
  };
  

  recognition.onerror = function(event) {
    if (event.error == 'no-speech') {
      start_img.src = '/intl/en/chrome/assets/common/images/content/mic.gif';
      showInfo('info_no_speech');
      ignore_onend = true;
    }
    if (event.error == 'audio-capture') {

      showInfo('info_no_microphone');
      ignore_onend = true;
    }
    if (event.error == 'not-allowed') {
      if (event.timeStamp - start_timestamp < 100) {
        showInfo('info_blocked');
      } else {
        showInfo('info_denied');
      }
      ignore_onend = true;
    }
    if(event.error=='aborted'){
      showinfo('speech_aborted');
      ignore_onend=true;
    }
    if(event.error=='network'){
    showinfo('network_falied');
    ignore_onend=true;
    }
    
  };
  recognition.onsoundend=function(){
     detecting=false;
      if (ignore_onend) {
      return;
    }
  
  }
  recognition.onend = function() {
    if (!detecting){
    recognizing = false;  

    }
    if (!final_transcript) {
      showInfo('info_start');
      return;
    }
    showInfo('');
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
      var range = document.createRange();
      range.selectNode(document.getElementById('final_span'));
      window.getSelection().addRange(range);
    }
    if (create_email) {
      create_email = false;
      createEmail();
    }
    if(share_media){
      share_media=false;
      share2Media();
    }
    if(print){
      print=false;
      printAsPdf();
    }
  };

  recognition.onresult = function(event) {
    var interim_transcript = '';
    if (typeof(event.results) == 'undefined') {
      recognition.onend = null;
      recognition.stop();
      upgrade();
      return;
    }
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
    final_transcript = capitalize(final_transcript);
    final_span.innerHTML = linebreak(final_transcript);
    interim_span.innerHTML = linebreak(interim_transcript);
    if (final_transcript || interim_transcript) {
      showButtons('inline-block');
    }
  };
}

function upgrade() {
  start_button.style.visibility = 'hidden';
  showInfo('info_upgrade');
}

var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

var first_char = /\S/;
function capitalize(s) {
  return s.replace(first_char, function(m) { return m.toUpperCase(); });
}


*/