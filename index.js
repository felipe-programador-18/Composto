const express = require('express')
const app = express()
//const composto = require('./lib/composto')


//The command path serve to caught html and css
const path = require('path')

app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))

//this is for use in the css!!!
app.use(express.static(path.join(__dirname, 'public')))

const Indexrouter = require('./router/index')
const Clientrouter = require('./router/client')

app.use('/', Indexrouter)
app.use('/gordura', Clientrouter)

//create a middlware
app.use((res, req, next) =>{
    console.log('passou por aqui')
    next()
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