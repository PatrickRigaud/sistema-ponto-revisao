const Joi = require('joi');



const schemaUsuario = Joi.object({
    email: Joi.string()
        .email()
        .required()
        .min(3)
        .max(100)
        .empty('')
        .messages({
            'string.email': 'Por favor, insira um e-mail válido!',
            'any.required': 'É necessário informar um e-mail',
            'any.empty': 'O e-mail não pode ser um campo vazio'
        }),
    
    nome: Joi.string()
        .required()
        .min(3)
        .max(100)
        .empty('')
        .messages({
            'any.required': 'É necessário informar um nome',
        }),
    
        cargo: Joi.string()
        .required()
        .min(3)
        .max(100)
        .empty('')
        .messages({
            'any.required': 'É necessário informar um cargo',
        }),
    
    senha: Joi.string()
        .required()
        .min(3)
        .max(100)
        .empty('')
        .messages({
            'any.required': 'É necessário informar uma senha',
        }),

    ativo: Joi.boolean()
        .required(),
        
    descricao: Joi.string()
        .max(200)
        

})



module.exports = {
    schemaUsuario
}