let users = [];

document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");

  clearErrors();

  let isValid = true;

  if (name.value === "") {
    showError(name, "Name is required");
    isValid = false;
  }

  if (email.value === "") {
    showError(email, "Email is required");
    isValid = false;
  }

  if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
    isValid = false;
  }

  if (password.value !== confirmPassword.value) {
    showError(confirmPassword, "Passwords do not match");
    isValid = false;
  }

  if (isValid) {
    let user = {
      name: name.value,
      email: email.value,
      password: password.value
    };

    users.push(user);

    document.getElementById("success").innerText = "Registration Successful 🎉";
    document.getElementById("registerForm").reset();

    console.log(users); // stored users
  }
});

function showError(input, message) {
  let small = input.parentElement.querySelector(".error");
  small.innerText = message;
}

function clearErrors() {
  let errors = document.querySelectorAll(".error");
  errors.forEach(err => err.innerText = "");
}

function togglePassword() {
  let pwd = document.getElementById("password");
  let cpwd = document.getElementById("confirmPassword");

  pwd.type = pwd.type === "password" ? "text" : "password";
  cpwd.type = cpwd.type === "password" ? "text" : "password";
}
