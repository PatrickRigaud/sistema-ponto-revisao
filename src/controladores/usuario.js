const data = require('../data/usuario-data')
const bcrypt = require('bcrypt')


const cadastrarUsuario = async (req, res) => {
    const {nome, cargo, senha, email, ativo, descricao} = req.body
    try {
        const senha_criptografada = await bcrypt.hash(senha, 10)
        
        const cliente = await data.cadastrarUsuario({nome, cargo, senha_criptografada, email, ativo, descricao})
        
        return res.json({message: cliente})

    } catch (error) {
        return res.json({message:`Error: ${error}`})
    }
}

const login = async (req, res) => {
    const {email, senha} = req.body

    try {
        const emailLocalizado = await data.verificarEmail(email)
        
        if(!emailLocalizado) {
            return res.json({message: 'Dados Invalidos'})
        }

        if(!(await bcrypt.compare(senha, emailLocalizado.senha_criptografada))){
            return res.json({message: 'Senha Incorreta'})
        }

        res.json({emailLocalizado})
  

    } catch (error) {
        res.json({message: 'Erro é ' + error})
    }
}



module.exports = {
    cadastrarUsuario,
    login
}