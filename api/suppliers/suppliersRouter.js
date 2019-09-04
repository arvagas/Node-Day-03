const express = require('express')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
    res.send('GET to /suppliers')
})

router.get('/:name', (req, res) => {
    const { name } = req.params

    res.send(`${name}`)
})

module.exports = router