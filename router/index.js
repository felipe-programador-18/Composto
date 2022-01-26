//reorrange this code in file with router
const express = require('express')
const router = express.Router()

router.get('/',(req, res) => {
    res.render('main', {
    })
 })


module.exports= router