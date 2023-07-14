const express = require('express')
const router = express.Router()

router.get('/', (req,res) =>{
    res.send('this is Javokher page')
})



router.get('dev', (req,res) => {
    res.send('this is Javakher/dev page')
})

module.exports = router