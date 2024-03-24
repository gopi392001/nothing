<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $registerNumber = $_POST['registerNumber']; // Change to register number
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE registerNumber = '$registerNumber'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        
        // Verify the entered password against the hashed password in the database
        if (password_verify($password, $row['password'])) {
            echo "Login successful";
        } else {
            echo "Invalid password";
        }
    } else {
        echo "User not found";
    }
}

$conn->close();
?>
