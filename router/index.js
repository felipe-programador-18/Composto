//reorrange this code in file with router
const express = require('express')
const Router = express.Router()
const composto = require('./lib/composto')

Router.get('/',(req, res) => {
    res.render('main', {
    })
 })

 Router.get('/composto', (req,res) => {
    // desctructment assiment
    const {C, i, t} = req.query

    if(C && i && t){
        const teste = CalcJuros.CalcJuros(C,i,t)
        res.render('composto', {
            error: false,
            C : composto.Convert(C),
            i: composto.Convert(i),
            t: composto.Convert(t),
            teste: composto.Convert(teste)
        })
    }else {
        res.render('composto', {
        error: 'Valores inválidos, preencha Todos os Campos!!!'
        })
    }
  
}) 

module.express= Router