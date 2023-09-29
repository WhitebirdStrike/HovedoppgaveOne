function validateDescription() {
    const descriptionInput = document.getElementById('descriptiontext');
    const validationMessage = document.getElementById('validationMessage');

    if (descriptionInput.value.trim() !== '') {
        // If there is text in the input field, clear any validation message
        validationMessage.textContent = '';
    } else {
        // If the input field is empty, display a validation message
        validationMessage.textContent = 'Please enter a description.';
    }
}