<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "beauty_parlour";

// Connect to the database
$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$full_name = $_POST['full_name'];
$email = $_POST['email'];
$mobile = $_POST['mobile_number'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

// Store in database
$sql = "INSERT INTO users (full_name, email, mobile, password) VALUES ('$full_name', '$email', '$mobile', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "<script>alert('Registered successfully!'); window.location.href = 'index.html';</script>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
