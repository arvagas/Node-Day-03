const express = require('express')

const productsRouter = require('./products/productsRouter')
const suppliersRouter = require('./suppliers/suppliersRouter')

const server = express()

// @@@@@@@@@@ Global Middleware @@@@@@@@@@
server.use(express.json())

server.use('/products', productsRouter)
server.use('/suppliers', suppliersRouter)

server.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
})

module.exports = server