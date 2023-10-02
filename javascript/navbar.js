function validateDescription() {
  const descriptionInput = document.getElementById("descriptiontext");
  const validationMessage = document.getElementById("validationMessage");

  if (
    validateName &&
    validateEmail &&
    validatePassword > 8 &&
    validateMessage
  ) {
    alert("Message is sent");
  } else {
    alert("Sorry, please fill out the form");
  }
}
