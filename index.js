const express = require('express')
const app = express()

app.get('/opa',(req, res) => {
    res.send('<h1>Estou bem</h1><br><br><h2>Isto é HTML</h2>')
})

app.listen(3000, () => {
    console.log('Backend executando...');
})