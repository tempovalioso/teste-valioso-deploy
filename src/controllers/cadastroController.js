const db = require('../models/db');

exports.createUsuario = async (req, res) => {
    const { usuario, email, senha } = req.body;

    if (!usuario || !email || !senha) {
        return res.status(400).json({ 
            message: 'Todos os campos são obrigatórios' 
        });
    }

    try {
        const [resultConsulta] = await db.execute(
            'SELECT * FROM usuarios WHERE email = ?', 
            [email]
        );

        if (resultConsulta.length > 0) {
            return res.status(409).json({ 
                message: 'Usuário já cadastrado!',
                id: resultConsulta[0].id 
            });
        }

        const [result] = await db.execute(
            'INSERT INTO usuarios (usuario, email, senha) VALUES (?, ?, ?)',
            [usuario, email, senha]
        );

        res.status(201).json({ 
            message: 'Usuário cadastrado com sucesso!',
            id: result.insertId 
        });

    } catch (error) {
        console.error('Erro no cadastro:', error);
        res.status(500).json({ 
            message: 'Erro interno ao cadastrar usuário',
            error: process.env.NODE_ENV === 'development' ? error.message : {}
        });
    }
};