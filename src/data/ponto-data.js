const knex = require('../infra/conexaoBd')

const buscarPontoCadastradoDia = async (id, dataAtual) => {
    return await knex("pontos")
    .where({'usuario_id': id, data: dataAtual})
    
}




module.exports = {
    buscarPontoCadastradoDia
}