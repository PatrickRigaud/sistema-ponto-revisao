const knex = require('../infra/conexaoBd')

const buscarPontoCadastradoDia = async (id, data) => {
    return await knex("pontos")
    .where({'usuario_id': id, data})
    .first()
}

const iniciarPonto = async (id, data, hora) => {
    return await knex('pontos')
    .insert({'usuario_id': id, data, 'inicio_ponto': hora})
    .returning()
}

const iniciarIntervalo = async (id, data, hora) => {
    return await knex('pontos')
    .update({'inicio_intervalo': hora})
    .where({'usuario_id': id, data})
    .returning()
}

const finalizarIntervalo = async (id, data, hora) => {
    return await knex('pontos')
    .update({'final_intervalo': hora})
    .where({'usuario_id': id, data})
    .returning()
}

const finalizarPonto = async (id, data, hora) => {
    return await knex('pontos')
    .update({'final_ponto': hora})
    .where({'usuario_id': id, data})
    .returning()
}


module.exports = {
    buscarPontoCadastradoDia,
    iniciarPonto,
    iniciarIntervalo,
    finalizarIntervalo,
    finalizarPonto
}