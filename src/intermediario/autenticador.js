const jwt = require('jsonwebtoken');
const { verificarEmail } = require('../data/usuario-data');


const autenticador = async (req, res, next) => {
    const {authorization} = req.headers

    if(!authorization){
        return res.status(401).json({mensagem: 'Login não autorizado'})
    }

    const token = authorization.split(' ')[1]

    try {
        const tokenDecodificado = jwt.decode(token, process.env.SENHA_HASH)

        if(!tokenDecodificado){
            return res.status(401).json({mensagem: 'Token Invalido'})
        }

        const emailLocalizado = await verificarEmail(tokenDecodificado.email)
        
        if(!emailLocalizado){
            return res.status(403).josn({mensagem: 'Usuario não localizado'})
        }

        const {senha_criptografada: _, ...usuario} = emailLocalizado
        

        req.usuario = usuario
            console.log(req.usuario)
        next()
        
    } catch (error) {
        res.status(500).json({mensagem: 'Erro interno'})
    }


}


module.exports = autenticador