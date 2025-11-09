<?php
// Database configuration
$servername = "localhost"; // Change if your database server is different
$username = "root";                      
$password = ""; // Your database password
$dbname = "contact_db";           

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO contacts (full_name, email, address, message) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $full_name, $email, $address, $message);

// Set parameters and execute
$full_name = $_POST['full_name'];
$email = $_POST['email'];
$address = $_POST['address'];
$message = $_POST['message'];

if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close statement and connection
$stmt->close();
$conn->close();
?>