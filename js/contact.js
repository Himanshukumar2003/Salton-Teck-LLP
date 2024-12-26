function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    // Validate Name
    const name = document.getElementById('name').value.trim();
    if (!name) {
        document.getElementById('nameError').textContent = "Name is required.";
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    if (!email || !email.match(/^\S+@\S+\.\S+$/)) {
        document.getElementById('emailError').textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Validate Phone
    const phone = document.getElementById('phone').value.trim();
    if (!phone || !phone.match(/^\d{10}$/)) {
        document.getElementById('phoneError').textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }

    // Validate Subject
    const subject = document.getElementById('subject').value.trim();
    if (!subject) {
        document.getElementById('subjectError').textContent = "Subject is required.";
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById('message').value.trim();
    if (!message) {
        document.getElementById('messageError').textContent = "Message is required.";
        isValid = false;
    }

    // Validate Consent
    const consent = document.getElementById('consent').checked;
    if (!consent) {
        document.getElementById('consentError').textContent = "You must agree to save your data.";
        isValid = false;
    }

    return isValid;
}
