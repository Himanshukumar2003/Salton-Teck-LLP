function validateForm() {
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    // Validate Role
    const role = document.getElementById('role').value;
    if (!role) {
        document.getElementById('roleError').textContent = "Please select a role.";
        isValid = false;
    }

    // Validate First Name
    const firstName = document.getElementById('firstName').value.trim();
    if (!firstName) {
        document.getElementById('firstNameError').textContent = "First Name is required.";
        isValid = false;
    }
    const country = document.getElementById('country').value.trim();
    if (!country) {
        document.getElementById('countryError').textContent = "Country is required.";
        isValid = false;
    }

    // Validate State
    const state = document.getElementById('state').value.trim();
    if (!state) {
        document.getElementById('stateError').textContent = "State is required.";
        isValid = false;
    }
    // Validate Last Name
    const lastName = document.getElementById('lastName').value.trim();
    if (!lastName) {
        document.getElementById('lastNameError').textContent = "Last Name is required.";
        isValid = false;
    }

    // Validate Company Name
    const companyName = document.getElementById('companyName').value.trim();
    if (!companyName) {
        document.getElementById('companyNameError').textContent = "Company Name is required.";
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    if (!email || !email.match(/^\S+@\S+\.\S+$/)) {
        document.getElementById('emailError').textContent = "Please enter a valid email.";
        isValid = false;
    }

    // Validate Phone
    const phone = document.getElementById('phone').value.trim();
    if (!phone || !phone.match(/^\d{10}$/)) {
        document.getElementById('phoneError').textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }

    // Validate Address
    const address = document.getElementById('address').value.trim();
    if (!address) {
        document.getElementById('addressError').textContent = "Address is required.";
        isValid = false;
    }

    // Validate Company Profile
    const companyProfile = document.getElementById('companyProfile').value.trim();
    if (!companyProfile) {
        document.getElementById('companyProfileError').textContent = "Company Profile is required.";
        isValid = false;
    }

    return isValid;
}
