const express = require('express')
const app = express()
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
    
    if(C && i && T){
        
    }
    const { C, i, T} = req.query
    
    
    res.render('composto', {

    })
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