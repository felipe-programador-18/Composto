//reorrange this code in file with router
const express = require('express')
const router = express.Router()

router.get('/',(req, res) => {
    res.render('main', {
    })
 })

router.use((res, req, next) =>{
    console.log('test inside out')
    next()
})


module.exports= router