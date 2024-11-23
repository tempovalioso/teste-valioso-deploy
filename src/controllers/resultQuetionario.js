const db = require('../models/db');

exports.create = async (req, res) => {
    const { usuario, email, senha } = req.body;
  
    try {
      const [result] = await db.execute('INSERT INTO usuarios (usuario, email, senha) VALUES (?, ?, ?)', [usuario, email, senha]);
      res.status(201).json({ message: 'Usuário Cadastrado!', id: result.insertId });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao cadastrar usuário', error });
    }
  };

  exports.consultarUsuario = async (req, res) => {
    const { email, senha } = req.params;
  
    try {
      const [result] = await db.execute('Select * From Usuarios WHERE email, senha VALUES (?, ?)', [email, senha]);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao cadastrar usuário', error });
    }
  };