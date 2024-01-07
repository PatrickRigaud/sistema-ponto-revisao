const knex = require('../infra/conexaoBd')

const buscarPontoCadastradoDia = async (id, dataAtual) => {
    return await knex("pontos")
    .where({'usuario_id': id, data: dataAtual})
    .first()
    
}

const iniciarPonto = async (id, data, hora) => {
    return await knex('pontos')
    .insert({'usuario_id': id, data, 'inicio_ponto': hora})
    .returning()
}



module.exports = {
    buscarPontoCadastradoDia,
    iniciarPonto
}