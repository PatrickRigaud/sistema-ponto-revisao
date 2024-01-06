const Joi = require('joi');


const schemaUsuario = Joi.object({
    email: Joi.email()
        .required()
        .min(3)
        .max(100)
        .messages({
            'string.email': 'Por favor, insira um e-mail válido!',
            'any.required': 'É necessário informar um e-mail',
            'any.empty': 'O e-mail não pode ser um campo vazio'
        })
})




module.exports = {
    schemaUsuario
}