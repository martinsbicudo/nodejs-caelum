//PRODUCTS VALIDATIONS
module.exports = req => {
    req
        .assert('titulo', 'Titulo é obrigatório')
        .notEmpty()
        
    req
        .assert('preco', 'Preço precisa ser número')
        .isNumeric()

    return req.asyncValidationErrors
}