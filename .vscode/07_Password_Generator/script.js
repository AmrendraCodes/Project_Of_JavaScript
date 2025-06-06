function generatePass() {
    const length = parseInt(document.getElementById("length").value);

    if (isNaN(length) || length <= 0) {
        alert("Please enter a valid positive number for password length.");
        return;
    }

    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password = password.concat(charset[randomIndex]);
    }

    document.getElementById("password").value = password;
}

