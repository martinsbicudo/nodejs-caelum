const { get } = require('../controllers/home/index')

module.exports = [
    {
        method: 'get',
        route: '/',
        action: get
    },
    {
        method: 'get',
        route: '/home',
        action: get
    }
]