const express = require('express')
const rotas = express()
const usuario = require('./controladores/usuario')
const {validarDadosRequisicao} = require('./intermediario/validarDadosRequisicao')
const schema = require('./validacoes/schemas')


rotas.get('/', (req, res) => {
    res.json({message: 'teste de servidor'})
})

rotas.post('/usuario', validarDadosRequisicao(schema.schemaUsuario), usuario.cadastrarUsuario)
rotas.post('/login', usuario.login)



module.exports = rotas