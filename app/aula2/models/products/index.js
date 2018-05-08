const connection = require('../../db')
    , get = require('./get')
    , add = require('./add')

module.exports = () => {
    const Connection = connection()

    return {
        get: () => get(Connection),
        add: book => add(Connection, book)
    }
}