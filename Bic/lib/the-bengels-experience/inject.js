//redirect 
setTimeout(function(){
    window.location.href = "https://thoschis.github.io/Bic/"
},15000)


//direct all links to arne bengels
// Just another version with some checks for local links and .forEach()

var links = [].slice.apply(document.getElementsByTagName("a"));
links.forEach(function(link) {
    var href = link.href;

    if (href.length && href.substring(0, 1) !== "#" && href.substring(0, 1) !== "/") {
        link.href = "https://thoschis.github.io/Bic/";
        console.log(link.href);
    }
});

//replace all names with arne bengels

// document.body.innerHTML = document.body.innerHTML.replace(new RegExp("climate change", "g"), "capitalism");
// document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Climate change", "g"), "Capitalism");
// document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Climate Change", "g"), "Capitalism");


//Note. You will see that this works on some things but not everything in your browser. If you want to 
//fix this and have it work on everything. You need to iterate through everything on the page as 
//described in this stack overflow thread:
//http://stackoverflow.com/questions/18643766/find-and-replace-specific-text-characters-across-a-document-with-js

//Comment out the code above. And uncomment the code below. 


function getTextNodes() {
 // get all html elements
 var elements = document.querySelectorAll("body, body *");
 var results = [];


 //loop through the elements children nodes
 for (var i = 0; i < elements.length; i++) {
   var child = elements[i].childNodes[0];

   // grab everything that's a textNode (nodeType is "3")
   if (elements[i].hasChildNodes() && child.nodeType == 3) {
     results.push(child);
   }
 }

 return results;
}

setInterval(function() {
 var textnodes = getTextNodes();
 for (var i = 0; i < textnodes.length; i++) {
   var text = textnodes[i].nodeValue;
   textnodes[i].nodeValue = text.replace(/dustin/gi, "Arne").replace(/yellin/gi, "Bengels").replace(/Actual/gi, "Arne").replace(/Source/gi, "Bengels").replace(/Actual/gi, "Arne").replace(/Source/gi, "Bengels").replace(/Actual/gi, "Arne").replace(/Source/gi, "Bengels").replace(/Actual/gi, "Arne").replace(/Source/gi, "Bengels").replace(/Actual/gi, "Arne").replace(/Source/gi, "Bengels").replace(/Actual/gi, "Arne").replace(/Source/gi, "Bengels").replace(/Actual/gi, "Arne").replace(/Source/gi, "Bengels").replace(/Actual/gi, "Arne").replace(/Source/gi, "Bengels").replace(/Actual/gi, "Arne").replace(/Source/gi, "Bengels")
 }
}, 500);


//NOTES AND LINKS ON THIS:
//for case insensitive matching replace g with gi.
//Regular expressions: http://www.w3schools.com/jsref/jsref_regexp_g.asp
//Document.body.innerHTML: http://www.w3schools.com/jsref/prop_doc_body.asp
//Document object: http://www.w3schools.com/js/js_htmldom_document.asp
//.replace method: http://www.w3schools.com/jsref/jsref_replace.asp

//Argrhhh.. Shiffman on regular expressions!!
//http://shiffman.github.io/A2Z-F15/week3/notes.html                         