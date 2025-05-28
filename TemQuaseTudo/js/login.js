window.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const cadastroForm = document.getElementById('cadastroForm');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    const cadastroMessage = document.getElementById('cadastroMessage');

    if (errorMessage) errorMessage.style.display = 'none';
    if (successMessage) successMessage.style.display = 'none';
    if (cadastroMessage) cadastroMessage.style.display = 'none';

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [
                { usuario: "admin", senha: "1234" }
            ];

            const usuarioEncontrado = usuarios.find(u => u.usuario === username && u.senha === password);

            if (usuarioEncontrado) {
                if (successMessage) successMessage.style.display = 'block';
                if (errorMessage) errorMessage.style.display = 'none';
                setTimeout(function() {
                    window.location.href = './html2.html';
                }, 1000);
            } else {
                if (errorMessage) errorMessage.style.display = 'block';
                if (successMessage) successMessage.style.display = 'none';
            }
        });
    }

    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const novoUsuario = document.getElementById('novoUsername').value;
            const novaSenha = document.getElementById('novaSenha').value;

            let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [
                { usuario: "admin", senha: "1234" }
            ];

            const existe = usuarios.some(u => u.usuario === novoUsuario);

            if (existe) {
                cadastroMessage.textContent = "Usuário já existe!";
                cadastroMessage.style.display = 'block';
                cadastroMessage.style.color = 'red';
            } else {
                usuarios.push({ usuario: novoUsuario, senha: novaSenha });
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
                cadastroMessage.textContent = "Cadastro realizado com sucesso!";
                cadastroMessage.style.display = 'block';
                cadastroMessage.style.color = 'green';
                cadastroForm.reset();
                setTimeout(function() {
                    window.location.href = 'login.html';
                }, 1500);
            }
        });
    }
});