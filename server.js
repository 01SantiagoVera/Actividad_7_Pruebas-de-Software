const express = require('express');
const bodyParser = require('body-parser'); // Importa body-parser
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware para analizar datos del cuerpo de la solicitud
app.use(bodyParser.urlencoded({ extended: true })); // Para formularios URL-encoded
app.use(bodyParser.json()); // Para formularios JSON
app.use(express.static(path.join(__dirname))); // Sirve archivos estáticos

// Ruta para servir el index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para manejar el inicio de sesión
app.post('/Login', (req, res) => {
  const { username, password } = req.body; // Captura los datos del formulario

  // Verifica las credenciales
  if (username === 'admin' && password === '1234') {
    // Si las credenciales son correctas, redirige al dashboard
    res.redirect('app/dashboard.html'); // Ajusta la ruta según sea necesario
  } else {
    // Si las credenciales son incorrectas, responde con un mensaje de error
    res.status(401).send('Credenciales incorrectas');
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
