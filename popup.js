// var app = chrome.runtime.getBackgroundPage();
/*! jQuery v1.6.4 http://jquery.com/ | http://jquery.org/license */

// function hello() {
//   var obj = "Hey there siekechu";
//   chrome.tabs.executeScript({
//     file: 'alert.js'
//   }); 
// }

function hello(){
	chrome.tabs.executeScript(null, {
    code: "var text = '"+escapeHTML(document.getElementById('notes').value)+"';"
	}, function() {
	    chrome.tabs.executeScript(null, {file: 'alert.js'});
	});
	window.close();
}

function escapeHTML(unsafe) {
    return unsafe
         .replace(/\'/g, "\\'")
         .replace(/\"/g, "\\\"")
         .replace(/\$/g, "\\$");
 }


document.getElementById('clickme').addEventListener('click', hello);

document.addEventListener('DOMContentLoaded', function () {

	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    	var url = tabs[0].url;

    	if(url.indexOf("www.yelp.com")>0){
    		document.getElementById('clickme').innerHTML = "Save Restaurant";
    	}
    	else{
    		document.getElementById('buttondiv').innerHTML = "Site not recognized";
    	}

    	document.getElementById('result').innerHTML = url;
	});

});

