const http = require('http');

const PING_INTERVAL = 10 * 60 * 1000; // 10 minutos en milisegundos
const PORT = process.env.PORT || 10000;

function pingServer() {
    console.log(`Haciendo ping a localhost:${PORT}...`);
    http.get(`http://localhost:${PORT}`, (res) => {
        console.log(`Ping completado con código: ${res.statusCode}`);
    }).on('error', (err) => {
        console.error('Error al hacer ping:', err.message);
    });
}

// Hacer ping cada 10 minutos
setInterval(pingServer, PING_INTERVAL);
console.log('Servicio de ping interno iniciado');