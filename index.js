const express = require('express')
const app = express()


app.get('/test',(req, res) => {
   res.send({ name:'test here now!!'})
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