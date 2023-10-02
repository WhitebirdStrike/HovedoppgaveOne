function closeModal() {
  document.getElementById("kontaktjs").style.display = "none";
}

function validateForm() {
  const formName = document.getElementById("fname").value;
  const formLastName = document.getElementById("lname").value;
  const formEpost = document.getElementById("epost").value;
  const formPassword = document.getElementById("pass").value;
  const descriptiontext = document.getElementById("descriptiontext").value;
  console.log("formName is", formLastName);

  if (formName && formLastName) {
    alert("Message is sent");
    closeModal(); // Close the modal
  } else {
    alert("Message is NOT sent");
  }
  //   const formFirstName = document.getElementById("fname").value;
  //   const formLastName = document.getElementById("lname").value;
  //   const formEpost = document.getElementById("epost").value;
  //   const formPassword = document.getElementById("pass").value;
  //   const formDescription = document.getElementById("descriptiontext").value;

  //   console.log("formFirstName:", formFirstName);
  //   console.log("formLastName:", formLastName);

  // Check if any of the form fields are empty
  //   if (
  //     formFirstName.trim() === "" ||
  //     formLastName.trim() === "" ||
  //     formEpost.trim() === "" ||
  //     formPassword.trim() === "" ||
  //     formDescription.trim() === ""
  //   ) {
  //     alert("Sorry, please fill out the form completely.");
  //     return false; // Prevent form submission
  //   }

  // Additional validation logic can be added here if needed.

  //   return false; // Prevent form submission (you can change this to true if you want to allow submission)
}
