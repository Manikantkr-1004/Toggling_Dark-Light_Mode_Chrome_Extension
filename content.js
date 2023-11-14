chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "Toggle") {
        
        if(document.body.style.background==='black'){
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }else{
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        }
    }
});