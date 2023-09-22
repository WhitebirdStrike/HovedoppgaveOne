// Add a click event listener to each image with the "enlargeable" class
document.querySelectorAll(".enlargeable").forEach(function (img) {
  img.addEventListener("click", function () {
    enlargeImage(img.src);
  });
});

function enlargeImage() {
  let modal = document.getElementById("myModal");
  let img = document.getElementById("pictureTmtrainer");
  let modalImg = document.getElementById("enlargedImg");
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}
