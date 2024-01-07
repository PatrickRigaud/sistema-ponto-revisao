const express = require('express')
const rotas = express()
const usuario = require('./controladores/usuario')
const ponto = require('./controladores/ponto')
const {validarDadosRequisicao} = require('./intermediario/validarDadosRequisicao')
const schema = require('./validacoes/schemas')
const autenticador = require('./intermediario/autenticador')


rotas.get('/', (req, res) => {
    res.json({message: 'teste de servidor'})
})

rotas.post('/usuario', validarDadosRequisicao(schema.schemaUsuario), usuario.cadastrarUsuario)
rotas.post('/login', usuario.login)

rotas.use(autenticador)
rotas.get('/iniciop', ponto.iniciarPonto)



module.exports = rotas