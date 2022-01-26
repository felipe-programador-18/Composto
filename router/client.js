const express = require('express')
const router = express.Router()
const composto = require('../lib/composto')

router.get('/', (req,res) => {
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

module.exports = router