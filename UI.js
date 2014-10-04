/*
This is the UI proccess, used to update the user interface

Maintainer:Vanessa ZHao
*/

/* init variable and action*/

var wordList = [];
var isRecording = false;
$(document).ready(function(){

document.getElementById('btn').onclick=MSS_btn_toggle;
document.getElementById('all').onclick=MSS_all;

});

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
	}else{
		btn.innerHTML="Stop";
		btn.setAttribute("class","btn btn-danger btn-lg");
		isRecording = true;
		document.getElementById('icon-record').hidden = false;
	}
	
}
function addTest(){	
  var titleData = ["Alogrithm","Artificial Intelligence","Application Program Interface","Google","Computer Science"];
  var puncData  = ["qvewgrg","wef gegrgg","dsbdfyn ersrg rthrt","dxbd","drgsd rthrtcb"];
  var expenData = ["Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong. Eiusmod swine spare ribs reprehenderit culpa. Boudin aliqua adipisicing rump corned beef.","Pork drumstick turkey fugiat. Tri-tip elit turducken pork chop in. Swine short ribs meatball irure bacon nulla pork belly cupidatat meatloaf cow. Nulla corned beef sunt ball tip, qui bresaola enim jowl. Capicola short ribs minim salami nulla nostrud pastrami.","Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong. Eiusmod swine spare ribs reprehenderit culpa. Boudin aliqua adipisicing rump corned beef.","Pork drumstick turkey fugiat. Tri-tip elit turducken pork chop in. Swine short ribs meatball irure bacon nulla pork belly cupidatat meatloaf cow. Nulla corned beef sunt ball tip, qui bresaola enim jowl. Capicola short ribs minim salami nulla nostrud pastrami.","Some Person said: Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong."];
 
  var index = Math.floor((Math.random() * titleData.length)); 
  var data = new Object();
  data.title = titleData[index];
  data.punc  = puncData[index];
  data.expen = expenData[index];
  data.link_url = "http://google.com";
  MSS_add(data);
}


function MSS_add(data){
  wordList.push(data);
  $("#fs").fadeOut("fast",function(){
      document.getElementById('slide-title').innerHTML=data.title;
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

function MSS_disp_list(){
	alert(wordList);
}