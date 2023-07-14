const express = require('express')
const javohirRouter = 



app.get('/',(req,res) => {

})




app.get('/Javohir',(req,res) => {
    res.json('This is Javohir page')
})




app.get('/Artyom',(req,res) => {
    const random = Math.random()
    if(random > 0.5){
       res.status(200).json({messagae: 'This is Artyom page'})
    }else {
        res.status(400).json({messagae: 'Cannot find page Artyom'})
    }
   
})


app.listen(3000, () => {
    console.log('App listening on localhost:3000');
})


// get post pud delete