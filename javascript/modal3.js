// Function to open the modal
function openModal3() {
  let modal = document.getElementById("modal3");
  let fandomImg = document.getElementById("fandomSteam");
  let img = document.getElementById("modalSteam");
  modal.style.display = "block";
  fandomImg.src = img.src;
}

// Function to close the modal
function closeModal3() {
  let modal = document.getElementById("modal3");
  modal.style.display = "none";
}
