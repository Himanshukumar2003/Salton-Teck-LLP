<?php
if(isset($_POST['submit'])){
    $con_name = $_POST['name'];
    $con_email = $_POST['email'];
    $con_number = $_POST['phone'];
    $con_subject = $_POST['subject'];
    $con_message = $_POST['message'];
    $to = 'devliyalhimanshu@gmail.com';
    $subject = "Graoch Contact Page Form Details";
    $message = "<html>
                    <head>
                    <title>Graoch Contact Page Form Details</title>
                    </head>
                    <body>
                        <p>Details:</p>
                        <p><b>Name:</b> ".$con_name."</p>
                        <p><b>Email:</b> ".$con_email."</p>
                        <p><b>Number:</b> ".$con_number."</p>
                        <p><b>Products:</b> ".$con_subject."</p>
                        <p><b>Message:</b> ".$con_message."</p>
                    </body>
                </html>";
    $header = "From:Sendermail \r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-type: text/html\r\n";
    $retval = mail($to, $subject, $message, $header);
    if($retval){
        echo "<script LANGUAGE='JavaScript'>
                window.alert('Thank you for submitting this form...');
                window.location.href='/index.html';
            </script>";
    } else {
        echo "<script LANGUAGE='JavaScript'>
                window.alert('Something went wrong');
                window.location.href='/contact-us.html';
            </script>";
    }
}
?>