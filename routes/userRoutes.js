const express = require('express')

const router = express()


router.get('/',(req,res) => {
    res.send('this is a fucking test route');
})

module.exports = router