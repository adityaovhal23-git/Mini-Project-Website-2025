<?php
// Database configuration
$host = 'localhost'; // Change if necessary
$dbname = 'beauty_salon';
$username = 'root'; // Change if necessary
$password = ''; // Change if necessary

// Create a connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    $mobile = $_POST['mobile'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $message = $_POST['message'];
    $expert = $_POST['expert'];
    $specialty = $_POST['specialty'];

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO appointments (name, age, gender, mobile, email, address, message, expert, specialty) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sisssssss", $name, $age, $gender, $mobile, $email, $address, $message, $expert, $specialty);

    // Execute the statement
    if ($stmt->execute()) {
        echo "Appointment booked successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}
?>