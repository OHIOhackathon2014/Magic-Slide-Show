/*
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

function MSS_alert(text){
	document.getElementById("alert").innerHTML=text;
	$('#alert').slideDown(1);	
	
}
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

/* Share to other social media 
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
/*
/*Share to media function 
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
*/
/* init variable and action*/
var wordList = [];
var isRecording = false;
$(document).ready(function(){

document.getElementById('btn').onclick=MSS_btn_toggle;
document.getElementById('all').onclick=MSS_all;
document.getElementById('alert').onclick=MSS_dismiss_alert;






});
function MSS_dismiss_alert(){
	var e = document.getElementById('alert');
	if(!e.hidden){
		$('#alert').slideUp(1);	
	}
	
}
function MSS_all(){
	var text = "Your Word List is : \n";
	for(var temp in wordList){
		text+=wordList[temp].title + "\n";
	}
	alert(text)	;
	
}
function MSS_btn_toggle(){
	var btn = document.getElementById('btn');
	if(isRecording){
		btn.innerHTML="Start";
		btn.setAttribute("class","btn btn-success btn-lg");
		isRecording = false;
		document.getElementById('icon-record').hidden = true;
		recognition.stop();
		MSS_all();
	}else{
		btn.innerHTML="Stop";
		btn.setAttribute("class","btn btn-danger btn-lg");
		isRecording = true;
		document.getElementById('icon-record').hidden = false;
		recognition.start();
	}
	
}

function MSS_add(data){
	if(data==null)
		return;
		
  wordList.push(data);
  $("#fs").fadeOut("fast",function(){
      document.getElementById('slide-title').innerHTML=capitalizeEachWord(data.title);
 	  document.getElementById('slide-punc').innerHTML=data.punc;
	  document.getElementById('slide-expen').innerHTML=data.expen; 
 	  document.getElementById("slide-link").setAttribute('href',data.link_url);
  });
  //do data change
  //display new slide
  $("#fs").fadeIn("fast");
  if(wordList.length%9==0){
	 document.getElementById('wordList').innerHTML="";
  } 
  var li = document.createElement("li");
  li.setAttribute('class','list-group-item');
  li.innerHTML = data.title;
  document.getElementById('wordList').appendChild(li);
}
function capitalizeEachWord(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
function MSS_disp_list(){
	//MSS_alert(wordList);
}
