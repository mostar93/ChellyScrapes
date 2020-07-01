window.addEventListener('load', function (evt) {
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'script.js'
	});;
});

chrome.runtime.onMessage.addListener(function(response, sender, senderResponse) {
    
    function getCSVLinkElement(arr){

        var link = document.createElement("a");
        var image = document.createElement("img")
        image.setAttribute("src", "./download-button.svg");
        image.setAttribute("height", "30");
        image.setAttribute("width", "30");
        link.download = "file.csv";
        var csv = arr
        link.href = encodeURI("data:text/csv,"+csv);
        link.appendChild(image)
      
        return link;
    }

    var el = getCSVLinkElement(response);
    document.body.appendChild(el);

})
