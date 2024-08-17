// app.js

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Here you should add logic to validate the credentials and role
    // Redirect based on the selected role
    if (role === 'student') {
        window.location.href = 'student.html';
    } else if (role === 'teacher') {
        window.location.href = 'teacher.html';
    }
}
