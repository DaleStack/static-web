<?php
header("Content-Type: application/json");

// Only allow POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Invalid request"]);
    exit;
}

$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$message = htmlspecialchars($_POST["message"]);

// Validate fields
if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(["success" => false, "message" => "All fields are required."]);
    exit;
}

// Email settings
$to = "daledev07@gmail.com";  // destination email
$subject = "New Contact Form Submission from $name";
$body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

// IMPORTANT for Hostinger
$headers = "From: noreply@inquiry.certicode.tech\r\n";  
$headers .= "Reply-To: $email\r\n";  

// Send email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true, "message" => "Email sent successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Failed to send email."]);
}
