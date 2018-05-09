//ENV CONFIG
require('dotenv').config()

const supertest = require('supertest')
    , servidor = require(`../../app/aula${process.env.AULA}/server`)
    , request = supertest(servidor)

describe('Products Controller', done => {
    it('Test Route 404', () => {
        request
            .get('/testroute404')
            .expect(404, done)
    })

    it('Listing Products', () => {
        request
            .get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8', done)
    })
})