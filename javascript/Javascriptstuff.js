// First way to do it
function toggleMe() {
  let toggleStatus = document.getElementById("imDaToggle");
  toggleStatus.classList.toggle("hideMe");
}

// Second way to do it
function toggleMeTwo() {
  // let toggleStatus = document.getElementById("imDaToggle");
  // if (toggleStatus.classList.contains("hideMe")) {
  //   toggleStatus.classList.remove("hideMe");
  //   toggleStatus.classList.add("showMe");
  // } else {
  //   toggleStatus.classList.remove("showMe");
  //   toggleStatus.classList.add("hideMe");
  // }
}

// Third way to do it

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".bossButton")) {
    let myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};
