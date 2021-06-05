const express = require('express')
const router = express.Router()
const ControllerMovie = require()

router.get("/", ControllerMovie.home)
router.get("/:id", ControllerMovie.movieDetail)

module.exports = router
