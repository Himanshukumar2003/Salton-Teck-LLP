function validateForm() {
    let isValid = true;

    // Get form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Get error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    // Clear previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    subjectError.textContent = '';
    messageError.textContent = '';

    // Validate name
    if (!name) {
        nameError.textContent = 'Name is required.';
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Invalid email format.';
        isValid = false;
    }

    // Validate phone
    const phoneRegex = /^\d{10}$/;
    if (!phone) {
        phoneError.textContent = 'Phone number is required.';
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        phoneError.textContent = 'Invalid phone number.';
        isValid = false;
    }

    // Validate subject
    if (!subject) {
        subjectError.textContent = 'Subject is required.';
        isValid = false;
    }

    // Validate message
    if (!message) {
        messageError.textContent = 'Message is required.';
        isValid = false;
    }

    return isValid;
}