// server.js
const express = require('express');
const cors = require('cors');
const usuariosRoutes = require('./src/routes/usuariosRoutes');
const usuariosPontosRoutes = require('./src/routes/userPontosRoutes');
const path = require('path');

const app = express();

// Configuração mais específica do CORS
app.use(cors({
    origin: ['https://tempovalioso3.netlify.app', 'http://localhost:3000', 'http://127.0.0.1:5500'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// Usando as rotas para usuarios
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/usuariosPontos', usuariosPontosRoutes);

// Middleware para tratar erros de CORS
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ error: 'Requisição não autorizada' });
    } else {
        next(err);
    }
});

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});