const db = require('../models/db');

exports.createUserPontos = async (req, res) => {
  const {email, totalPontos } = req.body;
  console.log(req.body)

  try {
    const [result] = await db.execute('INSERT pointUser (email, totalPontos) VALUES (?, ?)', [email, totalPontos]);
    res.status(201).json({ message: 'Resultado salvo com sucesso!', id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao salvar resultado', error });
  }
};