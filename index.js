const express = require('express')
const app = express()

app.get('/opa',(req, res) => {

    res.json([
        {id:7, name: 'ana', position:1},
        {id:12, name: 'Carlos', position:2},
        {id:17, name: 'Bia', position:3}
    ])

    // res.json({
    //     name: 'iPad 32Gb',
    //     price: 1899.00,
    //     discount: 0.12
    // })

    //res.send('<h1>Estou bem</h1><br><br><h2>Isto é HTML</h2>')
})

app.listen(3000, () => {
    console.log('Backend executando...');
})