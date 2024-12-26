<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect form data
    $role = htmlspecialchars($_POST['role']);
    $firstName = htmlspecialchars($_POST['firstName']);
    $lastName = htmlspecialchars($_POST['lastName']);
    $companyName = htmlspecialchars($_POST['companyName']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $country = htmlspecialchars($_POST['country']);
    $state = htmlspecialchars($_POST['state']);
    $address = htmlspecialchars($_POST['address']);
    $companyProfile = htmlspecialchars($_POST['companyProfile']);

    // Prepare email
    $to = "your-email@example.com"; // Replace with your email address
    $subject = "New Associate Form Submission";
    $message = "
        <h3>New Form Submission</h3>
        <p><strong>Role:</strong> $role</p>
        <p><strong>First Name:</strong> $firstName</p>
        <p><strong>Last Name:</strong> $lastName</p>
        <p><strong>Company Name:</strong> $companyName</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Country:</strong> $country</p>
        <p><strong>State:</strong> $state</p>
        <p><strong>Address:</strong> $address</p>
        <p><strong>Company Profile:</strong> $companyProfile</p>
    ";

    // Headers for email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: <$email>" . "\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Form submitted successfully.";
    } else {
        echo "Failed to send email. Please try again.";
    }
}
?>
