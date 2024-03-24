document.addEventListener("DOMContentLoaded", function () {
    const mainContainer = document.getElementById("mainContainer");
    const loginContainer = document.getElementById("loginContainer");
    const forgotPasswordContainer = document.getElementById("forgotPasswordContainer");
    const registerContainer = document.getElementById("registerContainer");
    const adminContainer = document.getElementById("adminContainer"); // Added admin container
    
    const registerLink = document.querySelector(".register-link");
    const forgotPasswordLink = document.querySelector(".forgot-password-link");
    const adminLoginButton = document.querySelector(".admin-login"); // Added admin login button
    
    const backToLoginLink1 = document.querySelector(".back-to-login-link");
    const backToLoginLink2 = document.querySelector(".back-to-login-link");
    const closeAdminButton = document.querySelector(".admin-container .close-button"); // Added close admin button
    
    registerLink.addEventListener("click", function (event) {
        event.preventDefault();
        mainContainer.style.opacity = "0";
        setTimeout(function () {
            loginContainer.style.display = "none";
            forgotPasswordContainer.style.display = "none";
            registerContainer.style.display = "block";
            adminContainer.style.display = "none"; // Hide admin container when switching
            mainContainer.style.opacity = "1";
        }, 500);
    });
    
    forgotPasswordLink.addEventListener("click", function (event) {
        event.preventDefault();
        mainContainer.style.opacity = "0";
        setTimeout(function () {
            loginContainer.style.display = "none";
            forgotPasswordContainer.style.display = "block";
            registerContainer.style.display = "none";
            adminContainer.style.display = "none"; // Hide admin container when switching
            mainContainer.style.opacity = "1";
        }, 500);
    });
    
    adminLoginButton.addEventListener("click", function (event) {
        event.preventDefault();
        mainContainer.style.opacity = "0";
        setTimeout(function () {
            loginContainer.style.display = "none";
            forgotPasswordContainer.style.display = "none";
            registerContainer.style.display = "none";
            adminContainer.style.display = "block"; // Show admin container when clicking admin button
            mainContainer.style.opacity = "1";
        }, 500);
    });
    
    backToLoginLink1.addEventListener("click", function (event) {
        event.preventDefault();
        mainContainer.style.opacity = "0";
        setTimeout(function () {
            loginContainer.style.display = "block";
            forgotPasswordContainer.style.display = "none";
            registerContainer.style.display = "none";
            adminContainer.style.display = "none"; // Hide admin container when switching
            mainContainer.style.opacity = "1";
        }, 500);
    });
    
    backToLoginLink2.addEventListener("click", function (event) {
        event.preventDefault();
        mainContainer.style.opacity = "0";
        setTimeout(function () {
            loginContainer.style.display = "block";
            forgotPasswordContainer.style.display = "none";
            registerContainer.style.display = "none";
            adminContainer.style.display = "none"; // Hide admin container when switching
            mainContainer.style.opacity = "1";
        }, 500);
    });
    
    closeAdminButton.addEventListener("click", function () {
        closeAdminContainer();
    });
});

function closeAdminContainer() {
    mainContainer.style.opacity = "0";
    setTimeout(function () {
        loginContainer.style.display = "block";
        forgotPasswordContainer.style.display = "none";
        registerContainer.style.display = "none";
        adminContainer.style.display = "none";
        mainContainer.style.opacity = "1";
    }, 500);
}
function closeRegisterContainer() {
    mainContainer.style.opacity = "0";
    setTimeout(function () {
        loginContainer.style.display = "block";
        forgotPasswordContainer.style.display = "none";
        registerContainer.style.display = "none";
        adminContainer.style.display = "none"; // Hide admin container when switching
        mainContainer.style.opacity = "1";
    }, 500);
}




function validatePasswordForm() {
        var newPassword = document.getElementById('newPassword').value;
        var confirmPassword = document.getElementById('confirmPassword').value;

        if (newPassword !== confirmPassword) {
            alert("New Password and Confirm Password do not match.");
            return false;
        }

        return true;
    }


