const { newProjectMovie } = require('../models')
const axios = require('axios')


class ControllerMovie {
    static home (req,res,next) {
        newProjectMovie.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            next(error)
        })
    }
}