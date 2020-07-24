var pathsArray = [
  "images/others/1.jpg",
  "images/others/2.jpg",
  "images/others/3.jpg",
  "images/others/4.png",
  "images/others/5.jpg",
  "images/others/6.jpg",
  "images/others/7.png",
  "images/others/8.jpg",
  "images/others/9.jpg",
  "images/others/10.jpg",
  "images/others/11.jpg",
  "images/others/12.jpg",
  "images/others/13.jpg",
  "images/others/14.png",
  "images/others/15.jpg",
];

var imageContainer = document.querySelector(".dynamic-image-container");
pathsArray.forEach((path) => {
  var imageEl = document.createElement("img");
  imageEl.src = path;
  imageContainer.appendChild(imageEl);
});

var images = imageContainer.children;

for (var i = 0; i < images.length; i++) {
  var modalImage = document.getElementById("modal-img");
  images[i].addEventListener("click", function () {
    modalImage.parentElement.style.display = "block";
    modalImage.classList.add("modal-open");
    modalImage.src = this.getAttribute("src");
  });
}

function onClosedImagModal() {
  var model = document.getElementById("modal");
  setTimeout(() => {
    modal.style.display = "none";
  }, 550);
}
