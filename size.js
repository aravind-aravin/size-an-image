let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");
let imageMaxWidth = 300;
let imageMinWidth = 100;
let originalImageWidth = 200;
let maxWidthWarningMessage = "To decrease the size of the image.";
let minWidthWarningMessage = "can't increase the size of the image.";
imageElement.style.width = originalImageWidth + "px";

function onIncrement() {
  if (originalImageWidth >= imageMaxWidth) {
    warningMessageElement.textContent = maxWidthWarningMessage;
  } else {
    originalImageWidth = originalImageWidth + 5;
    let updatedImageWidth = originalImageWidth + "px";
    warningMessageElement.textContent = "";
    imageElement.style.width = updatedImageWidth;
    imageWidthElement.textContent = updatedImageWidth;
  }
}

function onDecrement() {
  if (originalImageWidth <= imageMinWidth) {
    warningMessageElement.textContent = minWidthWarningMessage;

  } else {
    originalImageWidth = originalImageWidth - 5;
    let updatedImageWidth = originalImageWidth + "px";
    warningMessageElement.textContent = "";
    imageElement.style.width = updatedImageWidth;
    imageWidthElement.textContent = updatedImageWidth;
  }
}