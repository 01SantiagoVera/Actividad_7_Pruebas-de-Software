function login(event) {
  event.preventDefault(); // Evitar el envío del formulario

  ea6e0235d169a7dee9e2a03b58c65e8b47f49c4d;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorDiv = document.getElementById("error");

  // Aquí es donde deberías enviar la solicitud al servidor
  if (username === "admin" && password === "1234") {
    window.location.href = "../app/dashboard.html";
  } else {
    // Mostrar alerta de error
    errorDiv.style.display = "block";
    errorDiv.style.animation = "fadeIn 0.5s";
    setTimeout(() => {
      errorDiv.style.animation = "fadeOut 0.5s";
      setTimeout(() => {
        errorDiv.style.display = "none";
      }, 500);
    }, 3000);
  }

  // Anomalía intencional 2: Sin límite en intentos de inicio de sesión
}

// Boton registro
document
  .getElementById("registerButton")
  .addEventListener("click", function () {
    const loginContainer = document.getElementById("loginContainer");
    loginContainer.style.display =
      loginContainer.style.display === "none" ||
      loginContainer.style.display === ""
        ? "block"
        : "none";
  });

function togglePassword() {
  const passwordInput = document.getElementById("password");
  const passwordIcon = document.getElementById("passwordIcon");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordIcon.classList.remove("fa-eye");
    passwordIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    passwordIcon.classList.remove("fa-eye-slash");
    passwordIcon.classList.add("fa-eye");
  }
}

function closeLogin() {
  const loginContainer = document.getElementById("loginContainer");
  loginContainer.style.display = "none";
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Anomalía intencional 1: No se valida si los campos están vacíos
  if (username === "admin" && password === "1234") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").style.display = "block";
  }

  // Anomalía intencional 2: Sin límite en intentos de inicio de sesión
}
