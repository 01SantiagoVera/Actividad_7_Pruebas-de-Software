function login(event) {
  if (event) {
    event.preventDefault();
  }

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorDiv = document.getElementById('error');

  // Anomalía intencional 1: Sin validación de entradas vacías


  if (username === 'admin' && password === '1234') {
    // Aquí es donde deberías enviar la solicitud al servidor
    fetch('/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password }) // Enviar las credenciales como JSON
    })
      .then(response => {
        if (response.ok) {
          // Si las credenciales son correctas, redirige a dashboard
          window.location.href = '../app/dashboard.html';
        } else {
          // Si las credenciales son incorrectas, muestra la alerta
          errorDiv.style.display = 'block';
          errorDiv.style.animation = 'fadeIn 0.5s';
          setTimeout(() => {
            errorDiv.style.animation = 'fadeOut 0.5s';
            setTimeout(() => {
              errorDiv.style.display = 'none';
            }, 500);
          }, 3000);
        }
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
      });
  } else {
    // Mostrar alerta de error
    errorDiv.style.display = 'block';
    errorDiv.style.animation = 'fadeIn 0.5s';
    setTimeout(() => {
      errorDiv.style.animation = 'fadeOut 0.5s';
      setTimeout(() => {
        errorDiv.style.display = 'none';
      }, 500);
    }, 3000);
  }

  // Anomalía intencional 2: Sin límite en intentos de inicio de sesión
}


// Boton registro
document.getElementById('registerButton').addEventListener('click', function() {
  const loginContainer = document.getElementById('loginContainer');
  loginContainer.style.display = loginContainer.style.display === "none" || loginContainer.style.display === "" ? "block" : "none";
});

function togglePassword() {
  const passwordInput = document.getElementById('password');
  const passwordIcon = document.getElementById('passwordIcon');
  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordIcon.classList.remove('fa-eye');
      passwordIcon.classList.add('fa-eye-slash');
  } else {
      passwordInput.type = 'password';
      passwordIcon.classList.remove('fa-eye-slash');
      passwordIcon.classList.add('fa-eye');
  }
}

function closeLogin() {
  const loginContainer = document.getElementById('loginContainer');
  loginContainer.style.display = 'none';
}
