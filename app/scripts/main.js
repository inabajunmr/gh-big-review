`use strict`;

chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
  if (request == "gh-big-review") {
    execute();
  }
});

function execute() {
  Array.from(document.getElementsByClassName("file"))
    .forEach(e => {
      // Collapse all file diff
      e.classList.remove("open");
      e.classList.remove("Details--on");
    });

  Array.from(document.getElementsByClassName("file-header"))
    .forEach(e => {
      // when click, change background color
      e.addEventListener("click", elem => toggle(elem));
    });
}

function toggle(e) {
  if (e.target.classList.contains("file-info")) {
    // click inside
    infoToggle(e);
    return
  }

  if (e.target.classList.contains("file-header")) {
    // click outside
    headerToggle(e);
  }
}

function headerToggle(e) {
  if (e.target.style.backgroundColor === "silver") {
    e.target.style.backgroundColor = "";
    return
  }

  e.target.style.backgroundColor = "silver";
}

function infoToggle(e) {
  if (e.target.parentNode.style.backgroundColor === "silver") {
    e.target.parentNode.style.backgroundColor = "";
    return
  }

  e.target.parentNode.style.backgroundColor = "silver";

}