<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $registerNumber = $_POST['registerNumber'];
    $dateOfBirth = $_POST['dob'];
    $newPassword = password_hash($_POST['newPassword'], PASSWORD_DEFAULT);

    // Check if the user with the provided register number and date of birth exists
    $checkUserQuery = "SELECT * FROM users WHERE registerNumber = '$registerNumber' AND dateOfBirth = '$dateOfBirth'";
    $userResult = $conn->query($checkUserQuery);

    if ($userResult->num_rows > 0) {
        // Update the user's password
        $updatePasswordQuery = "UPDATE users SET password = '$newPassword' WHERE registerNumber = '$registerNumber'";
        if ($conn->query($updatePasswordQuery) === TRUE) {
            echo "Password updated successfully";
        } else {
            echo "Error updating password: " . $conn->error;
        }
    } else {
        echo "User not found or provided information is incorrect.";
    }
}

$conn->close();
?>
