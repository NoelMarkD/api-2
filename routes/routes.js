const express = require('express')

const router = express.Router()

// static files
router.use(express.static('public'))

const countriesRoutes = require('./api/countriesRoutes')

router.use('/countries', countriesRoutes)

// home route 
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'My Countries Website!',
        name: 'Countries'
    })
})

// error route 
router.get('*', (req, res)=> {
    if(req.url == '/favicon.ico/') {
        res.end()
    } else {
        res.send('<h1>This Country Does Not Exist!</h1>')
    }
})

module.exports = router