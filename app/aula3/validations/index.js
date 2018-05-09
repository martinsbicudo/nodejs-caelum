const products = require('./products')

//GET ALL VALIDATIONS
module.exports = (req, name) => {
    const validations = {
        products: products(req)
    }
    
    return validations[name]
}