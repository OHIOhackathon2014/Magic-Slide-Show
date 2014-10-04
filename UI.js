// Variables
var create_email = false;
var final_transcript = '';
var recognizing = false;
var ignore_onend;
var start_timestamp;
//New functions
//var share_media = false;
//var print = false;

var current_style;
function showButtons(style) {
  if (style == current_style) {
    return;
  }
//Initial display style
  current_style = style;
  copy_button.style.display = style;
  email_button.style.display = style;
  share_button.style.display = style;
  print_button.style.display = style;




//Initial display context
  copy_info.style.display = 'none';
  email_info.style.display = 'none';
  share_info.style.display = 'none';
  print_button.style.display = style;
}

function copyButton() {
  if (recognizing) {
//Stop recognizing and call another function
    recognizing = false;
    recognition.stop();
  }
  copy_button.style.display = 'none';
  copy_info.style.display = 'inline-block';
  showInfo('');
}

function emailButton() {
  if (recognizing) {
    create_email = true;
    recognizing = false;
    recognition.stop();
  } else {
    createEmail();
  }
  email_button.style.display = 'none';
  email_info.style.display = 'inline-block';
  showInfo('');
}

function createEmail() {
  var n = final_transcript.indexOf('\n');
  if (n < 0 || n >= 80) {
    n = 40 + final_transcript.substring(40).indexOf(' ');
  }
  var subject = encodeURI(final_transcript.substring(0, n));
  var body = encodeURI(final_transcript.substring(n + 1));
  window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
}

/* Share to other social media */
function shareButton() {
    if(recognizing) {
	share_media = true; //Change the value of share_media
	regognizing = false;
	recognition.stop();
    } else {
	share2Media(); //Call share function
    }
//Set up display attributes
    share_button.style.display = 'none';
    share_info.style.display = 'inline-block';
    showInfo('');    
}

/*Share to media function */
function share2Media() {
    var n = final_transcript.indexOf('\n');
    if( n<0 || n>=80 ) {
	n = 40 + final_transcript.substring(40).indexOf(' ');
    }
//Get the link of final_transcript -- the link to copy and paste
    var uri = encodeURI(final_transcript.substring(0,n));

//Copy and paste the uri to a link that can be copied by the user 
//May need to debug
    window.location.href = 'http://' + uri;
    var link = location.href;
//Display
}

function printButton() {
    if (recognizing) {
	print = true;
	recognizing = false;
	recognition.stop();
    } else {
	printAsPdf();
    }
    print_button.style.display = 'none';
    print_info.style.display = 'inline-block';
    showInfo('');
}

function printAsPdf () {
    windows.print();
}
 
function startButton(event) {
  if (recognizing) {
    recognition.stop();
    return;
  }
  final_transcript = '';
  recognition.lang = select_dialect.value;
  recognition.start();
  ignore_onend = false;
  final_span.innerHTML = '';
  interim_span.innerHTML = '';
  start_img.src = '/intl/en/chrome/assets/common/images/content/mic-slash.gif';
  showInfo('info_allow');
  showButtons('none');
  start_timestamp = event.timeStamp;
}

function showInfo(s) {
  if (s) {
    for (var child = info.firstChild; child; child = child.nextSibling) {
      if (child.style) {
        child.style.display = child.id == s ? 'inline' : 'none';
      }
    }
    info.style.visibility = 'visible';
  } else {
    info.style.visibility = 'hidden';
  }
}

