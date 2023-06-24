// Get the login and signup buttons
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

// Get the login and signup forms
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

// Get the error message element
const errorMessage = document.querySelector(".error-message");

// Add click event listeners to the buttons
loginBtn.addEventListener("click", () => {
    // Check if the signup form is currently displayed
    if (signupForm.style.display === "block") {
        signupForm.style.display = "none"; // Hide the signup form
    }
    loginForm.style.display = "block"; // Display the login form
});

signupBtn.addEventListener("click", () => {
    // Check if the login form is currently displayed
    if (loginForm.style.display === "block") {
        loginForm.style.display = "none"; // Hide the login form
    }
    signupForm.style.display = "block"; // Display the signup form
});

// Handle form submission
loginForm.addEventListener("submit", (event) => {
    //event.preventDefault(); // Prevent the form from submitting

    const usernameInput = loginForm.querySelector("#username");
    const passwordInput = loginForm.querySelector("#password");

    const username = usernameInput.value;
    const password = passwordInput.value;

    let userId

    // const xhr = new XMLHttpRequest();
    // xhr.onload = function () {
    //     if(xhr.status === 200) {
    //         userId = xhr.responseText
    //         console.log("unseri8d " + userId)
    //     }
    // };
    // xhr.open("POST", "/login")
    // xhr.setRequestHeader("Content-Type", "application/json");
    // const data = {
    //     name: username,
    //     pw: password,
    // };
    // const requestBody = JSON.stringify(data);
    // xhr.send(requestBody);

    // TODO Clemens: dein server.js tut es automatisch redirecten zu der Seite "Ungültige Anmeldedaten. Username oder Passwort falsch!" und der ist bei deinen Server.js.
    if (userId !== undefined) {
        // User login successful
        errorMessage.style.display = "none";
        console.log("Login successful for user with ID: " + userId);
         window.location.href = "home.html"; // Redirect to the homepage
    } else {
        // Invalid username or password
        errorMessage.style.display = "block";
        console.log("Invalid username or password");
    }
});