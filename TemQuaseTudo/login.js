window.addEventListener('DOMContentLoaded', () => {
document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();

      // Definir usuário e senha fixos para teste
      const usuarioCorreto = "admin";
      const senhaCorreta = "1234";

      // Obter valores dos campos de input
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Verificar se as credenciais estão corretas
      if (username === usuarioCorreto && password === senhaCorreta) {
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('errorMessage').style.display = 'none';
        setTimeout(function() {
          window.location.href = './html2.html'; // Redireciona após 1 segundo
        }, 1000);
      } else {
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('successMessage').style.display = 'none';
      }
    });
});