<?php

$from="no-reply@website.com";
$email="email@yourdomain.com";
$subject=$_POST['subject'];
$message=$_POST['message'];

mail($email, $subject, $message, "From:".$from);

Print "Your message has been sent";
?>