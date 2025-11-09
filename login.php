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

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email='$username' OR full_name='$username'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();

    // Verify password
    if (password_verify($password, $user['password'])) {
        echo "<script>alert('Login successful!'); window.location.href = 'index.html';</script>";
    } else {
        echo "<script>alert('Invalid password.'); window.location.href = 'index.html';</script>";
    }
} else {
    echo "<script>alert('No user found with this username.'); window.location.href = 'index.html';</script>";
}

$conn->close();
?>
