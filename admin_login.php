<?php
session_start();
$servername = "localhost"; // Change as needed
$username = "root"; // Change as needed
$password = ""; // Change as needed
$dbname = "admin"; // Change as needed

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $inputUsername = $_POST['username'];
    $inputPassword = $_POST['password'];

    // Hardcoded credentials for demonstration
    $adminUsername = "Aditya23";
    $adminPassword = "Aditya@23";

    if ($inputUsername === $adminUsername && $inputPassword === $adminPassword) {
        $_SESSION['admin_logged_in'] = true;

        // Store login information in the database
        $stmt = $conn->prepare("INSERT INTO admin_logins (username, login_time) VALUES (?, NOW())");
        $stmt->bind_param("s", $inputUsername);
        $stmt->execute();
        $stmt->close();

        header("Location: index.html");
        exit();
    } else {
        echo "Invalid username or password.";
    }
}

$conn->close();
?>