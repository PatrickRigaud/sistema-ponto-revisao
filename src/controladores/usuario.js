const data = require('../data/usuario-data')


const cadastrarUsuario = async (req, res) => {
    const {nome, sobrenome} = req.body
    try {
        const cliente = await data.cadastrarUsuario({nome, sobrenome})
        
        res.json({message: cliente})

    } catch (error) {
        res.json({message: error})
    }
    
}

module.exports = {
    cadastrarUsuario
}