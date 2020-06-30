window.addEventListener('load', function (evt) {
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'script.js'
	});;
});

chrome.runtime.onMessage.addListener(function(response, sender, senderResponse) {
    console.log(response)
    function getCSVLinkElement(arr){

        var link = document.createElement("a");
        link.textContent = "Save as CSV";
        link.download = "file.csv";
        var csv = arr
        link.href = encodeURI("data:text/csv,"+csv);
    
        return link;
    
    }

    var el = getCSVLinkElement(response);
    document.body.appendChild(el);

})
