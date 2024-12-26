<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to = "your-email@example.com"; // Replace with your email address
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $emailMessage = "Name: $name\n";
    $emailMessage .= "Email: $email\n";
    $emailMessage .= "Phone: $phone\n";
    $emailMessage .= "Subject: $subject\n";
    $emailMessage .= "Message: $message\n";

    if (mail($to, $subject, $emailMessage, $headers)) {
        echo "Success: Your message has been sent.";
    } else {
        echo "Error: Unable to send email. Please try again.";
    }
} else {
    echo "Error: Invalid request.";
}
?>
