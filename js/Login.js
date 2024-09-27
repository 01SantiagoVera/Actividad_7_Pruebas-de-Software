function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Anomalía intencional 1: No se valida si los campos están vacíos
  if (username === 'admin' && password === '1234') {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById('error').style.display = 'block';
  }

// Anomalía intencional 2: Sin límite en intentos de inicio de sesión
}
