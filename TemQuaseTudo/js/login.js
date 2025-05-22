window.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const usuarioCorreto = "admin";
        const senhaCorreta = "1234";

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === usuarioCorreto && password === senhaCorreta) {
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            setTimeout(function() {
                window.location.href = './html2.html';
            }, 1000);
        } else {
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
        }
    });
});