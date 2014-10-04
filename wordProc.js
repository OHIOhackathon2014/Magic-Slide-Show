/*
This js file used to do the word analyzation 

Maintainer:Kimr Yang
*/


var p=1;
var words=["computer science"];
var explanations=["Computer science is the scientific and practical approach to computation and its applications."]
var links=["http://en.wikipedia.org/wiki/Computer_science"];

words[p]="electronic engineering";
explanations[p]=["Electronics engineering, or electronic engineering, is an engineering discipline where non-linear and active electrical components such as electron tubes, and semiconductor devices."]
links[p++]="http://en.wikipedia.org/wiki/Electrical_engineering";

function MSS_analyze(str) {
//var str='Electronic engineering!';
str=str.toLowerCase();
var output = [];
var pointer=0;
var result=[0];
var flag=false;
for(var i=0;i<str.length;i++)
{
    var temp=str.charAt(i);
    if((temp<='z'&&temp>='a')||(temp<='Z'&&temp>='A'))
    {
        if(flag==false)
        {
            result[pointer++]=i;
            flag=true;
        }
    }
    else
    {
        if(flag==true)
        {
            result[pointer++]=i;
            flag=false;
        }
    }
}

for(var i=0;i<pointer;i=i+2)
{
    var str1="";
    for(var j=i;j<pointer;j=j+2)
    {
        if(j!=i)str1=str1+" ";
        str1=str1+str.substring(result[j],result[j+1]);
        var address=-1;
        for(var k=0;k<p;k++)
        {
            if(words[k]==str1)
            {address=k;}
        }
        if(address>=0)
        {
			var dataObj = new Object();
			dataObj.title = str1;
			dataObj.punc = "";
			dataObj.expan = explanations[address];
			dataObj.link_url = links[address];
            output.add(dataObj);
        }
    }
}

}