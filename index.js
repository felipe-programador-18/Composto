const express = require('express')
const app = express()
const composto = require('./lib/composto')

//The command path serve to caught html and css
const path = require('path')



app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))

//this is for use in the css!!!
app.use(express.static(path.join(__dirname, 'public')))



app.get('/',(req, res) => {
   res.render('main', {

   })
})


app.get('/composto', (req,res) => {
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








// another way for listin of door!!
const port = process.env.PORT || 3000
app.listen((port), err => {
    if(err){
        console.log(err)
    }else{
        console.log('we are always')
    }
})