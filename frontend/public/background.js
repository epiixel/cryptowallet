console.log("At least reached background.js")
chrome.runtime.onMessage.addListener (
    function (request, sender, sendResponse) {
        console.log("Reached Background.js");
        if (request.Message == "getTextFile") {
            console.log("Entered IF Block");
            
        }
        else {
            console.log("Did not receive the response!!!")
        }
    }
);