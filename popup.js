document.addEventListener("DOMContentLoaded", function() {
  let btn = document.getElementById('toggleButton');

  btn.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "Toggle" });
    });
  });
});