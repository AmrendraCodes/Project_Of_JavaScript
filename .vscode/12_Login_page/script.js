const Loginform = document.getElementById("form-id");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");
const showPassword = document.getElementById("showPassword");
const toggleTheme = document.getElementById("toggleTheme");

showPassword.addEventListener("change", () => {
    password.type = showPassword.checked ? "text" : "password";

});
Loginform.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailVal = email.value.trim();
    const passwordval = password.value.trim();

    if (!emailVal || !passwordval) {
        errorMsg.textContent = "Please enter both email & Password";
        return;
    }
    if (emailVal === "xyz@gmail.com" && passwordval === "123456") {
        alert("Login Successful");
        errorMsg.textContent = "";
        Loginform.reset();
    } else {
        errorMsg.textContent = "Invalid Email & Password";
    }
});

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        toggleTheme.textContent = "☀️ Light mode";
    } else {
        toggleTheme.textContent = "🌙 Dark mode";
    }
});



