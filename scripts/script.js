document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const logoutButton = document.getElementById("logout");
    const errorElement = document.getElementById("error");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === "user" && password === "pass") {
                window.location.href = "dashboard.html";
            } else {
                errorElement.textContent = "Invalid username or password!";
            }
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "index.html";
        });
    }
});
