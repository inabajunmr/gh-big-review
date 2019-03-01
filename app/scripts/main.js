`use strict`;

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "gh-big-review") {
		execute();
	}
});

function execute() {
  // hide all file diff
  Array.from( document.getElementsByClassName("file") )
  .forEach(e => {e.classList.remove("open"); e.classList.remove("Details--on")});

  // todo add button for done
}