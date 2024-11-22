// db.js
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'database-2.ch4g8wayy6bv.us-east-1.rds.amazonaws.com', // Endereço do servidor MySQL
  user: 'scfp', // Seu usuário MySQL
  password: '12345678', // Sua senha MySQL
  database: 'scfpbanco'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL.');
  }
});

module.exports = db;