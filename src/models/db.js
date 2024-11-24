// src/models/db.js
const mysql = require('mysql2');

// Configurando a conexão com o banco de dados MySQL
const pool = mysql.createPool({
  host: 'db4free.net', // Endereço do servidor MySQL
  user: 'tempovalioso', // Seu usuário do MySQL
  password: 'tempovalioso', // Sua senha do MySQL
  database: 'tempovalioso' // Nome do banco de dados que você vai usar
});

module.exports = pool.promise();
