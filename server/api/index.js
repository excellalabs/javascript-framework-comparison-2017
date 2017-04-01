
const express = require('express')

const router = express.Router()

router.use('/message', require('./message'))

module.exports = router
