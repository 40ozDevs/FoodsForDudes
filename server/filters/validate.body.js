'use strict'

// const responses = require('../models/responses')

module.exports = validate

function validate() {
    return (req, res, next) => {
        console.log("inside validate");
        console.log(req.body);

        next();
    }

}
