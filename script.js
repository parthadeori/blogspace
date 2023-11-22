function validateSignup() {
  // Reset error messages
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");

  nameError.innerHTML = "";
  emailError.innerHTML = "";
  usernameError.innerHTML = "";
  passwordError.innerHTML = "";

  // Validate Full Name
  const name = document.getElementById("signupName").value;
  if (!name) {
    alert("Please enter your full name.");
    nameError.innerHTML = "Please enter your full name.";
    return;
  }

  // Validate Email
  const email = document.getElementById("signupEmail").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    emailError.innerHTML = "Please enter a valid email address.";
    return;
  }

  // Validate Username
  const username = document.getElementById("signupUsername").value;
  if (!username) {
    alert("Please choose a username.");
    usernameError.innerHTML = "Please choose a username.";
    return;
  }

  // Validate Password
  const password = document.getElementById("signupPassword").value;
  if (!password) {
    alert("Please enter a password.");
    passwordError.innerHTML = "Please enter a password.";
    return;
  }

  // Validate Terms and Conditions checkbox
  if (!document.getElementById("acceptTerms").checked) {
    alert("Please accept the terms and conditions.");
    return;
  }

  // If all validations pass, you can submit the form or perform further actions
  alert("Signup successful!");
  // You can also use document.getElementById('signupForm').submit(); to submit the form programmatically
}

// Location changed to localhost:3000/signup or localhost:3000/login
// public/scripts/modal.js

// Get references to the modals and close buttons
const signupModal = document.getElementById("signupModal");
const loginModal = document.getElementById("loginModal");
const closeSignupModalButton = document.getElementById("closeSignupModal");
const closeLoginModalButton = document.getElementById("closeLoginModal");
const signupButton = document.getElementById("signupButton");
const loginButton = document.getElementById("loginButton");

// Show the signup modal when the signup button is clicked
signupButton.addEventListener("click", () => {
  // Toggle the visibility of the signup modal
  signupModal.style.display = "block";

  // Change the URL without triggering a page reload
  history.pushState(null, null, "/signup");
});

// Show the login modal when the login button is clicked
loginButton.addEventListener("click", () => {
  // Toggle the visibility of the login modal
  loginModal.style.display = "block";

  // Change the URL without triggering a page reload
  history.pushState(null, null, "/login");
});

// Close the signup modal when the close button is clicked
closeSignupModalButton.addEventListener("click", () => {
  signupModal.style.display = "none";

  // Change the URL back to the original state
  history.pushState(null, null, "/");
});

// Close the login modal when the close button is clicked
closeLoginModalButton.addEventListener("click", () => {
  loginModal.style.display = "none";

  // Change the URL back to the original state
  history.pushState(null, null, "/");
});

// Close the signup modal if the user clicks outside of it
window.addEventListener("click", (event) => {
  if (event.target === signupModal) {
    signupModal.style.display = "none";

    // Change the URL back to the original state
    history.pushState(null, null, "/");
  }
});

// Close the login modal if the user clicks outside of it
window.addEventListener("click", (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = "none";

    // Change the URL back to the original state
    history.pushState(null, null, "/");
  }
});

// Sign Up
function signup() {
  // Fetch values from the form
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;

  // Make a POST request to your server
  fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Optionally, handle success or display a success message
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle errors or display an error message
    });
}
