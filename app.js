function scrollToContent(index) {
    var elementId = "content" + index;
    var element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
var leftContainer = document.getElementById("leftContainer");
var rightContainer = document.getElementById("rightContainer");
var leftButtons = leftContainer.querySelectorAll("button");

rightContainer.addEventListener("scroll", function () {
    var scrollTop = rightContainer.scrollTop;
    var containerHeight = rightContainer.clientHeight;
    var highlighted = false;

    leftButtons.forEach(function (button, index) {
        var contentElement = document.getElementById("content" + (index + 1));
        if (
        contentElement.offsetTop <= scrollTop &&
        contentElement.offsetTop + contentElement.offsetHeight > scrollTop
        ) {
        button.classList.add("highlight");
        highlighted=true;
        } else {
        button.classList.remove("highlight");
        }
    });
    if (!highlighted) {
        leftButtons[0].classList.add("highlight");
    }
});