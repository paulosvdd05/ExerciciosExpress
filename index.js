const express = require('express')
const app = express()

app.use('/opa',(req, res) => {
    res.send('estou bem')
})

app.listen(3000, () => {
    console.log('Backend executando...');
})