function logout() {
  window.location.href = "index.html"; 
}

let screen = document.getElementById('screen');

function appendValue(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = '';
}

function calculate() {
    try {
        // Anomalía intencional 1: Sin validación de división entre 0
        screen.value = eval(screen.value);
    } catch (error) {
        // Anomalía intencional 2: No se maneja adecuadamente el error
        screen.value = 'Error';
    }
}
