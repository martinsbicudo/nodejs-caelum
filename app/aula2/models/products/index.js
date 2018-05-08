const connection = require('../../db')
    , get = require('./get')

module.exports = () => {
    const connectionPromise = connection()

    return {
        get: () => get(connectionPromise)
    }
}