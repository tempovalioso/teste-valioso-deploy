const db = require('../models/db');

exports.createUsuario = async (req, res) => {
  const { usuario, email, senha } = req.body;

  try {
    const [resultConsulta] = await db.execute('Select * From usuarios WHERE email = ?', [email]);
    if (resultConsulta.length == 0){
      const [result] = await db.execute('INSERT INTO usuarios (usuario, email, senha) VALUES (?, ?, ?)', [usuario, email, senha]);
      res.status(201).json({ message: 'Usuário Cadastrado!', id: result.insertId });
    }
    else{
      res.status(404).json({ message: 'Usuário já cadastrado!', id: resultConsulta.id });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar usuário', error });
  }
};

exports.consultarUsuario = async (req, res) => {
  const { email, senha } = req.params;
  try {
    const [result] = await db.execute('Select * From usuarios WHERE email = ? and senha = ?', [email, senha]);
    if (result.length > 0)
      res.status(200).json(result);
    else
      res.status(404).json({ message: 'Usuário não autorizado' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar usuário', error });
  }
};