
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const users = [
        { username: "medidarli", password: "Telram2025" }
    ];

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html"; // Halaman utama setelah login
    } else {
        document.getElementById("message").textContent = "Username atau Password salah.";
    }
});
