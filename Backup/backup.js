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

document.getElementById("bossButton").onclick = function () {
  myFunction();
};

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches("bossButton")) {
    let myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show2");
}

document.getElementById("bossButton2").onclick = function () {
  myFunction2();
};

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches("bossButton2")) {
    let myDropdown = document.getElementById("myDropdown2");
    if (myDropdown.classList.contains("show2")) {
      myDropdown.classList.remove("show2");
    }
  }
};

function enlargeImage() {
  let modal = document.getElementById("myModal");
  let img = document.getElementById("pictureTmtrainer");
  let modalImg = document.getElementById("enlargedImg");

  modal.style.display = "block";
  modalImg.src = Tmtrainer.webp;
}

function closeModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Add a click event listener to each image with the "enlargeable" class
document.querySelectorAll(".enlargeable").forEach(function (img) {
  img.addEventListener("click", function () {
    enlargeImage(img.src);
  });
});

function functionsubmit() {
  alert("Meldingen har blitt sendt");
}

if (descriptionInput.value.trim() !== "") {
  // If there is text in the input field, clear any validation message
  validationMessage.textContent = "";
} else {
  // If the input field is empty, display a validation message
  validationMessage.textContent = "Please enter a description.";
}

function validateForm() {
  const formName = document.getElementById("fname").value;
  const formLastName = document.getElementById("lname").value;
  const formEpost = document.getElementById("epost").value;
  const formPassword = document.getElementById("pass").value;
  const formDescription = document.getElementById("descriptiontext").value;

  console.log(formName);

  if (
    formName.trim() === "" ||
    formLastName.trim() === "" ||
    formEpost.trim() === "" ||
    formPassword.trim() === "" ||
    formDescription.trim() === ""
  ) {
    alert("Sorry, please fill out the form completely.");
    return false; // Prevent form submission
  }

  // Additional validation logic can be added here if needed.

  alert("Message is sent");
  return true; // Allow the form to be submitted
}

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
