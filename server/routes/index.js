const express = require('express')
const router = express.Router()
const movies = require('./movie')

router.use("/movies", movies)

module.exports = router