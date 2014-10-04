/*
This js file used to do the word analyzation 

Maintainer:Kimr Yang
*/


var p=1;
var words=["computer science"];
var explanations=["Computer science is the scientific and practical approach to computation and its applications."]
var links=["http://en.wikipedia.org/wiki/Computer_science"];
/* data  */
words[p]="electronic engineering";
explanations[p]=["Electronics engineering, or electronic engineering, is an engineering discipline where non-linear and active electrical components such as electron tubes, and semiconductor devices."]
links[p++]="http://en.wikipedia.org/wiki/Electrical_engineering";

words[p]="database";
explanations[p]=["A database is an organized collection of data. The data are typically organized to model aspects of reality in a way that supports processes requiring information. For example, modelling the availability of rooms in hotels in a way that supports finding a hotel with vacancies."]
links[p++]="http://en.wikipedia.org/wiki/Database";

words[p]="information technology";
explanations[p]=["nformation technology (IT) is the application of computers and telecommunications equipment to store, retrieve, transmit and manipulate data,[1] often in the context of a business or other enterprise.[2] The term is commonly used as a synonym for computers and computer networks, but it also encompasses other information distribution technologies such as television and telephones. Several industries are associated with information technology, including computer hardware, software, electronics, semiconductors, internet, telecom equipment, e-commerce and computer services."]
links[p++]="http://en.wikipedia.org/wiki/Information_technology";

words[p]="internet";
explanations[p]=["The Internet is a global system of interconnected computer networks that use the standard Internet protocol suite (TCP/IP) to link several billion devices worldwide. It is an international network of networks that consists of millions of private, public, academic, business, and government packet switched networks, linked by a broad array of electronic, wireless, and optical networking technologies. The Internet carries an extensive range of information resources and services, such as the inter-linked hypertext documents and applications of the World Wide Web (WWW), the infrastructure to support email, and peer-to-peer networks for file sharing and telephony."]
links[p++]="http://en.wikipedia.org/wiki/Internet";

words[p]="machine learning";
explanations[p]=["Machine learning is a subfield of computer science and statistics that deals with the construction and study of systems that can learn from data, rather than follow only explicitly programmed instructions. Besides CS and Statistics, it has strong ties to artificial intelligence and optimization, which deliver both methods and theory to the field. Machine learning is employed in a range of computing tasks where designing and programming explicit, rule-based algorithms is infeasible. Example applications include spam filtering, optical character recognition (OCR),[1] search engines and computer vision. Machine learning, data mining, and pattern recognition[citation needed] are sometimes conflated."]
links[p++]="http://en.wikipedia.org/wiki/Machine_learning";

words[p]="java";
explanations[p]=["Java (Indonesian: Jawa; Javanese: ꦗꦮ) is an island of Indonesia. With a population of 143 million, Java is the world's most populous island, and one of the most densely populated places in the world. Java is the home of 57 percent of the Indonesian population. The Indonesian capital city, Jakarta, is located on western Java. Much of Indonesian history took place on Java. It was the center of powerful Hindu-Buddhist empires, the Islamic sultanates, and the core of the colonial Dutch East Indies. Java was also the center of the Indonesian struggle for independence during the 1930s and 40s. Java dominates Indonesia politically, economically and culturally."]
links[p++]="http://en.wikipedia.org/wiki/Java";




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
			dataObj.expen = explanations[address];
			dataObj.link_url = links[address];
            MSS_add(dataObj);
        }
    }
}

}