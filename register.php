<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $registerNumber = $_POST['registerNumber'];
    $fullName = $_POST['fullName'];
    $username = $registerNumber;
    $password = password_hash($_POST['confirmPassword'], PASSWORD_DEFAULT);
    $dateOfBirth = $_POST['dob'];
    $gender = $_POST['gender'];
    $department = $_POST['department'];
    $batch = $_POST['batch'];
    $address = $_POST['address'];
    $contactNumber = $_POST['contactNumber'];
    $email = $_POST['email'];
    $bloodGroup = $_POST['bloodGroup'];

    // Check if the register number already exists
    $checkExistingUserQuery = "SELECT * FROM users WHERE registerNumber = '$registerNumber'";
    $existingUserResult = $conn->query($checkExistingUserQuery);

    if ($existingUserResult->num_rows > 0) {
        echo "User with the same Register Number already exists. Please choose a different Register Number.";
    } else {
        // Continue with user registration
        $sql = "INSERT INTO users (registerNumber, fullName, username, password, dateOfBirth, gender, department, batch, address, contactNumber, email, bloodGroup)
                VALUES ('$registerNumber', '$fullName', '$username', '$password', '$dateOfBirth', '$gender', '$department', '$batch', '$address', '$contactNumber', '$email', '$bloodGroup')";

        if ($conn->query($sql) === TRUE) {
            echo "Registration successful";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}

$conn->close();
?>
