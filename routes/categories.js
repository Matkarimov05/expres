const categories = require('categories')
 const router = categories.Router()

 router.get('/', (req,res) => {
    res.send('This is my page')
 })