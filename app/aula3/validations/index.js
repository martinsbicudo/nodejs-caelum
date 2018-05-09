const products = require('./products')

//GET ALL VALIDATIONS
module.exports = (req, res, next) => {
    const validations = {
        products
    }
    
    //REGISTER REQ GLOBAL FUNCTION
    req.validations = name => validations[name](req)

    next()
}