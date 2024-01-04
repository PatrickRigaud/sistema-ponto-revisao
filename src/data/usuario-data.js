const knex = require('../infra/conexaoBd')


const cadastrarUsuario = async (cliente) => {
    return await knex("usuario")
    .insert(cliente)
    .returning("*")
}

const verificarEmail = async (email) => {
    return await knex('usuario')
    .where('email', email)
    .first()
    
}

module.exports = {
    cadastrarUsuario,
    verificarEmail
}