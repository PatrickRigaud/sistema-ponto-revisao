const knex = require('../infra/conexaoBd')


const cadastrarUsuario = async (cliente) => {
    return await knex("usuario")
    .insert(cliente)
    .returning("*")
}

module.exports = {
    cadastrarUsuario
}