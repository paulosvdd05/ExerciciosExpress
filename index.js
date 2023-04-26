const express = require('express')
const app = express()


app.use('/opa',(req, res, next) => {
    console.log('sera que serei chamado?');
    next()
})

app.get('/opa',(req, res) => {

    res.json({
        data: [
            {id:7, name: 'ana', position:1},
            {id:12, name: 'Carlos', position:2},
            {id:17, name: 'Bia', position:3}
        ],
        count: 3,
        skip: 0,
        limit: 3,
        status: 200
    })

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