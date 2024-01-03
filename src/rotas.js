const express = require('express')
const rotas = express()
const usuario = require('./controladores/usuario')

rotas.get('/', (req, res) => {
    res.json({message: 'teste de servidor'})
})

rotas.post('/usuario', usuario.cadastrarUsuario)




module.exports = rotas